import Head from 'next/head'

export default function TreizeciCinciAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/35-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-35-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 35 ani vechime pot să mă pensionez?',
    description:
      'Ghid complet despre pensia cu 35 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
        name: 'Cu 35 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. 35 ani reprezintă un stagiu de cotizare foarte mare în România și, dacă ai îndeplinit vârsta legală, ai dreptul la pensie pentru limită de vârstă.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mare cu 35 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Cu 35 de ani de cotizare, punctajul acumulat este mare, astfel pensia va fi semnificativ mai ridicată decât în cazul stagiu minim.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot crește pensia dacă mai lucrez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Fiecare an suplimentar de muncă peste 35 de ani contribuie la creșterea pensiei, deși impactul relativ este mai mic comparativ cu anii anteriori.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 35 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 35 ani vechime și te întrebi dacă te poți pensiona? Află ce drepturi ai, ce tip de pensie poți primi și ce opțiuni există."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 35 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 35 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Cu 35 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți oameni ajung la 35 ani de vechime și se întreabă dacă acest prag le
                  oferă dreptul la pensie completă. În acest ghid explic ce tip de pensie poți primi,
                  cum se calculează și cum să-ți optimizezi venitul la pensionare.
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
                  1. Ce reprezintă pragul de 35 ani vechime
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii din România, 35 de ani de cotizare reprezintă un stagiu complet sau aproape complet, asigurând o pensie semnificativă.
                </p>
                <p className="mb-4">
                  Acest stagiu mare arată că persoana a contribuit constant și că are dreptul la o pensie corespunzătoare efortului său de muncă.
                </p>
                <p className="mb-4">
                  Practic, cu 35 de ani de vechime, dreptul la pensie este garantat la vârsta legală.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 35 ani = stagiu complet pentru pensie
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi cu 35 ani
                </h2>
                <p className="mb-4">
                  Cu 35 ani vechime, pensia poate fi una completă, calculată pe baza punctajului acumulat de-a lungul întregii cariere.
                </p>
                <p className="mb-4">
                  În general, aceasta înseamnă un cuantum semnificativ mai mare decât pensia minimă.
                </p>
                <p className="mb-4">
                  Dreptul la pensie există și poate fi exercitat imediat la împlinirea vârstei legale.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept existent, pensie semnificativă
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  3. De ce pensia cu 35 ani este mai mare
                </h2>
                <p className="mb-4">
                  Pensia se calculează pe baza punctajului realizat de-a lungul întregii perioade de cotizare.
                </p>
                <p className="mb-4">
                  Cu 35 de ani de muncă, punctajul total este ridicat, oferind un cuantum lunar consistent.
                </p>
                <p className="mb-4">
                  Astfel, persoanele cu stagiu mare pot ajunge aproape de pensia maximă prevăzută de lege.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ⚠️ Stagiu complet = pensie confortabilă
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi după 35 ani
                </h2>
                <p className="mb-4">
                  Fiecare an lucrat peste 35 de ani poate crește pensia, deși impactul este mai mic comparativ cu anii anteriori.
                </p>
                <p className="mb-4">
                  Acești ani suplimentari contribuie la acumularea unui punctaj și mai mare.
                </p>
                <p className="mb-4">
                  Continuarea activității poate fi avantajoasă dacă vrei să îți maximizezi pensia.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  📈 Ani suplimentari = pensie mai mare
                </div>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  5. Exemplu de calcul orientativ
                </h2>
                <p className="mb-4">
                  O persoană cu 35 ani de cotizare va avea un punctaj mult mai mare decât una cu 25 sau 30 de ani.
                </p>
                <p className="mb-4">
                  Diferența de punctaj se reflectă direct în cuantumul pensiei lunare.
                </p>
                <p className="mb-4">
                  Acești ani reprezintă practic acumularea maximă pentru o pensie completă.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ✔️ Mai mult stagiu = pensie mai mare
                </div>
              </section>

              {/* 6 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  6. Se pot aduna anii lucrați în străinătate
                </h2>
                <p className="mb-4">
                  Da. Dacă ai lucrat în alte țări din Uniunea Europeană sau în Marea Britanie, acești ani se pot cumula.
                </p>
                <p className="mb-4">
                  Totalizarea ajută la stabilirea dreptului la pensie și la creșterea cuantumului acesteia.
                </p>
                <p className="mb-4">
                  Fiecare stat plătește doar partea corespunzătoare perioadei lucrate pe teritoriul său.
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
                  Pentru stabilirea corectă a pensiei, documentele care dovedesc vechimea sunt esențiale.
                </p>
                <p className="mb-4">
                  Fără acte, procedura poate deveni complicată și de durată.
                </p>
                <p className="mb-4">
                  Este recomandat să verifici din timp evidențele tale la Casa de Pensii.
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
                  Cu 35 ani vechime, dreptul la pensie este garantat și cuantumul este semnificativ.
                </p>
                <p className="mb-4">
                  Pensia va fi confortabilă, deoarece se bazează pe un stagiu mare de muncă.
                </p>
                <p className="mb-4">
                  Orice an suplimentar de muncă poate crește și mai mult pensia.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 35 ani = pensie completă și confortabilă
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}