import Head from 'next/head'

export default function TreizeciSaseAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/36-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-36-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 36 ani vechime pot să mă pensionez?',
    description:
      'Ghid complet despre pensia cu 36 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
        name: 'Cu 36 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Cu 36 ani vechime, îndeplinești cu mult pragul minim de cotizare și ai dreptul legal la pensia pentru limită de vârstă la împlinirea vârstei legale de pensionare.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mare cu 36 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Pensia calculată pe baza a 36 ani de cotizare este, de regulă, una semnificativ mai mare decât pensia minimă, deoarece punctajul acumulat este mare.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot să mai cresc pensia dacă mai lucrez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Fiecare an suplimentar peste cei 36 contribuie la creșterea punctajului și implicit a pensiei, chiar dacă diferența procentuală poate fi mai mică decât în anii anteriori.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 36 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 36 ani vechime și te întrebi dacă te poți pensiona? Află ce drepturi ai, ce tip de pensie poți primi și ce opțiuni există."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 36 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 36 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Cu 36 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Cu 36 ani de cotizare, te afli mult peste pragul minim necesar pentru
                  pensie. În acest ghid vei afla ce drepturi ai, cum se calculează pensia
                  și ce opțiuni ai pentru a-ți maximiza venitul la pensionare.
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
                  1. Ce reprezintă pragul de 36 ani vechime
                </h2>
                <p className="mb-4">
                  În sistemul public de pensii din România, 36 ani de cotizare
                  reprezintă un stagiu complet, mult peste minimul legal necesar pentru pensie.
                </p>
                <p className="mb-4">
                  Această vechime indică un nivel solid de contribuție și creează dreptul
                  la o pensie substanțială.
                </p>
                <p className="mb-4">
                  Practic, cu 36 ani de muncă, ai acoperit aproape întreaga perioadă
                  activă necesară pentru calculul pensiei.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 36 ani = stagiu complet pentru pensie
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi cu 36 ani
                </h2>
                <p className="mb-4">
                  Cu 36 ani vechime, pensia acordată va fi calculată pe baza unui punctaj maxim
                  acumulat, garantând un venit confortabil la pensionare.
                </p>
                <p className="mb-4">
                  Acest lucru înseamnă că pensia nu va fi minimă, ci una proporțională
                  cu toți anii de muncă.
                </p>
                <p className="mb-4">
                  Dreptul la pensie poate fi exercitat la vârsta legală, fără limitări.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept existent, valoare mare
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  3. De ce pensia cu 36 ani este semnificativă
                </h2>
                <p className="mb-4">
                  Pensia se calculează pe baza punctajului acumulat pe toată durata muncii.
                </p>
                <p className="mb-4">
                  Cu 36 ani de cotizare, punctajul este maxim sau aproape de maxim,
                  ceea ce se traduce într-o pensie mai mare.
                </p>
                <p className="mb-4">
                  Astfel, majoritatea persoanelor cu această vechime ajung la un cuantum
                  superior mediei naționale.
                </p>
                <div className="rounded-xl bg-amber-50 p-4 text-sm">
                  ⚠️ Stagiu complet = pensie confortabilă
                </div>
                <a
                  href="/pensie"
                  className="text-xs sm:text-sm text-primary hover:text-primaryDark"
                >
                  Pentru mai multe detalii vezi ghidul general despre pensie
                </a>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi după 36 ani
                </h2>
                <p className="mb-4">
                  Orice an lucrat peste cei 36 adaugă puncte suplimentare,
                  crescând ușor valoarea pensiei.
                </p>
                <p className="mb-4">
                  Diferența nu mai este la fel de mare ca în anii anteriori,
                  dar poate fi utilă.
                </p>
                <p className="mb-4">
                  Mulți aleg să continue munca pentru a-și optimiza pensia.
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
                  O persoană cu 36 ani de cotizare va avea un punctaj mult mai mare
                  decât una cu 25 sau 30 de ani.
                </p>
                <p className="mb-4">
                  Diferența de punctaj se reflectă direct în cuantumul pensiei lunare.
                </p>
                <p className="mb-4">
                  Acești ani reprezintă baza pentru o pensie confortabilă.
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
                  Da. Dacă ai lucrat în alte țări UE sau în Marea Britanie,
                  acești ani se pot cumula.
                </p>
                <p className="mb-4">
                  Totalizarea ajută la confirmarea dreptului la pensie și poate
                  crește cuantumul.
                </p>
                <p className="mb-4">
                  Fiecare stat plătește partea corespunzătoare perioadei lucrate.
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
                  Documentele care dovedesc vechimea completă sunt esențiale
                  pentru stabilirea corectă a pensiei.
                </p>
                <p className="mb-4">
                  Lipsa actelor poate complica procesul.
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
                  Cu 36 ani vechime, există dreptul legal la pensie pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Pensia va fi una confortabilă, proporțională cu toți anii de muncă.
                </p>
                <p className="mb-4">
                  Orice an suplimentar poate îmbunătăți pensia și mai mult.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 36 ani = drept la pensie confortabilă
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}