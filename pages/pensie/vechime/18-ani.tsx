import Head from 'next/head'

export default function OptsprezeceAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/18-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-18-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 18 ani vechime pot să mă pensionez?',
    description:
      'Ghid complet despre pensia cu 18 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
        name: 'Cu 18 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. 18 ani reprezintă peste pragul minim de cotizare în România, iar îndeplinirea acestuia îți dă dreptul la pensia pentru limită de vârstă, la împlinirea vârstei legale.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mare sau mică cu 18 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Pensia calculată pe baza a 18 ani de cotizare este mai mare decât cea cu 15 ani, dar poate fi tot moderate, deoarece punctajul acumulat nu este foarte mare.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot crește pensia dacă mai lucrez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Fiecare an suplimentar de muncă peste cei 18 ani contribuie la creșterea punctajului și, implicit, a pensiei.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 18 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 18 ani vechime și te întrebi dacă poți să te pensionezi? Află ce drepturi ai, ce tip de pensie poți primi și ce opțiuni există."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 18 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 18 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Ghid detaliat · Stagiu minim
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Cu 18 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți oameni ajung la 18 ani de vechime și se întreabă dacă acest prag
                  este suficient pentru a primi pensie. În acest ghid explic ce drepturi
                  îți oferă stagiul de cotizare, ce limitări există și ce poți face
                  pentru a-ți crește pensia.
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
                  1. Ce reprezintă pragul de 18 ani vechime
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii din România, 15 ani reprezintă stagiul minim,
                  iar 18 ani depășesc acest prag, consolidând dreptul la pensie.
                </p>
                <p className="mb-4">
                  Acești ani contribuie la punctajul de pensie și cresc cuantumul potențial.
                </p>
                <p className="mb-4">
                  Chiar dacă depășești stagiul minim, pensia ta va fi proporțională cu contribuțiile.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 18 ani = peste pragul minim, drept la pensie consolidat
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi cu 18 ani
                </h2>
                <p className="mb-4">
                  Cu 18 ani vechime îndeplinești stagiul minim și poți primi pensia pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Pensiile calculate pentru 18 ani sunt mai mari decât cele de 15 ani, dar nu ating încă nivelul pensiilor complete.
                </p>
                <p className="mb-4">
                  Dreptul la pensie există și poate fi exercitat la vârsta legală.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept existent, cuantum mai bun decât la 15 ani
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  3. De ce pensia cu 18 ani nu este mare
                </h2>
                <p className="mb-4">
                  Chiar dacă 18 ani depășesc stagiul minim, punctajul acumulat nu este încă mare.
                </p>
                <p className="mb-4">
                  Valoarea pensiei depinde de salariile și contribuțiile din întreaga perioadă.
                </p>
                <p className="mb-4">
                  De aceea, mulți pensionari cu 18 ani de cotizare primesc pensii moderate.
                </p>
                <div className="rounded-xl bg-amber-50 p-4 text-sm">
                  ⚠️ Punctaj moderat = pensie moderată
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
                  4. Ce se întâmplă dacă mai lucrezi după 18 ani
                </h2>
                <p className="mb-4">
                  Fiecare an lucrat peste 18 ani crește direct punctajul de pensie.
                </p>
                <p className="mb-4">
                  Aceasta poate aduce o diferență semnificativă în cuantumul pensiei.
                </p>
                <p className="mb-4">
                  Multe persoane aleg să continue munca pentru a-și îmbunătăți venitul la pensie.
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
                  O persoană cu 18 ani de cotizare va avea un punctaj mai mare decât cineva cu 15 ani,
                  dar mai mic decât unul cu 25-30 de ani.
                </p>
                <p className="mb-4">
                  Diferența de punctaj se reflectă direct în cuantumul pensiei lunare.
                </p>
                <p className="mb-4">
                  18 ani trebuie considerați un început solid, nu obiectiv final.
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
                  Da. Anii lucrați în alte țări din UE sau în Marea Britanie se pot cumula.
                </p>
                <p className="mb-4">
                  Aceasta ajută la îndeplinirea pragului minim și la creșterea dreptului la pensie.
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
                  Cu 18 ani vechime, ai dreptul legal la pensie pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Valoarea pensiei este mai bună decât la 15 ani, dar poate fi tot moderate.
                </p>
                <p className="mb-4">
                  Orice an suplimentar de muncă poate crește semnificativ pensia.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 18 ani = drept consolidat la pensie
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}