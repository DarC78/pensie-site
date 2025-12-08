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

          {/* 1. GENERAL */}
          <section id="general" className="bg-white">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                1. Ce înseamnă „pensie în străinătate”?
              </h2>
              <p>
                Când spui „pensie în străinătate”, poți să te referi la două
                lucruri diferite:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>pensia plătită de un stat străin</strong> (Italia,
                  Spania, UK, Germania etc.) pentru anii lucrați acolo;
                </li>
                <li>
                  <strong>pensie din România plătită într-un cont din
                  străinătate</strong>, pentru românii care s-au mutat în altă
                  țară.
                </li>
              </ul>
              <p>
                De cele mai multe ori, românii au o combinație: <strong>pensia
                de la Casa de Pensii din România</strong> + una sau mai multe
                pensii din statele unde au lucrat. Plata se face, de obicei,
                direct în cont, fie în moneda statului care plătește, fie (în
                anumite situații) într-un cont din România.
              </p>
              <div className="rounded-2xl bg-softBg border border-sky-100 p-4 text-sm">
                <p className="font-semibold text-slate-900 mb-1">
                  Legătura cu „pensia comunitară”
                </p>
                <p className="text-slate-700">
                  Ghidul despre{' '}
                  <a
                    href="/pensie-comunitara"
                    className="underline text-primary hover:text-primaryDark"
                  >
                    pensia comunitară
                  </a>{' '}
                  explică <strong>cum se adună anii lucrați în mai multe
                  țări</strong>. Ghidul de față merge mai departe și arată{' '}
                  <strong>cum se plătește pensia în viața de zi cu zi</strong>:
                  unde intră banii, ce faci dacă se schimbă ceva, cum e când te
                  întorci în România.
                </p>
              </div>
            </div>
          </section>

          {/* 2. LOCUIEȘTI ÎN ROMÂNIA, PENSIE DIN ALTE ȚĂRI */}
          <section id="romania-beneficiar" className="bg-softBg">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                2. Locuiești în România și primești pensie din alte țări
              </h2>
              <p>
                Este o situație foarte frecventă: te-ai întors acasă, ai
                domiciliul în România, dar primești pensie din Italia, Spania,
                Germania, UK sau alte state.
              </p>

              <h3 className="text-lg font-semibold text-slate-900">
                2.1. În ce cont intră pensia?
              </h3>
              <p>
                Depinde de regulile fiecărui stat. De obicei, există două
                variante:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>cont bancar în statul care plătește pensia</strong> –
                  de exemplu, un cont în Italia pentru pensia italiană;
                </li>
                <li>
                  <strong>cont bancar în România</strong> – unele state
                  permit plata pensiei direct într-un cont din România (în lei
                  sau în valută).
                </li>
              </ul>
              <p className="text-sm text-slate-700">
                În practică, mulți români aleg să își închidă conturile din
                străinătate și să primească pensia direct în România, pentru a
                evita comisioanele sau drumurile la bancă în altă țară.
              </p>

              <h3 className="text-lg font-semibold text-slate-900">
                2.2. Ce trebuie să anunți când te întorci în România
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>noua adresă din România</strong> – la fiecare
                  instituție de pensii din statele care îți plătesc pensia;
                </li>
                <li>
                  <strong>noul cont bancar</strong>, dacă vrei ca pensia să fie
                  virată în România;
                </li>
                <li>
                  eventual, <strong>schimbarea statutului civil</strong> (căsătorie,
                  divorț, decesul soțului/soției), dacă influențează drepturile
                  la pensie.
                </li>
              </ul>

              <div className="rounded-2xl bg-white border border-amber-100 p-4 text-sm">
                <p className="font-semibold text-slate-900 mb-1">
                  Greșeală frecventă
                </p>
                <p className="text-slate-700">
                  Mulți pensionari se mută în România și cred că „se anunță
                  automat între state”. În realitate, <strong>tu trebuie să
                  trimiți formularele și documentele</strong> către instituția
                  care îți plătește pensia. Dacă nu anunți, plățile pot fi
                  suspendate sau pot ajunge la vechea adresă / vechiul cont.
                </p>
              </div>
            </div>
          </section>

          {/* 3. LOCUIEȘTI AFARĂ, PENSIE DIN ROMÂNIA */}
          <section id="strainatate-beneficiar" className="bg-white">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                3. Locuiești în străinătate și primești pensie din România
              </h2>
              <p>
                Dacă locuiești în alt stat, dar ai pensie din România, este
                important să știi:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>unde intră pensia (cont în România sau cont în străinătate);</li>
                <li>cum anunți schimbarea adresei;</li>
                <li>cum trimiți certificatul de viață, dacă ți se cere.</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900">
                3.1. Cont bancar pentru pensia din România
              </h3>
              <p>
                De regulă, pensia din România se plătește:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>într-un cont deschis la o bancă din România</strong>,
                  pe numele tău;
                </li>
                <li>
                  sau, în anumite situații, prin mandat poștal, dacă nu ai
                  cont (nu este însă cea mai practică variantă pentru cei din
                  străinătate).
                </li>
              </ul>
              <p className="text-sm text-slate-700">
                Mulți români care locuiesc în străinătate păstrează un cont în
                România și își administrează banii online, prin internet
                banking.
              </p>
            </div>
          </section>

          {/* 4. ȚĂRI POPULARE */}
          <section id="tari-populare" className="bg-softBg">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                4. Italia, Spania, UK, Germania – situații frecvente
              </h2>
              <p>
                Fiecare stat are regulile lui, dar problemele practice sunt
                asemănătoare: adrese, conturi bancare, certificate de viață,
                comunicare cu instituțiile.
              </p>

              <div className="grid lg:grid-cols-2 gap-6 text-sm">
                <div className="rounded-2xl bg-white border border-slate-100 p-4 space-y-2">
                  <h3 className="font-semibold text-slate-900">
                    4.1. Italia și Spania
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      pensia se plătește, de regulă, într-un cont bancar din
                      Italia / Spania;
                    </li>
                    <li>
                      poți cere, în anumite condiții, viramentul într-un cont
                      din altă țară UE;
                    </li>
                    <li>
                      se trimit periodic <strong>certificate de viață</strong>,
                      pe care trebuie să le completezi și să le returnezi la
                      timp;
                    </li>
                    <li>
                      dacă te muți în România, anunți atât <strong>noua
                      adresă</strong>, cât și eventualul <strong>nou cont
                      bancar</strong>.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white border border-slate-100 p-4 space-y-2">
                  <h3 className="font-semibold text-slate-900">
                    4.2. UK (după Brexit)
                  </h3>
                  <p>
                    Regatul Unit nu mai este în UE, dar există acorduri care
                    protejează drepturile celor care au lucrat în UK și în
                    statele membre.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      pensia britanică se plătește, de obicei, într-un cont din
                      UK sau într-un cont din altă țară, în funcție de opțiunile
                      oferite de instituție;
                    </li>
                    <li>
                      certificatele de viață sunt foarte importante – dacă nu
                      le trimiți, <strong>plata poate fi suspendată</strong>;
                    </li>
                    <li>
                      dacă te întorci în România, anunți atât <strong>HMRC /
                      instituția de pensii</strong>, cât și banca.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white border border-slate-100 p-4 space-y-2">
                  <h3 className="font-semibold text-slate-900">
                    4.3. Germania și Austria
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      acordă o mare importanță dovezilor de vechime și
                      perioadelor de asigurare;
                    </li>
                    <li>
                      comunicarea se face, de regulă, prin scrisori trimise la
                      adresa ta declarată;
                    </li>
                    <li>
                      este esențial să anunți rapid dacă îți schimbi adresa sau
                      contul bancar;
                    </li>
                    <li>
                      în cazul întârzierilor, este util să ai <strong>numărul
                      dosarului</strong> și copii după toate documentele
                      trimise.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white border border-slate-100 p-4 space-y-2">
                  <h3 className="font-semibold text-slate-900">
                    4.4. Belgia, Olanda și alte state
                  </h3>
                  <p>
                    Și în aceste state, procedurile sunt similare: cont bancar,
                    adresă actualizată, certificate de viață. Diferențele sunt
                    mai degrabă în detalii și formulare.
                  </p>
                  <p className="text-slate-700">
                    Dacă nu găsești informații clare în limba română, poți
                    folosi ghidul de aici ca schemă generală și să verifici
                    apoi, punctual, la instituția de pensii din statul
                    respectiv.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 5. ADRESĂ / CONT / CERTIFICAT DE VIAȚĂ */}
          <section id="adresa-cont" className="bg-white">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                5. Schimbarea adresei și a contului bancar. Certificatul de
                viață
              </h2>

              <h3 className="text-lg font-semibold text-slate-900">
                5.1. De ce sunt atât de importante adresa și contul?
              </h3>
              <p>
                Pentru instituțiile de pensii, <strong>adresa și contul
                bancar</strong> sunt „punctele de contact” cu tine. Dacă una
                dintre ele se schimbă și nu anunți:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  scrisorile pot ajunge la o adresă veche și să nu afli că ți
                  s-a cerut un document;
                </li>
                <li>
                  banca poate respinge plata dacă ai închis contul sau ai
                  schimbat banca;
                </li>
                <li>
                  în final, <strong>pensia poate fi suspendată</strong> până la
                  clarificare.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900">
                5.2. Certificatul de viață – ce este și cum îl trimiți
              </h3>
              <p>
                Certificatul de viață este un formular prin care confirmi că ești
                în viață și ai în continuare dreptul la pensie. Unele state îl
                cer:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>în fiecare an;</li>
                <li>la 2–3 ani;</li>
                <li>în anumite situații particulare (schimbare de adresă, suspiciune etc.).</li>
              </ul>
              <p>
                De obicei, formularul trebuie:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>completat cu datele tale de identificare;</li>
                <li>
                  ștampilat / confirmat de o autoritate locală (primărie,
                  notar, ambasadă/consulat);
                </li>
                <li>trimis înapoi prin poștă sau încărcat online, dacă există portal.</li>
              </ul>

              <div className="rounded-2xl bg-softBg border border-sky-100 p-4 text-sm">
                <p className="font-semibold text-slate-900 mb-1">
                  Atenție la termene!
                </p>
                <p className="text-slate-700">
                  Dacă nu trimiți certificatul de viață până la termenul
                  indicat în scrisoare, <strong>plata pensiei poate fi
                  oprită</strong>. Banii nu se pierd definitiv, dar este posibil
                  să dureze câteva luni până când se reia plata și se plătesc
                  sumele restante.
                </p>
              </div>
            </div>
          </section>

          {/* 6. ÎNTÂRZIERI / BLOCĂRI */}
          <section id="intarzieri" className="bg-softBg">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                6. Ce faci dacă pensia întârzie sau se blochează
              </h2>
              <p>
                Este una dintre cele mai stresante situații: aștepți banii și
                ei nu apar în cont. De cele mai multe ori, există o explicație
                administrativă.
              </p>

              <h3 className="text-lg font-semibold text-slate-900">
                6.1. Verificări de făcut înainte să intri în panică
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  verifică data obișnuită la care intră pensia (în unele state
                  se poate schimba ziua din cauza weekend-ului sau a sărbătorilor);
                </li>
                <li>
                  verifică dacă nu ai schimbat recent contul bancar sau banca;
                </li>
                <li>
                  verifică dacă ai primit în ultimele luni scrisori legate de:
                  <strong> certificat de viață</strong>, <strong>clarificarea
                  anumitor perioade</strong> etc.;
                </li>
                <li>
                  întreabă banca dacă a respins vreo plată (de exemplu, din
                  cauza unui cont închis).
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900">
                6.2. Pe cine contactezi
              </h3>
              <p>
                În funcție de situație, poți:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  să contactezi <strong>banca</strong>, pentru a vedea dacă
                  există plăți respinse;
                </li>
                <li>
                  să contactezi <strong>instituția de pensii</strong> din statul
                  care plătește pensia (telefon, email, portal online);
                </li>
                <li>
                  să ceri sprijinul <strong>ambasadei / consulatului</strong>,
                  mai ales dacă există bariere de limbă.
                </li>
              </ul>

              <div className="rounded-2xl bg-white border border-amber-100 p-4 text-sm">
                <p className="font-semibold text-slate-900 mb-1">
                  Cum te organizezi ca să fie mai ușor
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>
                    păstrează într-un dosar (fizic sau digital) toate deciziile
                    de pensie și scrisorile primite;
                  </li>
                  <li>
                    notează-ți numărul de dosar, codul de asigurat și datele de
                    contact ale instituției de pensii;
                  </li>
                  <li>
                    când suni, notează data, numele persoanei cu care ai
                    vorbit și ce ți s-a spus.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 7. ÎNTOARCEREA ÎN ROMÂNIA */}
          <section id="intoarcere" className="bg-white">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                7. Te întorci definitiv în România – ce trebuie să anunți
              </h2>
              <p>
                Tot mai mulți români decid să se întoarcă în țară după ani
                întregi petrecuți în străinătate. Din punct de vedere al
                pensiei, este important să nu rămână nimic „în aer”.
              </p>

              <h3 className="text-lg font-semibold text-slate-900">
                7.1. Checklist simplu
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  notează ce pensii primești și din ce state (România + alte
                  țări);
                </li>
                <li>
                  adună toate <strong>deciziile de pensie</strong> și
                  documentele pe care le-ai primit;
                </li>
                <li>
                  decide în ce cont vrei să îți intre fiecare pensie (în
                  România sau în statul plătitor);
                </li>
                <li>
                  trimite, pentru fiecare stat:
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                    <li>noua ta adresă din România;</li>
                    <li>
                      noul cont bancar, dacă vrei plata în România;
                    </li>
                    <li>
                      eventual, copii după actul de identitate din România
                      (buletin / carte de identitate).
                    </li>
                  </ul>
                </li>
              </ul>

              <p className="text-sm text-slate-700">
                Nu există o „procedură unică” valabilă pentru toate țările, dar
                pașii de mai sus se repetă, cu mici diferențe, în aproape
                toate cazurile.
              </p>
            </div>
          </section>

          {/* 8. FAQ */}
          <section id="intrebari" className="bg-softBg">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                8. Întrebări frecvente despre pensia în străinătate
              </h2>

              <div className="space-y-4 text-sm">
                <div className="rounded-2xl border border-slate-100 bg-white p-4">
                  <p className="font-semibold text-slate-900 mb-1">
                    Pot primi pensie din străinătate dacă m-am întors în
                    România?
                  </p>
                  <p>
                    În majoritatea cazurilor, da. Statele care îți plătesc
                    pensia nu îți cer să locuiești în mod obligatoriu acolo,
                    dar vor să știe <strong>unde trăiești</strong> și în ce
                    <strong>cont bancar</strong> îți virează banii. Atâta
                    timp cât anunți corect schimbările și respecți cerințele
                    administrative (de exemplu, certificatul de viață), poți
                    trăi liniștit în România și primi pensia din străinătate.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-4">
                  <p className="font-semibold text-slate-900 mb-1">
                    Pierd ceva dacă mut pensia dintr-un cont din străinătate
                    într-un cont din România?
                  </p>
                  <p>
                    În general, dreptul la pensie nu se pierde. Se pot schimba
                    însă:
                  </p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>comisioanele bancare;</li>
                    <li>
                      cursul de schimb (dacă pensia este în euro / altă
                      monedă);
                    </li>
                    <li>
                      modul în care vezi sumele în extrasul de cont. De aceea e
                      bine să discuți și cu banca, și cu instituția de pensii
                      înainte de a decide.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-4">
                  <p className="font-semibold text-slate-900 mb-1">
                    Ce fac dacă nu vorbesc bine limba țării care îmi plătește
                    pensia?
                  </p>
                  <p>
                    Poți cere ajutor:
                  </p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>
                      la <strong>ambasada sau consulatul</strong> acelui stat;
                    </li>
                    <li>
                      la <strong>familie / copii / nepoți</strong>, pentru a te
                      ajuta cu traducerea scrisorilor;
                    </li>
                    <li>
                      la o persoană sau un serviciu specializat care te poate
                      ajuta să înțelegi ce se cere și ce răspuns trebuie să
                      trimiți.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-white border border-slate-100 p-4 text-sm text-slate-700">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Concluzie: pensia în străinătate trebuie „îngrijită”, dar
                  nu este un labirint fără ieșire
                </h3>
                <p>
                  Cheia este să ții sub control câteva lucruri: <strong>adresa
                  ta actuală</strong>, <strong>contul bancar</strong>,{' '}
                  <strong>certificatele de viață</strong> și să păstrezi toate
                  documentele importante la un loc. Odată ce ai această
                  ordine, lucrurile devin mult mai ușor de gestionat.
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