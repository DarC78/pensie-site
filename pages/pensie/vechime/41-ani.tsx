import Head from 'next/head'

export default function PatruzeciSiUnAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/41-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-41-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 41 ani vechime pot să mă pensionez?',
    description:
      'Ghid complet despre pensia cu 41 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
        name: 'Pot să mă pensionez cu 41 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. 41 ani reprezintă un stagiu foarte mare de cotizare, depășind cu mult pragul minim. Poți solicita pensia pentru limită de vârstă sau alte tipuri de pensii disponibile conform legislației.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mare cu 41 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Pensia calculată pe baza a 41 ani de cotizare va fi, în general, semnificativ mai mare decât cea calculată pe minimul legal, datorită punctajului acumulat și contribuțiilor mari.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot crește pensia dacă mai lucrez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Fiecare an suplimentar de muncă peste 41 ani va adăuga puncte suplimentare la pensie, crescând cuantumul acesteia.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 41 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 41 ani vechime și te întrebi dacă te poți pensiona? Află ce drepturi ai, ce tip de pensie poți primi și ce opțiuni există."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 41 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 41 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Ghid detaliat · Stagiu mare
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Cu 41 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Dacă ai acumulat 41 ani de vechime, te numeri printre cei cu un stagiu foarte mare de cotizare.
                  În acest ghid explic ce drepturi îți conferă vechimea acumulată, ce tipuri de pensii sunt disponibile
                  și cum poți să îți maximizezi pensia.
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
                  1. Ce înseamnă 41 ani vechime
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii din România, 41 ani de cotizare reprezintă un stagiu complet și foarte mare,
                  depășind cu mult pragul minim de 15 ani.
                </p>
                <p className="mb-4">
                  Aceasta înseamnă că poți beneficia de pensie completă, calculată la nivel maxim pe baza punctajului acumulat.
                </p>
                <p className="mb-4">
                  Vechimea mare îți conferă un drept solid la pensie, fără riscul de cuantum redus.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 41 ani = stagiu complet pentru pensie
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi cu 41 ani
                </h2>
                <p className="mb-4">
                  Cu 41 ani vechime, dreptul la pensie pentru limită de vârstă este garantat.
                </p>
                <p className="mb-4">
                  În practică, poți solicita pensia standard sau, în anumite condiții, pensia anticipată.
                </p>
                <p className="mb-4">
                  Cu un stagiu atât de mare, cuantumul pensiei va fi unul ridicat.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept garantat, valoare mare
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  3. De ce pensia este mare
                </h2>
                <p className="mb-4">
                  Pensia se calculează pe baza punctajului realizat pe întreaga perioadă de cotizare.
                </p>
                <p className="mb-4">
                  41 ani de muncă reprezintă un punctaj ridicat, ceea ce conduce la o pensie substanțială.
                </p>
                <p className="mb-4">
                  Prin urmare, persoanele cu vechime mare primesc pensii mult mai consistente decât cele cu stagiu minim.
                </p>
                <div className="rounded-xl bg-amber-50 p-4 text-sm">
                  ⚠️ Stagiu mare = pensie mare
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi după 41 ani
                </h2>
                <p className="mb-4">
                  Fiecare an lucrat peste 41 ani adaugă puncte suplimentare la pensie.
                </p>
                <p className="mb-4">
                  Chiar și câțiva ani în plus pot crește semnificativ cuantumul pensiei lunare.
                </p>
                <p className="mb-4">
                  De aceea, mulți aleg să continue munca pentru a-și majora venitul la pensie.
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
                  O persoană cu 41 ani de cotizare va avea un punctaj maxim sau aproape maxim comparativ cu standardul.
                </p>
                <p className="mb-4">
                  Acest lucru se reflectă direct în cuantumul pensiei, care va fi semnificativ mai mare decât minimul legal.
                </p>
                <p className="mb-4">
                  Vechimea de 41 ani reprezintă un stagiu complet, ideal pentru o pensie confortabilă.
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
                  Da. Anii lucrați în alte țări UE sau în Marea Britanie se pot cumula cu cei 41 ani de vechime.
                </p>
                <p className="mb-4">
                  Totalizarea ajută la stabilirea dreptului la pensie și la calculul corect al cuantumului.
                </p>
                <p className="mb-4">
                  Fiecare stat plătește proporțional perioada lucrată pe teritoriul său.
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
                  Pentru stabilirea pensiei corecte, documentele care dovedesc vechimea sunt esențiale.
                </p>
                <p className="mb-4">
                  Fără acte, procedura poate deveni complicată și de durată.
                </p>
                <p className="mb-4">
                  Verifică din timp evidențele tale la Casa de Pensii pentru a evita întârzierile.
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
                  Cu 41 ani vechime, dreptul la pensie este garantat, iar cuantumul va fi unul semnificativ.
                </p>
                <p className="mb-4">
                  Vechimea mare asigură o pensie confortabilă, dar orice an suplimentar poate crește și mai mult cuantumul.
                </p>
                <p className="mb-4">
                  Continuarea muncii aduce beneficii directe asupra pensiei lunare.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 41 ani = drept la pensie confortabilă
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}