import Head from 'next/head'

export default function NouasprezeceAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/19-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-19-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 19 ani vechime pot să mă pensionez?',
    description:
      'Ghid complet despre pensia cu 19 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
        name: 'Cu 19 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. 19 ani reprezintă peste stagiul minim de cotizare în România, deci ai dreptul la pensia pentru limită de vârstă la împlinirea vârstei legale.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mare sau mică cu 19 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Pensia cu 19 ani vechime este mai mare decât cea cu stagiul minim, dar poate fi tot moderată. Fiecare an suplimentar contează pentru creșterea pensiei.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot crește pensia dacă mai lucrez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Fiecare an lucrat după cei 19 ani contribuie la creșterea punctajului și a pensiei finale.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 19 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 19 ani vechime și te întrebi dacă poți să te pensionezi? Află ce drepturi ai, ce tip de pensie poți primi și ce opțiuni există."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 19 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 19 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Cu 19 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți oameni cu 19 ani de vechime se întreabă dacă acest prag le permite pensionarea. În acest ghid explic ce drepturi ai, ce tip de pensie poți obține și cum poți crește valoarea pensiei.
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
                  1. Ce reprezintă pragul de 19 ani vechime
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii din România, 19 ani de cotizare reprezintă un stagiu peste minimul legal necesar pentru acordarea pensiei pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Acest stagiu suplimentar îți asigură un punctaj mai bun și, implicit, o pensie mai mare decât minimul.
                </p>
                <p className="mb-4">
                  Chiar și cu 19 ani, pensia depinde de salariile și contribuțiile tale pe întreaga perioadă.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 19 ani = peste stagiu minim, pensie mai bună
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi cu 19 ani
                </h2>
                <p className="mb-4">
                  Cu 19 ani vechime îndeplinești condiția de stagiu și vei primi pensia pentru limită de vârstă, calculată pe baza punctajului acumulat.
                </p>
                <p className="mb-4">
                  Aceasta va fi mai mare decât pensia minimă, dar poate fi tot moderată dacă nu ai avut contribuții mari.
                </p>
                <p className="mb-4">
                  Dreptul la pensie este garantat, dar valoarea finală depinde de fiecare an lucrat.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept existent, pensie mai bună decât minim
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
                  3. De ce pensia cu 19 ani poate fi moderată
                </h2>
                <p className="mb-4">
                  Pensia se calculează pe baza punctajului total obținut de-a lungul celor 19 ani de muncă.
                </p>
                <p className="mb-4">
                  Chiar dacă depășești stagiul minim, valoarea pensiei poate fi moderată dacă salariile sau contribuțiile au fost reduse.
                </p>
                <p className="mb-4">
                  De aceea, fiecare an suplimentar peste 19 ani ajută la creșterea pensiei.
                </p>
                <div className="rounded-xl bg-amber-50 p-4 text-sm">
                  ⚠️ Stagiu peste minim = pensie mai mare, dar poate fi moderată
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi după 19 ani
                </h2>
                <p className="mb-4">
                  Fiecare an lucrat după 19 ani crește direct punctajul și pensia.
                </p>
                <p className="mb-4">
                  Chiar câțiva ani suplimentari pot avea un impact semnificativ asupra cuantumului pensiei.
                </p>
                <p className="mb-4">
                  Multe persoane aleg să continue să lucreze pentru a-și maximiza venitul la pensie.
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
                  O persoană cu 19 ani de cotizare va avea un punctaj mai mare decât una cu stagiul minim de 15 ani.
                </p>
                <p className="mb-4">
                  Diferența se reflectă direct în cuantumul pensiei lunare.
                </p>
                <p className="mb-4">
                  Este important să privești cei 19 ani ca un pas peste minim, dar nu ca punct final.
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
                  Da. Dacă ai lucrat în alte țări din Uniunea Europeană sau în Marea Britanie, acești ani se pot cumula.
                </p>
                <p className="mb-4">
                  Totalizarea ajută la îndeplinirea pragului minim și la stabilirea dreptului la pensie.
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
                  Documentele care dovedesc vechimea sunt esențiale pentru stabilirea corectă a pensiei.
                </p>
                <p className="mb-4">
                  Fără acte, procedura poate fi complicată și de durată.
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
                  Cu 19 ani vechime, există dreptul legal la pensie pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Valoarea pensiei este mai bună decât minimul, dar depinde de contribuții și salarii.
                </p>
                <p className="mb-4">
                  Orice an suplimentar de muncă poate crește semnificativ pensia finală.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 19 ani = drept la pensie, valoare mai bună decât minim
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}