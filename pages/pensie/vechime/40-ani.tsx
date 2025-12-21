import Head from 'next/head'

export default function PatruzeciAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/40-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-40-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 40 ani vechime pot să mă pensionez?',
    description:
      'Ghid complet despre pensia cu 40 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
        name: 'Cu 40 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. 40 de ani de vechime reprezintă un stagiu complet de cotizare în România, iar îndeplinirea acestuia îți dă dreptul la pensia pentru limită de vârstă, la vârsta legală sau anticipată conform legislației.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mare cu 40 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Pensia calculată pe baza a 40 de ani de cotizare este, în general, una ridicată, deoarece punctajul acumulat este maxim sau aproape de maxim.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot crește pensia dacă mai lucrez după 40 ani?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Fiecare an suplimentar de muncă peste 40 de ani contribuie la creșterea punctajului și a pensiei, chiar dacă diferența procentuală este mai mică decât în primii ani.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 40 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 40 ani vechime și te întrebi dacă poți să te pensionezi? Află ce drepturi ai, ce tip de pensie poți primi și ce opțiuni există."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 40 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 40 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Cu 40 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți angajați ajung la 40 de ani de vechime și se întreabă dacă acest stagiu
                  le garantează pensia. În acest ghid explic ce drepturi oferă 40 de ani
                  de cotizare, ce tip de pensie poți primi și cum să maximizezi beneficiul.
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
                  1. Ce reprezintă pragul de 40 ani vechime
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii din România, cei 40 de ani de cotizare
                  reprezintă stagiul complet considerat ideal pentru obținerea unei pensii
                  maxime.
                </p>
                <p className="mb-4">
                  Acest stagiu reflectă un parcurs profesional complet, asigurând acumularea
                  maximă de puncte pentru calculul pensiei.
                </p>
                <p className="mb-4">
                  Practic, atingerea acestui prag garantează dreptul la pensie cu valoare optimă.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 40 ani = stagiu complet pentru pensie
                </div>
                <a
                  href="/pensie"
                  className="text-xs sm:text-sm text-primary hover:text-primaryDark"
                >
                  Pentru mai multe detalii vezi ghidul general despre pensie
                </a>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi cu 40 ani
                </h2>
                <p className="mb-4">
                  Cu 40 ani vechime, pensia acordată este calculată pe baza întregului stagiu,
                  rezultând o valoare apropiată de pensia maximă prevăzută de lege.
                </p>
                <p className="mb-4">
                  Aceasta poate include pensia pentru limită de vârstă sau pensia anticipată,
                  în funcție de legislație.
                </p>
                <p className="mb-4">
                  Dreptul la pensie există și poate fi exercitat imediat ce îndeplinești
                  vârsta legală sau condițiile pentru anticipată.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept existent, valoare ridicată
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  3. De ce pensia cu 40 ani este mare
                </h2>
                <p className="mb-4">
                  Pensia se calculează pe baza punctajului acumulat în toți cei 40 de ani de muncă.
                </p>
                <p className="mb-4">
                  Acest punctaj ridicat asigură o pensie mai mare decât media, comparativ cu
                  cei care au stagii mai mici.
                </p>
                <p className="mb-4">
                  Practic, 40 de ani de contribuții aduc stabilitate și confort financiar la pensie.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ⚠️ Stagiu complet = pensie ridicată
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi după 40 ani
                </h2>
                <p className="mb-4">
                  Fiecare an suplimentar după cei 40 crește ușor punctajul, adăugând pensiei un plus.
                </p>
                <p className="mb-4">
                  Chiar dacă diferența procentuală este mai mică, acumularea continuă poate fi benefică.
                </p>
                <p className="mb-4">
                  Mulți aleg să continue activitatea pentru a asigura o pensie cât mai confortabilă.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  📈 Anii suplimentari contează
                </div>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  5. Exemplu de calcul orientativ
                </h2>
                <p className="mb-4">
                  O persoană cu 40 de ani de cotizare va avea un punctaj maxim sau aproape de maxim,
                  comparativ cu cineva cu 30 de ani.
                </p>
                <p className="mb-4">
                  Diferența de punctaj se reflectă direct în cuantumul pensiei lunare.
                </p>
                <p className="mb-4">
                  Este important să privești cei 40 de ani ca punct de plecare pentru o pensie
                  optimă.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ✔️ Stagiu complet = pensie optimă
                </div>
              </section>

              {/* 6 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  6. Se pot aduna anii lucrați în străinătate
                </h2>
                <p className="mb-4">
                  Da. Anii lucrați în Uniunea Europeană sau Marea Britanie se pot cumula
                  pentru a completa stagiul.
                </p>
                <p className="mb-4">
                  Acest lucru poate fi util mai ales dacă ai lucrat în mai multe țări.
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
                  Pentru calculul corect al pensiei, documentele care dovedesc vechimea și contribuțiile sunt esențiale.
                </p>
                <p className="mb-4">
                  Fără ele, procedura poate fi mai complicată și de durată.
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
                  Cu 40 ani vechime, dreptul legal la pensie este garantat, iar pensia este aproape de maxim.
                </p>
                <p className="mb-4">
                  Valoarea pensiei este ridicată, datorită punctajului acumulat pe întreaga perioadă.
                </p>
                <p className="mb-4">
                  Orice an suplimentar poate aduce un plus minor, dar util pentru confortul financiar.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 40 ani = drept la pensie optimă
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}