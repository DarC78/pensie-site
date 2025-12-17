import Head from 'next/head'

export default function PatruzeciSiPatruAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/44-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-44-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 44 ani vechime pot să mă pensionez?',
    description:
      'Ghid complet despre pensia cu 44 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
        name: 'Cu 44 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. 44 de ani de vechime reprezintă un stagiu peste pragul legal, iar îndeplinirea acestuia îți dă dreptul la pensia pentru limită de vârstă sau anticipată, în funcție de vârstă.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mare sau mică cu 44 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Pensia calculată pe baza a 44 de ani de cotizare este, în general, una mare, deoarece punctajul acumulat este ridicat.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot crește pensia dacă mai lucrez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Fiecare an suplimentar de muncă peste cei 44 contribuie la creșterea punctajului și a pensiei, deși impactul procentual va fi mai mic decât la stagiile mici.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 44 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 44 ani vechime și te întrebi dacă te poți pensiona? Află ce drepturi ai, ce tip de pensie poți primi și ce opțiuni există."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 44 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 44 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Cu 44 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți oameni ajung la 44 ani de vechime și se întreabă dacă acest prag este
                  suficient pentru a se pensiona. În acest ghid explic ce drepturi îți oferă
                  stagiul complet, ce tip de pensie poți obține și cum poți optimiza suma pensiei.
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
                  1. Ce reprezintă pragul de 44 ani vechime
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii din România, 44 de ani de cotizare reprezintă un stagiu complet sau aproape complet.
                </p>
                <p className="mb-4">
                  Aceasta înseamnă că ai contribuit consistent și ai dreptul legal la pensie cu cuantum mare.
                </p>
                <p className="mb-4">
                  Practic, atingerea acestui prag garantează pensia pentru limită de vârstă, fără restricții legale.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 44 ani = stagiu complet pentru pensie
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi cu 44 ani
                </h2>
                <p className="mb-4">
                  Cu 44 ani vechime poți beneficia de pensie pentru limită de vârstă sau, dacă vârsta legală nu este încă atinsă, de pensie anticipată.
                </p>
                <p className="mb-4">
                  Cuantumul pensiei va fi ridicat datorită punctajului acumulat în toți acești ani.
                </p>
                <p className="mb-4">
                  Astfel, dreptul la pensie există și poate fi exercitat imediat ce sunt îndeplinite condițiile de vârstă.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept existent, valoare mare
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  3. De ce pensia cu 44 ani este mare
                </h2>
                <p className="mb-4">
                  Pensia se calculează pe baza punctajului realizat de-a lungul întregii perioade de cotizare.
                </p>
                <p className="mb-4">
                  Cu 44 ani de muncă, punctajul total este maxim sau aproape maxim, rezultând o pensie consistentă.
                </p>
                <p className="mb-4">
                  Astfel, majoritatea persoanelor cu acest stagiu primesc pensii substanțiale.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ⚠️ Stagiu complet = pensie mare
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi după 44 ani
                </h2>
                <p className="mb-4">
                  Fiecare an lucrat peste 44 de ani aduce un plus la punctajul de pensie, dar impactul procentual este mai mic decât la stagiile mici.
                </p>
                <p className="mb-4">
                  Totuși, poate aduce un plus semnificativ pensiei dacă salariile au fost ridicate.
                </p>
                <p className="mb-4">
                  Mulți aleg să continue să muncească pentru a-și crește pensia peste nivelul standard.
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
                  O persoană cu 44 ani de cotizare va avea un punctaj foarte ridicat comparativ cu cineva cu 30 sau 35 de ani.
                </p>
                <p className="mb-4">
                  Diferența de punctaj se reflectă direct în cuantumul pensiei lunare.
                </p>
                <p className="mb-4">
                  Astfel, cei 44 ani trebuie considerați ca un stagiu complet, cu pensie confortabilă.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ✔️ Stagiu complet = pensie confortabilă
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
                  Totalizarea ajută la îndeplinirea stagiului complet și la stabilirea dreptului la pensie.
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
                  Pentru stabilirea corectă a pensiei, documentele care dovedesc vechimea și salariile sunt esențiale.
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
                  Cu 44 ani vechime, există dreptul legal la pensie completă pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Valoarea pensiei va fi mare, datorită punctajului acumulat în toți acești ani.
                </p>
                <p className="mb-4">
                  Orice an suplimentar de muncă poate crește pensia și mai mult.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 44 ani = stagiu complet, pensie confortabilă
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}