import Head from 'next/head'

export default function DouazeciSiPatruAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/42-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-42-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 42 ani vechime pot să mă pensionez?',
    description:
      'Ghid complet despre pensia cu 42 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
        name: 'Cu 42 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. 42 ani reprezintă un stagiu complet de cotizare în România, ceea ce îți permite să te pensionezi la vârsta legală sau anticipat, în funcție de condițiile legale.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mare cu 42 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Pensia calculată pe baza a 42 ani de cotizare este, în general, ridicată, deoarece punctajul acumulat pe întreaga perioadă de muncă este maxim sau aproape de maxim.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot crește pensia dacă mai lucrez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Fiecare an suplimentar de muncă peste cei 42 de ani contribuie la creșterea punctajului și, implicit, a pensiei, deși impactul va fi mai mic decât în anii anteriori.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 42 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 42 ani vechime și te întrebi dacă poți să te pensionezi? Află ce drepturi ai, ce tip de pensie poți primi și ce opțiuni există."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 42 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 42 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Cu 42 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Dacă ai 42 ani de vechime, ai atins un stagiu complet de cotizare. În acest ghid explic ce drepturi ai, ce tip de pensie poți obține și ce opțiuni sunt disponibile pentru a-ți maximiza pensia.
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
                  1. Ce înseamnă 42 ani vechime
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii din România, 42 ani de cotizare reprezintă stagiul complet necesar pentru pensia integrală la limită de vârstă.
                </p>
                <p className="mb-4">
                  Acest stagiu maxim garantează că drepturile la pensie sunt îndeplinite, indiferent de alte condiții.
                </p>
                <p className="mb-4">
                  Practic, ai acumulat contribuții suficiente pentru a beneficia de o pensie confortabilă.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 42 ani = stagiu complet pentru pensie integrală
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi
                </h2>
                <p className="mb-4">
                  Cu 42 ani vechime, pensia ta va fi calculată pe baza unui punctaj complet, apropiat de maximum legal.
                </p>
                <p className="mb-4">
                  În practică, pensia va fi ridicată, reflectând contribuțiile pe întreaga carieră.
                </p>
                <p className="mb-4">
                  Dreptul la pensie este garantat la vârsta legală de pensionare.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept complet, pensie ridicată
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  3. De ce pensia este mai mare
                </h2>
                <p className="mb-4">
                  Pensia se calculează pe baza punctajului acumulat de-a lungul întregii perioade de cotizare.
                </p>
                <p className="mb-4">
                  42 ani de muncă asigură un punctaj maxim sau aproape de maxim, crescând semnificativ cuantumul pensiei.
                </p>
                <p className="mb-4">
                  Astfel, majoritatea persoanelor cu acest stagiu primesc pensii superioare mediei.
                </p>
                <div className="rounded-xl bg-amber-50 p-4 text-sm">
                  ⚠️ Stagiu complet = pensie ridicată
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi după 42 ani
                </h2>
                <p className="mb-4">
                  Fiecare an suplimentar de muncă aduce un plus minor la punctajul de pensie.
                </p>
                <p className="mb-4">
                  Diferența poate fi semnificativă doar dacă ai bonusuri sau contribuții speciale.
                </p>
                <p className="mb-4">
                  Mulți aleg să continue să lucreze pentru a păstra un venit activ mai mare.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  📈 Fiecare an suplimentar poate aduce beneficii
                </div>
                <a
                  href="/pensie"
                  className="text-xs sm:text-sm text-primary hover:text-primaryDark"
                >
                  Pentru mai multe detalii vezi ghidul general despre pensie
                </a>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  5. Exemplu de calcul orientativ
                </h2>
                <p className="mb-4">
                  O persoană cu 42 ani de cotizare va avea un punctaj maxim, comparativ cu cineva cu 30 sau 35 de ani.
                </p>
                <p className="mb-4">
                  Diferența de punctaj se reflectă direct în cuantumul pensiei lunare.
                </p>
                <p className="mb-4">
                  Aceasta arată importanța acumulării unui stagiu complet de muncă.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ✔️ Stagiu complet = pensie maximă
                </div>
              </section>

              {/* 6 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  6. Se pot aduna anii lucrați în străinătate
                </h2>
                <p className="mb-4">
                  Da. Ani lucrați în alte țări din UE sau în Marea Britanie se pot cumula.
                </p>
                <p className="mb-4">
                  Aceasta contribuie la atingerea stagiului complet și la calcularea pensiei.
                </p>
                <p className="mb-4">
                  Fiecare stat plătește doar partea corespunzătoare perioadei lucrate pe teritoriul său.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  🌍 Pensie cumulată din mai multe state
                </div>
              </section>

              {/* 7 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  7. Ce documente sunt necesare
                </h2>
                <p className="mb-4">
                  Documentele care dovedesc vechimea și contribuțiile sunt esențiale.
                </p>
                <p className="mb-4">
                  Fără acte, procedura poate fi complicată și de durată.
                </p>
                <p className="mb-4">
                  Este recomandat să verifici evidențele la Casa de Pensii din timp.
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
                  Cu 42 ani vechime, ai dreptul la pensie integrală.
                </p>
                <p className="mb-4">
                  Valoarea pensiei va fi ridicată, reflectând contribuțiile pe întreaga carieră.
                </p>
                <p className="mb-4">
                  Orice an suplimentar poate aduce beneficii minore, dar stagiul complet garantează pensia maximă.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 42 ani = drept la pensie integrală și confortabilă
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}