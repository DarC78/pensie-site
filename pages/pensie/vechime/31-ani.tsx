import Head from 'next/head'

export default function TreizeciSiUnAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/31-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-31-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 31 ani vechime pot să mă pensionez?',
    description:
      'Ghid complet despre pensia cu 31 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
        name: 'Pot să mă pensionez cu 31 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Cu 31 de ani de cotizare, depășești stagiul minim necesar pentru pensia pentru limită de vârstă și ai dreptul să te pensionezi la împlinirea vârstei legale.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mare cu 31 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Pensia va fi semnificativ mai mare decât în cazul stagiului minim, deoarece ai acumulat un punctaj ridicat pe baza contribuțiilor pe o perioadă lungă.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot crește pensia dacă mai lucrez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Fiecare an suplimentar de muncă după cei 31 de ani contribuie la creșterea pensiei, deși diferența procentuală va fi mai mică decât în cazul celor cu vechime redusă.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 31 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 31 ani vechime și te întrebi dacă te poți pensiona? Află ce drepturi ai, ce tip de pensie poți primi și ce opțiuni există."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 31 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 31 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Ghid detaliat · Vechime mare
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Cu 31 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Dacă ai 31 de ani vechime, te apropii de finalul carierei și te întrebi dacă poți să te pensionezi. În acest ghid explic ce drepturi îți oferă vechimea acumulată, cum se calculează pensia și ce avantaje ai la pensionarea cu stagiul complet.
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
                  1. Ce reprezintă pragul de 31 ani vechime
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii din România, 31 de ani de cotizare reprezintă un stagiu complet, ce asigură dreptul la pensie pentru limită de vârstă cu cuantum complet.
                </p>
                <p className="mb-4">
                  Această vechime reflectă o carieră lungă și stabilă, contribuind semnificativ la punctajul de pensie.
                </p>
                <p className="mb-4">
                  Depășirea stagiului minim de 15 ani îți oferă avantaje reale în cuantumul pensiei.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 31 ani = stagiu complet pentru pensie
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi cu 31 ani
                </h2>
                <p className="mb-4">
                  Cu 31 ani vechime, pensia acordată este calculată pe baza stagiului complet, ceea ce înseamnă un cuantum semnificativ mai mare decât la vechimea minimă.
                </p>
                <p className="mb-4">
                  În practică, aceasta asigură o pensie confortabilă și apropiată de media pensiilor pentru această categorie.
                </p>
                <p className="mb-4">
                  Dreptul la pensie există și poate fi exercitat la împlinirea vârstei legale.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept complet, pensie confortabilă
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
                  3. De ce pensia cu 31 ani este mai mare
                </h2>
                <p className="mb-4">
                  Pensia se calculează pe baza punctajului acumulat pe întreaga perioadă de cotizare.
                </p>
                <p className="mb-4">
                  Cu 31 ani de muncă, punctajul total este ridicat, iar pensia reflectă contribuțiile consistente.
                </p>
                <p className="mb-4">
                  Această vechime asigură o pensie mult peste minim, oferind stabilitate financiară la pensionare.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ⚠️ Stagiu complet = pensie mare
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi după 31 ani
                </h2>
                <p className="mb-4">
                  Fiecare an lucrat după cei 31 ani aduce un plus de punctaj, deși impactul procentual este mai mic.
                </p>
                <p className="mb-4">
                  Acești ani suplimentari pot însă crește pensia și oferi un plus de siguranță financiară.
                </p>
                <p className="mb-4">
                  De aceea, mulți aleg să continue activitatea profesională chiar și după atingerea stagiului complet.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  📈 Anii suplimentari cresc pensia
                </div>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  5. Exemplu de calcul orientativ
                </h2>
                <p className="mb-4">
                  O persoană cu 31 ani de cotizare va avea un punctaj mult mai mare decât una cu 20 sau 25 de ani de muncă.
                </p>
                <p className="mb-4">
                  Diferența se reflectă direct în cuantumul pensiei lunare.
                </p>
                <p className="mb-4">
                  Aceasta înseamnă că vei primi o pensie confortabilă, corespunzătoare stagiului complet.
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
                  Da. Anii lucrați în alte țări din UE sau Marea Britanie se pot cumula.
                </p>
                <p className="mb-4">
                  Aceștia contribuie la stagiul complet și la calculul pensiei.
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
                  Documentele care dovedesc vechimea completă sunt esențiale pentru calculul corect al pensiei.
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
                  Cu 31 ani vechime, ai dreptul legal la pensie pentru limită de vârstă cu cuantum complet.
                </p>
                <p className="mb-4">
                  Pensia ta va fi confortabilă, reflectând stagiul complet de cotizare.
                </p>
                <p className="mb-4">
                  Continuarea muncii poate aduce beneficii suplimentare, dar nu este necesară pentru a avea o pensie decentă.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 31 ani = drept la pensie completă și confortabilă
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}