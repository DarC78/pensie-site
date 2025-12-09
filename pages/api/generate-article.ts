import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'

// --- INIT SUPABASE ---
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY! // trebuie SERVICE KEY!
)

// --- INIT OPENAI ---
import OpenAI from "openai"
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') 
    return res.status(405).json({ error: 'Method not allowed' })

  const { title, slug, description, faq, contentBrief } = req.body

  if (!title || !slug)
    return res.status(400).json({ error: "Title + slug sunt obligatorii" })

  try {
    // --- 1. GENERATE ARTICLE TSX CODE ---
    const prompt = `
Creează o pagină Next.js (.tsx) pentru un articol SEO. Returnează DOAR CODUL .tsx, fără explicații.

Structură obligatorie:

- import Head from 'next/head'
- export default function Page()
- Props hardcodate: title, description, coverImage, datePublished
- Conținut structurat în secțiuni clare, heading-uri H2/H3
- FAQ la final
- Stil simplu, Tailwind-friendly
- Fără imports externe în afară de Head

Date articol:
Titlu: ${title}
Slug: ${slug}
Meta descriere: ${description}

FAQ:
${faq?.map((f: any) => `Q: ${f.q}\nA: ${f.a}`).join("\n")}

Brief de conținut:
${contentBrief}

Returnează DOAR fișierul .tsx complet, valid, fără markdown.
    `

    const aiResponse = await openai.chat.completions.create({
      model: "gpt-4.1",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2
    })

    const generatedTsx = aiResponse.choices[0].message?.content
    if (!generatedTsx) throw new Error("OpenAI nu a generat cod")

    // --- 2. UPLOAD TO SUPABASE STORAGE ---
    const fileName = `${slug}.tsx`

    const { error: uploadError } = await supabase.storage
      .from('articles')
      .upload(fileName, generatedTsx, {
        contentType: "text/plain",
        upsert: true
      })

    if (uploadError) throw uploadError

    return res.status(200).json({
      success: true,
      file: fileName,
      url: `https://YOUR-PROJECT.supabase.co/storage/v1/object/public/articles/${fileName}`
    })

  } catch (err: any) {
    console.error(err)
    return res.status(500).json({ error: err.message })
  }
}