import Head from 'next/head'

export default function AniLucratiDouaTariPage() {
  const pageUrl = 'https://dosarpensie.com/ani-lucrati-doua-tari'
  const ogImage = 'https://dosarpensie.com/images/pensie-comunitara-cover.jpg'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cum se adună anii lucrați în două țări diferite (România + străinătate)',
    description:
      'Explicație simplă despre cum se adună anii lucrați în două sau mai multe țări (România + străinătate), cum funcționează totalizarea stagiilor și cum se calculează pensia.',
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
        name: 'Se adună anii lucrați în două țări diferite?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Țările din UE și statele cu acorduri speciale (inclusiv UK) iau în considerare anii lucrați în mai multe țări și îi totalizează pentru a stabili dreptul la pensie.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pot primi pensie din două țări diferite?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Fiecare stat îți calculează și plătește partea lui de pensie, proporțional cu anii în care ai fost asigurat acolo. În practică, poți primi două sau mai multe pensii separate.',
        },
      },
      {
        '@type': 'Question',
        name: 'Contează dacă am lucrat doar 1–2 ani într-o țară?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Da. Chiar și perioadele scurte (1–2 ani) pot fi importante, pentru că se adaugă la totalul stagiilor și te pot ajuta să îndeplinești condițiile minime într-un alt stat.',
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>
          Cum se adună anii lucrați în două țări diferite (România + străinătate) | DosarPensie
        </title>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="description"
          content="Ai lucrat în România și într-o altă țară? Află cum se adună anii lucrați în două sau mai multe țări, cum funcționează totalizarea stagiilor și cum se calculează pensia."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Cum se adună anii lucrați în două țări diferite (România + străinătate)"
        />
        <meta
          property="og:description"
          content="Explicație simplă despre cum se adună anii lucrați în două sau mai multe țări și cum se calculează pensia comunitară."
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
              href="/pensie-comunitara"
              className="text-xs sm:text-sm text-primary hover:text-primaryDark"
            >
              ← Înapoi la ghidul principal
            </a>
          </div>
        </header>

        <main>
          {/* INTRO / HERO */}
          <section className="bg-softBg border-b border-slate-100">
            <div className="section-container py-10 lg:py-14 grid lg:grid-cols-[3fr,2fr] gap-10">
              <div className="space-y-5">
                <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-primary shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Ghid scurt · Ani lucrați în două țări
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Cum se adună anii lucrați în două țări diferite (România + străinătate)
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Ai lucrat câțiva ani în România și câțiva ani în altă țară și te întrebi dacă
                  se adună? În acest ghid scurt îți explic, pe limba ta, cum funcționează
                  totalizarea stagiilor și cum se leagă toți anii de muncă la pensie.
                </p>

                <div className="grid sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div className="rounded-2xl bg-white p-3 shadow-sm flex flex-col gap-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
                      Situații vizate
                    </span>
                    <span className="font-semibold text-slate-900">
                      România + Italia / Spania / UK
                    </span>
                    <span className="text-slate-500">sau alte țări UE / SEE / Elveția</span>
                  </div>
                  <div className="rounded-2xl bg-white p-3 shadow-sm flex flex-col gap-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
                      Ce explic
                    </span>
                    <span className="font-semibold text-slate-900">
                      Cum se adună anii de muncă
                    </span>
                    <span className="text-slate-500">fără formule complicate</span>
                  </div>
                  <div className="rounded-2xl bg-white p-3 shadow-sm flex flex-col gap-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
                      Legătura
                    </span>
                    <span className="font-semibold text-slate-900">
                      Pensie comunitară + pensie din străinătate
                    </span>
                    <span className="text-slate-500">
                      explicate pentru părinți și bunici
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD LATERAL CU LINKURI UTILE */}
              <aside className="rounded-3xl bg-white shadow-sm border border-slate-100 p-5 lg:p-6 space-y-4 text-sm text-slate-700">
                <h2 className="text-base font-semibold text-slate-900">
                  Unde găsești explicațiile complete
                </h2>
                <p>
                  Acest articol este un ghid scurt. Pentru detalii complete despre procedură,
                  calcule și exemple, poți citi:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <a
                      href="/pensie-comunitara"
                      className="text-primary hover:text-primaryDark underline"
                    >
                      Pensia comunitară – ghid complet
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pensie-strainatate"
                      className="text-primary hover:text-primaryDark underline"
                    >
                      Pensia pentru românii care locuiesc în străinătate
                    </a>
                  </li>
                </ul>
                <p className="text-xs text-slate-500">
                  Informațiile sunt generale și nu înlocuiesc comunicările oficiale ale caselor
                  de pensii din țările în care ai lucrat.
                </p>
              </aside>
            </div>
          </section>

          {/* CONTINUT PRINCIPAL */}
          <section className="bg-white">
            <div className="section-container py-10 lg:py-14 space-y-8 text-slate-800">
              {/* 1. SE ADUNA ANII */}
              <section>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  1. Se adună toți anii lucrați în UE + UK?
                </h2>
                <p className="mb-3">
                  Da. Țările din Uniunea Europeană, plus statele care au acorduri cu UE (inclusiv
                  Marea Britanie după Brexit), au reguli comune ca să nu pierzi anii lucrați în
                  străinătate.
                </p>
                <p className="mb-3">
                  Pe scurt, <strong>anii din România + anii din alte țări se iau în calcul
                  împreună</strong> pentru a vedea dacă îndeplinești condițiile minime de pensie.
                  Apoi, fiecare stat îți calculează și plătește partea lui.
                </p>
                <p>
                  Dacă vrei să aprofundezi regulile europene, te ajută ghidul principal:{' '}
                  <a
                    href="/pensie-comunitara"
                    className="text-primary hover:text-primaryDark underline"
                  >
                    Pensia comunitară – ghid complet
                  </a>
                  .
                </p>
              </section>

              {/* 2. CUM ADUNA TARILE ANII */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">
                  2. Cum adună țările anii tăi lucrați?
                </h2>
                <p className="mb-3">
                  Nu trebuie să faci tu calculele. Instituțiile de pensii din țări comunică între
                  ele și:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-3">
                  <li>verifică în ce perioade ai fost asigurat în fiecare stat,</li>
                  <li>adună anii pentru a vedea dacă îndeplinești condițiile minime,</li>
                  <li>
                    calculează partea de pensie pe care o datorează fiecare țară, în funcție de
                    anii lucrați acolo.
                  </li>
                </ul>
                <p>
                  Rezultatul final: <strong>poți primi două sau mai multe pensii separate</strong>,
                  dar toate ajung în contul tău bancar.
                </p>
              </section>

              {/* 3. EXEMPU SIMPLU */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">
                  3. Exemplu simplu: 15 ani România + 10 ani Italia
                </h2>
                <p className="mb-3">
                  Să luăm o situație foarte des întâlnită: ai lucrat 15 ani în România și 10 ani
                  în Italia.
                </p>
                <p className="mb-2">
                  În total, ai <strong>25 de ani de muncă</strong> care se iau în calcul pentru
                  a vedea dacă îndeplinești condițiile minime.
                </p>
                <p className="mb-3">
                  Apoi, fiecare țară calculează:
                </p>
                <ul className="list-disc list-inside space-y-1 mb-3">
                  <li>
                    România: calculează o pensie teoretică pentru 25 de ani lucrați integral în
                    România și îți plătește 15/25 din acea sumă;
                  </li>
                  <li>
                    Italia: calculează o pensie teoretică pentru 25 de ani lucrați integral în
                    Italia și îți plătește 10/25 din acea sumă.
                  </li>
                </ul>
                <p>
                  În final, <strong>primești două pensii</strong>: una din România și una din
                  Italia.
                </p>
              </section>

              {/* 4. CE FACEM CU PERIOADELE SCURTE */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">
                  4. Contează și anii lucrați puțin – 1 sau 2 ani?
                </h2>
                <p className="mb-3">
                  Da. Chiar dacă o țară nu îți plătește o pensie separată, pentru că ai prea puțini
                  ani, <strong>perioadele scurte se adaugă la total</strong> și te pot ajuta să
                  îndeplinești stagiul minim într-un alt stat.
                </p>
                <p className="mb-3">
                  De exemplu, cineva are:
                </p>
                <ul className="list-disc list-inside space-y-1 mb-3">
                  <li>18 ani România,</li>
                  <li>2 ani Spania,</li>
                  <li>3 ani Italia.</li>
                </ul>
                <p className="mb-3">
                  Separat, poate părea puțin. Împreună, în sistemul european, se vede că persoana
                  are 23 de ani de muncă. Acești ani pot conta foarte mult la stabilirea dreptului
                  de pensie.
                </p>
              </section>

              {/* 5. 3+ TARI */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">
                  5. Dacă ai lucrat în 3 sau mai multe țări
                </h2>
                <p className="mb-3">
                  Regula rămâne aceeași. Dacă, de exemplu, ai lucrat în România, Spania și
                  Germania, toate cele trei state:
                </p>
                <ul className="list-disc list-inside space-y-1 mb-3">
                  <li>primesc informații despre perioadele tale de muncă,</li>
                  <li>adună anii la total,</li>
                  <li>
                    calculează și plătesc partea lor de pensie, pe baza contribuțiilor plătite la
                    fiecare.
                  </li>
                </ul>
                <p>
                  Practic, poți ajunge să ai <strong>trei decizii de pensie</strong> și trei plăți
                  lunare, de la trei instituții diferite.
                </p>
              </section>

              {/* 6. ACTE UTILE */}
              <section>
                <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">
                  6. Ce acte te ajută să dovedești anii lucrați?
                </h2>
                <p className="mb-3">
                  Pentru ca anii să fie recunoscuți corect, este bine să aduni:
                </p>
                <ul className="list-disc list-inside space-y-1 mb-3">
                  <li>contracte de muncă și adeverințe de la angajatori,</li>
                  <li>fluturași de salariu sau fișe fiscale,</li>
                  <li>documente de la autoritățile de pensii sau fiscale,</li>
                  <li>numere de asigurare socială (NINo, codice fiscale etc.).</li>
                </ul>
                <p>
                  Dacă lipsesc documente, procedura poate dura mai mult, dar regulile europene sunt
                  gândite să te ajute, nu să te încurce.
                </p>
              </section>

              {/* 7. LINK SPRE GHIDURI MARI */}
              <section className="rounded-2xl bg-softBg border border-slate-100 p-4 text-sm text-slate-700 space-y-2">
                <h2 className="font-semibold text-slate-900">
                  Unde poți citi mai mult despre pensia ta
                </h2>
                <p>
                  Dacă vrei să vezi toată procedura, pas cu pas, cu exemple și explicații:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <a
                      href="/pensie-comunitara"
                      className="text-primary hover:text-primaryDark underline"
                    >
                      Pensia comunitară – ghid complet pentru românii care au lucrat în străinătate
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pensie-strainatate"
                      className="text-primary hover:text-primaryDark underline"
                    >
                      Pensie pentru românii care locuiesc în străinătate sau s-au întors în țară
                    </a>
                  </li>
                </ul>
              </section>

              {/* FAQ VIZUAL (ALINIAT CU JSON-LD) */}
              <section className="space-y-4 text-sm">
                <h2 className="text-xl lg:text-2xl font-bold text-slate-900">
                  Întrebări frecvente despre anii lucrați în două țări
                </h2>

                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900 mb-1">
                    Se adună anii lucrați în două țări diferite?
                  </p>
                  <p>
                    Da. Țările din UE și statele cu acorduri speciale (inclusiv UK) totalizează
                    anii lucrați în mai multe țări pentru a vedea dacă îndeplinești condițiile
                    minime de pensie. Fiecare stat îți plătește partea lui, proporțional cu anii
                    lucrați acolo.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900 mb-1">
                    Pot primi pensie din două țări diferite?
                  </p>
                  <p>
                    Da. Dacă ai lucrat legal și ai contribuit la sistemele de pensii din mai multe
                    state, fiecare îți calculează și plătește partea lui. În practică, vei primi
                    două sau mai multe pensii separate, de obicei în același cont bancar.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900 mb-1">
                    Contează dacă am lucrat doar 1–2 ani într-o țară?
                  </p>
                  <p>
                    Da. Perioadele scurte se adaugă la totalul stagiilor și pot face diferența
                    între a avea sau nu dreptul la pensie. Chiar dacă acea țară nu îți plătește o
                    pensie separată, anii pot fi folosiți la calcul în alt stat.
                  </p>
                </div>
              </section>
            </div>
          </section>

          {/* CTA FINAL */}
          <section className="section-container py-10 text-center text-slate-700 text-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Vrei să verifici cum se leagă anii tăi din două sau mai multe țări?
            </h2>
            <p className="mb-3">
              Îmi poți trimite situația ta pe email și îți răspund cu un ghid orientativ, pe
              înțelesul tău.
            </p>
            <a
              href="mailto:contact@dosarpensie.com"
              className="inline-flex items-center rounded-full bg-primary text-white px-5 py-2 text-xs font-semibold shadow hover:bg-primaryDark"
            >
              Scrie-mi cazul tău →
            </a>
            <p className="mt-2 text-xs text-slate-500">
              Răspunsurile sunt generale și nu înlocuiesc comunicările oficiale ale caselor de
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
              Informațiile sunt generale și nu înlocuiesc comunicările oficiale ale caselor de
              pensii.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}