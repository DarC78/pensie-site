import { useState } from 'react'

type ApiResponse = {
  ok?: boolean
  slug?: string
  url?: string
  error?: string
  details?: any
}

export default function AdminGeneratorPage() {
  const [password, setPassword] = useState('')
  const [jsonText, setJsonText] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<ApiResponse | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setResult(null)

    let parsed: any
    try {
      parsed = JSON.parse(jsonText)
    } catch {
      setResult({ error: 'JSON invalid – verifică ghilimelele și virgulele.' })
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/admin/create-article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': password
        },
        body: JSON.stringify(parsed)
      })

      const data = (await res.json()) as ApiResponse
      setResult(data)
    } catch (err: any) {
      setResult({ error: 'Eroare la apelul API', details: err?.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl rounded-2xl bg-slate-900 border border-slate-700 p-6 space-y-4">
        <h1 className="text-xl font-semibold">
          Generator articole – DosarPensie (JSON → Supabase)
        </h1>

        <p className="text-xs text-slate-400">
          1. Generezi JSON cu promptul AI <br />
          2. Îl lipești mai jos <br />
          3. Apeși „Generează articol” → se creează / actualizează
          <code className="ml-1 text-[10px] bg-slate-800 px-1 rounded">
            /articole/[slug]
          </code>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs text-slate-300">
              Parola admin (ADMIN_KEY)
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-sm"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-300">
              JSON articol (format Master Prompt: title, description, slug, contentHtml, faq…)
            </label>
            <textarea
              value={jsonText}
              onChange={(e) => setJsonText(e.target.value)}
              rows={16}
              className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-xs font-mono"
              placeholder='{
  "title": "...",
  "description": "...",
  "slug": "pensie-exemplu",
  "datePublished": "2025-01-20",
  "coverImage": "/images/...",
  "contentHtml": "<h2>...</h2><p>...</p>",
  "faq": [
    { "q": "Întrebare?", "a": "Răspuns." }
  ],
  "keywords": "pensie, comunitară, eu"
}'
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-xs font-semibold text-white hover:bg-primaryDark disabled:opacity-50"
          >
            {loading ? 'Se generează…' : 'Generează / actualizează articolul'}
          </button>
        </form>

        {result && (
          <div className="mt-3 rounded-md bg-slate-800 border border-slate-600 p-3 text-xs">
            {result.error ? (
              <>
                <p className="text-red-400 font-semibold">Eroare:</p>
                <p>{result.error}</p>
                {result.details && (
                  <pre className="mt-2 whitespace-pre-wrap text-[10px] text-slate-300">
                    {JSON.stringify(result.details, null, 2)}
                  </pre>
                )}
              </>
            ) : (
              <>
                <p className="text-emerald-400 font-semibold">
                  Articol salvat cu succes.
                </p>
                {result.url && (
                  <p className="mt-1">
                    URL: <code className="text-sky-300">{result.url}</code>
                  </p>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}