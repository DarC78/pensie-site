import Head from 'next/head'

export default function SaisprezeceAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/16-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-16-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 16 ani vechime primesc pensie?',
    description:
      'Ghid complet despre pensia cu 16 ani vechime: ce spune legea, ce tip de pensie poți primi, cum se calculează și ce trebuie să știi înainte de pensionare.',
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
        name: 'Cu 16 ani vechime primesc pensie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Cu 16 ani vechime este îndeplinit stagiul minim de cotizare de 15 ani, ceea ce îți oferă dreptul la pensia pentru limită de vârstă, la împlinirea vârstei legale.',
        },
      },
      {
        '@type': 'Question',
        name: 'Este pensia mai mare cu 16 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Pensia este puțin mai mare decât cea calculată pe 15 ani, însă rămâne una relativ redusă comparativ cu stagiile mai lungi.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot crește pensia dacă mai lucrez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Fiecare an suplimentar lucrat peste cei 16 ani contribuie direct la creșterea punctajului și a pensiei.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 16 ani vechime primesc pensie? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 16 ani vechime și te întrebi dacă primești pensie? Află ce drepturi ai și cum îți este calculată pensia."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 16 ani vechime primesc pensie?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 16 ani vechime și ce trebuie să știi înainte de pensionare."
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
                  Ghid detaliat · Stagiu minim depășit
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Cu 16 ani vechime primesc pensie?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți oameni depășesc pragul minim de 15 ani și se întreabă ce
                  înseamnă acest lucru pentru pensie. În acest ghid explic ce
                  drepturi ai cu 16 ani vechime și cum îți influențează pensia.
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
                  reprezintă pragul minim stabilit de lege.
                </p>
                <p className="mb-4">
                  Cu 16 ani vechime, acest prag este depășit.
                </p>
                <p className="mb-4">
                  Dreptul legal la pensie este astfel îndeplinit.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 16 ani = prag minim depășit
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Ce tip de pensie poți primi cu 16 ani
                </h2>
                <p className="mb-4">
                  Cu 16 ani vechime poți primi pensie pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Pensia este calculată pe baza contribuțiilor realizate.
                </p>
                <p className="mb-4">
                  Valoarea rămâne modestă comparativ cu stagiile complete.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Drept existent
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  3. De ce pensia cu 16 ani este încă mică
                </h2>
                <p className="mb-4">
                  Pensia depinde de punctajul total acumulat.
                </p>
                <p className="mb-4">
                  16 ani reprezintă un stagiu scurt în raport cu cel complet.
                </p>
                <p className="mb-4">
                  De aceea, pensia este apropiată de nivelul minim.
                </p>
                <div className="rounded-xl bg-amber-50 p-4 text-sm">
                  ⚠️ Stagiu redus
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce se întâmplă dacă mai lucrezi
                </h2>
                <p className="mb-4">
                  Fiecare an suplimentar aduce un plus de punctaj.
                </p>
                <p className="mb-4">
                  Pensia crește progresiv.
                </p>
                <p className="mb-4">
                  Continuarea activității este avantajoasă.
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
                  Pensia cu 16 ani este mai mare decât cu 15 ani.
                </p>
                <p className="mb-4">
                  Diferența vine din punctajul suplimentar.
                </p>
                <p className="mb-4">
                  Stagiile lungi cresc semnificativ pensia.
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
                  Da. Anii din UE sau Marea Britanie se pot cumula.
                </p>
                <p className="mb-4">
                  Totalizarea ajută la îndeplinirea condițiilor.
                </p>
                <p className="mb-4">
                  Fiecare stat plătește partea sa.
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
                  Actele care dovedesc vechimea sunt esențiale.
                </p>
                <p className="mb-4">
                  Lipsa documentelor poate întârzia pensia.
                </p>
                <p className="mb-4">
                  Verificarea din timp este recomandată.
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
                  Cu 16 ani vechime există drept la pensie.
                </p>
                <p className="mb-4">
                  Pensia este legală, dar redusă ca valoare.
                </p>
                <p className="mb-4">
                  Anii suplimentari îmbunătățesc situația.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 16 ani = drept la pensie
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}