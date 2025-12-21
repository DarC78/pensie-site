import Head from 'next/head'

export default function CincisprezeceAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/15-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-15-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 15 ani vechime primesc pensie?',
    description:
      'Ghid complet despre pensia cu 15 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
        name: 'Cu 15 ani vechime primesc pensie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. 15 ani reprezintă stagiul minim de cotizare în România, iar îndeplinirea acestuia îți dă dreptul la pensia pentru limită de vârstă, la împlinirea vârstei legale.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mare sau mică cu 15 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Pensia calculată pe baza a doar 15 ani de cotizare este, în general, mică, deoarece se bazează pe contribuții reduse și pe un stagiu minim.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot crește pensia dacă mai lucrez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Fiecare an suplimentar de muncă peste cei 15 ani contribuie la creșterea punctajului și, implicit, a pensiei.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 15 ani vechime primesc pensie? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 15 ani vechime și te întrebi dacă primești pensie? Află ce drepturi ai, ce tip de pensie poți primi și ce opțiuni există."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 15 ani vechime primesc pensie?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 15 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Ghid detaliat · Stagiu minim
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Cu 15 ani vechime primesc pensie?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți oameni ajung la 15 ani de vechime și se întreabă dacă acest prag este
                  suficient pentru a primi pensie. În acest ghid explic ce drepturi îți oferă
                  stagiul minim, ce limitări există și ce poți face pentru a-ți îmbunătăți situația.
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
                  Acest prag nu este ales întâmplător, ci marchează nivelul minim de
                  contribuție considerat necesar pentru a beneficia de o pensie lunară.
                </p>
                <p className="mb-4">
                  Fără atingerea acestui prag, chiar dacă ai contribuit o perioadă,
                  nu se naște dreptul legal la pensie.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 15 ani = condiția minimă pentru dreptul la pensie
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi cu 15 ani
                </h2>
                <p className="mb-4">
                  Cu 15 ani vechime îndeplinești condiția de stagiu, dar pensia
                  acordată este una calculată strict pe baza acestui minim.
                </p>
                <p className="mb-4">
                  În practică, acest lucru înseamnă că pensia va fi una redusă,
                  deoarece punctajul acumulat este mic.
                </p>
                <p className="mb-4">
                  Totuși, dreptul la pensie există și poate fi exercitat la vârsta
                  legală de pensionare.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept existent, valoare redusă
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  3. De ce pensia cu 15 ani este mică
                </h2>
                <p className="mb-4">
                  Pensia se calculează pe baza punctajului realizat de-a lungul
                  întregii perioade de cotizare, nu doar pe baza pragului minim.
                </p>
                <p className="mb-4">
                  Cu doar 15 ani de muncă, punctajul total este scăzut,
                  indiferent de salariile avute.
                </p>
                <p className="mb-4">
                  De aceea, mulți pensionari cu stagiu minim ajung să primească
                  sume apropiate de pensia minimă garantată.
                </p>
                <div className="rounded-xl bg-amber-50 p-4 text-sm">
                  ⚠️ Stagiu minim = pensie minimă
                </div>
                <a
                  href="/pensie"
                  className="text-xs sm:text-sm text-primary hover:text-primaryDark"
                >
                  Pentru situațiile în care stagiul este sub minim, vezi ghidul general despre pensie
                </a>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi după 15 ani
                </h2>
                <p className="mb-4">
                  Fiecare an lucrat peste pragul de 15 ani aduce un plus
                  direct la punctajul de pensie.
                </p>
                <p className="mb-4">
                  Chiar și câțiva ani suplimentari pot face o diferență
                  semnificativă în valoarea pensiei.
                </p>
                <p className="mb-4">
                  Din acest motiv, multe persoane aleg să continue munca
                  pentru a-și îmbunătăți venitul la pensie.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  📈 Fiecare an contează
                </div>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  5. Exemplu de calcul orientativ
                </h2>
                <p className="mb-4">
                  O persoană cu 15 ani de cotizare va avea un punctaj
                  mult mai mic decât una cu 25 sau 30 de ani de muncă.
                </p>
                <p className="mb-4">
                  Diferența de punctaj se reflectă direct în cuantumul
                  pensiei lunare.
                </p>
                <p className="mb-4">
                  De aceea, este important să privești cei 15 ani
                  ca un început, nu ca un obiectiv final.
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
                  Da. Dacă ai lucrat în alte țări din Uniunea Europeană
                  sau în Marea Britanie, acești ani se pot cumula.
                </p>
                <p className="mb-4">
                  Totalizarea ajută la îndeplinirea pragului minim
                  și la stabilirea dreptului la pensie.
                </p>
                <p className="mb-4">
                  Fiecare stat va plăti doar partea corespunzătoare
                  perioadei lucrate pe teritoriul său.
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
                  Pentru stabilirea corectă a pensiei, documentele
                  care dovedesc vechimea sunt esențiale.
                </p>
                <p className="mb-4">
                  Fără acte, procedura poate deveni complicată
                  și de durată.
                </p>
                <p className="mb-4">
                  Este recomandat să verifici din timp evidențele
                  tale la Casa de Pensii.
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
                  Cu 15 ani vechime, există dreptul legal la pensie
                  pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Valoarea pensiei este însă redusă, deoarece se bazează
                  pe un stagiu minim.
                </p>
                <p className="mb-4">
                  Orice an suplimentar de muncă îți poate îmbunătăți
                  semnificativ pensia.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 15 ani = drept la pensie, nu pensie confortabilă
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}