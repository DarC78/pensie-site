import Head from 'next/head'

export default function TreiSprezeceAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/33-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-33-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 33 ani vechime pot să mă pensionez?',
    description:
      'Ghid complet despre pensia cu 33 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
        name: 'Cu 33 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. 33 ani de vechime reprezintă un stagiu peste minimul legal, astfel că poți beneficia de pensie la îndeplinirea vârstei legale, sau chiar mai devreme, în funcție de legislația specifică.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mare cu 33 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Pensia calculată pe baza a 33 ani de cotizare este, în general, semnificativ mai mare decât cea pentru stagiu minim, deoarece punctajul acumulat este mult mai mare.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot crește pensia dacă mai lucrez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Orice an suplimentar de muncă după 33 ani contribuie la creșterea punctajului și, implicit, a pensiei.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 33 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 33 ani vechime și te întrebi dacă te poți pensiona? Află ce drepturi ai, ce tip de pensie poți primi și ce opțiuni există."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 33 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 33 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Cu 33 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți oameni ajung la 33 ani de vechime și se întreabă dacă acest stagiu este suficient pentru pensionare. În acest ghid explic ce drepturi îți oferă vechimea acumulată, ce tipuri de pensie poți primi și ce avantaje ai dacă mai continui munca.
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
                  1. Ce reprezintă pragul de 33 ani vechime
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii din România, 33 ani de cotizare reprezintă un stagiu peste minimul legal, asigurând dreptul la pensie completă.
                </p>
                <p className="mb-4">
                  Acest stagiu permite calcularea pensiei la valoarea maximă pentru contribuțiile realizate până în prezent.
                </p>
                <p className="mb-4">
                  Practic, 33 ani vechime înseamnă că ai contribuit suficient pentru a beneficia de o pensie confortabilă, în funcție de veniturile realizate.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 33 ani = stagiu complet pentru pensie
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi cu 33 ani
                </h2>
                <p className="mb-4">
                  Cu 33 ani vechime, poți beneficia de pensie pentru limită de vârstă sau, în anumite cazuri, de pensie anticipată parțială.
                </p>
                <p className="mb-4">
                  Pensia va fi calculată pe baza punctajului acumulat și a contribuțiilor plătite pe întreaga perioadă de muncă.
                </p>
                <p className="mb-4">
                  În general, cuantumul pensiei este semnificativ mai mare decât pentru cei cu vechime minimă.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept complet, valoare mai mare
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
                  3. De ce pensia cu 33 ani este mai mare
                </h2>
                <p className="mb-4">
                  Pensia se calculează pe baza punctajului realizat pe întreaga perioadă de cotizare.
                </p>
                <p className="mb-4">
                  Cu 33 ani de muncă, punctajul total este ridicat, astfel pensia va fi considerabil mai mare decât minimul garantat.
                </p>
                <p className="mb-4">
                  Astfel, această vechime îți asigură un nivel de trai decent după pensionare.
                </p>
                <div className="rounded-xl bg-amber-50 p-4 text-sm">
                  ⚠️ Stagiu complet = pensie substanțială
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi după 33 ani
                </h2>
                <p className="mb-4">
                  Fiecare an lucrat după atingerea pragului de 33 ani aduce un plus la punctajul de pensie.
                </p>
                <p className="mb-4">
                  Astfel, pensia ta poate crește chiar și după ce ai îndeplinit stagiul complet.
                </p>
                <p className="mb-4">
                  Mulți aleg să continue activitatea profesională pentru a asigura un venit mai confortabil.
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
                  O persoană cu 33 ani de cotizare va avea un punctaj mult mai mare decât una cu 20 sau 25 ani.
                </p>
                <p className="mb-4">
                  Diferența de punctaj se reflectă direct în cuantumul pensiei lunare.
                </p>
                <p className="mb-4">
                  Aceasta arată importanța acumulării unui stagiu complet pentru o pensie confortabilă.
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
                  Totalizarea ajută la creșterea punctajului și la stabilirea cuantumului pensiei.
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
                  Pentru calculul corect al pensiei, documentele care dovedesc vechimea sunt esențiale.
                </p>
                <p className="mb-4">
                  Lipsa actelor poate complica procesul și prelungi timpul de procesare.
                </p>
                <p className="mb-4">
                  Este recomandat să verifici evidențele tale la Casa de Pensii înainte de depunerea cererii.
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
                  Cu 33 ani vechime, ai dreptul la pensie completă pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Valoarea pensiei este confortabilă, iar orice an suplimentar poate să o mărească și mai mult.
                </p>
                <p className="mb-4">
                  Astfel, 33 ani reprezintă un stagiu complet, oferind siguranță financiară la pensionare.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 33 ani = stagiu complet și pensie confortabilă
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}