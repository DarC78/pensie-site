import Head from 'next/head'

export default function ZeceAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/cu-10-ani-vechime-primesc-pensie'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-cover.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 10 ani vechime primesc pensie? Explicație clară',
    description:
      'Află dacă poți primi pensie cu 10 ani vechime, ce spune legea din România, ce se întâmplă dacă ai lucrat și în străinătate și ce opțiuni există.',
    author: {
      '@type': 'Person',
      name: 'Adrian Defta',
      jobTitle: 'Expert Pensii',
      url: 'https://dosarpensie.com/despre-adrian-defta',
    },
    publisher: {
      '@type': 'Organization',
      name: 'DosarPensie',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dosarpensie.com/logo.png',
      },
    },
    mainEntityOfPage: pageUrl,
    datePublished: '2025-12-08',
    dateModified: new Date().toISOString(),
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Pot primi pensie cu doar 10 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'În general, nu. În România, stagiul minim de cotizare pentru pensia pentru limită de vârstă este de 15 ani. Cu doar 10 ani vechime nu se acordă pensie de stat, dar există excepții și alte soluții.',
        },
      },
      {
        '@type': 'Question',
        name: 'Se pot aduna anii lucrați în străinătate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Dacă ai lucrat în alte țări din UE sau în state cu acorduri (inclusiv UK), anii se pot aduna cu cei din România pentru a îndeplini stagiul minim de pensie.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ce alternative există dacă nu am 15 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Poți lua în calcul completarea stagiului prin muncă suplimentară, adunarea anilor din străinătate sau, în anumite cazuri, pensia socială minimă.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 10 ani vechime primesc pensie? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai doar 10 ani vechime și te întrebi dacă primești pensie? Află ce spune legea, ce opțiuni există și ce poți face mai departe."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Cu 10 ani vechime primesc pensie?"
        />
        <meta
          property="og:description"
          content="Explicație clară despre pensia cu 10 ani vechime și ce alternative există."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* HEADER MIC */}
        <header className="border-b border-slate-100 bg-white">
          <div className="section-container py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-primary text-white flex items-center justify-center text-sm font-bold">
                DP
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-semibold text-slate-800">DosarPensie</span>
                <span className="text-[11px] text-slate-500">Ghiduri clare despre pensie</span>
              </div>
            </a>
            <a
              href="/pensionare"
              className="text-xs sm:text-sm text-primary hover:text-primaryDark"
            >
              ← Înapoi la ghidul principal
            </a>
          </div>
        </header>

        <main>
          {/* INTRO / HERO */}
          <section className="bg-softBg border-b border-slate-100">
            <div className="section-container py-10 lg:py-14 grid lg:grid-cols-[3fr,2fr] gap-10">
              <div className="space-y-5">
                <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-primary shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Ghid scurt · Vechime minimă
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Cu 10 ani vechime primesc pensie?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți oameni ajung la această întrebare: am doar 10 ani lucrați, mai pot primi
                  pensie? În acest ghid scurt îți explic clar ce spune legea, ce nu se poate și ce
                  alternative există.
                </p>

                <div className="grid sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div className="rounded-2xl bg-white p-3 shadow-sm">
                    <span className="font-semibold text-slate-900">Situație frecventă</span>
                    <p className="text-slate-500">întreruperi de muncă</p>
                  </div>
                  <div className="rounded-2xl bg-white p-3 shadow-sm">
                    <span className="font-semibold text-slate-900">Legea românească</span>
                    <p className="text-slate-500">stagiul minim</p>
                  </div>
                  <div className="rounded-2xl bg-white p-3 shadow-sm">
                    <span className="font-semibold text-slate-900">Alternative</span>
                    <p className="text-slate-500">România + străinătate</p>
                  </div>
                </div>
              </div>

              <aside className="rounded-3xl bg-white shadow-sm border border-slate-100 p-5 space-y-4 text-sm">
                <h2 className="font-semibold text-slate-900">
                  Ghiduri utile
                </h2>
                <ul className="list-disc list-inside">
                  <li>
                    <a href="/pensie-15-ani-vechime" className="text-primary underline">
                      Pensia cu 15 ani vechime
                    </a>
                  </li>
                  <li>
                    <a href="/pensie-comunitara" className="text-primary underline">
                      Pensia comunitară
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </section>

          {/* CONTINUT */}
          <section className="section-container py-10 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-3">
                1. Care este stagiul minim de cotizare în România?
              </h2>
              <p>
                Pentru pensia pentru limită de vârstă, legea prevede un
                <strong> stagiu minim de 15 ani</strong>.
                Cu mai puțin de 15 ani vechime, pensia de stat nu se acordă.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">
                2. Ce se întâmplă dacă ai doar 10 ani vechime?
              </h2>
              <p>
                Cu 10 ani vechime, <strong>nu se acordă pensie contributivă</strong>.
                Anii nu se pierd, dar nu sunt suficienți singuri pentru dreptul la pensie.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">
                3. Se pot aduna anii din străinătate?
              </h2>
              <p>
                Da. Dacă ai lucrat în alte țări din UE sau UK, acești ani se pot aduna
                cu cei din România pentru a ajunge la minimul de 15 ani.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">
                4. Alte opțiuni posibile
              </h2>
              <ul className="list-disc list-inside">
                <li>completarea stagiului prin muncă ulterioară</li>
                <li>valorificarea anilor din străinătate</li>
                <li>în anumite cazuri, pensia socială minimă</li>
              </ul>
            </section>
          </section>

          {/* CTA */}
          <section className="section-container py-10 text-center">
            <h2 className="text-xl font-bold mb-3">
              Nu ești sigur ce se aplică în cazul tău?
            </h2>
            <p className="mb-3">
              Îți pot explica gratuit ce opțiuni ai, în funcție de anii tăi reali de muncă.
            </p>
            <a
              href="mailto:contact@dosarpensie.com"
              className="inline-flex rounded-full bg-primary px-5 py-2 text-white text-xs font-semibold"
            >
              Scrie-mi situația ta →
            </a>
          </section>
        </main>
      </div>
    </>
  )
}