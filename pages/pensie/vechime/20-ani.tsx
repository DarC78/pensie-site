import Head from 'next/head'

export default function DouazeciAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/20-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-20-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 20 ani vechime pot să mă pensionez?',
    description:
      'Ghid complet despre pensia cu 20 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
    datePublished: '2025-12-16',
    dateModified: new Date().toISOString(),
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Cu 20 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. 20 ani reprezintă mai mult decât stagiul minim de cotizare în România, iar îndeplinirea acestuia îți permite să soliciți pensia pentru limită de vârstă la împlinirea vârstei legale.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mare sau mică cu 20 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Pensia calculată pe baza a 20 de ani de cotizare este mai mare decât cea minimă, dar poate fi încă sub media națională, în funcție de contribuțiile realizate și salariul mediu pe perioadă.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot crește pensia dacă mai lucrez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Fiecare an suplimentar de muncă după cei 20 de ani contribuie la creșterea punctajului și, implicit, a pensiei.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 20 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 20 ani vechime și te întrebi dacă poți să te pensionezi? Află ce drepturi ai, ce tip de pensie poți primi și ce opțiuni există."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 20 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 20 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Ghid detaliat · Stagiu extins
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Cu 20 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți oameni ajung la 20 ani de vechime și se întreabă dacă acest prag le permite să primească pensie. În acest ghid explic ce drepturi îți oferă stagiul de 20 ani, ce limitări există și ce beneficii poți obține dacă continui să lucrezi.
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
                  1. Ce reprezintă pragul de 20 ani vechime
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii din România, 20 ani de cotizare reprezintă un stagiu considerabil peste minimul legal, oferind dreptul clar la pensie pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Pragul de 20 ani nu doar confirmă dreptul legal, ci și crește semnificativ punctajul de pensie comparativ cu minimul de 15 ani.
                </p>
                <p className="mb-4">
                  Chiar dacă vârsta legală de pensionare nu este încă atinsă, acest stagiu îți asigură dreptul de a solicita pensia la momentul potrivit.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 20 ani = drept clar la pensie + punctaj mai mare
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi cu 20 ani
                </h2>
                <p className="mb-4">
                  Cu 20 ani vechime, îndeplinești condiția de stagiu și poți primi pensie pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Pensia va fi mai generoasă decât cea acordată pentru minimul de 15 ani, însă poate fi totuși sub media națională, în funcție de salariul mediu realizat.
                </p>
                <p className="mb-4">
                  Dreptul la pensie este garantat de lege și poate fi exercitat la vârsta legală.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept existent, valoare mai bună decât minimul
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
                  3. De ce pensia cu 20 ani poate fi tot medie
                </h2>
                <p className="mb-4">
                  Chiar dacă ai 20 ani de muncă, pensia depinde și de salariile înregistrate și de contribuțiile plătite.
                </p>
                <p className="mb-4">
                  Unele persoane pot obține o pensie apropiată de media națională, altele mai mică dacă au avut salarii reduse.
                </p>
                <p className="mb-4">
                  Este important să înțelegi că stagiu mai mare = pensie mai mare, dar nu neapărat confortabilă fără contribuții consistente.
                </p>
                <div className="rounded-xl bg-amber-50 p-4 text-sm">
                  ⚠️ Stagiu mai mare = pensie mai bună, dar nu garantată
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi după 20 ani
                </h2>
                <p className="mb-4">
                  Fiecare an lucrat peste cei 20 contribuie semnificativ la punctajul de pensie.
                </p>
                <p className="mb-4">
                  Chiar și câțiva ani suplimentari pot crește considerabil cuantumul pensiei.
                </p>
                <p className="mb-4">
                  Continuarea activității profesionale este o strategie recomandată pentru creșterea pensiei.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  📈 Mai mult stagiu = pensie mai mare
                </div>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  5. Exemplu de calcul orientativ
                </h2>
                <p className="mb-4">
                  O persoană cu 20 ani de cotizare va avea un punctaj mai mare decât una cu 15 ani, dar mai mic decât cineva cu 30 sau 35 de ani.
                </p>
                <p className="mb-4">
                  Diferența de punctaj se reflectă direct în cuantumul pensiei lunare.
                </p>
                <p className="mb-4">
                  Este util să privești cei 20 ani ca un pas solid spre o pensie confortabilă.
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
                  Da. Anii lucrați în alte țări UE sau Marea Britanie se pot cumula.
                </p>
                <p className="mb-4">
                  Aceasta ajută la îndeplinirea pragului minim și la creșterea punctajului de pensie.
                </p>
                <p className="mb-4">
                  Fiecare stat plătește partea corespunzătoare perioadei lucrate pe teritoriul său.
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
                  Lipsa actelor poate complica și prelungi procedura.
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
                  Cu 20 ani vechime, dreptul legal la pensie pentru limită de vârstă este clar.
                </p>
                <p className="mb-4">
                  Valoarea pensiei va fi mai mare decât minimul, dar poate fi sub medie dacă salariile și contribuțiile au fost mici.
                </p>
                <p className="mb-4">
                  Orice an suplimentar de muncă după cei 20 ani crește semnificativ pensia.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 20 ani = drept clar la pensie și punctaj mai mare
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}