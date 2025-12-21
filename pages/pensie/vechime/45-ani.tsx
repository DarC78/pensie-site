import Head from 'next/head'

export default function PatruzeciCinciAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/45-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-45-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 45 ani vechime pot să mă pensionez?',
    description:
      'Ghid complet despre pensia cu 45 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
        name: 'Cu 45 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. 45 de ani reprezintă un stagiu foarte mare de cotizare, depășind cu mult pragul minim, ceea ce îți conferă dreptul legal la pensie la împlinirea vârstei legale de pensionare.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mare sau mică cu 45 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Pensia calculată pe baza a 45 de ani de cotizare este, în general, ridicată, deoarece punctajul acumulat este maxim sau aproape de maxim.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot crește pensia dacă mai lucrez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Fiecare an suplimentar peste cei 45 contribuie la creșterea punctajului și poate mări și mai mult pensia, însă diferența procentuală va fi mai mică comparativ cu anii anteriori.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 45 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 45 ani vechime și te întrebi dacă poți să te pensionezi? Află ce drepturi ai, ce tip de pensie poți primi și cum se calculează pensia."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 45 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 45 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Ghid detaliat · Vechime maximă
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Cu 45 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți oameni ajung la 45 ani de vechime și se întreabă dacă acest stagiu lung le
                  garantează pensia. În acest ghid explic ce drepturi îți oferă o vechime atât
                  de mare, ce avantaje ai și ce opțiuni există pentru o pensie cât mai confortabilă.
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
                  1. Ce reprezintă pragul de 45 ani vechime
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii din România, 45 de ani de cotizare reprezintă un stagiu extrem de mare,
                  mult peste minimul necesar pentru a obține pensia pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Această vechime indică contribuții consistente pe întreaga perioadă activă, ceea ce crește semnificativ pensia.
                </p>
                <p className="mb-4">
                  Practic, cu 45 ani vechime, dreptul la pensie este garantat la împlinirea vârstei legale.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 45 ani = drept garantat la pensie
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi cu 45 ani
                </h2>
                <p className="mb-4">
                  Cu 45 ani vechime, pensia ta va fi una calculată pe baza punctajului maxim acumulat,
                  rezultând într-un cuantum ridicat.
                </p>
                <p className="mb-4">
                  Aceasta înseamnă că vei beneficia de o pensie aproape de nivelul optim prevăzut de lege.
                </p>
                <p className="mb-4">
                  Dreptul la pensie poate fi exercitat imediat ce atingi vârsta legală de pensionare.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept existent, valoare mare
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
                  3. De ce pensia cu 45 ani este mare
                </h2>
                <p className="mb-4">
                  Pensia se calculează pe baza punctajului realizat pe întreaga perioadă de cotizare,
                  iar 45 de ani reprezintă aproape întreaga carieră profesională.
                </p>
                <p className="mb-4">
                  Punctajul acumulat este astfel maxim sau aproape de maxim, garantând o pensie ridicată.
                </p>
                <p className="mb-4">
                  În comparație cu vechimea minimă, diferența este semnificativă.
                </p>
                <div className="rounded-xl bg-amber-50 p-4 text-sm">
                  ⚠️ Vechime mare = pensie ridicată
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi după 45 ani
                </h2>
                <p className="mb-4">
                  Fiecare an lucrat peste 45 adaugă în continuare puncte la pensie,
                  dar creșterea procentuală este mai mică comparativ cu anii anteriori.
                </p>
                <p className="mb-4">
                  Totuși, dacă mai lucrezi câțiva ani, pensia ta poate fi chiar mai confortabilă.
                </p>
                <p className="mb-4">
                  Mulți aleg să continue munca pentru a optimiza pensia finală.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  📈 Fiecare an aduce plus
                </div>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  5. Exemplu de calcul orientativ
                </h2>
                <p className="mb-4">
                  O persoană cu 45 ani de cotizare va avea o pensie mult mai mare decât una cu 25 sau 30 de ani.
                </p>
                <p className="mb-4">
                  Diferența de punctaj se reflectă direct în cuantumul pensiei lunare.
                </p>
                <p className="mb-4">
                  Acești ani reprezintă un avantaj semnificativ în calculul pensiei.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ✔️ Vechime mare = pensie mare
                </div>
              </section>

              {/* 6 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  6. Se pot aduna anii lucrați în străinătate
                </h2>
                <p className="mb-4">
                  Da. Dacă ai lucrat în alte țări din Uniunea Europeană sau Marea Britanie,
                  acești ani se pot cumula la vechimea totală.
                </p>
                <p className="mb-4">
                  Aceasta poate ajuta la obținerea punctajului maxim și la calcularea unei pensii optime.
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
                  Documentele care dovedesc vechimea completă sunt esențiale pentru calculul corect al pensiei.
                </p>
                <p className="mb-4">
                  Fără acte, procesul poate deveni complicat și poate întârzia obținerea pensiei.
                </p>
                <p className="mb-4">
                  Este recomandat să verifici evidențele tale la Casa de Pensii înainte de pensionare.
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
                  Cu 45 ani vechime, dreptul legal la pensie este garantat.
                </p>
                <p className="mb-4">
                  Pensia va fi ridicată, reflectând contribuțiile pe termen lung.
                </p>
                <p className="mb-4">
                  Fiecare an suplimentar poate crește și mai mult pensia finală.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 45 ani = pensie mare și garantată
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}