// pages/admin/generator.tsx
import { useState } from "react"

export default function GeneratorPage() {
  const [adminKey, setAdminKey] = useState("")
  const [title, setTitle] = useState("")
  const [bullets, setBullets] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = async () => {
    setLoading(true)
    setResult(null)
    setError(null)

    try {
      const response = await fetch("/api/generate-article", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          adminKey,
          title,
          bullets: bullets.split("\n").map((b) => b.trim()).filter(Boolean)
        })
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Eroare necunoscută.")
        return
      }

      setResult(data)
    } catch (err: any) {
      setError("Nu s-a putut genera articolul.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow rounded p-6 space-y-6">
        <h1 className="text-xl font-bold">Generator articole (admin)</h1>

        <div className="space-y-3">
          <label className="block text-sm font-medium">Admin key</label>
          <input
            type="password"
            className="border p-2 w-full rounded"
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
          />
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium">Titlul articolului</label>
          <input
            type="text"
            className="border p-2 w-full rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium">
            Bullet points (unul pe linie)
          </label>
          <textarea
            className="border p-2 w-full rounded h-32"
            value={bullets}
            onChange={(e) => setBullets(e.target.value)}
          ></textarea>
        </div>

        <button
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primaryDark disabled:opacity-50"
          disabled={loading}
          onClick={handleGenerate}
        >
          {loading ? "Generez..." : "Generează articolul"}
        </button>

        {error && <p className="text-red-600 font-semibold">{error}</p>}

        {result && (
          <div className="mt-6 bg-green-50 p-4 rounded border border-green-200">
            <h2 className="font-semibold mb-1">Articol generat!</h2>
            <p className="text-sm">Slug: {result.slug}</p>
            <a
              href={`/articole/${result.slug}`}
              className="text-primary underline text-sm"
            >
              Vezi articolul →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}