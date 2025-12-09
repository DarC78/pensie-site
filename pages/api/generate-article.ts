// pages/api/generate-article.ts
import type { NextApiRequest, NextApiResponse } from "next"
import { createClient } from "@supabase/supabase-js"
import OpenAI from "openai"

// ---- SECURITY: ADMIN KEY ----
const ADMIN_KEY = process.env.ADMIN_KEY

// ---- SUPABASE SERVER CLIENT ----
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // SERVICE ROLE KEY – corect
)

// ---- OPENAI INIT ----
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }
 
  const { adminKey, title, bullets } = req.body

  // ---- AUTH ----
  if (adminKey !== ADMIN_KEY) {
    return res.status(401).json({ error: "Not authorized" })
  }

  if (!title || !bullets || bullets.length === 0) {
    return res.status(400).json({ error: "Title + bullets required" })
  }

  // ---- SLUG generation ----
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

  try {
    // ---- 1) GENERATE ARTICLE CONTENT ----
    const prompt = `
Scrie un articol SEO pentru site-ul dosarpensie.com.

Structură necesară:
- Introducere scurtă
- Secțiuni clare cu H2 și H3
- Exemple concrete
- Ton: expert + foarte clar

Titlu: ${title}

Puncte de acoperit:
${bullets.map((b: string) => "- " + b).join("\n")}

FAQ: generează 3-5 întrebări reale și utile.

Returnează JSON strict cu:
{
  "description": "...",
  "content_html": "<p>...</p>",
  "faq": [{ "q": "...", "a": "..." }]
}
` 

    // 🔥 NOUL API — folosim response.output_text
    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: prompt
    })

    const outputText = response.output_text
    if (!outputText)
      throw new Error("OpenAI nu a generat niciun output_text!")

    // outputText conține direct JSON-ul
    const json = JSON.parse(outputText)

    // ---- 2) SAVE TO SUPABASE ----
    const { data, error } = await supabase
      .from("articles")
      .insert({
        slug,
        title,
        description: json.description,
        content_html: json.content_html,
        faq: json.faq,
        date_published: new Date().toISOString(),
        cover_image: null
      })
      .select()
      .single()

    if (error) throw error

    return res.status(200).json({
      success: true,
      slug: data.slug,
    })

  } catch (err: any) {
    console.error("❌ ERROR in generate-article:", err)
    return res.status(500).json({ error: err.message })
  }
}