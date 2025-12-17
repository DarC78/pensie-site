import Head from 'next/head'

export default function DouazeciSiDoiAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/32-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-32-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 32 ani vechime pot să mă pensionez?',
    description:
      'Ghid complet despre pensia cu 32 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
        name: 'Cu 32 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Cu 32 ani de vechime, îndeplinești stagiul complet de cotizare, astfel că poți să te pensionezi la vârsta legală sau anticipat, în funcție de legislație.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mare sau mică cu 32 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Pensia calculată pe baza a 32 ani de cotizare este una medie spre mare, deoarece ai acumulat un stagiu complet și punctaj semnificativ.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot crește pensia dacă mai lucrez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Fiecare an suplimentar de muncă peste 32 ani contribuie la creșterea punctajului și, implicit, a pensiei.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 32 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 32 ani vechime și te întrebi dacă poți să te pensionezi? Află ce drepturi ai, ce tip de pensie poți primi și ce opțiuni există."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 32 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 32 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Cu 32 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți angajați se întreabă dacă un stagiu de 32 ani este suficient pentru pensionare. 
                  În acest ghid vei afla ce drepturi ai, ce tip de pensie poți primi și cum poți maximiza pensia.
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
                  1. Ce reprezintă pragul de 32 ani vechime
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii din România, 32 ani de cotizare reprezintă stagiul complet de muncă.
                </p>
                <p className="mb-4">
                  Acest stagiu asigură că ai acumulat suficiente contribuții pentru o pensie corespunzătoare.
                </p>
                <p className="mb-4">
                  Depășirea acestui stagiu poate aduce avantaje suplimentare la calculul pensiei.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 32 ani = stagiu complet de cotizare
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi cu 32 ani
                </h2>
                <p className="mb-4">
                  Cu 32 ani vechime, poți solicita pensia pentru limită de vârstă sau anticipată, în funcție de condițiile legale.
                </p>
                <p className="mb-4">
                  Pensia va fi calculată pe baza punctajului acumulat pe întreaga perioadă.
                </p>
                <p className="mb-4">
                  Acest stagiu îți oferă șanse bune la o pensie confortabilă.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept existent, stagiu complet
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  3. De ce pensia cu 32 ani este mai mare
                </h2>
                <p className="mb-4">
                  Punctajul acumulat pe 32 ani de muncă este semnificativ, ceea ce crește valoarea pensiei.
                </p>
                <p className="mb-4">
                  Comparativ cu cei cu stagii minime, pensia este mult mai apropiată de media națională.
                </p>
                <p className="mb-4">
                  Aceasta oferă un nivel de trai mai confortabil la pensionare.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ⚠️ Stagiu complet = pensie mai mare
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi după 32 ani
                </h2>
                <p className="mb-4">
                  Fiecare an suplimentar poate crește valoarea pensiei.
                </p>
                <p className="mb-4">
                  Chiar și câțiva ani în plus pot face o diferență importantă.
                </p>
                <p className="mb-4">
                  Mulți angajați aleg să mai lucreze pentru a-și îmbunătăți pensia.
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
                  Persoana cu 32 ani de cotizare va avea un punctaj semnificativ mai mare decât una cu stagiu minim.
                </p>
                <p className="mb-4">
                  Diferența de punctaj influențează direct cuantumul pensiei lunare.
                </p>
                <p className="mb-4">
                  Acești ani reprezintă o bază solidă pentru o pensie confortabilă.
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
                  Da. Anii lucrați în Uniunea Europeană sau Marea Britanie se pot cumula.
                </p>
                <p className="mb-4">
                  Acest lucru ajută la calculul corect al pensiei și la recunoașterea drepturilor.
                </p>
                <p className="mb-4">
                  Fiecare stat va plăti partea corespunzătoare perioadei lucrate.
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
                  Documentele care dovedesc vechimea și contribuțiile sunt esențiale.
                </p>
                <p className="mb-4">
                  Fără acte, procedura poate fi complicată și de durată.
                </p>
                <p className="mb-4">
                  Este recomandat să verifici evidențele la Casa de Pensii înainte de pensionare.
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
                  Cu 32 ani vechime, există dreptul legal la pensie completă.
                </p>
                <p className="mb-4">
                  Valoarea pensiei este semnificativ mai mare decât la stagii minime.
                </p>
                <p className="mb-4">
                  Orice an suplimentar de muncă poate crește și mai mult pensia.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 32 ani = drept la pensie confortabilă
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}