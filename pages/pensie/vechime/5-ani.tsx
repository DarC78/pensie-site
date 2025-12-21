import Head from 'next/head'

export default function CinciAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/5-ani'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-5-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 5 ani vechime pot să mă pensionez?',
    description:
      'Mini ghid despre pensia cu 5 ani vechime: ce spune legea, de ce nu este suficient pentru pensia de limită de vârstă, ce opțiuni ai și cum îți poți completa stagiul.',
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
    datePublished: '2025-12-15',
    dateModified: new Date().toISOString(),
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Cu 5 ani vechime pot să mă pensionez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'În mod obișnuit, nu. 5 ani de vechime nu îndeplinesc stagiul minim de cotizare pentru pensia pentru limită de vârstă (care este, de regulă, 15 ani).',
        },
      },
      {
        '@type': 'Question',
        name: 'Dacă am doar 5 ani, primesc vreo pensie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'De regulă, nu pensie pentru limită de vârstă din sistemul public. Totuși, pot exista situații particulare (de exemplu, alte tipuri de drepturi sau beneficii) care depind de condiții specifice și de documente.',
        },
      },
      {
        '@type': 'Question',
        name: 'Cum pot completa anii lipsă până la stagiu minim?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Poți completa stagiul prin continuarea activității cu contribuții sau prin valorificarea perioadelor lucrate în străinătate (unde este posibilă totalizarea). În unele situații, există și opțiuni de completare prin contribuții pentru perioade trecute, dacă sunt permise de reglementările în vigoare.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 5 ani vechime pot să mă pensionez? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 5 ani vechime și te întrebi dacă te poți pensiona? Află ce spune legea despre stagiu minim, de ce 5 ani nu sunt suficienți și ce opțiuni ai."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 5 ani vechime pot să mă pensionez?" />
        <meta
          property="og:description"
          content="Explicație clară despre ce înseamnă 5 ani vechime pentru pensie, ce limitări există și cum îți poți completa stagiul."
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
                  Cu 5 ani vechime pot să mă pensionez?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți oameni au perioade scurte de muncă (de exemplu 5 ani) și speră că pot
                  ieși la pensie. În acest mini ghid explic pe înțelesul tuturor de ce 5 ani
                  nu sunt suficienți pentru pensia pentru limită de vârstă, ce înseamnă
                  „stagiu minim” și ce soluții ai ca să nu pierzi anii munciți.
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
                  1. Ce înseamnă „5 ani vechime” în pensia publică
                </h2>
                <p className="mb-4">
                  „Vechime” înseamnă, în practică, ani în care ai avut contribuții la sistemul
                  public (stagiu de cotizare). 5 ani reprezintă o perioadă de cotizare, dar
                  nu este suficientă, de regulă, pentru a deschide dreptul la pensia pentru
                  limită de vârstă.
                </p>
                <p className="mb-4">
                  Sistemul public funcționează pe praguri: există un stagiu minim, iar sub acel
                  prag nu se acordă pensie pentru limită de vârstă, chiar dacă ai contribuit.
                </p>
                <p className="mb-4">
                  Asta nu înseamnă că „pierzi” automat cei 5 ani, ci că trebuie să vezi ce
                  opțiuni ai ca să atingi condițiile cerute.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 5 ani = contribuții existente, dar de obicei sub pragul minim
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Pot ieși la pensie cu doar 5 ani?
                </h2>
                <p className="mb-4">
                  În mod obișnuit, nu poți ieși la pensia pentru limită de vârstă doar cu 5 ani
                  de cotizare, deoarece nu îndeplinești stagiul minim (care, de regulă, este 15 ani).
                </p>
                <p className="mb-4">
                  Chiar dacă ai vârsta legală, condițiile pentru pensia de limită de vârstă includ
                  atât vârsta, cât și stagiul minim de cotizare.
                </p>
                <p className="mb-4">
                  De aceea, întrebarea corectă devine: „Cum completez anii lipsă?” sau „Pot cumula
                  anii din alte state?”.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Vârsta singură nu ajunge, trebuie și stagiu minim
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  3. De ce există un stagiu minim și ce înseamnă pentru tine
                </h2>
                <p className="mb-4">
                  Stagiul minim există pentru a asigura un nivel minim de contribuție înainte de
                  acordarea unei pensii lunare din bugetul asigurărilor sociale.
                </p>
                <p className="mb-4">
                  Cu 5 ani de cotizare, ai contribuit, dar sistemul consideră că nu s-a atins încă
                  pragul necesar pentru a primi pensie pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  În practică, asta înseamnă că obiectivul este să ajungi la stagiu minim prin ani
                  suplimentari sau prin totalizarea perioadelor din alte țări, acolo unde se aplică.
                </p>
                <div className="rounded-xl bg-amber-50 p-4 text-sm">
                  ⚠️ Sub stagiu minim = fără pensie de limită de vârstă
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
                  4. Ce se întâmplă dacă mai lucrezi după cei 5 ani
                </h2>
                <p className="mb-4">
                  Soluția cea mai directă este să continui să lucrezi cu forme legale, astfel încât
                  să acumulezi stagiu până la pragul minim.
                </p>
                <p className="mb-4">
                  Fiecare lună cu contribuții contează, iar în timp poți transforma cei 5 ani într-un
                  stagiu complet care îți deschide dreptul la pensie.
                </p>
                <p className="mb-4">
                  În plus, odată depășit pragul minim, fiecare an în plus poate crește valoarea pensiei
                  (prin punctajul acumulat).
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  📈 Continui munca = completezi stagiu + crești punctajul
                </div>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  5. Exemplu orientativ: 5 ani vs. 15 ani
                </h2>
                <p className="mb-4">
                  Cu 5 ani de cotizare, problema nu este „pensia mică”, ci lipsa dreptului la pensia
                  pentru limită de vârstă, din cauza stagiului insuficient.
                </p>
                <p className="mb-4">
                  Cu 15 ani de cotizare (stagiu minim), dreptul la pensie există, chiar dacă suma poate
                  fi mică, deoarece punctajul acumulat este redus.
                </p>
                <p className="mb-4">
                  De aceea, diferența cheie este: sub prag nu ai dreptul la pensie de limită de vârstă,
                  la prag ai dreptul (dar valoarea depinde de contribuții).
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ✔️ 5 ani = sub prag · 15 ani = drept la pensie
                </div>
              </section>

              {/* 6 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  6. Se pot aduna anii lucrați în străinătate
                </h2>
                <p className="mb-4">
                  Da. Dacă ai lucrat în alte țări (de exemplu în Uniunea Europeană sau în Marea Britanie),
                  în multe cazuri se poate aplica totalizarea perioadelor pentru a îndeplini condiția de
                  stagiu minim.
                </p>
                <p className="mb-4">
                  Totalizarea te ajută să „treci pragul” pentru drept, însă fiecare stat va plăti doar partea
                  de pensie aferentă perioadei lucrate acolo.
                </p>
                <p className="mb-4">
                  Practic, poți ajunge să primești pensie din mai multe state, fiecare calculată separat,
                  dar recunoscută prin coordonarea perioadelor.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  🌍 Totalizare = drept deschis, plăți separate pe state
                </div>
              </section>

              {/* 7 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  7. Ce documente sunt necesare ca să dovedești cei 5 ani
                </h2>
                <p className="mb-4">
                  Pentru orice analiză corectă ai nevoie de documente care arată perioadele de muncă și
                  contribuțiile: contracte, adeverințe, carnet de muncă (unde e cazul) și situații din REVISAL
                  sau adeverințe emise de angajatori.
                </p>
                <p className="mb-4">
                  Dacă ai perioade în străinătate, păstrează documente de asigurare, fluturași, formulare/adeverințe
                  și orice dovadă a contribuțiilor.
                </p>
                <p className="mb-4">
                  Recomandarea practică este să verifici din timp evidențele la Casa de Pensii, ca să știi exact
                  ce apare înregistrat și ce lipsește.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  📄 acte de vechime · adeverințe · documente externe
                </div>
              </section>

              {/* 8 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  8. Concluzia pe scurt
                </h2>
                <p className="mb-4">
                  Cu 5 ani vechime, în mod obișnuit nu te poți pensiona pentru limită de vârstă, deoarece nu ai
                  stagiul minim de cotizare.
                </p>
                <p className="mb-4">
                  Soluția este să completezi stagiul prin muncă și contribuții sau prin totalizarea perioadelor
                  lucrate în alte state, unde este posibil.
                </p>
                <p className="mb-4">
                  Primul pas realist este să verifici exact vechimea recunoscută oficial și să construiești un plan
                  ca să atingi pragul minim.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ 5 ani = nu ajunge pentru pensia de vârstă · ținta este stagiul minim
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}