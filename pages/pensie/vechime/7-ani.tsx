import Head from 'next/head'

export default function SapteAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/7-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-7-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 7 ani vechime pot să mă pensionez?',
    description:
      'Ghid clar despre pensia cu 7 ani vechime: ce spune legea, dacă există drept la pensie și ce opțiuni ai pentru a completa stagiul minim.',
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
        name: 'Cu 7 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Nu. Cu 7 ani vechime nu este îndeplinit stagiul minim legal de 15 ani de cotizare necesar pentru pensia pentru limită de vârstă.',
        },
      },
      {
        '@type': 'Question',
        name: 'Există vreo pensie cu 7 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Nu. Cu 7 ani vechime nu se acordă pensie publică. Pot exista doar alte forme de sprijin social, în funcție de situație.',
        },
      },
      {
        '@type': 'Question',
        name: 'Cum pot ajunge la dreptul de pensie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Prin completarea vechimii până la minimum 15 ani, fie prin muncă în România, fie prin valorificarea anilor lucrați în străinătate.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 7 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 7 ani vechime și te întrebi dacă te poți pensiona? Află ce spune legea și ce soluții există pentru completarea stagiului."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 7 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație clară despre pensia cu 7 ani vechime și ce opțiuni ai pentru a obține dreptul la pensie."
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
                  Ghid detaliat · Stagiu insuficient
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Cu 7 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți oameni au sub 10 ani de vechime și se întreabă dacă pot
                  ieși la pensie. În acest ghid explic clar ce înseamnă 7 ani de
                  cotizare, dacă există drept la pensie și ce poți face mai departe.
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
                  1. Ce reprezintă 7 ani vechime
                </h2>
                <p className="mb-4">
                  Cei 7 ani de vechime reprezintă o perioadă de cotizare
                  parțială în sistemul public de pensii.
                </p>
                <p className="mb-4">
                  Acești ani sunt recunoscuți ca stagiu de cotizare,
                  dar nu sunt suficienți pentru pensionare.
                </p>
                <p className="mb-4">
                  Legea impune un prag minim obligatoriu.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 7 ani = vechime sub pragul legal
                </div>
                <a
                  href="/pensie"
                  className="text-xs sm:text-sm text-primary hover:text-primaryDark"
                >
                  Pentru situațiile în care stagiul este sub minim, vezi ghidul general despre pensie
                </a>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Care este stagiul minim legal
                </h2>
                <p className="mb-4">
                  Stagiul minim de cotizare în România este de 15 ani.
                </p>
                <p className="mb-4">
                  Doar după atingerea acestui prag se poate acorda
                  pensia pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Cu 7 ani vechime, condiția nu este îndeplinită.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Minim legal: 15 ani
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  3. De ce nu se poate ieși la pensie cu 7 ani
                </h2>
                <p className="mb-4">
                  Sistemul de pensii este construit pe baza unui
                  stagiu minim de contribuție.
                </p>
                <p className="mb-4">
                  Cu doar 7 ani, contribuțiile nu sunt suficiente
                  pentru acordarea unei pensii lunare.
                </p>
                <p className="mb-4">
                  De aceea, legea exclude pensionarea sub acest prag.
                </p>
                <div className="rounded-xl bg-amber-50 p-4 text-sm">
                  ⚠️ Prag neîndeplinit
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce poți face dacă ai doar 7 ani vechime
                </h2>
                <p className="mb-4">
                  Soluția principală este continuarea activității
                  până la atingerea celor 15 ani.
                </p>
                <p className="mb-4">
                  Fiecare an suplimentar te apropie de dreptul la pensie.
                </p>
                <p className="mb-4">
                  Este important să cunoști exact situația ta.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  📈 Completarea stagiului
                </div>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  5. Exemplu orientativ
                </h2>
                <p className="mb-4">
                  O persoană cu 7 ani de cotizare nu poate primi pensie,
                  indiferent de nivelul salariilor.
                </p>
                <p className="mb-4">
                  Abia după atingerea celor 15 ani se poate calcula pensia.
                </p>
                <p className="mb-4">
                  Sub acest prag, pensia nu există.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ✔️ Sub 15 ani = fără pensie
                </div>
              </section>

              {/* 6 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  6. Anii lucrați în străinătate contează
                </h2>
                <p className="mb-4">
                  Da. Anii lucrați în UE sau Marea Britanie pot fi luați în calcul.
                </p>
                <p className="mb-4">
                  Aceștia se pot cumula pentru atingerea stagiului minim.
                </p>
                <p className="mb-4">
                  Fiecare stat va plăti partea sa de pensie.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  🌍 Totalizare internațională
                </div>
              </section>

              {/* 7 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  7. Documentele necesare
                </h2>
                <p className="mb-4">
                  Documentele care dovedesc vechimea sunt esențiale.
                </p>
                <p className="mb-4">
                  Fără ele, anii lucrați nu pot fi valorificați.
                </p>
                <p className="mb-4">
                  Verificarea dosarului este recomandată din timp.
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
                  Cu 7 ani vechime nu există drept la pensie.
                </p>
                <p className="mb-4">
                  Stagiul minim legal este de 15 ani.
                </p>
                <p className="mb-4">
                  Soluția este completarea vechimii.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 7 ani = fără drept la pensie
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}