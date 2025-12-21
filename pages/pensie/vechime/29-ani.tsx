import Head from 'next/head'

export default function DouazeciSiNouaAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/29-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-29-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 29 ani vechime pot să mă pensionez?',
    description:
      'Ghid complet despre pensia cu 29 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
        name: 'Cu 29 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Cu 29 ani vechime îndeplinești stagiul minim de cotizare și ai dreptul la pensia pentru limită de vârstă, la împlinirea vârstei legale.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mare sau mică cu 29 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Pensia este peste nivelul minim și apropiată de pensia calculată la stagiul complet, dar nu este maximă.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot crește pensia dacă mai lucrez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Fiecare an suplimentar de muncă peste cei 29 ani contribuie la creșterea punctajului și, implicit, a pensiei.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 29 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 29 ani vechime și te întrebi dacă te poți pensiona? Află ce drepturi ai, ce tip de pensie poți primi și ce opțiuni există."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 29 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 29 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Ghid detaliat · Stagiu realizat
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Cu 29 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți oameni ajung la 29 ani de vechime și se întreabă dacă acest stagiu este
                  suficient pentru a se pensiona. În acest ghid explic ce drepturi îți oferă
                  această vechime și ce opțiuni ai pentru pensie.
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
                  1. Ce reprezintă pragul de 29 ani vechime
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii din România, 29 ani de cotizare
                  reprezintă un stagiu consistent peste nivelul minim legal.
                </p>
                <p className="mb-4">
                  Acest stagiu confirmă existența dreptului la pensie pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Totuși, nu este echivalent cu stagiul complet.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 29 ani = drept sigur la pensie
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi cu 29 ani
                </h2>
                <p className="mb-4">
                  Cu 29 ani vechime poți primi pensia pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Pensia este calculată proporțional cu contribuțiile realizate.
                </p>
                <p className="mb-4">
                  Dreptul se exercită la împlinirea vârstei legale.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept existent, pensie bună
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
                  3. De ce pensia cu 29 ani nu este maximă
                </h2>
                <p className="mb-4">
                  Pensia se bazează pe punctajul acumulat pe toată durata muncii.
                </p>
                <p className="mb-4">
                  Cu 29 ani de cotizare, punctajul este ridicat, dar incomplet.
                </p>
                <p className="mb-4">
                  Diferența față de stagiul complet se reflectă în cuantum.
                </p>
                <div className="rounded-xl bg-amber-50 p-4 text-sm">
                  ⚠️ Pensie mare, nu maximă
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi după 29 ani
                </h2>
                <p className="mb-4">
                  Fiecare an lucrat peste cei 29 ani aduce punctaj suplimentar.
                </p>
                <p className="mb-4">
                  Creșterea se reflectă direct în valoarea pensiei.
                </p>
                <p className="mb-4">
                  Continuarea activității este o opțiune frecventă.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  📈 Fiecare an contează
                </div>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  5. Exemplu de calcul orientativ
                </h2>
                <p className="mb-4">
                  O persoană cu 29 ani are o pensie semnificativ peste minim.
                </p>
                <p className="mb-4">
                  Diferența față de 30–35 ani rămâne vizibilă.
                </p>
                <p className="mb-4">
                  Stagiul suplimentar aduce stabilitate financiară.
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
                  Da. Anii lucrați în alte state UE sau Marea Britanie se pot cumula.
                </p>
                <p className="mb-4">
                  Totalizarea ajută la stabilirea dreptului la pensie.
                </p>
                <p className="mb-4">
                  Fiecare stat plătește partea corespunzătoare.
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
                  Documentele care dovedesc vechimea sunt esențiale.
                </p>
                <p className="mb-4">
                  Lipsa actelor poate întârzia stabilirea pensiei.
                </p>
                <p className="mb-4">
                  Verificarea din timp este recomandată.
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
                  Cu 29 ani vechime, există dreptul legal la pensie.
                </p>
                <p className="mb-4">
                  Pensia este una bună, dar nu maximă.
                </p>
                <p className="mb-4">
                  Orice an suplimentar îți poate crește pensia.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 29 ani = pensie solidă, perfectibilă
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}