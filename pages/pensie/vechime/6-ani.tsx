import Head from 'next/head'

export default function SaseAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/6-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-6-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 6 ani vechime pot să mă pensionez?',
    description:
      'Ghid clar despre pensia cu 6 ani vechime: ce spune legea, dacă există drept la pensie și ce opțiuni ai pentru a îndeplini condițiile.',
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
        name: 'Cu 6 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Nu. Cu doar 6 ani vechime nu este îndeplinit stagiul minim de cotizare de 15 ani, necesar pentru pensia pentru limită de vârstă.',
        },
      },
      {
        '@type': 'Question',
        name: 'Există vreo pensie cu 6 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Nu există drept la pensie publică cu 6 ani vechime. Pot exista doar ajutoare sociale sau alte forme de sprijin, în funcție de situație.',
        },
      },
      {
        '@type': 'Question',
        name: 'Cum pot completa vechimea lipsă?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Vechimea se poate completa prin continuarea activității, prin valorificarea anilor lucrați în străinătate sau prin alte perioade asimilate, dacă sunt aplicabile.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 6 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 6 ani vechime și te întrebi dacă te poți pensiona? Află ce spune legea și ce soluții ai pentru a obține dreptul la pensie."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 6 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație clară despre pensia cu 6 ani vechime și ce opțiuni există pentru completarea stagiului."
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
                  Ghid detaliat · Stagiu insuficient
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Cu 6 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți oameni au doar câțiva ani de vechime și se întreabă dacă
                  pot ieși la pensie. În acest ghid explic clar ce înseamnă 6 ani
                  de cotizare, dacă există drept la pensie și ce soluții ai mai departe.
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
                  1. Ce înseamnă 6 ani vechime în sistemul de pensii
                </h2>
                <p className="mb-4">
                  Cei 6 ani de vechime reprezintă o perioadă de cotizare parțială
                  în sistemul public de pensii.
                </p>
                <p className="mb-4">
                  Această perioadă este luată în calcul ca experiență contributivă,
                  dar nu este suficientă pentru deschiderea dreptului la pensie.
                </p>
                <p className="mb-4">
                  Legea stabilește un prag minim obligatoriu pentru pensionare.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 6 ani = vechime insuficientă pentru pensie
                </div>
                <a
                  href="/pensie"
                  className="text-xs sm:text-sm text-primary hover:text-primaryDark"
                >
                  Pentru situațiile în care stagiul este sub minim, vezi ghidul general despre pensie
                </a>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Care este stagiul minim legal
                </h2>
                <p className="mb-4">
                  În România, stagiul minim de cotizare este de 15 ani.
                </p>
                <p className="mb-4">
                  Sub acest prag, dreptul la pensia pentru limită de vârstă
                  nu se poate acorda.
                </p>
                <p className="mb-4">
                  Cei 6 ani nu pot genera singuri o pensie lunară.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Minim legal: 15 ani
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  3. De ce nu se acordă pensie cu 6 ani
                </h2>
                <p className="mb-4">
                  Sistemul public de pensii funcționează pe baza unui
                  prag minim de contribuție.
                </p>
                <p className="mb-4">
                  Cu doar 6 ani, contribuțiile nu sunt considerate suficiente
                  pentru plata unei pensii pe viață.
                </p>
                <p className="mb-4">
                  De aceea, legea nu permite pensionarea sub acest nivel.
                </p>
                <div className="rounded-xl bg-amber-50 p-4 text-sm">
                  ⚠️ Prag neîndeplinit
                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  4. Ce poți face dacă ai doar 6 ani vechime
                </h2>
                <p className="mb-4">
                  Cea mai directă soluție este continuarea activității
                  până la atingerea stagiului minim.
                </p>
                <p className="mb-4">
                  Fiecare an suplimentar te apropie de dreptul la pensie.
                </p>
                <p className="mb-4">
                  Este important să verifici exact câți ani mai ai de completat.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  📈 Soluția principală: completarea vechimii
                </div>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  5. Exemplu orientativ
                </h2>
                <p className="mb-4">
                  O persoană cu 6 ani de cotizare nu poate primi pensie,
                  indiferent de nivelul salariilor avute.
                </p>
                <p className="mb-4">
                  Doar după atingerea pragului de 15 ani se poate discuta
                  despre calculul pensiei.
                </p>
                <p className="mb-4">
                  Până atunci, nu există cuantum de pensie.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ✔️ Sub 15 ani = fără pensie
                </div>
              </section>

              {/* 6 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  6. Anii lucrați în străinătate ajută?
                </h2>
                <p className="mb-4">
                  Da. Anii lucrați în state UE sau în Marea Britanie
                  pot fi totalizați.
                </p>
                <p className="mb-4">
                  Aceștia pot ajuta la atingerea stagiului minim de 15 ani.
                </p>
                <p className="mb-4">
                  Fiecare stat va plăti pensia pentru perioada lucrată acolo.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  🌍 Totalizare internațională
                </div>
              </section>

              {/* 7 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  7. Importanța documentelor
                </h2>
                <p className="mb-4">
                  Actele care dovedesc vechimea sunt esențiale
                  pentru stabilirea drepturilor.
                </p>
                <p className="mb-4">
                  Fără documente, anii lucrați nu pot fi valorificați.
                </p>
                <p className="mb-4">
                  Verificarea dosarului este un pas important.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  📄 acte · contracte · adeverințe
                </div>
              </section>

              {/* 8 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  8. Concluzia pe scurt
                </h2>
                <p className="mb-4">
                  Cu 6 ani vechime nu te poți pensiona.
                </p>
                <p className="mb-4">
                  Pragul minim legal este de 15 ani de cotizare.
                </p>
                <p className="mb-4">
                  Soluția este completarea vechimii prin muncă sau totalizare.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 6 ani = fără drept la pensie
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}