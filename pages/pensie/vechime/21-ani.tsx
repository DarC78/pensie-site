import Head from 'next/head'

export default function DouazeciSiUnAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/21-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-21-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 21 ani vechime pot să mă pensionez?',
    description:
      'Ghid complet despre pensia cu 21 ani vechime: ce spune legea, dacă te poți pensiona, ce tip de pensie primești și cum influențează vechimea cuantumul.',
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
        name: 'Cu 21 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Cu 21 ani vechime îndeplinești stagiul minim de cotizare și te poți pensiona pentru limită de vârstă la împlinirea vârstei legale.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mai mare cu 21 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Pensia este mai mare decât cea calculată pe stagiul minim, dar rămâne sub nivelul unei pensii obținute cu stagiu complet.',
        },
      },
      {
        '@type': 'Question',
        name: 'Merită să mai lucrez peste 21 ani?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Fiecare an suplimentar de muncă crește punctajul și valoarea pensiei.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 21 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 21 ani vechime și te întrebi dacă te poți pensiona? Află ce drepturi ai, ce pensie primești și ce opțiuni există."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 21 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație clară despre pensia cu 21 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Cu 21 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți oameni ajung la 21 ani de vechime și se întreabă dacă acest
                  stagiu este suficient pentru pensionare. În acest ghid explic ce
                  drepturi ai, ce tip de pensie poți primi și cât de mult contează
                  vechimea acumulată.
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
                  1. Ce înseamnă 21 ani vechime în sistemul de pensii
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii, 21 ani de cotizare reprezintă
                  un stagiu peste minimul legal impus de lege.
                </p>
                <p className="mb-4">
                  Acest nivel de vechime confirmă existența dreptului la pensie
                  pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Totuși, nu este echivalent cu stagiul complet de cotizare.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 21 ani = drept clar la pensie
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Te poți pensiona legal cu 21 ani vechime
                </h2>
                <p className="mb-4">
                  Da. Cu 21 ani de cotizare îndeplinești condiția de stagiu minim.
                </p>
                <p className="mb-4">
                  Pensionarea este posibilă la împlinirea vârstei legale.
                </p>
                <p className="mb-4">
                  Nu este însă posibilă pensionarea anticipată doar pe baza
                  acestui stagiu.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Pensionare la limită de vârstă
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  3. Cum influențează cei 21 ani valoarea pensiei
                </h2>
                <p className="mb-4">
                  Pensia se calculează proporțional cu punctajul realizat.
                </p>
                <p className="mb-4">
                  Cu 21 ani de muncă, pensia este mai mare decât cea minimă.
                </p>
                <p className="mb-4">
                  Totuși, rămâne sub nivelul unei pensii obținute cu stagiu complet.
                </p>
                <div className="rounded-xl bg-amber-50 p-4 text-sm">
                  ⚠️ Pensie decentă, dar nu maximă
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce câștigi dacă mai lucrezi după 21 ani
                </h2>
                <p className="mb-4">
                  Fiecare an suplimentar adaugă punctaj de pensie.
                </p>
                <p className="mb-4">
                  Creșterea este direct proporțională cu contribuțiile plătite.
                </p>
                <p className="mb-4">
                  Mulți aleg să continue munca pentru o pensie mai sigură.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  📈 Ani în plus = venit mai mare
                </div>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  5. Exemplu orientativ de diferență
                </h2>
                <p className="mb-4">
                  Diferența dintre 21 și 30 ani de cotizare este semnificativă.
                </p>
                <p className="mb-4">
                  Punctajul suplimentar se reflectă lunar în pensie.
                </p>
                <p className="mb-4">
                  De aceea, vechimea este un factor esențial.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ✔️ Mai mult stagiu, mai mult confort
                </div>
              </section>

              {/* 6 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  6. Se pot cumula perioade din alte țări
                </h2>
                <p className="mb-4">
                  Da. Anii lucrați în UE sau UK pot fi totalizați.
                </p>
                <p className="mb-4">
                  Totalizarea ajută la stabilirea dreptului la pensie.
                </p>
                <p className="mb-4">
                  Plata se face proporțional de fiecare stat.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  🌍 Stagiu recunoscut internațional
                </div>
              </section>

              {/* 7 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  7. Acte necesare pentru pensionare
                </h2>
                <p className="mb-4">
                  Dovada vechimii este esențială.
                </p>
                <p className="mb-4">
                  Lipsa documentelor poate întârzia dosarul.
                </p>
                <p className="mb-4">
                  Verificarea din timp este recomandată.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  📄 carnet muncă · adeverințe · stagii externe
                </div>
              </section>

              {/* 8 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  8. Concluzia pe scurt
                </h2>
                <p className="mb-4">
                  Cu 21 ani vechime te poți pensiona legal.
                </p>
                <p className="mb-4">
                  Pensia este peste minim, dar sub nivelul maxim.
                </p>
                <p className="mb-4">
                  Continuarea activității poate aduce beneficii clare.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 21 ani = pensie sigură, dar perfectibilă
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}