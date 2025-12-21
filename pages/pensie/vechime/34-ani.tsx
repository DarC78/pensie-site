import Head from 'next/head'

export default function TreizeciPatruAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/34-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-34-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 34 ani vechime pot să mă pensionez?',
    description:
      'Mini ghid despre pensia cu 34 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
        name: 'Cu 34 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. 34 ani de vechime depășesc stagiul complet de cotizare în România, iar îndeplinirea acestuia îți dă dreptul la pensia pentru limită de vârstă la împlinirea vârstei legale.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mare sau mică cu 34 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Pensia calculată pe baza a 34 ani de cotizare este, în general, una confortabilă, deoarece punctajul acumulat este mare și depășește stagiul complet.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot crește pensia dacă mai lucrez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Fiecare an suplimentar de muncă peste cei 34 ani contribuie la creșterea punctajului și, implicit, a pensiei, chiar dacă aceasta este deja confortabilă.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 34 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 34 ani vechime și te întrebi dacă poți să te pensionezi? Află ce drepturi ai, ce tip de pensie poți primi și ce opțiuni există."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 34 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 34 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Mini ghid detaliat · Stagiu complet
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Cu 34 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți angajați ajung la 34 ani vechime și se întreabă dacă acest prag le
                  permite să se pensioneze. În acest ghid explic drepturile, tipurile de pensie
                  disponibile și cum poți calcula valoarea aproximativă a pensiei tale.
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
                  1. Ce reprezintă pragul de 34 ani vechime
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii din România, cei 34 ani de cotizare
                  reprezintă un stagiu complet sau peste stagiul complet necesar pentru pensie.
                </p>
                <p className="mb-4">
                  Acest prag este considerat suficient pentru a obține o pensie confortabilă
                  la vârsta legală de pensionare.
                </p>
                <p className="mb-4">
                  Atingerea acestui prag garantează dreptul legal la pensie.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 34 ani = stagiu complet sau peste stagiul complet
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi cu 34 ani
                </h2>
                <p className="mb-4">
                  Cu 34 ani vechime, pensia acordată este una bazată pe contribuții complete,
                  asigurând un venit lunar confortabil.
                </p>
                <p className="mb-4">
                  Practic, ai dreptul la pensia pentru limită de vârstă cu punctaj maxim.
                </p>
                <p className="mb-4">
                  Acest lucru face ca pensia ta să fie semnificativ mai mare decât cea a
                  celor cu stagiul minim.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept complet, valoare confortabilă
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
                  3. De ce pensia cu 34 ani este mare
                </h2>
                <p className="mb-4">
                  Pensia se calculează pe baza punctajului acumulat în întreaga carieră.
                </p>
                <p className="mb-4">
                  Cu 34 ani de muncă, punctajul total este ridicat, ceea ce duce la o pensie
                  confortabilă.
                </p>
                <p className="mb-4">
                  Acest prag depășește stagiul complet, garantând un venit stabil la pensionare.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ⚡ Stagiu complet = pensie confortabilă
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi după 34 ani
                </h2>
                <p className="mb-4">
                  Fiecare an lucrat peste 34 ani crește în continuare punctajul de pensie.
                </p>
                <p className="mb-4">
                  Astfel, pensia poate crește și mai mult decât nivelul deja confortabil.
                </p>
                <p className="mb-4">
                  Mulți aleg să continue munca pentru a-și crește semnificativ pensia.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  📈 Fiecare an suplimentar adaugă valoare
                </div>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  5. Exemplu de calcul orientativ
                </h2>
                <p className="mb-4">
                  O persoană cu 34 ani de cotizare va avea un punctaj mult mai mare
                  decât una cu 25 sau 30 de ani de muncă.
                </p>
                <p className="mb-4">
                  Aceasta se reflectă direct în cuantumul pensiei lunare.
                </p>
                <p className="mb-4">
                  Este important să vezi cei 34 ani ca punctul de plecare pentru o pensie
                  confortabilă.
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
                  Da. Dacă ai lucrat în alte țări din Uniunea Europeană sau în Marea Britanie,
                  acești ani se pot cumula.
                </p>
                <p className="mb-4">
                  Totalizarea ajută la creșterea punctajului și la stabilirea dreptului la pensie.
                </p>
                <p className="mb-4">
                  Fiecare stat va plăti doar partea corespunzătoare perioadei lucrate pe teritoriul său.
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
                  Cu 34 ani vechime, există dreptul legal la pensie pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Valoarea pensiei este confortabilă, datorită stagiului complet sau peste stagiul complet.
                </p>
                <p className="mb-4">
                  Orice an suplimentar de muncă poate crește în continuare pensia.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 34 ani = drept la pensie confortabilă
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}