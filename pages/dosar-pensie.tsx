import Head from 'next/head'

const SITE_URL = 'https://dosarpensie.com'
const PAGE_URL = `${SITE_URL}/dosar-pensie`
const OG_IMAGE = `${SITE_URL}/images/dosar-pensie.jpg`

export default function DosarPensiePage() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Dosarul de pensionare în 2025 – Ghid complet și actualizat (acte, pași, exemple)',
    description:
      'Ghid complet și actualizat despre dosarul de pensionare în 2025: acte necesare, pași de urmat, greșeli frecvente, termene și exemple concrete pentru românii care se pregătesc de pensie.',
    author: {
      '@type': 'Person',
      name: 'Adrian Defta',
      jobTitle: 'Expert Pensii',
      url: `${SITE_URL}/despre-adrian-defta`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'dosarpensie.com',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.ico`,
      },
    },
    mainEntityOfPage: PAGE_URL,
    image: OG_IMAGE,
    datePublished: '2025-01-01',
    dateModified: new Date().toISOString(),
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Care sunt actele necesare pentru dosarul de pensionare?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'În mod obișnuit, dosarul de pensionare include: cererea tip, actul de identitate, carnetul de muncă sau adeverințe de vechime, diploma de studii (dacă este luată în calcul la vechime), livretul militar, adeverințe pentru condiții deosebite sau speciale și alte documente specifice fiecărui caz.',
        },
      },
      {
        '@type': 'Question',
        name:
          'Ce fac dacă îmi lipsesc acte din vechime sau nu mai găsesc un angajator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Dacă lipsesc acte, poți solicita adeverințe de la foștii angajatori, de la arhive sau de la instituțiile care au preluat documentele. În anumite situații se pot folosi și alte dovezi (decizii, fluturași, acte fiscale), însă este important să discuți cu Casa de Pensii pentru a vedea ce se acceptă în mod concret.',
        },
      },
      {
        '@type': 'Question',
        name: 'Când ar trebui să încep să pregătesc dosarul de pensie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Ideal este să începi pregătirea dosarului cu 6–12 luni înainte de data estimată a pensionării. Ai timp să verifici vechimea, să ceri adeverințe lipsă și să corectezi eventualele erori în documente.',
        },
      },
      {
        '@type': 'Question',
        name:
          'Cât durează soluționarea dosarului de pensionare după depunere?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'În general, dosarul de pensionare se soluționează în câteva luni, dar termenul poate fi diferit în funcție de numărul de dosare, situația ta (de exemplu, muncă și în străinătate) și rapiditatea cu care pot fi verificate toate actele. În tot acest timp este important să notezi numărul de înregistrare și să urmărești comunicările oficiale.',
        },
      },
    ],
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Acasă',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Dosarul de pensionare',
        item: PAGE_URL,
      },
    ],
  }

  const lastUpdated = new Date().toLocaleDateString('ro-RO')

  return (
    <>
      <Head>
        <title>
          Dosarul de pensionare în 2025 – Ghid complet și actualizat | dosarpensie.com
        </title>
        <meta
          name="description"
          content="Ghid complet și actualizat despre dosarul de pensionare în 2025: acte necesare, pași, greșeli frecvente, termene și exemple concrete. Explicat simplu, de Adrian Defta – Expert Pensii."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Dosarul de pensionare în 2025 – Ghid complet și actualizat"
        />
        <meta
          property="og:description"
          content="Acte necesare, pași, greșeli frecvente și exemple concrete pentru dosarul de pensionare. Explicat simplu, pentru românii care se apropie de pensie."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd),
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
                  dosar<span className="text-primary">pensie</span>.com
                </span>
                <span className="text-[11px] text-slate-500">
                  Ghiduri clare despre pensii
                </span>
              </div>
            </a>
            <a
              href="/"
              className="text-xs sm:text-sm text-primary hover:text-primaryDark"
            >
              ← Înapoi la pagina principală
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
                  Ghid complet · Dosarul de pensionare în 2025
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Dosarul de pensionare în 2025 – ghid complet, explicat simplu
                </h1>

                <p className="text-xs text-slate-500">
                  Scris de{' '}
                  <span className="font-semibold">
                    Adrian Defta – Expert în legislația pensiilor pentru români
                  </span>
                  . Ultima actualizare: {lastUpdated}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Pregătirea dosarului de pensionare este momentul în care toți anii de muncă se
                  adună. În acest ghid găsești, pe limba ta, lista de acte necesare, pașii
                  administrativi, greșelile frecvente și sfaturi practice, astfel încât să îți poți
                  organiza dosarul fără stres și fără surprize neplăcute.
                </p>

                <div className="grid sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div className="rounded-2xl bg-white p-3 shadow-sm flex flex-col gap-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
                      Pentru cine
                    </span>
                    <span className="font-semibold text-slate-900">
                      Persoane aproape de vârsta de pensie
                    </span>
                    <span className="text-slate-500">
                      România + cei cu ani în străinătate
                    </span>
                  </div>
                  <div className="rounded-2xl bg-white p-3 shadow-sm flex flex-col gap-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
                      Ce afli
                    </span>
                    <span className="font-semibold text-slate-900">
                      Acte, pași, termene
                    </span>
                    <span className="text-slate-500">
                      Plus exemple și greșeli frecvente
                    </span>
                  </div>
                  <div className="rounded-2xl bg-white p-3 shadow-sm flex flex-col gap-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
                      Nivel
                    </span>
                    <span className="font-semibold text-slate-900">
                      Explicații fără jargon
                    </span>
                    <span className="text-slate-500">
                      Potrivit și pentru părinți & bunici
                    </span>
                  </div>
                </div>
              </div>

              {/* FISĂ TEHNICĂ DOSAR */}
              <aside className="rounded-3xl bg-white shadow-sm border border-slate-100 p-5 lg:p-6 space-y-4 text-sm text-slate-700">
                <h2 className="text-base font-semibold text-slate-900">
                  Pe scurt, ce este dosarul de pensionare?
                </h2>
                <p>
                  Dosarul de pensionare este setul de documente pe care îl depui la Casa de Pensii
                  (sau la instituția echivalentă din alt stat) pentru a ți se stabili dreptul la
                  pensie. Calitatea dosarului și corectitudinea actelor influențează direct cât de
                  repede vei primi decizia și dacă apar sau nu probleme.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>cuprinde cererea tip și toate actele care dovedesc vechimea ta;</li>
                  <li>
                    este folosit de funcționarii de la pensii pentru a calcula drepturile tale;
                  </li>
                  <li>
                    dacă lipsesc documente, dosarul poate fi amânat sau ți se poate calcula o pensie
                    mai mică decât ar trebui.
                  </li>
                </ul>
                <p className="text-xs text-slate-500">
                  Informațiile din acest ghid sunt generale. Pentru situații speciale, verifică
                  întotdeauna și informațiile oficiale ale Casei de Pensii și, dacă este cazul,
                  ale instituțiilor din țările în care ai lucrat.
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
                  Poți citi ghidul cap-coadă sau poți sări direct la secțiunea care te interesează.
                  Îți recomand să parcurgi cel puțin lista de acte și secțiunea despre greșeli
                  frecvente.
                </p>
              </div>
              <nav className="bg-softBg rounded-2xl border border-slate-100 p-4 text-sm text-slate-700">
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    <a href="#ce-este" className="text-primary hover:text-primaryDark">
                      Ce este dosarul de pensionare și de ce contează
                    </a>
                  </li>
                  <li>
                    <a href="#cand-incepi" className="text-primary hover:text-primaryDark">
                      Când ar trebui să începi să pregătești dosarul
                    </a>
                  </li>
                  <li>
                    <a href="#acte-necesare" className="text-primary hover:text-primaryDark">
                      Actele necesare pentru dosarul de pensie
                    </a>
                  </li>
                  <li>
                    <a href="#checklist" className="text-primary hover:text-primaryDark">
                      Checklist practic înainte să mergi la Casa de Pensii
                    </a>
                  </li>
                  <li>
                    <a href="#lipsa-acte" className="text-primary hover:text-primaryDark">
                      Ce faci dacă îți lipsesc acte sau nu mai găsești un angajator
                    </a>
                  </li>
                  <li>
                    <a href="#durata" className="text-primary hover:text-primaryDark">
                      Cât durează analiza dosarului și cum urmărești dosarul
                    </a>
                  </li>
                  <li>
                    <a href="#greseli" className="text-primary hover:text-primaryDark">
                      Greșeli frecvente și cum le eviți
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="text-primary hover:text-primaryDark">
                      Întrebări frecvente
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </section>

          {/* 1. CE ESTE */}
          <section id="ce-este" className="bg-white">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                1. Ce este dosarul de pensionare și de ce contează atât de mult?
              </h2>
              <p>
                Dosarul de pensionare nu este doar o „mapă cu acte”. Este dosarul în baza căruia
                statul îți stabilește dreptul la pensie. Orice act lipsă, dată greșită sau vechime
                neclară poate însemna luni de întârziere sau o pensie mai mică decât ar trebui.
              </p>
              <p>
                De aceea, pregătirea dosarului din timp, în mod organizat, este una dintre cele mai
                importante etape din viața ta administrativă. Este momentul în care întreaga ta
                carieră, cu toate perioadele de muncă, se traduce în ani de vechime și în punctaj.
              </p>
              <p className="text-sm text-primary">
                Vezi și:{' '}
                <a
                  href="/pensie-comunitara"
                  className="underline hover:text-primaryDark"
                >
                  Ghid complet despre pensia comunitară (UE + UK)
                </a>{' '}
                ·{' '}
                <a
                  href="/recalculare-pensie"
                  className="underline hover:text-primaryDark"
                >
                  Când merită să ceri recalcularea pensiei
                </a>
              </p>
              <div className="rounded-2xl bg-softBg border border-sky-100 p-4 text-sm">
                <p className="font-semibold text-slate-900 mb-1">Ideea principală</p>
                <p className="text-slate-700">
                  Nu trata dosarul de pensie ca pe „încă un formular”. Este momentul în care
                  demonstrezi, cu acte, tot ce ai muncit. Cu cât dosarul este mai clar și mai bine
                  organizat, cu atât șansele de întârziere sau neînțelegeri sunt mai mici.
                </p>
              </div>
            </div>
          </section>

          {/* 2. CÂND ÎNCEPI */}
          <section id="cand-incepi" className="bg-softBg">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                2. Când ar trebui să începi să pregătești dosarul de pensie?
              </h2>
              <p>
                Teoretic, poți începe pregătirea dosarului cu câteva luni înainte de data la care
                vrei să te pensionezi. Practic, experiența arată că este mai bine să îți verifici
                actele cu 6–12 luni înainte, mai ales dacă:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>ai schimbat mai mulți angajatori de-a lungul timpului;</li>
                <li>ai avut perioade de muncă în străinătate;</li>
                <li>ai lucrat în condiții deosebite sau speciale;</li>
                <li>nu mai găsești toate actele de la începutul carierei.</li>
              </ul>
              <div className="rounded-2xl bg-white border border-amber-100 p-4 text-sm">
                <p className="font-semibold text-slate-900 mb-1">Recomandare practică</p>
                <p className="text-slate-700">
                  Încearcă să verifici vechimea și actele cu aproximativ un an înainte de data
                  estimată a pensionării. Ai timp să ceri adeverințe, să cauți arhive sau să corectezi
                  eventualele erori în documente, fără presiunea timpului.
                </p>
              </div>
            </div>
          </section>

          {/* 3. ACTE NECESARE */}
          <section id="acte-necesare" className="bg-white">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                3. Actele necesare pentru dosarul de pensie
              </h2>
              <p>
                Lista exactă a actelor poate diferi în funcție de tipul de pensie (limită de vârstă,
                anticipată, invaliditate) și de situația fiecărei persoane. Totuși, în practică,
                pentru pensia la limită de vârstă apar câteva documente aproape întotdeauna.
              </p>

              <div className="grid lg:grid-cols-2 gap-6 text-sm">
                <div className="rounded-2xl bg-softBg border border-slate-100 p-4 space-y-2">
                  <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">
                    Documente de bază
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>cererea tip de pensionare (formularul Casei de Pensii);</li>
                    <li>actul de identitate (original și copie);</li>
                    <li>
                      carnetul de muncă (dacă există) sau adeverințe care dovedesc vechimea;
                    </li>
                    <li>livretul militar (dacă este cazul);</li>
                    <li>certificate de naștere și căsătorie, după caz.</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-softBg border border-slate-100 p-4 space-y-2">
                  <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">
                    Documente pentru perioade speciale
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>adeverințe pentru condiții deosebite sau speciale de muncă;</li>
                    <li>
                      adeverințe pentru perioade de studii (dacă se iau în calcul la vechime);
                    </li>
                    <li>adeverințe pentru concedii medicale de lungă durată, dacă este cazul;</li>
                    <li>
                      documente privind perioadele lucrate în străinătate sau înscrise în sistemele
                      altor state.
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-xs text-slate-500">
                Lista de mai sus este orientativă și nu înlocuiește cerințele oficiale ale Casei de
                Pensii. Verifică întotdeauna și informațiile actualizate de pe site-ul instituției
                sau direct la ghișeu.
              </p>
            </div>
          </section>

          {/* 4. CHECKLIST */}
          <section id="checklist" className="bg-softBg">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                4. Checklist practic înainte să mergi la Casa de Pensii
              </h2>
              <p>
                Mulți oameni ajung la ghișeu și își dau seama că le lipsesc acte esențiale. Mai jos
                ai un checklist simplu, pe care îl poți parcurge acasă, în liniște.
              </p>

              <div className="grid lg:grid-cols-2 gap-6 text-sm">
                <div className="rounded-2xl bg-white border border-slate-100 p-4 space-y-2">
                  <p className="font-semibold text-slate-900">
                    Verificarea vechimii și a perioadelor lucrate
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>ai toate perioadele de muncă trecute în carnet sau adeverințe;</li>
                    <li>ai verificat dacă datele (ani, luni) sunt corecte;</li>
                    <li>ai notat perioadele în care nu ai lucrat și știi de ce;</li>
                    <li>pentru perioada în străinătate: știi la ce instituții te poți adresa.</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white border border-slate-100 p-4 space-y-2">
                  <p className="font-semibold text-slate-900">Verificarea documentelor</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>ai toate copiile necesare (nu doar originalele);</li>
                    <li>ai pregătit un dosar sau o mapă în care actele sunt ordonate;</li>
                    <li>ai la îndemână un pix, un carnețel și ochelarii (dacă îi folosești);</li>
                    <li>
                      știi exact ce vrei să întrebi dacă apar nelămuriri (notează pe o foaie).
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 5. LIPSA ACTE */}
          <section id="lipsa-acte" className="bg-white">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                5. Ce faci dacă îți lipsesc acte sau nu mai găsești un angajator?
              </h2>
              <p>
                Una dintre cele mai mari temeri ale oamenilor este: „Nu mai găsesc actele pentru o
                perioadă în care am lucrat. Pierd acei ani?”. Răspunsul este: nu neapărat, dar va
                trebui să depui puțin efort suplimentar.
              </p>
              <p>
                În funcție de situație, poți solicita documente din arhive, de la foști angajatori,
                de la instituții fiscale sau de la casele de pensii sectoriale. Important este să
                nu lași acest subiect pe ultima sută de metri.
              </p>
              <div className="rounded-2xl bg-softBg border border-amber-100 p-4 text-sm">
                <p className="font-semibold text-slate-900 mb-1">
                  Pași generali când lipsesc acte
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>
                    identifică perioada și angajatorul pentru care lipsesc documentele;
                  </li>
                  <li>
                    verifică dacă angajatorul mai există sau dacă a fost preluat de altă firmă;
                  </li>
                  <li>
                    întreabă Casa de Pensii ce tip de documente alternative se pot accepta;
                  </li>
                  <li>
                    începe să cauți în arhive și să soliciți copii sau adeverințe cât mai repede.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 6. DURATA */}
          <section id="durata" className="bg-softBg">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                6. Cât durează analiza dosarului și cum urmărești dosarul tău
              </h2>
              <p>
                Durata analizei dosarului de pensie depinde de mai mulți factori: volumul de lucru
                al Casei de Pensii, complexitatea situației tale (mai ales dacă ai muncit și în
                străinătate) și cât de complet este dosarul la depunere.
              </p>
              <p>
                În general, trebuie să te aștepți ca procesul să dureze câteva luni. În această
                perioadă este important să îți notezi numărul de înregistrare, data depunerii și
                eventualele discuții cu funcționarii.
              </p>
              <div className="rounded-2xl bg-white border border-slate-100 p-4 text-sm">
                <p className="font-semibold text-slate-900 mb-1">
                  Cum poți urmări dosarul
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>
                    păstrează dovada depunerii (numărul de înregistrare, data, ghișeul);
                  </li>
                  <li>
                    întreabă, politicos, care este termenul estimat și notează răspunsul;
                  </li>
                  <li>
                    dacă trece mult peste termen, poți solicita informații suplimentare sau poți
                    depune o cerere scrisă de clarificare;
                  </li>
                  <li>
                    verifică dacă au fost trimise solicitări către alte țări (dacă ai vechime în
                    străinătate).
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 7. GREȘELI */}
          <section id="greseli" className="bg-white">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                7. Greșeli frecvente în pregătirea dosarului de pensie și cum le eviți
              </h2>
              <p>
                Majoritatea problemelor apar nu din rea-voință, ci din neatenție sau grabă. Iată
                câteva greșeli frecvente pe care le poți evita ușor:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Nu menționezi toate perioadele lucrate</strong> (mai ales cele scurte sau
                  din străinătate).
                </li>
                <li>
                  <strong>Nu verifici datele din adeverințe</strong> (ani, luni, perioade de
                  concediu, întreruperi).
                </li>
                <li>
                  <strong>Lași completarea cererii pe ultima clipă</strong> și semnezi fără să
                  recitești.
                </li>
                <li>
                  <strong>Te bazezi doar pe informații din grupuri de Facebook</strong>, fără să
                  verifici și la sursa oficială.
                </li>
              </ul>
              <div className="rounded-2xl bg-softBg border border-amber-100 p-4 text-sm">
                <p className="font-semibold text-slate-900 mb-1">
                  Sfat de la un expert în pensii
                </p>
                <p className="text-slate-700">
                  Gândește-te la dosarul de pensie ca la un dosar important în fața unui judecător:
                  tot ce nu este scris, dovedit și clar poate fi ignorat. Cu cât documentele sunt
                  mai ordonate și mai clare, cu atât șansele să primești o decizie corectă și la
                  timp sunt mai mari.
                </p>
              </div>
            </div>
          </section>

          {/* 8. FAQ */}
          <section id="faq" className="bg-white">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                8. Întrebări frecvente despre dosarul de pensionare
              </h2>

              <div className="space-y-4 text-sm">
                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900 mb-1">
                    Care sunt actele de bază pentru dosarul de pensie?
                  </p>
                  <p>
                    În mod normal vei avea nevoie de: cererea tip, actul de identitate, carnetul de
                    muncă sau adeverințe de vechime, livretul militar (dacă este cazul), acte de
                    stare civilă și, după caz, adeverințe pentru condiții deosebite sau speciale și
                    pentru perioade de studii.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900 mb-1">
                    Ce fac dacă îmi dau seama, după depunere, că am uitat un act?
                  </p>
                  <p>
                    Anunță cât mai repede Casa de Pensii și întreabă dacă poți depune actul lipsă
                    ulterior, cu mențiunea clară că acesta completează dosarul deja înregistrat.
                    Notează-ți numărul de înregistrare și data depunerii fiecărui document nou.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900 mb-1">
                    Pot merge la Casa de Pensii însoțit de cineva mai tânăr?
                  </p>
                  <p>
                    Da, este chiar recomandat în multe situații, mai ales dacă te obosește să stai
                    mult la coadă sau dacă ți-e greu să urmărești explicațiile. În anumite cazuri,
                    se poate lucra și cu procură sau împuternicire, dar verifică exact condițiile
                    cu Casa de Pensii.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900 mb-1">
                    Ce legătură are dosarul de pensie cu pensia comunitară?
                  </p>
                  <p>
                    Dacă ai lucrat și în alte țări, dosarul de pensie din România trebuie să
                    menționeze clar aceste perioade. Pe baza lui și a documentelor din celelalte
                    state se inițiază procedura de pensie comunitară, astfel încât să nu pierzi
                    anii lucrați în străinătate.
                  </p>
                  <p className="mt-1">
                    Poți citi mai multe în ghidul dedicat:{' '}
                    <a
                      href="/pensie-comunitara"
                      className="text-primary underline hover:text-primaryDark"
                    >
                      Pensia comunitară – ghid complet pentru românii care au lucrat în străinătate
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Expert box */}
              <div className="mt-8 rounded-2xl bg-softBg border border-slate-100 p-5 text-sm">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-primary/15 flex items-center justify-center text-primary font-semibold text-lg">
                    AD
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Adrian Defta
                    </p>
                    <p className="text-xs text-slate-600">
                      Expert în legislația pensiilor pentru români
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  „Scopul acestui ghid este să îi ajute pe români să își pregătească dosarul de
                  pensionare fără stres și fără surprize. Informațiile sunt generale și nu înlocuiesc
                  comunicările oficiale ale caselor de pensii, dar te ajută să știi ce să întrebi,
                  ce să verifici și la ce să fii atent.”
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER MIC */}
        <footer className="bg-slate-950 text-slate-300 py-6 mt-4 text-xs">
          <div className="section-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-slate-400">
              © {new Date().getFullYear()} dosarpensie.com – ghiduri independente despre pensii.
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