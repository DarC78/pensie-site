import Head from 'next/head'

export default function TreizeciNouaAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/39-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-39-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 39 ani vechime pot să mă pensionez?',
    description:
      'Ghid complet despre pensia cu 39 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
        name: 'Cu 39 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. 39 de ani reprezintă un stagiu lung de cotizare în România, iar îndeplinirea acestuia îți oferă dreptul la pensie pentru limită de vârstă la vârsta legală, cu un cuantum semnificativ mai mare decât stagiul minim.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mare cu 39 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Punctajul acumulat pe parcursul a 39 de ani de muncă conduce la o pensie ridicată, proporțional cu contribuțiile realizate.',
        },
      },
      {
        '@type': 'Question',
        name: 'Mai pot crește pensia dacă mai lucrez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Chiar și după 39 de ani, fiecare an suplimentar adaugă punctaj și poate crește pensia finală.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 39 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 39 ani vechime și te întrebi dacă poți să te pensionezi? Află ce drepturi ai, ce tip de pensie poți primi și ce opțiuni există."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 39 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 39 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Ghid detaliat · Stagiu complet
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Cu 39 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți angajați ajung la 39 de ani de vechime și se întreabă dacă acest prag le
                  permite să se pensioneze. În acest ghid explic ce drepturi ai, ce tip de pensie
                  poți obține și cum poți planifica pensionarea eficient.
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
                  1. Ce reprezintă pragul de 39 ani vechime
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii din România, 39 de ani de cotizare
                  reprezintă un stagiu lung, asigurând un drept solid la pensie.
                </p>
                <p className="mb-4">
                  Acești ani de muncă reflectă contribuții consistente și
                  experiență acumulată, garantând un punctaj ridicat.
                </p>
                <p className="mb-4">
                  Îndeplinirea acestui prag conferă pensie la nivel complet, fără limitări semnificative.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 39 ani = stagiu complet pentru pensie
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi cu 39 ani
                </h2>
                <p className="mb-4">
                  Cu 39 de ani vechime îndeplinești nu doar condiția minimă, ci și criteriul
                  pentru pensie completă, calculată proporțional cu toți anii de muncă.
                </p>
                <p className="mb-4">
                  În practică, pensia va fi una consistentă, reflectând contribuțiile și
                  experiența acumulată.
                </p>
                <p className="mb-4">
                  Dreptul la pensie există și poate fi exercitat la vârsta legală de pensionare,
                  cu un cuantum mai mare.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept complet, pensie substanțială
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  3. De ce pensia cu 39 ani este mare
                </h2>
                <p className="mb-4">
                  Pensia se calculează pe baza punctajului acumulat pe parcursul tuturor anilor
                  de muncă. Cu 39 de ani, punctajul total este ridicat.
                </p>
                <p className="mb-4">
                  Aceasta asigură o pensie confortabilă, semnificativ mai mare decât cea bazată
                  pe stagiul minim.
                </p>
                <p className="mb-4">
                  Practic, 39 de ani garantează o pensie apropiată de cuantumul maxim posibil.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ⚠️ Stagiu complet = pensie mare
                </div>
                <a
                  href="/pensie"
                  className="text-xs sm:text-sm text-primary hover:text-primaryDark"
                >
                  Pentru mai multe detalii vezi ghidul general despre pensie
                </a>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi după 39 ani
                </h2>
                <p className="mb-4">
                  Chiar și după 39 de ani, fiecare an suplimentar adaugă punctaj și poate
                  crește cuantumul pensiei.
                </p>
                <p className="mb-4">
                  Anii în plus pot fi utili pentru optimizarea pensiei și pentru a acoperi
                  eventuale reduceri sau ajustări.
                </p>
                <p className="mb-4">
                  De aceea, unii aleg să mai lucreze chiar după atingerea stagiu complet.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  📈 Fiecare an suplimentar contează
                </div>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  5. Exemplu de calcul orientativ
                </h2>
                <p className="mb-4">
                  O persoană cu 39 ani de cotizare va avea un punctaj mult mai mare decât
                  cineva cu 25 sau 30 de ani de muncă.
                </p>
                <p className="mb-4">
                  Diferența de punctaj se reflectă direct în cuantumul pensiei lunare.
                </p>
                <p className="mb-4">
                  Cei 39 de ani reprezintă aproape de maximum pentru pensie integrală.
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
                  Da. Anii lucrați în alte țări din Uniunea Europeană sau Marea Britanie
                  se pot cumula.
                </p>
                <p className="mb-4">
                  Totalizarea ajută la maximizarea punctajului și la calculul corect al pensiei.
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
                  Documentele care dovedesc vechimea sunt esențiale pentru stabilirea corectă a pensiei.
                </p>
                <p className="mb-4">
                  Fără acte, procedura poate deveni complicată și de durată.
                </p>
                <p className="mb-4">
                  Este recomandat să verifici evidențele tale la Casa de Pensii din timp.
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
                  Cu 39 ani vechime, ai dreptul legal la pensie completă pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Valoarea pensiei este substanțială, reflectând stagiu complet și contribuții consistente.
                </p>
                <p className="mb-4">
                  Orice an suplimentar poate crește și mai mult cuantumul pensiei.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 39 ani = pensie completă, confortabilă
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}