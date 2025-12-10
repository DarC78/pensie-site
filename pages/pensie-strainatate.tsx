import Head from 'next/head'

export default function PensieStrainatatePage() {
  return (
    <>
      <Head>
        <title>
          Pensie în străinătate – drepturi, plată în cont și mutarea în România | DosarPensie
        </title>

        <link
          rel="canonical"
          href="https://dosarpensie.com/pensie-strainatate"
        />

        <meta
          name="description"
          content="Ghid complet despre pensia în străinătate pentru românii care locuiesc în afara țării sau s-au întors în România: drepturi, plată în cont, schimbare adresă, certificat de viață, Italia, Spania, UK, Germania și alte state."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Pensie în străinătate – drepturi, plată în cont și mutarea în România"
        />
        <meta
          property="og:description"
          content="Explicații simple despre cum se plătește pensia în străinătate, cum îți actualizezi contul bancar, ce este certificatul de viață și ce faci când te întorci în România."
        />
        <meta
          property="og:url"
          content="https://dosarpensie.com/pensie-strainatate"
        />
        <meta
          property="og:image"
          content="https://dosarpensie.com/images/pensie-strainatate.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://dosarpensie.com/images/pensie-strainatate.jpg"
        />

        {/* Schema.org – Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline:
                'Pensie în străinătate – ghid complet pentru românii care primesc pensie din alte state sau se întorc în România',
              description:
                'Ghid complet despre pensia în străinătate pentru românii care locuiesc în afara țării sau s-au întors în România: drepturi, plată în cont, schimbare adresă, certificat de viață, Italia, Spania, UK, Germania și alte state.',
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
                'https://dosarpensie.com/pensie-strainatate',
              datePublished: '2025-01-01',
              dateModified: '2025-01-01',
            }),
          }}
        />

        {/* Schema.org – FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Pot primi pensie din străinătate dacă m-am întors în România?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Da. În majoritatea cazurilor, poți locui în România și continua să primești pensia din celelalte state în care ai lucrat, cu condiția să anunți schimbarea adresei și a contului bancar și să respecți regulile acelui stat.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'În ce cont se plătește pensia din străinătate?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'De obicei, pensia se plătește într-un cont bancar deschis pe numele tău, fie în țara care plătește pensia, fie într-un cont din România, dacă statul respectiv permite asta. Este important să verifici cu instituția de pensii din statul care plătește.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Ce este certificatul de viață și de ce este important?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Certificatul de viață este un document prin care confirmi, periodic, că ești în viață și ai în continuare drept la pensie. Dacă nu trimiți la timp certificatul de viață, pensia se poate suspenda până la clarificare.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Ce fac dacă nu mi-a intrat pensia în cont?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Începe prin a verifica dacă ai schimbat recent adresa sau contul bancar, dacă ai primit o cerere de certificat de viață și nu ai trimis-o la timp, sau dacă banca nu a respins plata. Apoi contactează instituția de pensii sau ambasada/consulatul pentru clarificări.',
                  },
                },
              ],
            }),
          }}
        />

        {/* Schema.org – Breadcrumbs */}
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
                  name: 'Pensie în străinătate',
                  item: 'https://dosarpensie.com/pensie-strainatate',
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
                <span className="font-semibold text-slate-800">
                  DosarPensie
                </span>
                <span className="text-[11px] text-slate-500">
                  Ghiduri clare despre pensie
                </span>
              </div>
            </a>
            <a
              href="/#ghiduri"
              className="text-xs sm:text-sm text-primary hover:text-primaryDark"
            >
              ← Înapoi la ghiduri
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
                  Ghid complet · Pensie în străinătate
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Pensie în străinătate: cum îți primești banii liniștit, fie că
                  locuiești afară sau te-ai întors în România
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare:{' '}
                  {new Date().toLocaleDateString('ro-RO')}
                </p>

                <nav className="text-xs text-primary space-x-3 mt-2">
                  <a href="/">Acasă</a>
                  <span>•</span>
                  <a href="/pensie-comunitara">Pensia comunitară</a>
                  <span>•</span>
                  <a href="/dosar-pensie">Dosarul de pensie</a>
                </nav>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți români locuiesc într-o țară, primesc pensie din alta și
                  se gândesc dacă nu cumva e „prea complicat” sau „se pierde
                  ceva pe drum”. În acest ghid îți explic, pe limba ta, cum
                  funcționează pensia în străinătate: cum se plătește, cum îți
                  actualizezi contul bancar, ce este certificatul de viață și ce
                  trebuie să faci dacă te întorci definitiv în România.
                </p>

                <div className="grid sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div className="rounded-2xl bg-white p-3 shadow-sm flex flex-col gap-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
                      Situații acoperite
                    </span>
                    <span className="font-semibold text-slate-900">
                      Locuiești în România sau afară
                    </span>
                    <span className="text-slate-500">
                      Pensie din două sau mai multe state
                    </span>
                  </div>
                  <div className="rounded-2xl bg-white p-3 shadow-sm flex flex-col gap-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
                      Țări frecvente
                    </span>
                    <span className="font-semibold text-slate-900">
                      Italia, Spania, UK, Germania
                    </span>
                    <span className="text-slate-500">
                      Plus alte state cu acorduri
                    </span>
                  </div>
                  <div className="rounded-2xl bg-white p-3 shadow-sm flex flex-col gap-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
                      Stilul ghidului
                    </span>
                    <span className="font-semibold text-slate-900">
                      Explicații simple, fără jargon
                    </span>
                    <span className="text-slate-500">
                      Potrivit pentru părinți și bunici
                    </span>
                  </div>
                </div>
              </div>

              {/* Box lateral – legături + context */}
              <aside className="rounded-3xl bg-white shadow-sm border border-slate-100 p-5 lg:p-6 space-y-4 text-sm text-slate-700">
                <h2 className="text-base font-semibold text-slate-900">
                  Cum te ajută acest ghid
                </h2>
                <p>
                  Aici vorbim despre partea practică: <strong>unde intră
                  pensia, ce se întâmplă când îți schimbi adresa sau banca,
                  ce faci dacă nu mai vin banii</strong> și cum decurge totul
                  când te întorci în România.
                </p>
                <p className="text-sm text-primary">
                  Vezi și:{' '}
                  <a
                    href="/pensie-comunitara"
                    className="underline hover:text-primaryDark"
                  >
                    Pensia comunitară – cum se adună anii lucrați în mai multe
                    țări
                  </a>
                  {' • '}
                  <a
                    href="/recalculare-pensie"
                    className="underline hover:text-primaryDark"
                  >
                    Recalcularea pensiei
                  </a>
                </p>
                <p className="text-xs text-slate-500">
                  Informațiile sunt generale și nu înlocuiesc comunicările
                  oficiale ale caselor de pensii din fiecare stat. Pentru
                  situații individuale, verifică întotdeauna și la instituția
                  care îți plătește pensia.
                </p>
              </aside>
            </div>
          </section>

          {/* CUPRINS */}
          <section className="bg-white border-b border-slate-100">
            <div className="section-container py-8 lg:py-10 grid lg:grid-cols-[3fr,2fr] gap-8">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">
                  Ce vei găsi în acest ghid
                </h2>
                <p className="text-sm text-slate-600">
                  Poți citi tot ghidul cap-coadă sau poți sări direct la
                  secțiunea care te interesează cel mai mult.
                </p>
              </div>
              <nav className="bg-softBg rounded-2xl border border-slate-100 p-4 text-sm text-slate-700">
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    <a
                      href="#general"
                      className="text-primary hover:text-primaryDark"
                    >
                      Ce înseamnă „pensie în străinătate”
                    </a>
                  </li>
                  <li>
                    <a
                      href="#romania-beneficiar"
                      className="text-primary hover:text-primaryDark"
                    >
                      Locuiești în România, primești pensie din alte țări
                    </a>
                  </li>
                  <li>
                    <a
                      href="#strainatate-beneficiar"
                      className="text-primary hover:text-primaryDark"
                    >
                      Locuiești în străinătate, primești pensie din România
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tari-populare"
                      className="text-primary hover:text-primaryDark"
                    >
                      Italia, Spania, UK, Germania – situații frecvente
                    </a>
                  </li>
                  <li>
                    <a
                      href="#adresa-cont"
                      className="text-primary hover:text-primaryDark"
                    >
                      Schimbare adresă și cont bancar. Certificatul de viață
                    </a>
                  </li>
                  <li>
                    <a
                      href="#intarzieri"
                      className="text-primary hover:text-primaryDark"
                    >
                      Ce faci dacă pensia întârzie sau se blochează
                    </a>
                  </li>
                  <li>
                    <a
                      href="#intoarcere"
                      className="text-primary hover:text-primaryDark"
                    >
                      Te întorci definitiv în România – ce trebuie anunțat
                    </a>
                  </li>
                  <li>
                    <a
                      href="#intrebari"
                      className="text-primary hover:text-primaryDark"
                    >
                      Întrebări frecvente
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </section>

          {/* 1. GENERAL – VERSIUNE EXTINSĂ ȘI OPTIMIZATĂ */}
          <section id="general" className="bg-white">
            <div className="section-container py-10 lg:py-14 space-y-8 text-slate-800">

              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                1. Ce înseamnă „pensie în străinătate” – explicația completă, pe înțelesul tuturor
              </h2>

              <p className="text-lg text-slate-700">
                Pentru românii care au lucrat în 2, 3 sau chiar 4 țări, expresia{" "}
                <strong>„pensie în străinătate”</strong> se poate referi la situații complet diferite. 
                De aceea apar confuzii, scrisori ratate, conturi blocate sau întârzieri.
              </p>

              <p>
                În realitate, „pensie în străinătate” are <strong>3 sensuri diferite</strong>. 
                Dacă le înțelegi pe fiecare, devine mult mai simplu să gestionezi 
                adrese, conturi bancare, certificate de viață și comunicările cu instituțiile.
              </p>

              {/* SENSUL 1 */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900">
                  1.1. Sensul 1 – Pensia pe care o primești dintr-un stat străin pentru anii lucrați acolo
                </h3>
                <p>
                  Cel mai important sens. Dacă ai lucrat în Italia, Spania, UK, Germania, Austria 
                  sau în alte state, ai dreptul la <strong>o pensie separată</strong> de la fiecare dintre ele.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>fiecare stat îți calculează pensia după propriile reguli;</li>
                  <li>îți comunică decizia de pensie;</li>
                  <li>îți plătește lunar partea lui;</li>
                  <li>nu există „transfer” între state – fiecare plătește ce ai contribuit acolo.</li>
                </ul>
                <p>
                  <strong>Atenție:</strong> niciun stat nu preia sau nu combină pensia altui stat. 
                  <strong>Le vei primi separat, toată viața.</strong>
                </p>
              </div>

              {/* SENSUL 2 */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900">
                  1.2. Sensul 2 – Pensia din România plătită într-un cont din străinătate
                </h3>
                <p>
                  Mulți români trăiesc în Italia, Spania, UK sau Germania, dar primesc pensie{" "}
                  <strong>din România</strong>. Aici, „pensie în străinătate” înseamnă:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>pensia vine de la Casa de Pensii din România;</li>
                  <li>dar intră într-un cont din alt stat;</li>
                  <li>plata depinde de acordurile bancare și de regulile Casei Naționale de Pensii.</li>
                </ul>
                <p>
                  Pentru mulți, aceasta este cea mai comodă variantă, mai ales dacă locuiesc 
                  permanent în străinătate.
                </p>
              </div>

              {/* SENSUL 3 */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900">
                  1.3. Sensul 3 – Primești pensii din 2–4 țări și locuiești unde dorești
                </h3>
                <p>
                  Scenariul tot mai des întâlnit: ai pensie din{" "}
                  <strong>România + Italia + Spania + UK</strong>, dar poți locui oriunde:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>în România;</li>
                  <li>în Italia, Spania sau UK;</li>
                  <li>în orice alt stat UE;</li>
                  <li>chiar și în afara Europei.</li>
                </ul>
                <p>
                  <strong>Locul în care locuiești NU îți anulează dreptul la pensie.</strong>  
                  Dar trebuie să respecți regulile administrative: adresă, cont, certificate de viață.
                </p>
              </div>

              {/* SCENARII */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  1.4. Cele 5 scenarii cel mai des întâlnite în rândul românilor
                </h3>

                <div className="rounded-2xl bg-softBg border border-sky-100 p-4 space-y-3">
                  <p className="font-semibold text-slate-900">Scenariul A</p>
                  <p>
                    <strong>Trăiești în România, dar primești pensie din 1–3 țări.</strong><br />
                    Exemple: România + Italia, România + Spania, România + UK.<br />
                    Aici contează: contul bancar, adresa, certificatele de viață.
                  </p>
                </div>

                <div className="rounded-2xl bg-softBg border border-sky-100 p-4 space-y-3">
                  <p className="font-semibold text-slate-900">Scenariul B</p>
                  <p>
                    <strong>Trăiești în Italia, Spania sau UK, dar ai pensie din România.</strong><br />
                    Contează comisioanele, conversiile valutare și actualizarea adresei.
                  </p>
                </div>

                <div className="rounded-2xl bg-softBg border border-sky-100 p-4 space-y-3">
                  <p className="font-semibold text-slate-900">Scenariul C</p>
                  <p>
                    <strong>Ai lucrat în UK înainte de Brexit, apoi te-ai întors în România.</strong><br />
                    Drepturile sunt protejate, dar regulile de plată diferă de cele din UE.
                  </p>
                </div>

                <div className="rounded-2xl bg-softBg border border-sky-100 p-4 space-y-3">
                  <p className="font-semibold text-slate-900">Scenariul D</p>
                  <p>
                    <strong>Ai pensie din România, dar încă lucrezi în străinătate.</strong><br />
                    Situație delicată, mai ales pentru pensia anticipată sau boală.
                  </p>
                </div>

                <div className="rounded-2xl bg-softBg border border-sky-100 p-4 space-y-3">
                  <p className="font-semibold text-slate-900">Scenariul E</p>
                  <p>
                    <strong>Primești pensie din două țări, dar locuiești într-o a treia.</strong><br />
                    Ex.: pensie din Germania + Italia, dar trăiești în Spania. 
                    Aici adresele și certificatele de viață sunt critice.
                  </p>
                </div>
              </div>

              {/* DIFERENTE */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900">
                  1.5. Diferența dintre pensie internațională și pensie comunitară
                </h3>

                <p><strong>Pensie comunitară (UE + UK prin acord):</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>se adună anii lucrați în toate țările;</li>
                  <li>fiecare stat plătește partea lui;</li>
                  <li>procedurile sunt standardizate.</li>
                </ul>

                <p className="mt-2"><strong>Pensie internațională (acorduri bilaterale):</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>folosită pentru Canada, Israel, Turcia, Serbia, Moldova etc.;</li>
                  <li>regulile diferă mult de la stat la stat.</li>
                </ul>

                <p className="mt-2">
                  Important: <strong>plata pensiei nu depinde dacă țara este în UE</strong>. 
                  Depinde de regulile contului bancar și ale instituției care plătește.
                </p>
              </div>

              {/* CUM SE PLATESTE */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900">
                  1.6. Cum se plătește pensia dacă locuiești în alt stat decât cel care o plătește
                </h3>

                <p className="font-semibold text-slate-800">Modelul 1 – Plata într-un cont din statul care plătește pensia</p>
                <p>Ex.: pensie italiană → cont italian. Este cea mai simplă variantă.</p>

                <p className="font-semibold text-slate-800">Modelul 2 – Plata într-un cont din alt stat UE</p>
                <p>Funcționează prin transfer SEPA: Italia → România, Spania → România etc.</p>

                <p className="font-semibold text-slate-800">Modelul 3 – Plata internațională oriunde în lume</p>
                <p>Unele state permit plata globală (UK, Canada), altele nu.</p>
              </div>

              {/* DE CE CONTEAZA */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  1.7. De ce este important să înțelegi corect aceste sensuri
                </h3>
                <p className="text-slate-700">
                  Majoritatea problemelor apar din confuzii:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>„statul știe adresa mea” – nu știe;</li>
                  <li>„pot închide contul, banii intră în altul automat” – nu intră;</li>
                  <li>„pensia se transferă la Casa de Pensii din România” – nu se transferă;</li>
                  <li>„nu trimit certificatul de viață, n-are nimic” – pensia se suspendă.</li>
                </ul>

                <p className="mt-3 text-slate-700">
                  În acest ghid vei înțelege exact, pas cu pas, cum se plătește pensia, 
                  cum o păstrezi activă, cum anunți schimbările și cum eviți blocările.
                </p>
              </div>
            </div>
          </section>

          {/* 2. LOCUIEȘTI ÎN ROMÂNIA ȘI PRIMEȘTI PENSIE DIN ALTE ȚĂRI – VERSIUNE EXTINSĂ */}
          <section id="romania-beneficiar" className="bg-softBg">
            <div className="section-container py-10 lg:py-14 space-y-8 text-slate-800">

              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                2. Locuiești în România și primești pensie din alte țări – tot ce trebuie să știi
              </h2>

              <p className="text-lg text-slate-700">
                Este una dintre cele mai frecvente situații în rândul românilor care au lucrat în străinătate. 
                Te-ai întors în România, ai domiciliul aici, dar primești pensie din Italia, Spania, Germania, 
                UK, Belgia, Olanda, Austria sau alte state.  
              </p>

              <p>
                Partea bună este că <strong>nu ești obligat să locuiești în țara care îți plătește pensia</strong>.  
                Partea complicată este că trebuie să respecți anumite reguli administrative pentru ca plata 
                să nu se blocheze.
              </p>

              {/* 2.1 ÎN CE CONT INTRĂ PENSIA */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  2.1. În ce cont intră pensia dacă locuiești în România?
                </h3>

                <p>
                  Fiecare stat are propriile proceduri, dar majoritatea permit două variante:
                </p>

                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Cont bancar în țara plătitoare</strong>  
                    <br />Exemplu: pensie italiană → cont în Italia / pensie germană → cont în Germania.
                  </li>
                  <li>
                    <strong>Cont bancar din România</strong>  
                    <br />Unele state permit virarea pensiei într-un cont deschis în România, în lei sau în valută.
                  </li>
                </ul>

                <p>
                  Mulți români aleg, după întoarcerea în țară, să închidă conturile străine și să primească 
                  pensia direct în România. Este perfect posibil, dar trebuie anunțate toate instituțiile 
                  implicate.
                </p>

                <div className="rounded-2xl bg-white border border-slate-200 p-4 text-sm">
                  <p className="font-semibold text-slate-900">Important</p>
                  <p className="text-slate-700">
                    Transferul pensiei într-un cont din România nu se face „automat”, indiferent ce spune banca.  
                    <strong>Tu trebuie să trimiți formularul oficial</strong> către instituția de pensii 
                    din acel stat.
                  </p>
                </div>
              </div>

              {/* 2.2 CE TREBUIE SĂ ANUNȚI */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  2.2. Ce trebuie să anunți după ce te-ai întors în România
                </h3>

                <p>
                  Cele două informații critice pentru orice instituție de pensii sunt:
                </p>

                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Noua ta adresă din România</strong></li>
                  <li><strong>Noul cont bancar</strong> (dacă vrei plata în România)</li>
                </ul>

                <p>
                  Majoritatea statelor trimit încă scrisori fizice – notificări, decizii, cereri de clarificare, 
                  certificate de viață. Dacă scrisorile ajung la o adresă veche, poți pierde termene importante 
                  și plata se poate suspenda.
                </p>

                <div className="rounded-2xl bg-white border border-amber-100 p-4 text-sm">
                  <p className="font-semibold text-slate-900 mb-1">Greșeală frecventă</p>
                  <p className="text-slate-700">
                    Mulți pensionari se întorc în România și cred că „statul străin află automat”.  
                    Nu află.  
                    <strong>Doar tu poți anunța schimbarea adresei</strong>.  
                    Dacă nu trimiți formularul, scrisorile ajung în străinătate și plata poate fi oprită.
                  </p>
                </div>
              </div>

              {/* 2.3 AVANTAJE + DEZAVANTAJE CONT ÎN ROMÂNIA */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  2.3. Avantajele și dezavantajele plății într-un cont din România
                </h3>

                <p className="font-semibold text-slate-800">Avantaje</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>nu mai depinzi de o bancă străină;</li>
                  <li>poți merge la ghișeu în România, dacă ai nevoie;</li>
                  <li>primești banii în același cont ca pensia românească;</li>
                  <li>nu trebuie să păstrezi carduri și conturi din străinătate.</li>
                </ul>

                <p className="font-semibold text-slate-800 mt-3">Dezavantaje</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>posibile comisioane de conversie valutară;</li>
                  <li>sumele pot ajunge cu 1–2 zile întârziere;</li>
                  <li>în anumite state trebuie completate formulare suplimentare.</li>
                </ul>

                <p>
                  Pentru majoritatea pensionarilor, avantajele depășesc dezavantajele, mai ales dacă nu mai au 
                  motive să păstreze un cont bancar în străinătate.
                </p>
              </div>

              {/* 2.4 CE DOCUMENTE ÎȚI POATE CER STAȚUL */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  2.4. Ce documente îți poate cere statul străin după ce te muți în România
                </h3>

                <p>
                  Pentru actualizarea adresei sau a contului, instituția de pensii îți poate cere:
                </p>

                <ul className="list-disc list-inside space-y-2">
                  <li>formular tipizat pentru schimbarea contului bancar;</li>
                  <li>copie după cartea de identitate;</li>
                  <li>document oficial cu noua adresă (contract, adeverință de la primărie etc.);</li>
                  <li>uneori, un extras de cont cu IBAN-ul tău din România;</li>
                  <li>la UK sau Germania: o semnătură certificată sau verificată de bancă/notar.</li>
                </ul>

                <p>
                  Procedura diferă de la stat la stat, dar logica este aceeași: instituția vrea să știe unde 
                  locuiești și unde să trimită banii.
                </p>
              </div>

              {/* 2.5 CERTIFICAT DE VIAȚĂ */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  2.5. Certificatul de viață – obligatoriu pentru multe state
                </h3>

                <p>
                  Multe țări trimit anual sau o dată la doi ani un formular numit 
                  <strong> certificat de viață</strong>.  
                  Scopul este simplu: să confirme că persoana care primește pensia este în viață și 
                  locuiește la adresa declarată.
                </p>

                <p className="font-semibold">Pașii obișnuiți:</p>

                <ul className="list-disc list-inside space-y-2">
                  <li>primești formularul prin poștă (la adresa din România);</li>
                  <li>îl completezi cu datele tale;</li>
                  <li>îl duci la primărie, notar sau consulat pentru confirmare;</li>
                  <li>îl trimiți înapoi în statul care îți plătește pensia.</li>
                </ul>

                <div className="rounded-2xl bg-white border border-rose-200 p-4 text-sm">
                  <p className="font-semibold text-rose-700">
                    Atenție la termene!
                  </p>
                  <p className="text-slate-700">
                    Dacă nu trimiți certificatul de viață la timp, plata pensiei se suspendă. 
                    Banii nu se pierd, dar procedura de reactivare poate dura câteva luni.
                  </p>
                </div>
              </div>

              {/* 2.6 CE SE ÎNTÂMPLĂ DACĂ NU AJUNG BANII */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  2.6. Ce se întâmplă dacă pensia nu mai intră în cont
                </h3>

                <p>
                  Dacă locuiești în România și nu a intrat pensia străină la data obișnuită, 
                  de obicei cauza este una dintre:
                </p>

                <ul className="list-disc list-inside space-y-2">
                  <li>cont bancar închis sau schimbat fără notificare;</li>
                  <li>certificat de viață nepredat la timp;</li>
                  <li>adresă veche în sistemul statului străin;</li>
                  <li>plată respinsă de bancă din motive tehnice.</li>
                </ul>

                <p>
                  Înainte să contactezi instituția de pensii din străinătate, verifică la banca din România 
                  dacă nu există o plată respinsă. De multe ori acesta este motivul real.
                </p>
              </div>

              {/* 2.7 CHECKLIST */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  2.7. Checklist simplu pentru românii întorși în țară
                </h3>

                <ul className="list-disc list-inside space-y-2">
                  <li>Am anunțat noua adresă din România?</li>
                  <li>Am trimis noul IBAN din România?</li>
                  <li>Am păstrat copii după toate documentele?</li>
                  <li>Am numărul dosarului și datele de contact ale instituției din străinătate?</li>
                  <li>Am verificat la bancă dacă există plăți respinse?</li>
                </ul>

                <p className="text-slate-700">
                  Dacă toate acestea sunt în regulă, plata pensiei ar trebui să fie stabilă și previzibilă.  
                  Majoritatea problemelor apar din schimbări neanunțate sau documente trimise târziu.
                </p>
              </div>

            </div>
          </section>

          {/* 3. LOCUIEȘTI ÎN STRĂINĂTATE ȘI PRIMEȘTI PENSIE DIN ROMÂNIA – VERSIUNE EXTINSĂ */}
          <section id="strainatate-beneficiar" className="bg-white">
            <div className="section-container py-10 lg:py-14 space-y-8 text-slate-800">

              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                3. Locuiești în străinătate și primești pensie din România – ghid complet
              </h2>

              <p className="text-lg text-slate-700">
                Zeci de mii de români locuiesc în Italia, Spania, Germania, UK, Franța sau alte țări,
                dar continuă să primească <strong>pensia din România</strong>.  
                Procedura este simplă dacă înțelegi câteva reguli esențiale: unde intră banii, ce trebuie
                anunțat, cum funcționează certificatul de viață și ce faci dacă plata se blochează.
              </p>

              <p>
                În această secțiune îți explic, pas cu pas, tot ce trebuie să știi ca să primești liniștit
                pensia din România, indiferent unde locuiești.
              </p>

              {/* 3.1 CONT BANCAR */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  3.1. În ce cont intră pensia din România dacă locuiești în străinătate?
                </h3>

                <p>
                  Casa Națională de Pensii Publice (CNPP) plătește pensiile în două moduri:
                </p>

                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>într-un cont bancar din România</strong> (cea mai frecventă variantă);
                  </li>
                  <li>
                    <strong>prin mandat poștal</strong> (doar dacă ai adresă în România – nepractic pentru cei plecați).
                  </li>
                </ul>

                <p>
                  Dacă locuiești în străinătate, ai nevoie de <strong>un cont activ în România</strong>, 
                  pe numele tău. Poți opera totul din străinătate prin internet banking.
                </p>

                <div className="rounded-2xl bg-softBg border border-sky-100 p-4 text-sm">
                  <p className="font-semibold text-slate-900">
                    Recomandare:
                  </p>
                  <p className="text-slate-700">
                    Alege o bancă din România care îți oferă internet banking stabil și comisioane mici.
                    Băncile mari (BCR, BT, ING, BRD, UniCredit) sunt cel mai des folosite de pensionarii din străinătate.
                  </p>
                </div>
              </div>

              {/* 3.2 SCHIMBAREA ADRESEI */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  3.2. Ai pensie din România? Atunci adresa ta actuală este extrem de importantă
                </h3>

                <p>
                  Chiar dacă primești pensia în cont bancar, Casa de Pensii îți poate trimite:
                </p>

                <ul className="list-disc list-inside space-y-2">
                  <li>decizii de pensionare sau recalculare;</li>
                  <li>înștiințări despre drepturi sau obligații;</li>
                  <li>cereri de clarificare a unor perioade de vechime;</li>
                  <li>
                    <strong>solicitări de certificat de viață</strong> (în anumite cazuri).
                  </li>
                </ul>

                <p>
                  Dacă tu locuiești în Italia, Spania, UK sau Germania, dar adresa din România este veche,
                  scrisorile se pierd, iar Casa poate considera că nu ai răspuns la timp.
                </p>

                <div className="rounded-2xl bg-white border border-amber-200 p-4 text-sm">
                  <p className="font-semibold text-slate-900">Ce se poate întâmpla:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>pot apărea întârzieri în plata pensiei;</li>
                    <li>poți pierde notificări importante;</li>
                    <li>
                      în cazuri rare, <strong>pensia poate fi suspendată temporar</strong> până la clarificare.
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3.3 CERTIFICAT DE VIAȚĂ */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  3.3. Certificatul de viață – când ți-l poate cere România?
                </h3>

                <p>
                  România nu cere automat certificate de viață pentru pensionarii din străinătate.  
                  Cererea apare în trei situații:
                </p>

                <ul className="list-disc list-inside space-y-2">
                  <li>schimbare de adresă sau date personale;</li>
                  <li>diferențe între evidențele caselor teritoriale;</li>
                  <li>verificări ocazionale la nivel național.</li>
                </ul>

                <p>
                  Dacă primești o astfel de solicitare, procedura este simplă:
                </p>

                <ul className="list-disc list-inside space-y-2">
                  <li>completezi formularul primit;</li>
                  <li>mergi la consulat, primărie sau notar din țara în care locuiești;</li>
                  <li>trimiți documentul înapoi la Casa de Pensii.</li>
                </ul>

                <div className="rounded-2xl bg-softBg border border-sky-100 p-4 text-sm">
                  <p className="font-semibold text-slate-900">Atenție:</p>
                  <p className="text-slate-700">
                    Dacă nu trimiți certificatul de viață în termen, plata pensiei poate fi suspendată.
                    Nu pierzi banii, dar procedura de reluare poate dura câteva luni.
                  </p>
                </div>
              </div>

              {/* 3.4 DECLARAȚIA PE PROPRIE RĂSPUNDERE */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  3.4. Declarația pe propria răspundere – ce este și de ce se cere uneori
                </h3>

                <p>
                  Dacă locuiești în alt stat și ai pensie din România, Casa de Pensii îți poate cere
                  o <strong>declarație pe propria răspundere privind domiciliul sau veniturile</strong>.
                </p>

                <p>
                  Acest document este cerut în special:
                </p>

                <ul className="list-disc list-inside space-y-2">
                  <li>la pensia anticipată – pentru că nu ai voie să ai venituri peste limita legală;</li>
                  <li>la pensia de urmaș – pentru verificarea situației copilului/studentului;</li>
                  <li>în caz de neclarități între instituții.</li>
                </ul>

                <p>
                  Procedura este simplă: completezi formularul, îl semnezi și îl trimiți prin poștă sau email
                  către Casa de Pensii din România.
                </p>
              </div>

              {/* 3.5 PROBLEME FRECVENTE */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  3.5. Probleme frecvente pentru cei care locuiesc în străinătate
                </h3>

                <p>Iată cele mai întâlnite cinci probleme:</p>

                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Pensia nu intră în cont</strong> – de obicei din cauza unui cont expirat sau a unei plăți respinse.
                  </li>
                  <li>
                    <strong>Ai schimbat adresa, dar nu ai anunțat Casa de Pensii</strong>.
                  </li>
                  <li>
                    <strong>Ai primit cerere de clarificare, dar scrisoarea nu a ajuns la tine.</strong>
                  </li>
                  <li>
                    <strong>Păstrezi actele doar în format fizic</strong> – recomandat este să le ai și digital.
                  </li>
                  <li>
                    <strong>Nu știi la ce Casa Teritorială aparții</strong> – fiecare persoană are un dosar „mamă”.
                  </li>
                </ul>

                <div className="rounded-2xl bg-white border border-rose-200 p-4 text-sm">
                  <p className="font-semibold text-slate-900 mb-1">Problema #1 în practică</p>
                  <p className="text-slate-700">
                    80% dintre blocările de pensie pentru românii din străinătate apar din cauza 
                    unui <strong>cont bancar închis sau schimbat fără notificare către Casa de Pensii</strong>.
                  </p>
                </div>
              </div>

              {/* 3.6 CE TREBUIE SĂ ANUNȚI */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  3.6. Ce trebuie să anunți obligatoriu dacă locuiești în străinătate
                </h3>

                <p>Există trei informații critice:</p>

                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Schimbarea adresei</strong></li>
                  <li><strong>Schimbarea contului bancar</strong></li>
                  <li><strong>Schimbarea statutului civil</strong> (căsătorie, divorț, deces)</li>
                </ul>

                <p>
                  Orice schimbare se trimite în scris. Casa de Pensii nu poate actualiza datele 
                  „din oficiu” pe baza altor instituții.
                </p>
              </div>

              {/* 3.7 CUM TE ORGANIZEZI */}
              <div className="rounded-2xl bg-softBg border border-slate-200 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  3.7. Cum îți organizezi documentele ca să eviți problemele
                </h3>

                <p>
                  Recomand să ai un dosar digital (Google Drive, OneDrive sau Dropbox) în care să păstrezi:
                </p>

                <ul className="list-disc list-inside space-y-1">
                  <li>decizia de pensionare din România;</li>
                  <li>ultimele 12 extrase de cont;</li>
                  <li>copie după CI sau pașaport;</li>
                  <li>dovada domiciliului din străinătate;</li>
                  <li>ultimele comunicări de la Casa de Pensii.</li>
                </ul>

                <p className="text-slate-700">
                  Orice clarificare va merge mult mai repede dacă ai documentele pregătite.
                </p>
              </div>

              {/* 3.8 MINI-CONCLUZIE */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-3">
                <h3 className="text-xl font-semibold text-slate-900">
                  3.8. Concluzie – pensia din România se poate primi fără probleme și din străinătate
                </h3>

                <p>
                  Deși pare complicat la început, sistemul funcționează bine dacă respecți cele 3 reguli de aur:
                </p>

                <ul className="list-disc list-inside space-y-1">
                  <li>păstrează contul bancar din România activ;</li>
                  <li>anunță orice schimbare de adresă sau statut;</li>
                  <li>păstrează documentele digital, nu doar pe hârtie.</li>
                </ul>

                <p>
                  Cu aceste lucruri în ordine, poți locui liniștit în orice țară și vei primi pensia românească
                  fără întreruperi.
                </p>
              </div>

            </div>
          </section>

          {/* 4. ȚĂRI POPULARE – ITALIA, SPANIA, UK, GERMANIA, AUSTRIA, BELGIA, OLANDA, FRANȚA */}
<section id="tari-populare" className="bg-softBg">
  <div className="section-container py-10 lg:py-14 space-y-10 text-slate-800">

    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
      4. Italia, Spania, UK, Germania, Austria, Belgia, Olanda, Franța – situații frecvente pentru români
    </h2>

    <p className="text-lg text-slate-700">
      Majoritatea românilor care primesc pensie din străinătate o primesc din Italia, Spania, Germania sau UK,
      dar există și foarte multe pensii din Austria, Belgia, Olanda și Franța.  
      Fiecare stat are regulile lui, dar problemele reale sunt asemănătoare: schimbarea adresei, conturi bancare,
      certificate de viață, termene-limită și proceduri administrative diferite.
    </p>

    <p>
      În această secțiune îți explic tot ce trebuie să știi pentru cele mai importante opt state în care au lucrat românii:
      <strong> Italia, Spania, UK, Germania, Austria, Belgia, Olanda și Franța.</strong>
    </p>

    {/* GRID PE 8 STATE */}
    <div className="grid lg:grid-cols-2 gap-8">

      {/* 4.1 ITALIA */}
      <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4 text-sm">
        <h3 className="text-xl font-semibold text-slate-900">4.1. Italia – INPS</h3>

        <p>
          Italia este țara din UE de unde românii primesc cele mai multe pensii.  
          INPS este instituția responsabilă cu plata pensiilor, iar comunicarea se face în special prin poștă.
        </p>

        <ul className="list-disc list-inside space-y-1">
          <li>Pensia se plătește, în mod normal, într-un cont italian.</li>
          <li>
            Poți solicita plata într-un <strong>cont din România</strong>, în euro, dacă depui formularul dedicat.
          </li>
          <li>
            INPS trimite anual <strong>certificatul de viață</strong> prin Citibank.
          </li>
          <li>Dacă nu trimiți certificatul la timp, plata se suspendă automat.</li>
          <li>Italia anunță întotdeauna prin scrisoare orice schimbare.</li>
        </ul>

        <div className="rounded-xl bg-softBg border border-sky-100 p-3 text-xs">
          <strong>Important:</strong> INPS nu acceptă declarații telefonice. Totul se face în scris.
        </div>
      </div>

      {/* 4.2 SPANIA */}
      <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4 text-sm">
        <h3 className="text-xl font-semibold text-slate-900">4.2. Spania – Seguridad Social</h3>

        <p>
          Spania are un sistem modern, multe proceduri se pot face online, dar românii întâmpină dificultăți
          din cauza limbii și a contului „Cl@ve”, necesar pentru acces în portal.
        </p>

        <ul className="list-disc list-inside space-y-1">
          <li>Pensia se plătește, în general, într-un cont spaniol.</li>
          <li>Poți cere plata într-un cont din România (SEPA).</li>
          <li>Spania cere certificat de viață anual pentru cei din România.</li>
          <li>Dacă locuiești în Spania, în multe cazuri nu mai este necesar certificatul.</li>
          <li>Comunicarea se face prin scrisori și notificări digitale.</li>
        </ul>

        <div className="rounded-xl bg-softBg border border-amber-100 p-3 text-xs">
          <strong>Recomandare:</strong> dacă ai lucrat în Spania, păstrează toate dovezile de muncă – Spania verifică frecvent perioadele incomplete.
        </div>
      </div>

      {/* 4.3 UK */}
      <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4 text-sm">
        <h3 className="text-xl font-semibold text-slate-900">4.3. UK – The Pension Service</h3>

        <p>
          Regatul Unit nu mai este membru UE, dar drepturile românilor sunt protejate prin Acordul post-Brexit.
          Procedurile rămân asemănătoare cu cele din perioada când UK era în Uniune.
        </p>

        <ul className="list-disc list-inside space-y-1">
          <li>Pensia britanică se poate plăti oriunde în lume.</li>
          <li>Poți primi pensia în cont din UK sau din România.</li>
          <li>
            UK trimite cereri de <strong>prova de viață</strong> (life certificate) – dacă nu îl trimiți, plata se oprește.
          </li>
          <li>Răspunsurile se trimit prin poștă, nu prin email.</li>
          <li>Comunicarea în engleză este obligatorie.</li>
        </ul>

        <div className="rounded-xl bg-softBg border border-rose-100 p-3 text-xs">
          <strong>Greșeală frecventă:</strong> românii închid contul din UK înainte de a trimite noul cont la The Pension Service.
        </div>
      </div>

      {/* 4.4 GERMANIA */}
      <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4 text-sm">
        <h3 className="text-xl font-semibold text-slate-900">4.4. Germania – Deutsche Rentenversicherung</h3>

        <p>
          Germania este foarte strictă administrativ. Dacă ai lucrat aici, este esențial să păstrezi toate
          documentele de la angajatori, pentru că verificările sunt detaliate.
        </p>

        <ul className="list-disc list-inside space-y-1">
          <li>Pensia se plătește într-un cont german sau în alt cont SEPA.</li>
          <li>Germania cere anual certificat de viață.</li>
          <li>Comunicările sunt detașate, clare și obligatorii.</li>
          <li>Anunțarea schimbării adresei se face prin formular standard.</li>
          <li>Germania nu acceptă „declarații telefonice”. Totul trebuie în scris.</li>
        </ul>

        <div className="rounded-xl bg-softBg border border-sky-100 p-3 text-xs">
          <strong>Sfat:</strong> Germania are proceduri lente – începe orice demers cu cel puțin 60 zile înainte.
        </div>
      </div>

      {/* 4.5 AUSTRIA */}
      <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4 text-sm">
        <h3 className="text-xl font-semibold text-slate-900">4.5. Austria – PVA</h3>

        <p>
          Austria are proceduri eficiente și clare, dar cere documente exacte. Românii primesc des
          cereri de clarificare a perioadelor de muncă.
        </p>

        <ul className="list-disc list-inside space-y-1">
          <li>Pensia se poate plăti în România fără probleme.</li>
          <li>Austria cere uneori certificat de viață o dată la 2 ani.</li>
          <li>Scrisorile se trimit doar la adresa declarată – dacă ai schimbat țara, trebuie anunțat imediat.</li>
          <li>PVA este una dintre cele mai stricte instituții în privința autentificării documentelor.</li>
        </ul>

        <div className="rounded-xl bg-softBg border border-amber-100 p-3 text-xs">
          <strong>Important:</strong> Austria nu acceptă acte incomplete sau copii nefotografiate corect.
        </div>
      </div>

      {/* 4.6 BELGIA */}
      <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4 text-sm">
        <h3 className="text-xl font-semibold text-slate-900">4.6. Belgia – SFP</h3>

        <p>
          Belgia plătește pensiile foarte corect, dar comunică în franceză sau neerlandeză.  
          Mulți români au dificultăți în a înțelege scrisorile primite.
        </p>

        <ul className="list-disc list-inside space-y-1">
          <li>Pensia se plătește lunar, în cont bancar.</li>
          <li>Certificatele de viață se trimit anual, prin poștă.</li>
          <li>Belgia verifică foarte atent perioadele de muncă înainte de 2010.</li>
          <li>Este necesară anunțarea promptă a noii adrese.</li>
        </ul>

        <div className="rounded-xl bg-softBg border border-sky-100 p-3 text-xs">
          <strong>Sfat:</strong> păstrează toate contractele de muncă – Belgia cere adesea dovezi suplimentare.
        </div>
      </div>

      {/* 4.7 OLANDA */}
      <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4 text-sm">
        <h3 className="text-xl font-semibold text-slate-900">4.7. Olanda – SVB</h3>

        <p>
          Olanda (SVB) are una dintre cele mai clare proceduri din Europa, dar pensia olandeză depinde
          de anii de rezidență, nu doar de muncă.
        </p>

        <ul className="list-disc list-inside space-y-1">
          <li>Pensia se poate plăti internațional, fără probleme.</li>
          <li>Olanda folosește mult comunicarea digitală, nu doar poșta.</li>
          <li>
            Certificatul de viață este cerut periodic, mai ales dacă locuiești într-o țară non-UE.
          </li>
          <li>SVB oferă răspunsuri rapide prin email (rar în alte state).</li>
        </ul>

        <div className="rounded-xl bg-softBg border border-green-100 p-3 text-xs">
          <strong>Recomandare:</strong> activează-ți contul pe platforma „Mijn SVB” – economisești timp la orice solicitare.
        </div>
      </div>

      {/* 4.8 FRANȚA */}
      <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4 text-sm">
        <h3 className="text-xl font-semibold text-slate-900">4.8. Franța – Carsat / CNAV</h3>

        <p>
          Franța are un sistem complex (inclusiv pensii complementare), iar românii primesc adesea scrisori
          multiple de la instituții diferite.
        </p>

        <ul className="list-disc list-inside space-y-1">
          <li>Pensia de bază este plătită de Carsat/CNAV.</li>
          <li>Pensia complementară este plătită separat, de Agirc-Arrco.</li>
          <li>Toate schimbările de adresă trebuie anunțate ambelor instituții.</li>
          <li>Certificatul de viață se cere anual, pentru majoritatea beneficiarilor.</li>
        </ul>

        <div className="rounded-xl bg-softBg border border-rose-100 p-3 text-xs">
          <strong>Important:</strong> dacă ai lucrat în Franța, verifică ambele dosare – mulți români nu știu că au dreptul și la pensia complementară.
        </div>
      </div>

    </div>

    {/* CONCLUZIE PE SECȚIUNEA 4 */}
    <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-3 text-sm">
      <h3 className="text-lg font-semibold text-slate-900">
        Concluzie: fiecare țară are regulile ei, dar problemele reale sunt aceleași
      </h3>
      <p>
        Indiferent dacă primești pensie din Italia, Spania, Germania, UK, Austria, Olanda, Belgia sau Franța,
        există patru lucruri esențiale pe care trebuie să le ții sub control:
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li><strong>Adresa actuală</strong> – toate instituțiile trimit notificări obligatorii.</li>
        <li><strong>Contul bancar</strong> – orice schimbare trebuie anunțată înainte să închizi contul vechi.</li>
        <li><strong>Certificatele de viață</strong> – dacă nu le trimiți, plata se suspendă.</li>
        <li><strong>Documentele de muncă</strong> – fiecare țară își calculează singură pensia, pe baza propriilor dovezi.</li>
      </ul>

      <p>
        Odată ce înțelegi aceste reguli, gestionarea pensiei din străinătate devine mult mai simplă.
      </p>
    </div>

  </div>
</section>

          {/* 5. SCHIMBAREA ADRESEI, A CONTULUI BANCAR ȘI CERTIFICATUL DE VIAȚĂ – SECȚIUNE EXTINSĂ */}
<section id="adresa-cont" className="bg-white">
  <div className="section-container py-10 lg:py-14 space-y-10 text-slate-800">

    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
      5. Schimbarea adresei, a contului bancar și certificatul de viață – cele mai importante reguli
    </h2>

    <p className="text-lg text-slate-700">
      Oricât de bine funcționează un sistem de pensii, totul se poate bloca dacă instituția nu mai poate comunica 
      cu tine. Din acest motiv, <strong>adresa, contul bancar și certificatul de viață</strong> sunt cele trei elemente 
      esențiale care îți mențin plata activă, indiferent în ce țară trăiești.
    </p>

    <p>
      Această secțiune îți explică exact ce trebuie să știi pentru a evita suspendările, întârzierile și 
      blocările de plată, indiferent dacă pensia vine din România sau dintr-un alt stat.
    </p>

    {/* 5.1 DE CE ADRESA ȘI CONTUL BANCAR SUNT CRITICE */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-900">
        5.1. De ce sunt atât de importante adresa și contul bancar?
      </h3>

      <p>
        Pentru instituțiile de pensii, <strong>adresa</strong> și <strong>contul bancar</strong> sunt legătura oficială cu tine.
        Dacă una dintre ele nu este actuală, sistemul presupune că:
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>nu ai primit notificările trimise;</li>
        <li>nu ai răspuns la o solicitare importantă;</li>
        <li>nu mai locuiești la adresa declarată;</li>
        <li>sau nu mai poți fi contactat (risc de fraudă sau plată necuvenită).</li>
      </ul>

      <div className="rounded-2xl bg-softBg border border-rose-200 p-4 text-sm">
        <p className="font-semibold text-slate-900">Consecințe posibile:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>suspendarea temporară a plății pensiei</strong>;</li>
          <li>returnarea plății către statul plătitor (cont închis);</li>
          <li>întârzieri de 1–6 luni până la clarificare;</li>
          <li>nevoie de reactivare prin proceduri birocratice.</li>
        </ul>
      </div>
    </div>

    {/* 5.2 SCHIMBAREA ADRESEI */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-900">
        5.2. Schimbarea adresei – ce trebuie să anunți și de ce imediat
      </h3>

      <p>
        Adresa este adesea motivul #1 pentru blocarea plăților. Dacă te muți și nu anunți instituția de pensii 
        din statul plătitor, scrisorile continuă să fie trimise la vechea adresă.
      </p>

      <p>De aceea, trebuie să anunți:</p>

      <ul className="list-disc list-inside space-y-2">
        <li><strong>pensiile din România</strong>, la Casa Teritorială;</li>
        <li><strong>pensiile din Italia</strong> – INPS;</li>
        <li><strong>pensiile din Spania</strong> – Seguridad Social;</li>
        <li><strong>pensiile din UK</strong> – The Pension Service;</li>
        <li><strong>pensiile din Germania</strong> – Deutsche Rentenversicherung;</li>
        <li>și orice alt stat de unde primești pensie.</li>
      </ul>

      <p>
        În majoritatea statelor, schimbarea adresei se face printr-un formular simplu care se trimite prin poștă.
      </p>

      <div className="rounded-2xl bg-softBg border border-sky-100 p-4 text-sm">
        <p className="font-semibold text-slate-900">Regulă de aur:</p>
        <p className="text-slate-700">
          <strong>Anunță noua adresă înainte să te muți efectiv</strong>, dacă este posibil.  
          Astfel, nicio scrisoare importantă nu se pierde între cele două locații.
        </p>
      </div>
    </div>

    {/* 5.3 SCHIMBAREA CONTULUI BANCAR */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-900">
        5.3. Schimbarea contului bancar – cea mai frecventă cauză de blocare a pensiei
      </h3>

      <p>
        Dacă ai schimbat banca sau ai închis contul în care intră pensia, trebuie obligatoriu să anunți 
        instituția de pensii <strong>înainte să închizi contul vechi</strong>.
      </p>

      <p>Ce se întâmplă dacă nu anunți:</p>

      <ul className="list-disc list-inside space-y-2">
        <li>Banca respinge plata;</li>
        <li>Banii se întorc la instituția de pensii;</li>
        <li>Pensia intră în „procedură de suspendare”;</li>
        <li>Trebuie să trimiți acte suplimentare pentru reactivare.</li>
      </ul>

      <div className="rounded-2xl bg-white border border-amber-100 p-4 text-sm">
        <p className="font-semibold text-slate-900">Important:</p>
        <p className="text-slate-700">
          70–80% dintre românii care au pensia blocată din Italia, Spania, UK sau Germania 
          ajung în această situație pentru că au schimbat banca fără să anunțe.
        </p>
      </div>

      <h4 className="text-lg font-semibold text-slate-900">
        Cum anunți schimbarea contului bancar
      </h4>

      <p>
        Fiecare stat are propriul formular. În general, trebuie să trimiți:
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>noul IBAN;</li>
        <li>numele băncii;</li>
        <li>dovada contului (extras de cont sau adeverință bancară);</li>
        <li>copie după un act de identitate.</li>
      </ul>

      <p>Termenul de procesare este între 2 și 12 săptămâni, în funcție de stat.</p>
    </div>

    {/* 5.4 CERTIFICATUL DE VIAȚĂ */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-900">
        5.4. Certificatul de viață – cel mai important document pentru cei care locuiesc în străinătate
      </h3>

      <p>
        Certificatul de viață este documentul prin care confirmi instituției de pensii că ești în viață 
        și ai dreptul în continuare la pensie.  
        Unele state îl cer anual, altele o dată la 2 ani, iar altele doar în situații speciale.
      </p>

      <p>
        Cele mai stricte țări în privința certificatului de viață:
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>Italia – anual (obligatoriu)</li>
        <li>Spania – anual (pentru românii din România)</li>
        <li>Germania – anual</li>
        <li>UK – periodic (la intervale variabile)</li>
        <li>Franța – anual</li>
        <li>Austria – periodic</li>
      </ul>

      <div className="rounded-2xl bg-softBg border border-sky-100 p-4 text-sm">
        <p className="font-semibold text-slate-900">
          Cum se completează certificatul:
        </p>

        <ul className="list-disc list-inside space-y-1">
          <li>completezi datele tale personale;</li>
          <li>te prezinți la o autoritate (consulat, primărie, notar);</li>
          <li>ștampila este obligatorie în majoritatea statelor;</li>
          <li>trimiți documentul prin poștă sau îl încarci online, dacă există portal.</li>
        </ul>
      </div>

      <div className="rounded-2xl bg-white border border-rose-200 p-4 text-sm">
        <p className="font-semibold text-slate-900">Atenție mare!</p>
        <p className="text-slate-700">
          Dacă nu trimiți certificatul de viață până la termen, pensia este 
          <strong>automată suspendată</strong> în toate țările menționate.
        </p>
      </div>
    </div>

    {/* 5.5 CUM EVITI BLOCARILE */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-900">
        5.5. Cum previi 99% dintre blocările de pensie
      </h3>

      <p>Respectă următoarele trei reguli de aur:</p>

      <ul className="list-disc list-inside space-y-2">
        <li>Anunță întotdeauna schimbarea adresei înainte de mutare.</li>
        <li>Nu închide niciodată un cont bancar până nu ai confirmarea că pensia a fost mutată.</li>
        <li>
          Trimite certificatul de viață în primele 48 de ore din momentul în care l-ai primit.
        </li>
      </ul>

      <p>
        Dacă urmezi acești pași, sistemul administrativ funcționează fără probleme, indiferent în 
        câte țări ai muncit.
      </p>
    </div>

    {/* 5.6 REZUMAT */}
    <div className="rounded-2xl bg-softBg border border-slate-200 p-6 space-y-3">
      <h3 className="text-xl font-semibold text-slate-900">5.6. Rezumatul secțiunii</h3>

      <ul className="list-disc list-inside space-y-1">
        <li><strong>Adresa și contul bancar</strong> sunt elementele cheie care mențin plata pensiei activă.</li>
        <li><strong>Schimbările se anunță întotdeauna în scris</strong> către fiecare țară.</li>
        <li><strong>Certificatul de viață</strong> este obligatoriu și trebuie trimis la timp.</li>
        <li>Majoritatea problemelor apar când oamenii presupun că „se transmite automat”.</li>
      </ul>

      <p>
        Odată ce înțelegi aceste trei lucruri, pensia ta rămâne stabilă, predictibilă și sigură, 
        indiferent în ce stat locuiești.
      </p>
    </div>

  </div>
</section>

          {/* 6. ÎNTÂRZIERI / BLOCĂRI – VERSIUNE EXTINSĂ */}
<section id="intarzieri" className="bg-softBg">
  <div className="section-container py-10 lg:py-14 space-y-8 text-slate-800">

    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
      6. Ce faci dacă pensia întârzie sau se blochează
    </h2>

    <p className="text-lg">
      Este una dintre cele mai stresante situații pentru pensionari: aștepți banii 
      și nu apar în cont. De cele mai multe ori, motivul este administrativ, nu 
      legat de dreptul tău la pensie.  
    </p>

    <p>
      În această secțiune găsești explicații simple, checklist-uri și exemple reale, 
      ca să știi exact ce să verifici și pe cine să contactezi.
    </p>

    {/* 6.1 VERIFICĂRILE INIȚIALE */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-900">
        6.1. Verificările pe care trebuie să le faci înainte să intri în panică
      </h3>

      <p>În peste jumătate dintre cazuri, problema este minoră și se rezolvă rapid.</p>

      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Data obișnuită de plată</strong>  
          – în unele state, data diferă în funcție de weekend sau sărbători.
        </li>
        <li>
          <strong>Ai schimbat recent contul bancar?</strong>  
          Dacă da, cel mai probabil plata a fost respinsă de bancă.
        </li>
        <li>
          <strong>Ai primit vreo scrisoare recent?</strong>  
          De exemplu, cerere de:</li>
          <ul className="list-disc list-inside ml-5 space-y-1">
            <li>certificat de viață,</li>
            <li>actualizare adresă,</li>
            <li>clarificarea unor perioade lucrate,</li>
            <li>copii după documente.</li>
          </ul>
        <li>
          <strong>Verifică extrasul bancar</strong> pentru plăți respinse.
        </li>
      </ul>

      <div className="rounded-2xl bg-white border border-slate-200 p-4 text-sm">
        <p className="font-semibold">Important</p>
        <p className="text-slate-700">
          Dacă banca din România respinge plata (de exemplu, din cauza unui cont închis), 
          statul străin nu mai retrimite automat banii. Trebuie să îi contactezi.
        </p>
      </div>
    </div>

    {/* 6.2 MOTIVE FRECVENTE DE BLOCAT */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-900">
        6.2. Cele mai frecvente motive pentru care pensia se blochează
      </h3>

      <p>
        Deși fiecare stat are particularități, motivele de mai jos apar constant 
        la mii de pensionari.
      </p>

      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>Certificatul de viață nu a fost trimis la timp</strong>  
          – este cauza nr. 1 în Italia, Spania, UK și Germania.
        </li>
        <li>
          <strong>Schimbarea adresei neanunțată</strong>  
          – scrisorile ajung la o adresă veche și nu afli că ți s-a cerut un document.
        </li>
        <li>
          <strong>Cont bancar închis sau modificat</strong>  
          – statul face plata, dar banca o respinge.
        </li>
        <li>
          <strong>Document lipsă în dosarul tău</strong>  
          – unele state cer periodic actualizări sau clarificări.
        </li>
        <li>
          <strong>Eroare tehnică în sistemul băncii</strong>  
          – rar, dar posibil; banca poate bloca tranzacția pentru verificări.
        </li>
      </ul>

      <p>
        Toate aceste situații se pot rezolva, dar unele necesită răbdare, 
        în special când instituția este suprasolicitată (ex. INPS Italia, DWP UK).
      </p>
    </div>

    {/* 6.3 PE CINE CONTACTEZI */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-900">
        6.3. Pe cine contactezi când pensia nu intră în cont
      </h3>

      <p>
        Ordinea este importantă, pentru că îți poate economisi zile întregi de așteptare.
      </p>

      <ol className="list-decimal list-inside space-y-3">
        <li>
          <strong>Banca ta din România</strong>  
          – verifică dacă există plăți respinse. De multe ori, aici este problema.
        </li>
        <li>
          <strong>Instituția de pensii din statul plătitor</strong>  
          – telefon, email, formular online sau portal oficial.
        </li>
        <li>
          <strong>Ambasada / consulatul statului străin</strong>  
          – în special util când nu te descurci cu limba sau ai un dosar complicat.
        </li>
      </ol>

      <div className="rounded-2xl bg-white border border-amber-100 p-4 text-sm">
        <p className="font-semibold text-slate-900">Sfat practic</p>
        <p className="text-slate-700">
          Când suni la instituția de pensii, ai pregătite: numărul de asigurat, 
          numărul dosarului, adresa, IBAN-ul și data ultimei plăți primite.  
          Vei primi răspuns mai rapid.
        </p>
      </div>
    </div>

    {/* 6.4 EXEMPLU REALISTIC */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-900">
        6.4. Exemplu real: de ce nu a intrat pensia în cont
      </h3>

      <div className="rounded-2xl bg-white border border-slate-200 p-5 space-y-3 text-sm">
        <p className="font-semibold text-slate-900">Situația</p>
        <p>
          O pensionară din Bacău nu a primit pensia din Italia în iunie. Sună la bancă, 
          unde află că plata a fost respinsă „cont închis”. Ea își schimbase banca, dar 
          nu anunțase INPS Italia.
        </p>

        <p className="font-semibold text-slate-900">Cum se rezolvă</p>
        <ul className="list-disc list-inside space-y-1">
          <li>completează formularul oficial pentru schimbarea contului;</li>
          <li>trimite extrasul de cont cu IBAN-ul nou;</li>
          <li>în 4–8 săptămâni, primește plata restantă + plata curentă.</li>
        </ul>

        <p className="text-slate-700">
          Concluzia: problema era simplă, dar dacă nu era investigată corect, 
          putea să dureze luni întregi.
        </p>
      </div>
    </div>

    {/* 6.5 CUM SĂ TE ORGANIZEZI */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-900">
        6.5. Cum să te organizezi ca să eviți problemele
      </h3>

      <p>
        Majoritatea blocajelor pot fi prevenite dacă ești organizat și ții evidența documentelor.
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>păstrează toate deciziile și scrisorile primite într-un dosar;</li>
        <li>salvează copii digitale (poze sau PDF) ale fiecărui document;</li>
        <li>notează numărul tău de dosar și data fiecărei conversații;</li>
        <li>verifică anual dacă adresa și contul sunt actualizate peste tot;</li>
        <li>păstrează chitanțele / dovezile când trimiți documente prin poștă.</li>
      </ul>

      <div className="rounded-2xl bg-white border border-rose-200 p-4 text-sm">
        <p className="font-semibold text-slate-900">Atenție</p>
        <p className="text-slate-700">
          Cele mai multe probleme apar la persoanele care nu vorbesc limba țării 
          plătitoare și nu înțeleg scrisorile primite. În astfel de situații, cere 
          ajutor din timp cuiva de încredere.
        </p>
      </div>
    </div>

    {/* 6.6 CHECKLIST FINAL */}
    <div className="rounded-2xl bg-white border border-slate-200 p-6">
      <h3 className="text-xl font-semibold text-slate-900 mb-2">
        6.6. Checklist rapid – înainte să suni la instituția de pensii
      </h3>

      <ul className="list-disc list-inside space-y-1 text-sm">
        <li>Am verificat extrasul bancar?</li>
        <li>Am primit vreo scrisoare recent?</li>
        <li>Am trimis certificatul de viață?</li>
        <li>Mi-am schimbat adresa sau contul bancar?</li>
        <li>Există plăți respinse în sistem?</li>
        <li>Am la îndemână numărul dosarului?</li>
      </ul>

      <p className="text-slate-700 mt-3">
        Dacă bifezi toate aceste puncte, vei putea explica clar situația și 
        problema se va rezolva mult mai rapid.
      </p>
    </div>

  </div>
</section>

          {/* 7. ÎNTOARCEREA ÎN ROMÂNIA – VERSIUNE EXTINSĂ */}
<section id="intoarcere" className="bg-white">
  <div className="section-container py-10 lg:py-14 space-y-8 text-slate-800">

    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
      7. Te întorci definitiv în România – ce trebuie să anunți pentru ca pensia să îți vină corect
    </h2>

    <p className="text-lg">
      Tot mai mulți români care au lucrat ani de zile în Italia, Spania, UK, Germania sau alte state 
      decid să se întoarcă acasă. Din punct de vedere emotional e un pas uriaș; din punct de vedere 
      administrativ, este un moment în care trebuie să te asiguri că pensiile tale din străinătate 
      continuă să fie plătite corect.
    </p>

    <p>
      Vestea bună: <strong>în aproape toate statele, poți continua să primești pensia în România</strong>, 
      fără probleme, atât timp cât anunți schimbările necesare.  
      Partea mai puțin plăcută: nimic nu se actualizează „automat”.
    </p>

    {/* 7.1 CHECKLIST */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-900">
        7.1. Checklist rapid pentru pensionarii care se mută în România
      </h3>

      <p>Înainte de mutare sau imediat după, notează-ți următoarele:</p>

      <ul className="list-disc list-inside space-y-2">
        <li><strong>Ce pensii primești și din ce țări?</strong> (România + alte state)</li>
        <li><strong>Ai toate deciziile de pensie?</strong> (foarte importante la orice clarificare)</li>
        <li><strong>În ce cont vrei să intre fiecare pensie?</strong></li>
        <li><strong>Care este adresa ta oficială din România?</strong></li>
        <li><strong>Ai copii digitale ale tuturor documentelor?</strong> (salvate în telefon / laptop)</li>
      </ul>

      <p>
        Acest mic inventar te ajută uriaș. Fără el, multe persoane uită să anunțe un stat sau nu mai găsesc 
        documentele necesare atunci când sunt solicitate.
      </p>
    </div>

    {/* 7.2 CE TREBUIE ANUNȚAT */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-900">
        7.2. Ce trebuie să anunți neapărat fiecărui stat care îți plătește o pensie
      </h3>

      <p>
        Există trei informații esențiale pe care <strong>fiecare instituție de pensii</strong> trebuie 
        să le primească de la tine:
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li><strong>Noua adresă din România</strong></li>
        <li><strong>Noul cont bancar (IBAN România)</strong></li>
        <li><strong>Copie după actul de identitate</strong> (uneori cerută pentru verificare)</li>
      </ul>

      <p>
        Multe blocări de pensie apar pentru că pensionarul crede că „statul știe”. Statul nu știe. 
        Fiecare schimbare trebuie anunțată <strong>în scris</strong>, prin formularele specifice.
      </p>

      <div className="rounded-2xl bg-softBg border border-amber-200 p-4 text-sm">
        <p className="font-semibold text-slate-900">De reținut:</p>
        <p className="text-slate-700">
          Dacă nu anunți noua adresă, scrisorile importante (ex: certificat de viață, clarificări) 
          vor ajunge în vechea țară. Dacă nu răspunzi la timp, plata se suspendă automat.
        </p>
      </div>
    </div>

    {/* 7.3 CUM ANUNȚI FIECARE STAT */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-900">
        7.3. Cum se anunță, în practică, schimbările
      </h3>

      <p>În funcție de țară, procedura arată așa:</p>

      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Italia (INPS)</strong>  
          – formular pentru schimbare adresă + formular pentru schimbare IBAN;  
          – uneori se cere copie CI și extras de cont.
        </li>
        <li>
          <strong>Spania</strong>  
          – se completează formular pentru domiciliu + cont bancar;  
          – se trimite prin poștă sau online, în funcție de regiune.
        </li>
        <li>
          <strong>UK (DWP)</strong>  
          – se anunță prin telefon sau scris;  
          – pentru schimbarea contului se cere uneori confirmare de la bancă.
        </li>
        <li>
          <strong>Germania</strong>  
          – cerere formală de schimbare adresă (Anschriftänderung);  
          – extras de cont cu IBAN și numele complet.
        </li>
        <li>
          <strong>Austria, Belgia, Olanda</strong>  
          – formulare simple, dar obligatorii;  
          – în Belgia se cere uneori certificare pentru semnătură.
        </li>
      </ul>

      <p>
        Toate aceste proceduri sunt gestionabile, important e să le trimiți devreme, 
        nu după ce s-a blocat plata.
      </p>
    </div>

    {/* 7.4 CE SE INTÂMPLĂ CU CERTIFICATUL DE VIAȚĂ */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-900">
        7.4. Certificatul de viață după întoarcerea în România
      </h3>

      <p>
        Indiferent unde locuiești, unele state cer periodic un <strong>certificat de viață</strong>. 
        El confirmă că ai dreptul în continuare la pensie.
      </p>

      <p>
        După mutare, formularul va veni <strong>la adresa ta din România</strong>, nu în străinătate.  
        De obicei trebuie:
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>să completezi datele tale;</li>
        <li>să mergi la primărie, notar sau medic de familie pentru confirmare;</li>
        <li>să trimiți documentul înapoi înainte de termen.</li>
      </ul>

      <div className="rounded-2xl bg-white border border-rose-200 p-4 text-sm">
        <p className="font-semibold">Atenție!</p>
        <p className="text-slate-700">
          Dacă nu trimiți certificatul de viață la timp, <strong>plata pensiei se suspendă automat</strong>.  
          Nu contează dacă locuiești în România sau altundeva.
        </p>
      </div>
    </div>

    {/* 7.5 CE SE ÎNTÂMPLĂ CU PENSIILE EXISTENTE */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-900">
        7.5. Pensia din România + pensiile din străinătate – cum vor fi plătite după întoarcere
      </h3>

      <p>
        Dacă ai lucrat în mai multe țări, vei avea în final <strong>mai multe pensii</strong>:
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>pensie din România (Casa de Pensii);</li>
        <li>pensie din Italia / Spania / UK / Germania etc. (statul străin).</li>
      </ul>

      <p>
        După întoarcere, toate pot fi plătite în România, în același cont sau în conturi diferite.  
        Nu trebuie să ai un cont separat pentru fiecare țară – doar dacă statul străin impune acest lucru.
      </p>
    </div>

    {/* 7.6 EXEMPLU PRACTIC */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-900">
        7.6. Exemplu simplu: cum procedează un pensionar întors din Spania
      </h3>

      <div className="rounded-2xl bg-softBg border border-sky-100 p-5 text-sm space-y-3">
        <p className="font-semibold text-slate-900">Situația</p>
        <p>
          Maria, 68 ani, se întoarce din Spania după 15 ani de muncă. Are pensie din România 
          și pensie din Spania.
        </p>

        <p className="font-semibold text-slate-900">Ce anunță</p>
        <ul className="list-disc list-inside space-y-1">
          <li>noua adresă din Botoșani;</li>
          <li>IBAN România pentru pensia spaniolă;</li>
          <li>copia cărții de identitate din România.</li>
        </ul>

        <p className="font-semibold text-slate-900">Rezultat</p>
        <p>
          În 4–10 săptămâni, Spania actualizează datele și plata se face direct în România.  
          Maria primește ambele pensii în același cont.
        </p>
      </div>
    </div>

    {/* 7.7 CONCLUZIE */}
    <div className="rounded-2xl bg-white border border-slate-200 p-5 space-y-3">
      <h3 className="text-xl font-semibold text-slate-900">7.7. Concluzie</h3>
      <p>
        Mutarea în România nu afectează dreptul la pensie.  
        Tot ce contează este să <strong>anunți corect schimbările</strong> și să păstrezi o evidență 
        clară a documentelor.
      </p>
      <p>
        Dacă pregătești dosarul din timp și trimiți formularele necesare, vei primi pensia fără 
        întreruperi, la fel ca înainte.
      </p>
    </div>

  </div>
</section>

          {/* 8. ÎNTREBĂRI FRECVENTE – VERSIUNE EXTINSĂ */}
<section id="intrebari" className="bg-softBg">
  <div className="section-container py-10 lg:py-14 space-y-8 text-slate-800">

    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
      8. Întrebări frecvente despre pensia în străinătate
    </h2>

    <p className="text-lg">
      Aici găsești răspunsuri clare și detaliate la cele mai întâlnite întrebări pe care 
      românii le au atunci când primesc pensie din străinătate sau s-au întors în România.  
      Informațiile sunt explicate simplu, cu exemple practice.
    </p>

    <div className="space-y-6 text-sm">

      {/* Q1 */}
      <div className="rounded-2xl border border-slate-100 bg-white p-5">
        <p className="font-semibold text-slate-900 mb-1">
          1. Pot primi pensie din străinătate dacă m-am întors definitiv în România?
        </p>
        <p>
          Da. Majoritatea statelor permit plata pensiei indiferent unde locuiești, atât timp 
          cât <strong>anunți noua adresă</strong> și, dacă este cazul, <strong>noul cont bancar</strong>.  
          Este esențial ca instituția care îți plătește pensia să te poată contacta.
        </p>
        <p className="mt-2">
          Nu pierzi niciun drept doar pentru că te-ai mutat. Singura condiție este să respecți 
          partea administrativă: formulare, confirmări, certificate de viață.
        </p>
      </div>

      {/* Q2 */}
      <div className="rounded-2xl border border-slate-100 bg-white p-5">
        <p className="font-semibold text-slate-900 mb-1">
          2. Pot muta pensia din străinătate într-un cont bancar din România?
        </p>
        <p>
          Da, în majoritatea cazurilor. Statele UE, dar și UK, permit virarea pensiei într-un 
          cont din România, atât timp cât IBAN-ul este pe numele tău.  
        </p>
        <p>
          Atenție însă la:
        </p>
        <ul className="list-disc list-inside mt-1 space-y-1">
          <li>comisioanele de conversie valutară;</li>
          <li>posibile întârzieri de 1–2 zile la transfer;</li>
          <li>necesitatea de a trimite extras de cont sau formular semnat.</li>
        </ul>
        <p className="text-slate-700 mt-2">
          Drepturile la pensie nu se pierd niciodată din cauza schimbării contului.
        </p>
      </div>

      {/* Q3 */}
      <div className="rounded-2xl border border-slate-100 bg-white p-5">
        <p className="font-semibold text-slate-900 mb-1">
          3. Ce este certificatul de viață și de ce este atât de important?
        </p>
        <p>
          Este un document prin care statul confirmă că beneficiarul este în viață și are în 
          continuare drept la pensie.  
        </p>
        <p>
          Unele state îl cer anual (Italia, Spania, UK), altele doar în anumite situații 
          administrative.  
        </p>
        <p className="mt-2">Dacă nu îl trimiți la timp:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>plata pensiei se suspendă automat;</li>
          <li>banii nu se pierd, dar reactivarea poate dura luni;</li>
          <li>trebuie să trimiți certificatul + o cerere de repunere în plată.</li>
        </ul>
      </div>

      {/* Q4 */}
      <div className="rounded-2xl border border-slate-100 bg-white p-5">
        <p className="font-semibold text-slate-900 mb-1">
          4. Ce fac dacă nu mi-a intrat pensia în cont luna aceasta?
        </p>
        <p>
          În 80% din cazuri, problema este una dintre următoarele:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-1">
          <li>certificat de viață netrimis;</li>
          <li>cont bancar închis sau schimbat;</li>
          <li>adresă neactualizată în sistemul statului străin;</li>
          <li>plată respinsă de banca din România.</li>
        </ul>

        <p className="mt-2"><strong>Pași recomandați:</strong></p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Verifică extrasul de cont (căutând o „plată respinsă”).</li>
          <li>Verifică dacă ai primit scrisori recente.</li>
          <li>Suna la bancă.</li>
          <li>Contactează instituția de pensii din statul plătitor.</li>
        </ol>
      </div>

      {/* Q5 */}
      <div className="rounded-2xl border border-slate-100 bg-white p-5">
        <p className="font-semibold text-slate-900 mb-1">
          5. Dacă schimb adresa sau banca, trebuie să anunț fiecare stat?
        </p>
        <p>
          Da. Fiecare stat are propriul sistem, iar informațiile nu se actualizează automat 
          între țări.  
        </p>
        <p>
          Dacă nu anunți, există risc de:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-1">
          <li>scrisori pierdute (inclusiv certificate de viață);</li>
          <li>plăți respinse;</li>
          <li>suspendare automată a pensiei.</li>
        </ul>
      </div>

      {/* Q6 */}
      <div className="rounded-2xl border border-slate-100 bg-white p-5">
        <p className="font-semibold text-slate-900 mb-1">
          6. Pot primi mai multe pensii din mai multe țări?
        </p>
        <p>
          Absolut da. Dacă ai lucrat legal în România și în alte state, fiecare stat îți va plăti 
          partea lui de pensie.  
        </p>
        <p>
          Vei primi:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>pensie din România;</li>
          <li>pensie din fiecare stat în care ai contribuit.</li>
        </ul>
        <p className="mt-2">
          Toate pot fi virate în același cont bancar, cu condiția ca statul respectiv să permită.
        </p>
      </div>

      {/* Q7 */}
      <div className="rounded-2xl border border-slate-100 bg-white p-5">
        <p className="font-semibold text-slate-900 mb-1">
          7. Ce fac dacă nu vorbesc limba țării care îmi plătește pensia?
        </p>
        <p>
          Este foarte comun — și există soluții practice:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-1">
          <li>apelează la consulat sau ambasadă (te pot ajuta cu clarificări);</li>
          <li>roagă un membru al familiei să te ajute cu traducerea scrisorilor;</li>
          <li>folosește un serviciu specializat care te poate ghida;</li>
          <li>folosește traducerea automată a site-urilor oficiale.</li>
        </ul>
      </div>

      {/* Q8 */}
      <div className="rounded-2xl border border-slate-100 bg-white p-5">
        <p className="font-semibold text-slate-900 mb-1">
          8. Ce se întâmplă cu pensia dacă mă mut din nou în străinătate?
        </p>
        <p>
          Nimic complicat — trebuie doar să anunți noua adresă și, dacă e cazul, noul cont bancar.  
          Statele nu condiționează plata pensiei de locul în care trăiești, ci de faptul că 
          <strong>te pot contacta și îți pot vira banii în mod corect</strong>.
        </p>
      </div>

    </div>

    {/* CONCLUZIE */}
    <div className="rounded-2xl bg-white border border-slate-100 p-5 text-sm text-slate-700">
      <h3 className="font-semibold text-slate-900 mb-1">
        Concluzie: pensia din străinătate este sigură, dar are nevoie de „întreținere administrativă”
      </h3>
      <p>
        Cât timp îți actualizezi adresa, contul bancar și trimiți certificatul de viață la timp, 
        pensia ta va fi plătită fără probleme, indiferent în ce țară locuiești.
      </p>
      <p className="mt-2">
        Odată ce înțelegi regulile, gestionarea pensiei devine mult mai simplă și predictibilă.
      </p>
    </div>

  </div>
</section>

          {/* CTA FINAL */}
          <section className="section-container py-10 text-center text-slate-700 text-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Ai o situație concretă legată de pensia ta din străinătate?
            </h2>
            <p className="mb-3">
              Îmi poți trimite situația ta pe email și îți răspund cu un ghid
              personalizat, explicat simplu.
            </p>
            <a
              href="mailto:contact@dosarpensie.com"
              className="inline-flex items-center rounded-full bg-primary text-white px-5 py-2 text-xs font-semibold shadow hover:bg-primaryDark"
            >
              Scrie-mi cazul tău →
            </a>
            <p className="mt-2 text-xs text-slate-500">
              Răspunsurile sunt orientative și nu înlocuiesc comunicările
              oficiale ale caselor de pensii din România sau din alte state.
            </p>
          </section>
        </main>

        {/* FOOTER MIC */}
        <footer className="bg-slate-950 text-slate-300 py-6 mt-4 text-xs">
          <div className="section-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-slate-400">
              © {new Date().getFullYear()} DosarPensie – ghiduri independente
              despre pensii.
            </p>
            <p className="text-slate-500">
              Informațiile sunt generale și nu înlocuiesc comunicările
              oficiale ale caselor de pensii.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}