import Head from 'next/head'

export default function PensiePerioadaScurtaStrainatatePage() {
  return (
    <>
      <Head>
        <title>
          Primești pensie dacă ai lucrat doar 1–2 ani în străinătate? | DosarPensie
        </title>

        <link
          rel="canonical"
          href="https://dosarpensie.com/pensie-1-2-ani-strainatate"
        />

        <meta
          name="description"
          content="Primești pensie dacă ai lucrat doar 1–2 ani în străinătate? Explicăm simplu cum te ajută perioadele scurte lucrate în afara țării la pensia ta din România și din alte state (UE și UK)."
        />

        {/* Open Graph / Twitter */}
        <meta
          property="og:title"
          content="Primești pensie dacă ai lucrat doar 1–2 ani în străinătate?"
        />
        <meta
          property="og:description"
          content="Află cum sunt luați în calcul 1–2 ani lucrați în străinătate pentru pensia ta și când contează aceste perioade scurte."
        />
        <meta
          property="og:url"
          content="https://dosarpensie.com/pensie-1-2-ani-strainatate"
        />
        <meta
          property="og:image"
          content="https://dosarpensie.com/images/pensie-strainatate.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Primești pensie dacă ai lucrat doar 1–2 ani în străinătate?"
        />
        <meta
          name="twitter:description"
          content="Explicații simple despre cum te ajută perioadele scurte lucrate în străinătate la pensie."
        />
        <meta
          name="twitter:image"
          content="https://dosarpensie.com/images/pensie-strainatate.jpg"
        />

        {/* Article schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline:
                'Primești pensie dacă ai lucrat doar 1–2 ani în străinătate?',
              description:
                'Explicații simple despre cum sunt luați în calcul 1–2 ani lucrați în străinătate pentru pensia ta din România și din alte state.',
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
              mainEntityOfPage:
                'https://dosarpensie.com/pensie-1-2-ani-strainatate',
              datePublished: '2025-01-01',
              dateModified: new Date().toISOString(),
            }),
          }}
        />

        {/* FAQ schema – focus pe 1–2 ani în străinătate */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Primești pensie dacă ai lucrat doar 1–2 ani în străinătate?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Da, acei 1–2 ani lucrați în străinătate pot fi luați în calcul la totalizarea stagiului de cotizare. Chiar dacă statul respectiv nu îți plătește o pensie separată, anii pot ajuta pentru îndeplinirea stagiului minim necesar la pensie.',
                  },
                },
                {
                  '@type': 'Question',
                  name:
                    'Este suficient 1 an lucrat în străinătate ca să primesc pensie din acea țară?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Fiecare stat are un minim propriu de ani necesari pentru a plăti pensie separată. Dacă perioada este prea scurtă, statul poate să nu plătească o pensie distinctă, dar anii respectivi contează la totalizarea stagiilor pentru pensia comunitară.',
                  },
                },
                {
                  '@type': 'Question',
                  name:
                    'Cum dovedesc cei 1–2 ani lucrați în străinătate pentru pensie?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Perioada lucrată în străinătate se dovedește cu documente oficiale: contract de muncă, fluturași de salariu, adeverințe de la angajator, decizii de impunere, documente de la autoritatea fiscală sau instituția de pensii din statul respectiv.',
                  },
                },
                {
                  '@type': 'Question',
                  name:
                    'Unde trebuie să menționez că am lucrat doar 1–2 ani în străinătate?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Perioadele scurte lucrate în străinătate se menționează în cererea de pensie, la rubrica dedicată activității în alte state. Fie că depui dosarul în România sau în statul în care locuiești acum, este important să treci toate țările în care ai lucrat, chiar și pentru un an.',
                  },
                },
              ],
            }),
          }}
        />

        {/* Breadcrumb schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Acasă',
                  item: 'https://dosarpensie.com',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Pensia comunitară',
                  item: 'https://dosarpensie.com/pensie-comunitara',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Primești pensie dacă ai lucrat doar 1–2 ani în străinătate?',
                  item:
                    'https://dosarpensie.com/pensie-1-2-ani-strainatate',
                },
              ],
            }),
          }}
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
                <span className="text-[11px] text-slate-500">
                  Ghiduri clare despre pensie
                </span>
              </div>
            </a>
            <a
              href="/pensie-comunitara"
              className="text-xs sm:text-sm text-primary hover:text-primaryDark"
            >
              ← Înapoi la ghidul despre pensia comunitară
            </a>
          </div>
        </header>

        <main>
          {/* HERO / INTRO */}
          <section className="bg-softBg border-b border-slate-100">
            <div className="section-container py-10 lg:py-14 grid lg:grid-cols-[3fr,2fr] gap-10">
              <div className="space-y-5">
                <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-primary shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Ghid scurt · Perioade scurte de muncă în străinătate
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Primești pensie dacă ai lucrat doar 1–2 ani în străinătate?
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <nav className="text-xs text-primary space-x-3 mt-2">
                  <a href="/">Acasă</a>
                  <span>•</span>
                  <a href="/pensie-comunitara">Pensia comunitară</a>
                  <span>•</span>
                  <a href="/pensie-strainatate">Pensia pentru cei din străinătate</a>
                </nav>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți români ne întreabă direct:{' '}
                  <strong>
                    „Dacă am lucrat doar 1 sau 2 ani în străinătate, mai primesc ceva la
                    pensie?”
                  </strong>{' '}
                  Răspunsul scurt este: da, acești ani pot conta. În acest ghid scurt îți
                  explic pe înțelesul tuturor cum sunt luate în calcul perioadele scurte de
                  muncă în afara țării.
                </p>

                <div className="grid sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div className="rounded-2xl bg-white p-3 shadow-sm flex flex-col gap-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
                      Situația tipică
                    </span>
                    <span className="font-semibold text-slate-900">
                      1–2 ani în Italia, Spania, UK etc.
                    </span>
                    <span className="text-slate-500">
                      Restul vechimii – în România
                    </span>
                  </div>
                  <div className="rounded-2xl bg-white p-3 shadow-sm flex flex-col gap-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
                      Ce clarificăm
                    </span>
                    <span className="font-semibold text-slate-900">
                      Dacă și cum te ajută la pensie
                    </span>
                    <span className="text-slate-500">
                      Totalizare stagii & pensie comunitară
                    </span>
                  </div>
                  <div className="rounded-2xl bg-white p-3 shadow-sm flex flex-col gap-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
                      Legat de
                    </span>
                    <span className="font-semibold text-slate-900">
                      Ghidul de pensie comunitară
                    </span>
                    <span className="text-slate-500">
                      Recomandat: citește și ghidul complet
                    </span>
                  </div>
                </div>
              </div>

              {/* box lateral – trimite spre piloni */}
              <aside className="rounded-3xl bg-white shadow-sm border border-slate-100 p-5 lg:p-6 space-y-4 text-sm text-slate-700">
                <h2 className="text-base font-semibold text-slate-900">
                  Cum se leagă 1–2 ani în străinătate de restul pensiei tale?
                </h2>
                <p>
                  Perioadele scurte de muncă în străinătate sunt importante mai ales în
                  contextul{' '}
                  <a
                    href="/pensie-comunitara"
                    className="text-primary hover:text-primaryDark underline"
                  >
                    pensiei comunitare
                  </a>
                  . Chiar dacă nu primești o pensie separată din acel stat, anii pot fi
                  folosiți pentru a îndeplini stagiul minim de cotizare.
                </p>
                <p>
                  Dacă ai lucrat o perioadă mai mare în afara țării (5, 10, 15 ani), vezi și:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <a
                      href="/pensie-comunitara"
                      className="text-primary hover:text-primaryDark underline"
                    >
                      Ghid complet – Pensia comunitară (UE + UK)
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pensie-strainatate"
                      className="text-primary hover:text-primaryDark underline"
                    >
                      Pensia dacă locuiești în străinătate, dar ai ani și în România
                    </a>
                  </li>
                </ul>
                <p className="text-xs text-slate-500">
                  Informațiile de aici sunt generale și nu înlocuiesc comunicările oficiale
                  ale caselor de pensii. Pentru situații complexe, verifică întotdeauna și la
                  instituțiile din țările în care ai lucrat.
                </p>
              </aside>
            </div>
          </section>

          {/* CONTINUT – EXPLICAT SIMPLU */}
          <section className="bg-white">
            <div className="section-container py-10 lg:py-14 space-y-8 text-slate-800">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  1. Ce înseamnă, de fapt, 1–2 ani lucrați în străinătate?
                </h2>
                <p>
                  Când vorbim despre <strong>1–2 ani lucrați în străinătate</strong>, ne
                  referim la perioade în care ai fost angajat legal, cu contract și
                  contribuții plătite la sistemul de asigurări sociale din statul respectiv.
                </p>
                <p>
                  Deși 1–2 ani pot părea puțini, pentru pensie ei contează în două moduri:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    pot ajuta la <strong>totalizarea stagiului</strong> pentru a atinge
                    minimul necesar într-o țară;
                  </li>
                  <li>
                    în anumite cazuri, pot genera chiar și <strong>o pensie mică separată</strong>{' '}
                    din statul respectiv (dacă sunt îndeplinite condițiile locale).
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  2. Primești pensie separată pentru 1–2 ani?
                </h2>
                <p>
                  Aici intervine diferența între <strong>pensia națională</strong> și{' '}
                  <strong>pensia comunitară</strong>.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Unele state cer un <strong>minim de ani lucrați</strong> (de exemplu 3, 5 sau
                    chiar mai mulți) pentru a plăti o pensie separată. Dacă ai doar 1–2 ani,
                    este posibil ca acea țară să nu îți plătească pensie distinctă.
                  </li>
                  <li>
                    Chiar și în acest caz, <strong>anii nu se pierd</strong>: ei pot fi folosiți
                    la calcul în cadrul procedurii de{' '}
                    <a
                      href="/pensie-comunitara"
                      className="text-primary hover:text-primaryDark underline"
                    >
                      pensie comunitară
                    </a>
                    .
                  </li>
                </ul>
                <div className="rounded-2xl bg-softBg border border-sky-100 p-4 text-sm">
                  <p className="font-semibold text-slate-900 mb-1">Pe scurt</p>
                  <p>
                    <strong>
                      – Nu întotdeauna primești o pensie separată pentru 1–2 ani lucrați într-un
                      stat.
                    </strong>
                    <br />
                    <strong>
                      – De cele mai multe ori însă, acești ani contează la totalizarea
                      stagiilor și te pot ajuta să îndeplinești condițiile într-o altă țară.
                    </strong>
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  3. Cum se folosesc acești ani în cadrul pensiei comunitare?
                </h2>
                <p>
                  În cadrul <strong>pensiei comunitare</strong>, toate perioadele lucrate în
                  statele UE (plus statele cu acorduri, cum e UK) se pun împreună pentru a
                  vedea dacă îndeplinești condițiile minime dintr-o anumită țară.
                </p>
                <p>
                  De exemplu, dacă în România ai 13 ani lucrați și în străinătate doar 2 ani,
                  totalul devine 15 ani. Dacă stagiul minim necesar într-o procedură este de
                  15 ani, acei 2 ani din străinătate pot face diferența.
                </p>
                <p className="text-sm text-slate-700">
                  Pentru explicația completă a modului de calcul, vezi ghidul principal:{' '}
                  <a
                    href="/pensie-comunitara"
                    className="text-primary hover:text-primaryDark underline"
                  >
                    Pensia comunitară – ghid complet
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  4. Ce documente îți trebuie pentru a dovedi 1–2 ani lucrați în străinătate?
                </h2>
                <p>
                  Pentru perioadele scurte, documentele sunt și mai importante, pentru că
                  autoritățile trebuie să fie sigure că acea perioadă există și poate fi
                  recunoscută.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>contracte de muncă sau copii după acestea;</li>
                  <li>fluturași de salariu sau extrase de cont cu salariul primit;</li>
                  <li>documente de la autoritatea fiscală din statul respectiv;</li>
                  <li>
                    dovezi de înscriere în sistemul de asigurări sociale (număr de asigurare,
                    formulare locale etc.);
                  </li>
                  <li>
                    eventuale adeverințe sau documente de la instituția de pensii din acel stat.
                  </li>
                </ul>
                <p className="text-sm text-slate-700">
                  La depunerea dosarului (în România sau în alt stat), este important să menționezi
                  clar că ai lucrat 1–2 ani în străinătate și să atașezi ce documente ai. Dacă nu
                  ai toate actele, merită să ceri informații direct de la autoritățile din țara
                  unde ai lucrat.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  5. Greșeli frecvente legate de perioadele scurte
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>„Nu mai trec țara aceea în cerere, am lucrat prea puțin.”</strong>{' '}
                    – E o greșeală. Chiar și 1 an poate conta la totalizare.
                  </li>
                  <li>
                    <strong>
                      „Nu mai păstrez actele, că oricum nu primesc pensie de acolo.”
                    </strong>{' '}
                    – Documentele pot ajuta la dovedirea stagiului pentru pensia comunitară.
                  </li>
                  <li>
                    <strong>
                      „Dacă nu primesc bani separat din străinătate, înseamnă că anii sunt
                      pierduți.”
                    </strong>{' '}
                    – Nu este adevărat. De cele mai multe ori, anii se folosesc la calcul în
                    altă țară.
                  </li>
                </ul>
              </section>
            </div>
          </section>

          {/* CALL TO ACTION – CONTACT */}
          <section className="section-container py-10 text-center text-slate-700 text-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Situația ta e mai complicată de atât?
            </h2>
            <p className="mb-3">
              Îmi poți trimite, pe scurt, țările în care ai lucrat și perioada aproximativă, iar
              eu îți răspund cu un ghid orientativ adaptat situației tale.
            </p>
            <a
              href="mailto:contact@dosarpensie.com"
              className="inline-flex items-center rounded-full bg-primary text-white px-5 py-2 text-xs font-semibold shadow hover:bg-primaryDark"
            >
              Scrie-mi situația ta → 
            </a>
            <p className="mt-2 text-xs text-slate-500">
              Răspunsurile sunt orientative și nu înlocuiesc comunicările oficiale ale caselor de
              pensii.
            </p>
          </section>
        </main>

        {/* FOOTER MIC */}
        <footer className="bg-slate-950 text-slate-300 py-6 mt-4 text-xs">
          <div className="section-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-slate-400">
              © {new Date().getFullYear()} DosarPensie – ghiduri independente despre pensii.
            </p>
            <p className="text-slate-500">
              Informațiile sunt generale și nu înlocuiesc comunicările oficiale ale caselor de pensii.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}