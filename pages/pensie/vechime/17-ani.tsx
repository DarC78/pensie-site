import Head from 'next/head'

export default function SaptesprezeceAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/17-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-17-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 17 ani vechime pot să mă pensionez?',
    description:
      'Ghid complet despre pensia cu 17 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
        name: 'Cu 17 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. 17 ani reprezintă un stagiu de cotizare peste minimul legal, iar îndeplinirea acestuia îți dă dreptul la pensia pentru limită de vârstă la vârsta legală.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mare sau mică cu 17 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Pensia calculată pe baza a 17 ani de cotizare este mai mare decât cea cu 15 ani, dar încă poate fi modestă comparativ cu un stagiu complet de muncă.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot crește pensia dacă mai lucrez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Fiecare an suplimentar de muncă peste cei 17 ani contribuie la creșterea punctajului și, implicit, a pensiei.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 17 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 17 ani vechime și te întrebi dacă poți să te pensionezi? Află ce drepturi ai, ce tip de pensie poți primi și ce opțiuni există."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 17 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 17 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Ghid detaliat · Stagiu peste minim
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Cu 17 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți oameni se întreabă dacă 17 ani de vechime sunt suficienți pentru pensie. În acest ghid explic ce drepturi ai, ce tip de pensie poți primi și cum să crești valoarea pensiei dacă lucrezi în continuare.
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
                  1. Ce reprezintă pragul de 17 ani vechime
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii din România, cei 17 ani de cotizare
                  reprezintă un stagiu peste minimul legal de 15 ani pentru dreptul la pensie.
                </p>
                <p className="mb-4">
                  Acești ani suplimentari cresc punctajul și, implicit, pensia, comparativ cu pragul minim.
                </p>
                <p className="mb-4">
                  Cu toate acestea, pensia va fi mai mică decât cea pentru un stagiu complet.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 17 ani = drept legal la pensie, punctaj mai mare decât minim
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi cu 17 ani
                </h2>
                <p className="mb-4">
                  Cu 17 ani vechime, pensia va fi calculată pe baza stagiului realizat, oferind un cuantum mai bun decât minimul de 15 ani.
                </p>
                <p className="mb-4">
                  Este o pensie legală, dar încă modestă în raport cu un stagiu complet de muncă.
                </p>
                <p className="mb-4">
                  Dreptul la pensie există și poate fi exercitat la vârsta legală de pensionare.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept existent, valoare mai mare decât minimul
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  3. De ce pensia cu 17 ani este încă modestă
                </h2>
                <p className="mb-4">
                  Pensia depinde de punctajul acumulat pe întreaga perioadă de muncă, nu doar de cei 17 ani.
                </p>
                <p className="mb-4">
                  Chiar și cu 17 ani, suma poate fi semnificativ mai mică decât pentru cei cu 25-30 de ani vechime.
                </p>
                <p className="mb-4">
                  Mulți pensionari cu stagiu sub complet primesc valori apropiate de pensia minim garantată.
                </p>
                <div className="rounded-xl bg-amber-50 p-4 text-sm">
                  ⚠️ 17 ani = mai mult decât minimul, dar pensie modestă
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi după 17 ani
                </h2>
                <p className="mb-4">
                  Fiecare an lucrat peste cei 17 ani crește punctajul și valoarea pensiei.
                </p>
                <p className="mb-4">
                  Chiar câțiva ani suplimentari pot face diferența între o pensie modestă și una mai confortabilă.
                </p>
                <p className="mb-4">
                  Mulți aleg să continue munca pentru a-și crește venitul la pensie.
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
                  O persoană cu 17 ani de cotizare va avea un punctaj mai mare decât una cu 15 ani, dar mai mic decât una cu stagiu complet.
                </p>
                <p className="mb-4">
                  Diferența se reflectă direct în cuantumul pensiei lunare.
                </p>
                <p className="mb-4">
                  Este important să privești cei 17 ani ca un progres, nu ca un obiectiv final.
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
                  Totalizarea ajută la îndeplinirea pragului și la stabilirea dreptului la pensie.
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
                  Documentele care dovedesc vechimea sunt esențiale pentru stabilirea pensiei corecte.
                </p>
                <p className="mb-4">
                  Fără acte, procedura poate fi complicată și de durată.
                </p>
                <p className="mb-4">
                  Verifică din timp evidențele tale la Casa de Pensii.
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
                  Cu 17 ani vechime, există dreptul legal la pensie pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Pensia va fi mai mare decât minimul de 15 ani, dar încă modestă comparativ cu un stagiu complet.
                </p>
                <p className="mb-4">
                  Orice an suplimentar de muncă îți poate crește semnificativ pensia.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 17 ani = drept la pensie, nu pensie confortabilă
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}