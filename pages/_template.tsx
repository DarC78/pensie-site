import Head from 'next/head'

export default function ArticleTemplate({
  title,
  description,
  slug,
  datePublished,
  coverImage,
  faq,
  content
}: {
  title: string
  description: string
  slug: string
  datePublished: string
  coverImage: string
  faq: { q: string; a: string }[]
  content: JSX.Element
}) {
  return (
    <>
      <Head>
        <title>{title} | DosarPensie</title>

        <link rel="canonical" href={`https://dosarpensie.com/${slug}`} />

        <meta name="description" content={description} />
        <meta property="og:image" content={coverImage} />
        <meta property="twitter:image" content={coverImage} />

        {/* SCHEMA ARTICLE */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: title,
              description,
              author: {
                "@type": "Person",
                name: "Adrian Defta",
                jobTitle: "Expert Pensii",
                url: "https://dosarpensie.com/despre-adrian-defta",
              },
              publisher: {
                "@type": "Organization",
                name: "DosarPensie",
                logo: {
                  "@type": "ImageObject",
                  url: "https://dosarpensie.com/logo.png",
                },
              },
              mainEntityOfPage: `https://dosarpensie.com/${slug}`,
              datePublished,
              dateModified: new Date().toISOString(),
            }),
          }}
        />

        {/* SCHEMA FAQ */}
        {faq.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faq.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: f.a,
                  },
                })),
              }),
            }}
          />
        )}

        {/* SCHEMA BREADCRUMBS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Acasă",
                  item: "https://dosarpensie.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: title,
                  item: `https://dosarpensie.com/${slug}`,
                },
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* HEADER MIC */}
        <header className="border-b border-slate-100 bg-white">
          <div className="section-container py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-primary text-white flex items-center justify-center text-sm font-bold">DP</div>
              <div>
                <span className="font-semibold text-slate-800">DosarPensie</span>
                <p className="text-[11px] text-slate-500 leading-none">Ghiduri clare despre pensie</p>
              </div>
            </a>
            <a href="/#ghiduri" className="text-xs sm:text-sm text-primary hover:text-primaryDark">← Înapoi la ghiduri</a>
          </div>
        </header>

        {/* HERO */}
        <section className="bg-softBg border-b border-slate-100">
          <div className="section-container py-10 space-y-4">
            <p className="text-[11px] font-medium bg-white inline-block px-3 py-1 rounded-full text-primary shadow-sm">
              Ghid complet · Articol informativ
            </p>

            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">{title}</h1>

            <p className="text-xs text-slate-500">
              Ultima actualizare: {new Date().toLocaleDateString("ro-RO")}
            </p>

            {coverImage && (
              <img 
                src={coverImage}
                alt={title}
                className="rounded-2xl shadow-sm border border-slate-200 max-w-full h-auto"
              />
            )}

            <p className="text-base lg:text-lg text-slate-700">
              {description}
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <main className="section-container py-10 lg:py-14 prose prose-slate max-w-none">
          {content}
        </main>

        {/* FOOTER */}
        <footer className="bg-slate-950 text-slate-300 py-6 mt-4 text-xs">
          <div className="section-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-slate-400">
              © {new Date().getFullYear()} DosarPensie – ghiduri independente despre pensii.
            </p>
            <p className="text-slate-500">
              Informațiile sunt generale și nu înlocuiesc comunicările oficiale ale caselor de pensii.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}