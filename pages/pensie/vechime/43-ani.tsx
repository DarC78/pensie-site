import Head from 'next/head'

export default function TreiSprezeceAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/43-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-43-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 43 ani vechime pot să mă pensionez?',
    description:
      'Ghid complet despre pensia cu 43 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
    datePublished: '2025-12-17',
    dateModified: new Date().toISOString(),
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Cu 43 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. 43 de ani reprezintă un stagiu de cotizare foarte mare, iar îndeplinirea acestuia îți dă dreptul la pensie pentru limită de vârstă, la împlinirea vârstei legale.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mare cu 43 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Pensia calculată pe baza a 43 de ani de cotizare va fi semnificativ mai mare, deoarece punctajul acumulat este ridicat.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot să mai lucrez dacă am 43 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Chiar și după 43 de ani, fiecare an suplimentar de muncă contribuie la creșterea punctajului și a pensiei, dar diferența procentuală va fi mai mică decât pentru cei cu mai puțini ani.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 43 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 43 ani vechime și te întrebi dacă poți să te pensionezi? Află ce drepturi ai, ce tip de pensie poți primi și ce opțiuni există."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 43 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 43 ani vechime și ce trebuie să știi înainte de pensionare."
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
              href="/pensie"
              className="text-xs sm:text-sm text-primary hover:text-primaryDark"
            >
              ← Înapoi la ghidul principal
            </a>
          </div>
        </header>

        <main>
          {/* HERO */}
          <section className="bg-softBg border-b border-slate-100">
            <div className="section-container py-10 lg:py-14 grid lg:grid-cols-[3fr,2fr] gap-10">
              <div className="space-y-5">
                <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-primary shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Ghid detaliat · Stagiu mare
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Cu 43 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți oameni ajung la 43 de ani de vechime și se întreabă dacă acest prag permite
                  pensionarea. În acest ghid explic ce drepturi îți oferă un stagiu atât de mare,
                  ce tip de pensie poți primi și cum poți optimiza calculul pensiei.
                </p>
              </div>
            </div>
          </section>

          {/* CONTINUT – 8 SECTIUNI */}
          <section className="bg-white">
            <div className="section-container py-10 lg:py-14 space-y-10 text-slate-800">

              {/* 1 */}
              <section>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  1. Ce reprezintă pragul de 43 ani vechime
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii din România, cei 43 de ani de cotizare
                  reprezintă un stagiu foarte mare, ce garantează dreptul la pensie pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Acest stagiu reflectă o contribuție susținută și o experiență profesională îndelungată.
                </p>
                <p className="mb-4">
                  Practic, atingerea acestui prag asigură o pensie semnificativ mai mare decât media.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 43 ani = stagiu extins pentru pensie optimă
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi cu 43 ani
                </h2>
                <p className="mb-4">
                  Cu 43 ani vechime, pensia ta va fi calculată pe baza unui punctaj ridicat,
                  reflectând contribuțiile pe întreaga carieră.
                </p>
                <p className="mb-4">
                  Este vorba despre pensia pentru limită de vârstă, la care se adaugă eventuale majorări.
                </p>
                <p className="mb-4">
                  Practic, acest stagiu asigură o pensie confortabilă comparativ cu minimul legal.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept existent, valoare semnificativă
                </div>
                <a
                  href="/pensie"
                  className="text-xs sm:text-sm text-primary hover:text-primaryDark"
                >
                  Pentru mai multe detalii vezi ghidul general despre pensie
                </a>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  3. De ce pensia cu 43 ani este mare
                </h2>
                <p className="mb-4">
                  Punctajul acumulat în cei 43 de ani determină cuantumul pensiei.
                </p>
                <p className="mb-4">
                  Cu cât perioada de cotizare este mai lungă și salariile mai mari, cu atât pensia crește.
                </p>
                <p className="mb-4">
                  Astfel, persoanele cu 43 ani vechime pot beneficia de pensii peste media națională.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ⚠️ Stagiu mare = pensie ridicată
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi după 43 ani
                </h2>
                <p className="mb-4">
                  Fiecare an suplimentar aduce o creștere suplimentară a pensiei,
                  deși impactul procentual este mai mic decât pentru cei cu mai puțini ani.
                </p>
                <p className="mb-4">
                  Mulți aleg să continue activitatea profesională pentru a maximiza venitul la pensie.
                </p>
                <p className="mb-4">
                  Este o strategie bună pentru a compensa eventuale diminuări cauzate de inflație sau ajustări legale.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  📈 Fiecare an adaugă puncte suplimentare
                </div>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  5. Exemplu de calcul orientativ
                </h2>
                <p className="mb-4">
                  O persoană cu 43 de ani de cotizare va avea un punctaj aproape maxim,
                  ceea ce se reflectă în pensia lunară.
                </p>
                <p className="mb-4">
                  Chiar dacă salariile au variat pe parcursul carierei, cuantumul pensiei va fi substanțial.
                </p>
                <p className="mb-4">
                  Acest exemplu arată importanța stagiului extins pentru securitatea financiară la pensie.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ✔️ Stagiu extins = pensie confortabilă
                </div>
              </section>

              {/* 6 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  6. Se pot aduna anii lucrați în străinătate
                </h2>
                <p className="mb-4">
                  Da. Dacă ai lucrat în alte țări UE sau Marea Britanie, acești ani se pot cumula.
                </p>
                <p className="mb-4">
                  Totalizarea poate crește ușor pensia sau poate permite atingerea unor praguri suplimentare.
                </p>
                <p className="mb-4">
                  Fiecare stat plătește doar partea corespunzătoare perioadei lucrate în țara respectivă.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  🌍 Pensie din mai multe state
                </div>
              </section>

              {/* 7 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  7. Ce documente sunt necesare
                </h2>
                <p className="mb-4">
                  Documentele care dovedesc vechimea și salariile sunt esențiale pentru stabilirea corectă a pensiei.
                </p>
                <p className="mb-4">
                  Lipsa acestora poate complica procesul și întârzia plata pensiei.
                </p>
                <p className="mb-4">
                  Verificarea evidențelor personale la Casa de Pensii este recomandată din timp.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  📄 contracte · adeverințe · documente externe
                </div>
              </section>

              {/* 8 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  8. Concluzia pe scurt
                </h2>
                <p className="mb-4">
                  Cu 43 ani vechime, ai dreptul legal la pensie pentru limită de vârstă și
                  pensia ta va fi confortabilă.
                </p>
                <p className="mb-4">
                  Continuarea activității după această perioadă poate aduce un plus minor, dar important.
                </p>
                <p className="mb-4">
                  Practic, acest stagiu mare asigură o securitate financiară solidă la pensie.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 43 ani = drept la pensie confortabilă
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}