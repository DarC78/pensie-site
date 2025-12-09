// pages/api/admin/create-article.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSupabaseServer } from '../../../lib/supabaseServer'
const supabase = getSupabaseServer()

const ADMIN_KEY = process.env.ADMIN_KEY

type FaqItem = { q: string; a: string }

type ArticleInput = {
  title: string
  description: string
  slug: string
  datePublished?: string
  coverImage?: string
  contentHtml: string
  faq?: FaqItem[]
  keywords?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // cheie simplă de admin
  const key = req.headers['x-admin-key']
  if (!ADMIN_KEY || key !== ADMIN_KEY) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    const body = req.body as ArticleInput

    if (!body.title || !body.slug || !body.contentHtml) {
      return res
        .status(400)
        .json({ error: 'title, slug și contentHtml sunt obligatorii' })
    }

    const { data, error } = await supabase
      .from('articles')
      .upsert(
        {
          slug: body.slug,
          title: body.title,
          description: body.description ?? null,
          cover_image: body.coverImage ?? null,
          content_html: body.contentHtml,
          faq: body.faq ?? null,
          keywords: body.keywords ?? null,
          date_published: body.datePublished ?? null
        },
        { onConflict: 'slug' }
      )
      .select('slug')
      .single()

    if (error) {
      console.error(error)
      return res.status(500).json({ error: 'Supabase error', details: error })
    }

    return res.status(200).json({
      ok: true,
      slug: data?.slug,
      url: `/articole/${data?.slug}`
    })
  } catch (e: any) {
    console.error(e)
    return res.status(500).json({ error: 'Unexpected error', details: e.message })
  }
}