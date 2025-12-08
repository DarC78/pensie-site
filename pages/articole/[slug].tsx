// pages/articole/[slug].tsx
import Head from 'next/head'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { supabaseServer } from '../../lib/supabaseServer'

type FaqItem = { q: string; a: string }

type ArticlePageProps = {
  article: {
    slug: string
    title: string
    description: string | null
    cover_image: string | null
    content_html: string
    faq: FaqItem[] | null
    date_published: string | null
  }
}

export default function ArticlePage({ article }: ArticlePageProps) {
  const siteUrl = 'https://dosarpensie.com'
  const url = `${siteUrl}/articole/${article.slug}`
  const ogImage =
    article.cover_image || `${siteUrl}/images/pensie-comunitara-cover.jpg`

  return (
    <>
      <Head>
        <title>{article.title} | DosarPensie</title>
        {article.description && (
          <meta name="description" content={article.description} />
        )}
        <link rel="canonical" href={url} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        {article.description && (
          <meta property="og:description" content={article.description} />
        )}
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <div className="min-h-screen bg-white">
        <header className="border-b border-slate-100 bg-white">
          <div className="section-container py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-primary text-white flex items-center justify-center text-sm font-bold">
                DP
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-semibold text-slate-800">DosarPensie</span>
                <span className="text-[11px] text-slate-500">
                  Ghiduri clare despre pensie
                </span>
              </div>
            </a>
            <a
              href="/#ghiduri"
              className="text-xs sm:text-sm text-primary hover:text-primaryDark"
            >
              ← Înapoi la ghiduri
            </a>
          </div>
        </header>

        <main>
          <section className="bg-softBg border-b border-slate-100">
            <div className="section-container py-8 lg:py-10 space-y-3">
              <p className="text-[11px] uppercase tracking-[0.16em] text-primary font-semibold">
                Ghid practic · articol satelit
              </p>
              <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
                {article.title}
              </h1>
              {article.date_published && (
                <p className="text-[11px] text-slate-500">
                  Publicat la:{' '}
                  {new Date(article.date_published).toLocaleDateString('ro-RO')}
                </p>
              )}
            </div>
          </section>

          <section className="bg-white">
            <div className="section-container py-8 lg:py-12 grid lg:grid-cols-[3fr,1.4fr] gap-10">
              <article className="prose prose-slate max-w-none prose-p:leading-relaxed prose-h2:text-slate-900 prose-h2:text-xl prose-h2:mt-6 prose-h2:mb-3">
                <div
                  dangerouslySetInnerHTML={{ __html: article.content_html }}
                />
              </article>

              <aside className="space-y-4 text-sm text-slate-700">
                {article.faq && article.faq.length > 0 && (
                  <div className="rounded-2xl bg-softBg border border-slate-100 p-4">
                    <h2 className="text-sm font-semibold text-slate-900 mb-2">
                      Întrebări frecvente
                    </h2>
                    <div className="space-y-3">
                      {article.faq.map((item, idx) => (
                        <div key={idx}>
                          <p className="font-semibold text-slate-900 text-xs">
                            {item.q}
                          </p>
                          <p className="text-xs text-slate-700">{item.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="rounded-2xl bg-slate-900 text-slate-50 p-4 space-y-2 text-xs">
                  <p className="font-semibold text-sm">
                    Vrei să afli cum se aplică aceste reguli în cazul tău?
                  </p>
                  <p>
                    Îmi poți trimite situația ta pe email și îți răspund cu un ghid
                    adaptat.
                  </p>
                  <a
                    href="mailto:contact@dosarpensie.com"
                    className="inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-white hover:bg-primaryDark"
                  >
                    Scrie-mi cazul tău →
                  </a>
                </div>
              </aside>
            </div>
          </section>
        </main>

        <footer className="bg-slate-950 text-slate-300 py-6 mt-4 text-xs">
          <div className="section-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-slate-400">
              © {new Date().getFullYear()} DosarPensie – ghiduri independente
              despre pensii.
            </p>
            <p className="text-slate-500">
              Informațiile sunt generale și nu înlocuiesc comunicările oficiale
              ale caselor de pensii.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Poți începe fără paths pre-generate
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<ArticlePageProps> = async ({
  params
}) => {
  const slug = params?.slug as string

  const { data, error } = await supabaseServer
    .from('articles')
    .select(
      'slug, title, description, cover_image, content_html, faq, date_published'
    )
    .eq('slug', slug)
    .single()

  if (error || !data) {
    return { notFound: true }
  }

  return {
    props: {
      article: data
    },
    revalidate: 60 * 60 // 1 oră
  }
}