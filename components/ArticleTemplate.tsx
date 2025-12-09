import Head from 'next/head'

export default function ArticleTemplate({
  title,
  description,
  slug,
  datePublished,
  coverImage,
  faq = [],
  children
}) {
  const fullUrl = `https://dosarpensie.com/${slug}`

  return (
    <>
      <Head>
        <title>{title} | DosarPensie</title>
        <meta name="description" content={description} />

        <link rel="canonical" href={fullUrl} />

        {/* OG */}
        <meta property="og:title" content={`${title} | DosarPensie`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={coverImage} />
        <meta property="og:url" content={fullUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={coverImage} />

        {/* JSON-LD Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": title,
              "description": description,
              "author": {
                "@type": "Person",
                "name": "Adrian Defta",
                "jobTitle": "Expert Pensii",
                "url": "https://dosarpensie.com/despre-adrian-defta"
              },
              "publisher": {
                "@type": "Organization",
                "name": "DosarPensie",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://dosarpensie.com/logo192.png"
                }
              },
              "mainEntityOfPage": fullUrl,
              "image": coverImage,
              "datePublished": datePublished,
              "dateModified": new Date().toISOString(),
            })
          }}
        />

        {/* FAQ Schema */}
        {faq.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faq.map(item => ({
                  "@type": "Question",
                  "name": item.q,
                  "acceptedAnswer": { "@type": "Answer", "text": item.a }
                }))
              })
            }}
          />
        )}
      </Head>

      <div className="min-h-screen bg-white">
        <main className="section-container py-10">
          {coverImage && (
            <img
              src={coverImage}
              alt={title}
              className="w-full rounded-2xl mb-6 shadow"
            />
          )}

          <h1 className="text-3xl font-bold text-slate-900 mb-4">{title}</h1>

          <article className="prose prose-slate max-w-none">
            {children}
          </article>
        </main>
      </div>
    </>
  );
}