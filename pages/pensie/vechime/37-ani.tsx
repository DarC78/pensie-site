import Head from 'next/head'

export default function TreizeciSiSapteAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/37-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-37-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 37 ani vechime pot să mă pensionez?',
    description:
      'Ghid complet despre pensia cu 37 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
        name: 'Cu 37 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. 37 ani reprezintă un stagiu de cotizare foarte mare, suficient pentru a te pensiona la limita de vârstă sau chiar anticipat, în funcție de condițiile legale.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mare cu 37 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Pensia calculată pe baza a 37 ani de cotizare va fi, în general, una confortabilă, deoarece punctajul acumulat este ridicat.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot crește pensia dacă mai lucrez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Fiecare an suplimentar peste cei 37 contribuie la creșterea punctajului și, implicit, a pensiei.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 37 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 37 ani vechime și te întrebi dacă poți să te pensionezi? Află ce drepturi ai, ce tip de pensie poți primi și ce opțiuni există."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 37 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 37 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Cu 37 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți angajați ajung la 37 ani vechime și se întreabă dacă pot
                  să se pensioneze. În acest ghid explic ce drepturi ai, ce tip de
                  pensie poți primi și cum poți maximiza beneficiile acumulate.
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
                  1. Ce reprezintă cei 37 ani vechime
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii din România, 37 ani de cotizare
                  reprezintă un stagiu complet, peste pragul minim necesar pentru
                  pensie.
                </p>
                <p className="mb-4">
                  Acest stagiu mare reflectă un parcurs profesional lung și contribuții
                  semnificative la sistem.
                </p>
                <p className="mb-4">
                  Cu 37 ani vechime, dreptul la pensie este garantat, indiferent de tipul de pensie.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 37 ani = stagiu complet pentru pensie
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi cu 37 ani
                </h2>
                <p className="mb-4">
                  Cu 37 ani vechime, poți primi pensie pentru limită de vârstă sau anticipată,
                  în funcție de vârsta și condițiile legale.
                </p>
                <p className="mb-4">
                  Pensia va fi calculată pe baza unui punctaj ridicat, astfel încât valoarea
                  să fie una confortabilă.
                </p>
                <p className="mb-4">
                  În plus, drepturile suplimentare și sporurile se aplică automat.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept existent, pensie confortabilă
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  3. De ce pensia cu 37 ani este mare
                </h2>
                <p className="mb-4">
                  Pensia se calculează pe baza punctajului acumulat de-a lungul a 37 ani de cotizare.
                </p>
                <p className="mb-4">
                  Punctajul ridicat duce la o pensie semnificativ mai mare decât media.
                </p>
                <p className="mb-4">
                  Astfel, cei cu 37 ani vechime ajung, de regulă, să aibă un venit lunar aproape optim.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ⚠️ Stagiu complet = pensie confortabilă
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi după 37 ani
                </h2>
                <p className="mb-4">
                  Fiecare an suplimentar peste cei 37 poate crește pensia,
                  dar impactul procentual este mai mic comparativ cu anii anteriori.
                </p>
                <p className="mb-4">
                  Totuși, contribuțiile suplimentare și sporurile continuă să fie valoroase.
                </p>
                <p className="mb-4">
                  Mulți aleg să mai lucreze pentru a-și crește și mai mult venitul lunar.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  📈 Fiecare an suplimentar aduce beneficii
                </div>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  5. Exemplu de calcul orientativ
                </h2>
                <p className="mb-4">
                  O persoană cu 37 ani de cotizare va avea un punctaj ridicat,
                  ceea ce se reflectă într-o pensie lunară considerabil mai mare.
                </p>
                <p className="mb-4">
                  Diferența față de cineva cu 25 sau 30 ani de muncă este semnificativă.
                </p>
                <p className="mb-4">
                  Acești ani trebuie priviți ca o realizare și garanție pentru un venit confortabil.
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
                  Da. Dacă ai lucrat în alte țări din UE sau Marea Britanie,
                  acești ani se pot cumula cu cei 37 pentru calculul pensiei.
                </p>
                <p className="mb-4">
                  Acest lucru poate crește punctajul total și valoarea pensiei.
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
                  Fără ele, procedura poate fi complicată și de durată.
                </p>
                <p className="mb-4">
                  Verificarea din timp a evidențelor la Casa de Pensii este recomandată.
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
                  Cu 37 ani vechime, dreptul la pensie este garantat și valoarea pensiei este confortabilă.
                </p>
                <p className="mb-4">
                  Orice an suplimentar contribuie la creșterea punctajului și a pensiei.
                </p>
                <p className="mb-4">
                  Este momentul să te bucuri de o pensie stabilă, calculată pe un stagiu complet.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 37 ani = pensie confortabilă și drept garantat
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}