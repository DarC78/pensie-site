import Head from 'next/head'

export default function PatruzeciSaseAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/46-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-46-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 46 ani vechime pot să mă pensionez?',
    description:
      'Ghid complet despre pensia cu 46 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
        name: 'Cu 46 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. 46 ani vechime reprezintă un stagiu complet de cotizare și, în general, depășește stagiul minim, ceea ce îți dă dreptul la pensie pentru limită de vârstă imediat ce îndeplinești vârsta legală sau condițiile speciale, dacă există.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mare cu 46 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Pensia calculată pe baza a 46 de ani de cotizare este, în general, considerabilă, deoarece punctajul acumulat este ridicat și reflectă întreaga contribuție pe parcursul vieții active.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot crește pensia dacă mai lucrez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Chiar și după 46 de ani de cotizare, fiecare an suplimentar poate contribui la creșterea pensiei, dar impactul relativ este mai mic comparativ cu anii anteriori.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 46 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 46 ani vechime și te întrebi dacă poți să te pensionezi? Află ce drepturi ai, ce tip de pensie poți primi și ce opțiuni există."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 46 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 46 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Cu 46 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți oameni care au muncit peste 40 de ani se întreabă dacă vechimea acumulată le permite pensionarea imediată și ce tip de pensie pot primi. Acest ghid explică drepturile, calculele și opțiunile disponibile pentru cei cu 46 ani vechime.
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
                  1. Ce înseamnă 46 ani vechime
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii din România, 46 ani de cotizare reprezintă un stagiu complet, depășind cu mult stagiul minim necesar pentru pensia pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Acești ani reflectă întreaga perioadă activă de muncă și contribuțiile făcute la sistemul de pensii.
                </p>
                <p className="mb-4">
                  Stagiul complet îți oferă dreptul la pensie cu o valoare semnificativă, fără restricțiile asociate stagiului minim.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 46 ani = stagiu complet pentru pensie
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Tipul de pensie cu 46 ani vechime
                </h2>
                <p className="mb-4">
                  Cu 46 ani vechime, poți beneficia de pensia pentru limită de vârstă calculată complet, având în vedere întreaga contribuție.
                </p>
                <p className="mb-4">
                  Valoarea pensiei va fi una ridicată comparativ cu cea a celor care au doar stagiul minim.
                </p>
                <p className="mb-4">
                  De regulă, nu există penalizări pentru vechime suplimentară și dreptul la pensie este imediat la îndeplinirea vârstei legale.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept existent, valoare ridicată
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  3. De ce pensia este mare
                </h2>
                <p className="mb-4">
                  Pensia se calculează pe baza punctajului acumulat pe întreaga perioadă de cotizare, iar 46 ani asigură un punctaj maxim.
                </p>
                <p className="mb-4">
                  Cu cât vechimea este mai mare, cu atât pensia crește proporțional.
                </p>
                <p className="mb-4">
                  Aceasta este motivul pentru care pensiile celor cu stagiul complet sunt semnificativ mai mari decât ale celor cu stagiul minim.
                </p>
                <div className="rounded-xl bg-amber-50 p-4 text-sm">
                  ⚠️ Stagiu complet = pensie mare
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi după 46 ani
                </h2>
                <p className="mb-4">
                  Fiecare an lucrat peste 46 de ani adaugă un mic plus la punctajul de pensie.
                </p>
                <p className="mb-4">
                  Impactul relativ este mai mic, dar contribuie la creșterea finală a pensiei.
                </p>
                <p className="mb-4">
                  Unele persoane aleg să continue munca pentru a asigura un venit suplimentar la pensie.
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
                  O persoană cu 46 ani de cotizare va avea un punctaj maxim, reflectând întreaga activitate profesională.
                </p>
                <p className="mb-4">
                  Diferența între această pensie și cea a unui angajat cu stagiul minim este substanțială.
                </p>
                <p className="mb-4">
                  Este important să consideri vechimea ca un avantaj major pentru pensie.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ✔️ Vechime mare = pensie mai mare
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
                  Totalizarea ajută la stabilirea dreptului la pensie și poate crește cuantumul acesteia.
                </p>
                <p className="mb-4">
                  Fiecare stat va plăti partea corespunzătoare perioadei lucrate pe teritoriul său.
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
                  Pentru calculul corect al pensiei, documentele care dovedesc vechimea sunt esențiale.
                </p>
                <p className="mb-4">
                  Lipsa actelor poate complica procedura și întârzia obținerea pensiei.
                </p>
                <p className="mb-4">
                  Este recomandat să verifici evidențele tale la Casa de Pensii înainte de depunerea cererii.
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
                  Cu 46 ani vechime, dreptul legal la pensie este garantat și pensia va fi una substanțială.
                </p>
                <p className="mb-4">
                  Vechimea completă asigură un venit bun, iar anii suplimentari contribuie la creșterea pensiei.
                </p>
                <p className="mb-4">
                  Orice contribuție în plus peste 46 ani poate îmbunătăți cuantumul final.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 46 ani = pensie completă și confortabilă
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}