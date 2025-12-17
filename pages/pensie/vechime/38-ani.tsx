import Head from 'next/head'

export default function TreizeciOptAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/38-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-38-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 38 ani vechime pot să mă pensionez?',
    description:
      'Ghid complet despre pensia cu 38 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
        name: 'Cu 38 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Cu 38 de ani vechime, îndeplinești cu mult stagiul minim de cotizare, iar pensia pentru limită de vârstă poate fi obținută la vârsta legală sau chiar anticipat, în funcție de legislație.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mare cu 38 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Pensia calculată pe baza a 38 de ani de cotizare va fi semnificativ mai mare decât pensia minimă, datorită punctajului acumulat pe întreaga perioadă de muncă.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot crește pensia dacă mai lucrez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Fiecare an suplimentar peste cei 38 contribuie la majorarea punctajului și a pensiei lunare.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 38 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 38 ani vechime și te întrebi dacă poți să te pensionezi? Află ce drepturi ai, ce tip de pensie poți primi și ce opțiuni există."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 38 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 38 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Ghid detaliat · Vechime mare
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Cu 38 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți angajați ajung la 38 de ani de vechime și se întreabă dacă acest
                  stagiu permite pensionarea. În acest ghid explic ce drepturi ai, ce tip
                  de pensie se poate obține și ce beneficii aduce o vechime atât de mare.
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
                  1. Ce reprezintă pragul de 38 ani vechime
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii din România, 38 de ani de cotizare reprezintă
                  un stagiu complet, mult peste minimul necesar, asigurând un drept clar la pensie.
                </p>
                <p className="mb-4">
                  Acest stagiu ridicat reflectă o contribuție consistentă și garantează un punctaj mare pentru calculul pensiei.
                </p>
                <p className="mb-4">
                  Cu 38 de ani de muncă, dreptul la pensie nu mai este doar legal, ci și substanțial financiar.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 38 ani = drept clar și pensie substanțială
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi cu 38 ani
                </h2>
                <p className="mb-4">
                  Cu 38 de ani vechime, pensia va fi calculată pe baza întregului punctaj acumulat, rezultând într-un venit lunar consistent.
                </p>
                <p className="mb-4">
                  Practic, vei primi o pensie apropiată de maximul posibil pentru condițiile actuale ale sistemului public.
                </p>
                <p className="mb-4">
                  Dreptul este deplin și poate fi exercitat la vârsta legală sau chiar anticipat dacă legislația permite.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept legal și pensie mare
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  3. De ce pensia cu 38 ani este mare
                </h2>
                <p className="mb-4">
                  Pensia depinde de punctajul cumulativ și de salariile din toată perioada de muncă.
                </p>
                <p className="mb-4">
                  38 de ani de cotizare garantează un punctaj ridicat și, implicit, o pensie generoasă.
                </p>
                <p className="mb-4">
                  Acesta este motivul pentru care mulți pensionari cu vechime mare primesc pensii confortabile.
                </p>
                <div className="rounded-xl bg-amber-50 p-4 text-sm">
                  ⚠️ Vechime mare = pensie confortabilă
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi după 38 ani
                </h2>
                <p className="mb-4">
                  Fiecare an suplimentar peste 38 aduce un mic plus la pensie, însă impactul procentual este mai redus.
                </p>
                <p className="mb-4">
                  Chiar și câțiva ani în plus pot adăuga confort financiar suplimentar.
                </p>
                <p className="mb-4">
                  Multe persoane aleg să continue munca pentru a crește economiile sau punctajul suplimentar.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  📈 Fiecare an contează suplimentar
                </div>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  5. Exemplu de calcul orientativ
                </h2>
                <p className="mb-4">
                  O persoană cu 38 de ani de cotizare va avea un punctaj aproape maxim, comparativ cu cineva cu 25 sau 30 de ani de muncă.
                </p>
                <p className="mb-4">
                  Diferența de punctaj se reflectă direct în cuantumul pensiei lunare.
                </p>
                <p className="mb-4">
                  38 de ani de vechime reprezintă un nivel aproape optim de pensie.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ✔️ Vechime mare = pensie aproape maximă
                </div>
              </section>

              {/* 6 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  6. Se pot aduna anii lucrați în străinătate
                </h2>
                <p className="mb-4">
                  Da. Anii lucrați în UE sau în Marea Britanie se pot cumula cu cei din România.
                </p>
                <p className="mb-4">
                  Aceasta ajută la stabilirea unui punctaj maxim și la optimizarea pensiei.
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
                  Documentele care dovedesc vechimea completă sunt esențiale pentru calculul pensiei.
                </p>
                <p className="mb-4">
                  Fără acte, procedura poate fi complicată sau întârziată.
                </p>
                <p className="mb-4">
                  Verifică evidențele tale la Casa de Pensii pentru a evita surprize neplăcute.
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
                  Cu 38 ani vechime, dreptul legal la pensie este asigurat și pensia va fi substanțială.
                </p>
                <p className="mb-4">
                  Continuarea muncii poate aduce un plus suplimentar, însă baza este deja foarte solidă.
                </p>
                <p className="mb-4">
                  Aceasta este o situație favorabilă pentru pensionare confortabilă.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 38 ani = drept la pensie confortabilă
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}