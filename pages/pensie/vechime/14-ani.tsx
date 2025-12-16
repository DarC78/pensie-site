import Head from 'next/head'

export default function PaisprezeceAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/14-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-14-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 14 ani vechime pot să mă pensionez?',
    description:
      'Ghid complet despre pensia cu 14 ani vechime: ce spune legea, dacă există drept la pensie și ce opțiuni ai pentru a completa stagiul minim.',
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
        name: 'Cu 14 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Nu. Cu 14 ani vechime nu este îndeplinit stagiul minim legal de 15 ani de cotizare necesar pentru pensia pentru limită de vârstă.',
        },
      },
      {
        '@type': 'Question',
        name: 'Mai lipsește mult până la pensie cu 14 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Mai este necesar cel puțin un an de cotizare pentru a atinge pragul minim legal de 15 ani.',
        },
      },
      {
        '@type': 'Question',
        name: 'Cum pot completa vechimea până la pensie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Prin continuarea activității sau prin cumularea anilor lucrați în străinătate, dacă există.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 14 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 14 ani vechime și te întrebi dacă te poți pensiona? Află ce spune legea și ce soluții ai pentru a obține pensie."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 14 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație clară despre situația pensiei cu 14 ani vechime și ce trebuie să faci mai departe."
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
                  Cu 14 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți oameni ajung la 14 ani de vechime și se întreabă dacă mai pot
                  ieși la pensie. În acest ghid explic clar situația legală și ce
                  opțiuni există pentru a obține dreptul la pensie.
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
                  1. Ce reprezintă pragul de 15 ani vechime
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii din România, cei 15 ani de cotizare
                  reprezintă pragul minim stabilit de lege pentru acordarea pensiei
                  pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Cu 14 ani vechime, acest prag nu este atins.
                </p>
                <p className="mb-4">
                  Dreptul legal la pensie apare doar după îndeplinirea acestui minim.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 14 ani = sub pragul minim legal
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi cu 14 ani
                </h2>
                <p className="mb-4">
                  Cu 14 ani de cotizare nu se poate acorda pensie publică.
                </p>
                <p className="mb-4">
                  Lipsa stagiului minim împiedică deschiderea dreptului la pensie.
                </p>
                <p className="mb-4">
                  Este necesară completarea vechimii.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Fără drept la pensie
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  3. De ce nu se acordă pensie cu 14 ani
                </h2>
                <p className="mb-4">
                  Sistemul de pensii se bazează pe contribuții pe termen lung.
                </p>
                <p className="mb-4">
                  14 ani sunt considerați insuficienți pentru acordarea pensiei.
                </p>
                <p className="mb-4">
                  Legea nu prevede excepții sub pragul de 15 ani.
                </p>
                <div className="rounded-xl bg-amber-50 p-4 text-sm">
                  ⚠️ Stagiu insuficient
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi
                </h2>
                <p className="mb-4">
                  Fiecare an lucrat în plus te apropie de dreptul la pensie.
                </p>
                <p className="mb-4">
                  După atingerea celor 15 ani, pensia poate fi solicitată.
                </p>
                <p className="mb-4">
                  Continuarea activității este cea mai simplă soluție.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  📈 Completarea stagiului
                </div>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  5. Exemplu de calcul orientativ
                </h2>
                <p className="mb-4">
                  Cu 14 ani de cotizare nu se poate calcula pensia.
                </p>
                <p className="mb-4">
                  Calculul este posibil doar după îndeplinirea stagiului minim.
                </p>
                <p className="mb-4">
                  Sub acest prag, cuantumul pensiei este zero.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ✔️ Sub 15 ani = fără pensie
                </div>
              </section>

              {/* 6 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  6. Se pot aduna anii lucrați în străinătate
                </h2>
                <p className="mb-4">
                  Da. Anii lucrați în state UE sau în Marea Britanie se pot cumula.
                </p>
                <p className="mb-4">
                  Aceștia pot ajuta la atingerea pragului minim.
                </p>
                <p className="mb-4">
                  Fiecare stat plătește partea sa de pensie.
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
                  Documentele care dovedesc vechimea sunt obligatorii.
                </p>
                <p className="mb-4">
                  Fără acte, anii nu pot fi recunoscuți.
                </p>
                <p className="mb-4">
                  Verificarea situației din timp este recomandată.
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
                  Cu 14 ani vechime nu există drept la pensie.
                </p>
                <p className="mb-4">
                  Pragul minim legal este de 15 ani de cotizare.
                </p>
                <p className="mb-4">
                  Este necesară completarea stagiului.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 14 ani = fără drept la pensie
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}