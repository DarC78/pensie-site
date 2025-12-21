import Head from 'next/head'

export default function ZeceAniVechimePensiePage() {
  const pageUrl = 'https://dosarpensie.com/pensie/vechime/cu-10-ani-vechime-primesc-pensie.tsx'
  const ogImage = 'https://dosarpensie.com/images/pensie-vechime-10-ani.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cu 10 ani vechime primesc pensie?',
    description:
      'Ghid complet despre pensia cu 10 ani vechime: ce spune legea, de ce nu este suficient stagiul, ce opțiuni există și cum se pot valorifica anii lucrați.',
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
        name: 'Pot primi pensie cu doar 10 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Nu. În România, stagiul minim de cotizare pentru pensia pentru limită de vârstă este de 15 ani. Cu doar 10 ani vechime nu se acordă pensie contributivă.',
        },
      },
      {
        '@type': 'Question',
        name: 'Se pot aduna anii lucrați în străinătate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Anii lucrați în alte țări din UE sau în UK se pot aduna cu cei din România pentru a îndeplini stagiul minim de pensie.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ce pot face dacă rămân sub 15 ani vechime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Poți completa stagiul prin muncă ulterioară, poți valorifica anii din străinătate sau, în anumite condiții, poți beneficia de pensia socială minimă.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cu 10 ani vechime primesc pensie? | DosarPensie</title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai 10 ani vechime și te întrebi dacă primești pensie? Ghid clar despre ce spune legea, de ce nu este suficient și ce opțiuni reale ai."
        />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cu 10 ani vechime primesc pensie?" />
        <meta
          property="og:description"
          content="Explicație detaliată despre pensia cu 10 ani vechime și ce soluții există."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />

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
        {/* HEADER */}
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
                  Ghid detaliat · Vechime la pensie
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Cu 10 ani vechime primesc pensie?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Aceasta este una dintre cele mai frecvente întrebări primite de la persoane
                  care se apropie de vârsta de pensionare și descoperă că nu au vechimea completă.
                  În rândurile de mai jos explic clar ce spune legea, de ce 10 ani nu sunt suficienți
                  și ce soluții reale există în practică.
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
                  1. Ce înseamnă, de fapt, vechimea la pensie
                </h2>
                <p className="mb-4">
                  Vechimea la pensie reprezintă totalul perioadelor în care o persoană a fost
                  asigurată în sistemul public și pentru care s-au plătit contribuții sociale.
                  Aceasta nu se confundă cu anii de viață sau cu perioadele în care ai fost
                  „activ”, ci strict cu munca legal declarată.
                </p>
                <p className="mb-4">
                  De multe ori, oamenii cred că orice perioadă lucrată „la negru” sau orice
                  întrerupere este luată în calcul. Din păcate, doar perioadele recunoscute oficial
                  de Casa de Pensii intră în calculul vechimii.
                </p>
                <p className="mb-4">
                  Tocmai de aceea, înainte de orice discuție despre pensie, este esențial
                  să știi exact câți ani de cotizare recunoscuți ai în evidențe.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  👉 Vechimea contează doar dacă există contribuții înregistrate
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  2. Care este stagiul minim cerut de lege
                </h2>
                <p className="mb-4">
                  Legea pensiilor din România stabilește foarte clar un prag minim de cotizare
                  sub care nu se poate acorda pensia pentru limită de vârstă. Acest prag există
                  pentru a asigura un echilibru între contribuții și beneficii.
                </p>
                <p className="mb-4">
                  În prezent, stagiul minim de cotizare este de 15 ani. Sub acest nivel,
                  statul consideră că nu a existat o contribuție suficientă pentru a justifica
                  plata unei pensii lunare.
                </p>
                <p className="mb-4">
                  Acest prag este aplicat strict, indiferent de valoarea salariilor sau
                  de motivele pentru care vechimea este mai mică.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ⚖️ Sub 15 ani de cotizare → nu se acordă pensie contributivă
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  3. Ce se întâmplă dacă ai doar 10 ani vechime
                </h2>
                <p className="mb-4">
                  Dacă ai acumulat doar 10 ani de vechime în România, nu îndeplinești
                  condiția minimă impusă de lege pentru acordarea pensiei de stat.
                  Acest lucru este valabil indiferent de vârsta la care ajungi.
                </p>
                <p className="mb-4">
                  Anii nu se pierd și rămân înregistrați în sistem, însă ei nu pot genera
                  singuri un drept la pensie. Practic, sistemul te consideră „sub prag”.
                </p>
                <p className="mb-4">
                  De aici apare confuzia multor persoane care se așteaptă la o pensie mică,
                  dar descoperă că, în realitate, nu există dreptul la pensie deloc.
                </p>
                <div className="rounded-xl bg-amber-50 p-4 text-sm">
                  ⚠️ 10 ani = vechime insuficientă pentru pensie
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
                  4. Se pot aduna anii lucrați în străinătate
                </h2>
                <p className="mb-4">
                  Da. România aplică regulile europene de coordonare a sistemelor de pensii,
                  ceea ce înseamnă că anii lucrați în alte state nu sunt ignorați.
                </p>
                <p className="mb-4">
                  Dacă ai lucrat în Uniunea Europeană sau în Marea Britanie, aceste perioade
                  pot fi adunate cu vechimea din România pentru a verifica îndeplinirea
                  stagiului minim.
                </p>
                <p className="mb-4">
                  Important de reținut este că fiecare stat va plăti doar partea corespunzătoare
                  anilor lucrați acolo, nu o pensie integrală.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  🌍 UE + UK + România = ani care se pot cumula
                </div>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  5. Exemplu concret din practică
                </h2>
                <p className="mb-4">
                  Să presupunem că o persoană a lucrat 10 ani în România și apoi
                  încă 6 ani într-un stat din Uniunea Europeană.
                </p>
                <p className="mb-4">
                  În acest caz, totalul de 16 ani permite îndeplinirea stagiului minim,
                  iar persoana poate obține dreptul la pensie la vârsta legală.
                </p>
                <p className="mb-4">
                  Fiecare stat va calcula separat pensia, proporțional cu perioada
                  lucrată pe teritoriul său.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  ✔️ Prag minim îndeplinit prin cumularea anilor
                </div>
              </section>

              {/* 6 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  6. Ce opțiuni există dacă rămâi sub 15 ani
                </h2>
                <p className="mb-4">
                  Dacă nu ai lucrat în străinătate și rămâi sub pragul minim,
                  există totuși câteva variante care pot fi luate în calcul.
                </p>
                <p className="mb-4">
                  Unele persoane aleg să mai lucreze câțiva ani după vârsta standard
                  tocmai pentru a completa stagiul necesar.
                </p>
                <p className="mb-4">
                  În anumite situații, se pot lua în calcul și perioade asimilate
                  sau pensia socială minimă.
                </p>
                <div className="rounded-xl bg-softBg p-4 text-sm">
                  🔍 Fiecare situație trebuie analizată individual
                </div>
              </section>

              {/* 7 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  7. Ce documente sunt importante
                </h2>
                <p className="mb-4">
                  Pentru stabilirea vechimii reale, documentele joacă un rol esențial.
                  Casa de Pensii se bazează exclusiv pe acte doveditoare.
                </p>
                <p className="mb-4">
                  Lipsa documentelor nu înseamnă automat pierderea drepturilor,
                  dar poate prelungi considerabil procedura.
                </p>
                <p className="mb-4">
                  Este recomandat să începi strângerea actelor cu mult timp înainte
                  de momentul pensionării.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 text-sm">
                  📄 contracte · adeverințe · extrase · documente externe
                </div>
              </section>

              {/* 8 */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  8. Concluzia pe scurt
                </h2>
                <p className="mb-4">
                  Cu 10 ani vechime în România, nu se acordă pensie de stat
                  pentru limită de vârstă.
                </p>
                <p className="mb-4">
                  Anii nu sunt pierduți, dar trebuie completați sau cumulați
                  cu alte perioade recunoscute.
                </p>
                <p className="mb-4">
                  O analiză personalizată te poate ajuta să înțelegi exact
                  ce opțiuni ai în cazul tău.
                </p>
                <div className="rounded-xl bg-emerald-50 p-4 text-sm">
                  ✔️ Soluții există, dar depind de situația ta concretă
                </div>
              </section>

            </div>
          </section>
        </main>
      </div>
    </>
  )
}