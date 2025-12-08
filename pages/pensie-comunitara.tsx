import Head from 'next/head'

export default function PensieComunitaraPage() {
  return (
    <>
      <Head>
        <title>Pensia comunitară – Ghid complet pentru românii din străinătate | DosarPensie</title>
        <link rel="canonical" href="https://dosarpensie.com/pensie-comunitara" />

        <meta
          name="description"
          content="Ghid complet despre pensia comunitară pentru românii care au lucrat în UE și UK: explicații simple, acte necesare, calcul, pași, exemple și răspunsuri la cele mai frecvente întrebări."
        />

        <meta
          property="og:image"
          content="https://dosarpensie.com/images/pensie-comunitara-cover.jpg"
        />
        <meta
          property="twitter:image"
          content="https://dosarpensie.com/images/pensie-comunitara-cover.jpg"
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Pensia comunitară – ghid complet pentru românii care au lucrat în străinătate",
              "description":
                "Ghid complet despre pensia comunitară pentru românii care au lucrat în străinătate (UE și UK): procedură, calcul, acte necesare, exemple concrete și întrebări frecvente.",
              "author": {
                "@type": "Person",
                "name": "Adrian Defta",
                "jobTitle": "Expert Pensii",
                "url": "https://dosarpensie.com/despre-adrian-defta"
              },
              "publisher": {
                "@type": "Organization",
                "name": "DosarPensie",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://dosarpensie.com/favicon.ico"
                }
              },
              "mainEntityOfPage": "https://dosarpensie.com/pensie-comunitara",
              "datePublished": "2025-12-08",
              "dateModified": new Date().toISOString(),
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Pot primi pensie din două sau mai multe țări?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Da. Dacă ai lucrat legal în mai multe state, fiecare îți va calcula și plăti partea lui de pensie. Vei primi plăți separate, de obicei în același cont bancar."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Ce se întâmplă dacă am lucrat doar 1–2 ani într-o țară?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Perioadele scurte pot conta la totalizarea stagiilor necesare pentru acordarea pensiei. Chiar dacă statul nu îți plătește o pensie separată, anii pot ajuta la îndeplinirea stagiului minim."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Unde depun cererea dacă locuiesc în alt stat decât România?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "De regulă, cererea se depune în statul de domiciliu la momentul pensionării. Autoritatea locală contactează toate țările în care ai lucrat."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Procedura pentru UK este diferită după Brexit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Da, UK nu mai este în UE, dar există acorduri de coordonare care protejează drepturile persoanelor care au lucrat în Regatul Unit și în statele UE. Procedura este similară, dar poate dura mai mult."
                  }
                }
              ]
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Acasă",
                  "item": "https://dosarpensie.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Pensia Comunitară",
                  "item": "https://dosarpensie.com/pensie-comunitara"
                }
              ]
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Adrian Defta",
              "jobTitle": "Expert Pensii",
              "url": "https://dosarpensie.com/despre-adrian-defta",
              "sameAs": [
                "https://www.facebook.com/",
                "https://www.linkedin.com/"
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Ce este pensia comunitară" },
                { "@type": "ListItem", "position": 2, "name": "Cine are dreptul" },
                { "@type": "ListItem", "position": 3, "name": "Cum se calculează" },
                { "@type": "ListItem", "position": 4, "name": "Procedura de depunere" },
                { "@type": "ListItem", "position": 5, "name": "Exemple" },
                { "@type": "ListItem", "position": 6, "name": "Greșeli frecvente" },
                { "@type": "ListItem", "position": 7, "name": "Întrebări frecvente" }
              ]
            })
          }}
        />

        
        
      </Head>

      <div className="min-h-screen bg-white">
        {/* HERO MIC PENTRU PAGINA DE GHID */}
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
              href="/#ghiduri"
              className="text-xs sm:text-sm text-primary hover:text-primaryDark"
            >
              ← Înapoi la ghiduri
            </a>
          </div>
        </header>

        <main>
          {/* INTRO */}
          <section className="bg-softBg border-b border-slate-100">
            <div className="section-container py-10 lg:py-14 grid lg:grid-cols-[3fr,2fr] gap-10">
              <div className="space-y-5">
                <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-primary shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Ghid complet · Pensie comunitară (UE + UK)
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Pensia comunitară: ghid simplu pentru românii care au lucrat în străinătate
                </h1>
                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <nav className="text-xs text-primary space-x-3 mt-2">
                  <a href="/">Acasă</a>
                  <span>•</span>
                  <a href="/ghiduri">Toate ghidurile</a>
                  <span>•</span>
                  <a href="/pensie-strainatate">Pensie în străinătate</a>
                </nav>

                <p className="text-base lg:text-lg text-slate-700">
                  Ai lucrat o parte din viață în România și o parte în alte țări – UE sau UK – și
                  acum te întrebi cum se calculează pensia? În acest ghid îți explicăm, pe limba
                  ta, cum funcționează pensia comunitară: ce este, cine are dreptul, cum se
                  calculează și ce pași trebuie să urmezi.
                </p>

                <div className="grid sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div className="rounded-2xl bg-white p-3 shadow-sm flex flex-col gap-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
                      Pentru cine
                    </span>
                    <span className="font-semibold text-slate-900">
                      Români care au lucrat în 2+ țări
                    </span>
                    <span className="text-slate-500">România + UE / UK / alte state</span>
                  </div>
                  <div className="rounded-2xl bg-white p-3 shadow-sm flex flex-col gap-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
                      Ce afli
                    </span>
                    <span className="font-semibold text-slate-900">
                      Cum se pun anii la un loc
                    </span>
                    <span className="text-slate-500">Fiecare stat plătește partea lui</span>
                  </div>
                  <div className="rounded-2xl bg-white p-3 shadow-sm flex flex-col gap-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
                      Nivel
                    </span>
                    <span className="font-semibold text-slate-900">
                      Explicat simplu, fără jargon
                    </span>
                    <span className="text-slate-500">Potrivit și pentru părinți & bunici</span>
                  </div>
                </div>
              </div>

              {/* Mica “fișă tehnică” */}
              <aside className="rounded-3xl bg-white shadow-sm border border-slate-100 p-5 lg:p-6 space-y-4 text-sm text-slate-700">
                <h2 className="text-base font-semibold text-slate-900">
                  Pe scurt, ce este pensia comunitară?
                </h2>
                <p className="text-sm text-primary">
                  Vezi și:{" "}
                  <a href="/dosar-pensie" className="underline hover:text-primaryDark">Dosarul de pensie – acte și pași</a>
                  {" • "}
                  <a href="/recalculare-pensie" className="underline hover:text-primaryDark">Recalcularea pensiei</a>
                  {" • "}
                  <a href="/pensie-strainatate" className="underline hover:text-primaryDark">Pensie pentru cei din străinătate</a>
                </p>
                <p>
                  Pensia comunitară nu este o pensie „specială”, ci o procedură prin care țările
                  din UE (și cele cu acorduri speciale, cum e UK) își pun la un loc informațiile
                  despre anii tăi lucrați, ca să nu pierzi drepturile la pensie.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>fiecare stat calculează și plătește partea lui de pensie</li>
                  <li>
                    anii lucrați în mai multe țări se adună ca să vezi dacă îndeplinești condițiile
                    minime
                  </li>
                  <li>cererea se depune, de regulă, în țara în care locuiești la pensie</li>
                </ul>
                <p className="text-xs text-slate-500">
                  Informațiile de aici sunt generale și nu înlocuiesc comunicările oficiale ale
                  caselor de pensii. Pentru situații foarte specifice, verifică și cu instituțiile
                  din țările unde ai lucrat.
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
                  Poți citi tot ghidul cap-coadă sau poți sări direct la secțiunea care te
                  interesează cel mai mult.
                </p>
              </div>
              <nav className="bg-softBg rounded-2xl border border-slate-100 p-4 text-sm text-slate-700">
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    <a href="#ce-este" className="text-primary hover:text-primaryDark">
                      Ce este pensia comunitară?
                    </a>
                  </li>
                  <li>
                    <a href="#cine-are-dreptul" className="text-primary hover:text-primaryDark">
                      Cine are dreptul la pensie comunitară?
                    </a>
                  </li>
                  <li>
                    <a href="#cum-se-calculeaza" className="text-primary hover:text-primaryDark">
                      Cum se calculează pensia comunitară?
                    </a>
                  </li>
                  <li>
                    <a href="#procedura" className="text-primary hover:text-primaryDark">
                      Cum depui cererea – pas cu pas
                    </a>
                  </li>
                  <li>
                    <a href="#exemple" className="text-primary hover:text-primaryDark">
                      Exemple concrete de situații
                    </a>
                  </li>
                  <li>
                    <a href="#greseli" className="text-primary hover:text-primaryDark">
                      Greșeli frecvente și cum le eviți
                    </a>
                  </li>
                  <li>
                    <a href="#intrebari" className="text-primary hover:text-primaryDark">
                      Întrebări frecvente
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </section>

          {/* SECTIUNI DE CONTINUT */}

          {/* 1. CE ESTE */}
          <section id="ce-este" className="bg-white">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                1. Ce este pensia comunitară?
              </h2>
              <p>
                Când auzi termenul de „pensie comunitară”, poate suna complicat sau „special”. De
                fapt, regulile sunt destul de logice: țările din Uniunea Europeană, plus câteva
                state cu acorduri speciale (de exemplu Marea Britanie), au stabilit împreună cum să
                își coordoneze sistemele de pensii, astfel încât o persoană care a lucrat în mai
                multe țări să nu piardă anii de muncă.
              </p>
              <p className="text-slate-800">
                Pe scurt, <strong>pensia comunitară este procedura prin care anii lucrați în mai multe
                țări din UE și UK sunt totalizați</strong> pentru stabilirea dreptului la pensie. Nu
                există o „pensie unică europeană”, ci fiecare țară îți plătește partea ei. Procedura 
                se aplică oricui a lucrat legal și a plătit contribuții într-un stat membru.
              </p>
              <p>
                Ideea de bază este simplă: <strong>fiecare stat în care ai contribuit îți plătește
                partea lui de pensie</strong>, dar la calcul se ține cont și de anii lucrați în
                celelalte state. Asta se numește „totalizarea stagiilor de cotizare”.
              </p>
              <div className="rounded-2xl bg-softBg border border-sky-100 p-4 text-sm">
                <p className="font-semibold text-slate-900 mb-1">Important de reținut</p>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>
                    nu există „o pensie comunitară unică” care vine de la „UE”; fiecare țară plătește
                    separat;
                  </li>
                  <li>
                    regulile europene doar coordonează sistemele, ca tu să nu pierzi drepturile din
                    țările în care ai lucrat;
                  </li>
                  <li>
                    în practică, la final poți primi <strong>mai multe pensii, câte una din fiecare
                    stat</strong>, plătite lunar în contul tău.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. CINE ARE DREPTUL */}
          <section id="cine-are-dreptul" className="bg-softBg">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                2. Cine are dreptul la pensie comunitară?
              </h2>
              <p>
                Nu trebuie să fi lucrat „mult” în fiecare țară ca să intri în procedură. Contează
                mai ales dacă ai fost angajat legal și dacă s-au plătit contribuțiile sociale.
              </p>
              <h3 className="text-lg font-semibold text-slate-900">
                Ai șanse mari să intri în această procedură dacă:
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>ai lucrat legal în România și cel puțin o altă țară UE, SEE, Elveția sau UK;</li>
                <li>ai avut contract de muncă, PFA sau altă formă de activitate asigurată;</li>
                <li>
                  există dovezi clare ale muncii tale (contracte, fluturași de salariu, adeverințe,
                  extrase de cont, documente de la autoritățile fiscale);
                </li>
                <li>ai atins sau ești aproape de vârsta de pensionare într-una dintre țări.</li>
              </ul>
              <div className="rounded-2xl bg-white border border-amber-100 p-4 text-sm">
                <p className="font-semibold text-slate-900 mb-1">Atenție</p>
                <p className="text-slate-700">
                  Fiecare stat are vârsta lui de pensionare și regulile lui. Poți îndeplini condițiile
                  de vârstă în România, dar nu încă în alt stat. Asta înseamnă că vei primi pensia
                  dintr-o țară mai devreme, și din cealaltă mai târziu.
                </p>
                <p className="text-slate-700">
                  Mulți români întreabă: <strong>„Câți ani trebuie să lucrez în străinătate ca să primesc
                  pensie?”</strong> Chiar și perioade scurte, de 1–2 ani, pot fi utile. Chiar dacă statul 
                  respectiv nu îți plătește o pensie separată, acei ani contează la totalizarea stagiilor 
                  pentru a vedea dacă îndeplinești condițiile minime într-o altă țară.
                </p>
              </div>
            </div>
          </section>

          {/* 3. CUM SE CALCULEAZA */}
          <section id="cum-se-calculeaza" className="bg-white">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                3. Cum se calculează pensia comunitară?
              </h2>
              <p>
                Regulile europene pornesc de la un principiu simplu: <strong>fiecare stat plătește
                pentru perioada în care ai fost asigurat la el</strong>. Totuși, la calcul se iau
                în considerare și anii lucrați în celelalte țări, pentru a vedea dacă îndeplinești
                condițiile minime de pensionare.
              </p>

              <h3 className="text-lg font-semibold text-slate-900">
                Două noțiuni importante
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Pensie națională:</strong> statul calculează pensia doar pe baza anilor
                  lucrați la el, ignorând celelalte țări.
                </li>
                <li>
                  <strong>Pensie comunitară (pro-rata):</strong> statul calculează o pensie ca și
                  cum ai fi lucrat toată viața acolo, apoi aplică un procent corespunzător anilor
                  reali lucrați în acel stat.
                </li>
              </ul>

              <div className="rounded-2xl bg-softBg border border-sky-100 p-4 text-sm space-y-2">
                <p className="font-semibold text-slate-900">Exemplu simplificat</p>
                <p className="text-slate-700">
                  O întrebare foarte frecventă este: <strong>„Cum se calculează pensia dacă am lucrat în 
                  două sau mai multe țări?”</strong> Fiecare stat face două calcule: o pensie națională 
                  (doar pentru anii lucrați acolo) și o pensie comunitară teoretică. Apoi îți plătește 
                  procentual partea corespunzătoare anilor reali lucrați în acel stat.
                </p>
                <p>
                  Să spunem că ai 20 de ani lucrați în România și 10 ani în Italia. România calculează
                  o pensie teoretică pentru 30 de ani lucrați integral în România, apoi îți plătește
                  20/30 din acea sumă. Italia face același lucru: calculează pentru 30 de ani, apoi
                  îți plătește 10/30. În final, <strong>tu primești două pensii</strong>, una din
                  fiecare stat.
                </p>
                <p className="text-xs text-slate-500">
                  Sumele din exemplu sunt orientative. Fiecare stat are propriile formule detaliate
                  de calcul, care țin cont de salarii, punctaj și alte elemente.
                </p>
              </div>
            </div>
          </section>

          {/* 4. PROCEDURA */}
          <section id="procedura" className="bg-softBg">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                4. Cum depui cererea de pensie comunitară – pas cu pas
              </h2>
              <p>
                Procedura poate părea complicată, mai ales când sunt implicate 2–3 țări. Încercăm
                să o simplificăm în pași clari, astfel încât să îi poți explica și părinților sau
                bunicilor.
              </p>

              <p className="text-slate-700">
                Una dintre cele mai întâlnite întrebări este: <strong>„Unde depun cererea pentru 
                pensia comunitară?”</strong> Regula este simplă: depui cererea în <strong>țara în care 
                locuiești la momentul pensionării</strong>. De acolo, instituția competentă va 
                contacta România și celelalte state în care ai lucrat.
              </p>

              <h3 className="text-lg font-semibold text-slate-900">
                4.1. Dacă locuiești în România la momentul pensionării
              </h3>
              <p>
                De regulă, <strong>depui dosarul la Casa Teritorială de Pensii</strong> din județul
                în care ai domiciliul. În cerere bifezi faptul că ai lucrat și în alte țări și
                menționezi unde.
              </p>
              <ul className="list-decimal list-inside space-y-2">
                <li>
                  Pregătești dosarul de pensie pentru România (acte de identitate, vechime, adeverințe,
                  diplome etc.).
                </li>
                <li>
                  Anexezi documentele care arată activitatea ta în străinătate: contracte,
                  fluturași, decizii de la angajator, documente de la autoritatea fiscală sau
                  de la instituția de pensii din statul respectiv.
                </li>
                <li>
                  Casa de Pensii din România trimite, prin canalele oficiale, formularele către
                  celelalte țări în care ai lucrat.
                </li>
                <li>
                  Fiecare stat își calculează partea și trimite răspunsul. La final, primești
                  deciziile de pensie.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900">
                4.2. Dacă locuiești într-o altă țară (de exemplu în Italia, Spania sau UK)
              </h3>
              <p>
                În majoritatea cazurilor, <strong>depui cererea în țara în care locuiești acum</strong>.
                Autoritatea de acolo va contacta România și celelalte state în care ai lucrat.
              </p>
              <p>
                Este important să spui clar, în cerere, <strong>toate țările în care ai lucrat</strong>,
                chiar dacă ai avut doar un an sau doi de muncă acolo.
              </p>

              <h3 className="text-lg font-semibold text-slate-900">
                4.3. Ce acte sunt, în general, necesare
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>act de identitate (buletin, pașaport);</li>
                <li>acte de stare civilă (certificat de căsătorie, dacă e cazul);</li>
                <li>documente de vechime din România (carnet de muncă, adeverințe, decizii);</li>
                <li>documente care arată perioadele de muncă în străinătate;</li>
                <li>numere de asigurare socială / coduri fiscale din celelalte țări;</li>
                <li>formulare tip de cerere (diferă de la stat la stat).</li>
              </ul>

              <div className="rounded-2xl bg-white border border-amber-100 p-4 text-sm">
                <p className="font-semibold text-slate-900 mb-1">Sfaturi practice</p>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>
                    păstrează copii după toate actele trimise, de preferat scanate și salvate și în
                    format digital;
                  </li>
                  <li>
                    notează-ți, într-un caiet sau fișier, cu cine ai vorbit și ce ți s-a spus (date,
                    nume, număr de dosar);
                  </li>
                  <li>
                    pregătește-te mental pentru un proces care poate dura câteva luni sau chiar mai
                    mult, în funcție de numărul de țări implicate.
                  </li>
                </ul>
                <p className="text-slate-700">
                  Durata procedurii depinde de numărul de țări implicate. În general, 
                  <strong>procesul durează între 3 și 12 luni</strong>, dar poate fi mai lung dacă sunt 
                  implicate 3 sau mai multe state sau dacă lipsesc documente.
                </p>
              </div>
            </div>
            
          </section>

          {/* 5. EXEMPLE */}
          <section id="exemple" className="bg-white">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                5. Exemple concrete de situații
              </h2>
              <p>
                Exemplele de mai jos sunt simplificate, dar te pot ajuta să îți faci o idee despre
                cum funcționează, în practică, pensia comunitară. Sumele concrete se vor calcula
                întotdeauna de către fiecare stat, pe baza propriilor reguli.
              </p>

              <div className="grid lg:grid-cols-3 gap-6 text-sm">
                <div className="rounded-2xl bg-softBg border border-sky-100 p-4 space-y-2">
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-[0.15em]">
                    Exemplu 1
                  </h3>
                  <h4 className="font-semibold text-slate-900">
                    20 de ani România + 10 ani Italia
                  </h4>
                  <p>
                    România calculează o pensie teoretică pentru 30 de ani lucrați integral în
                    România, apoi îți plătește 20/30. Italia face același lucru pentru sistemul
                    italian și plătește 10/30. Tu primești două pensii, în contul tău.
                  </p>
                </div>
                <div className="rounded-2xl bg-softBg border border-sky-100 p-4 space-y-2">
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-[0.15em]">
                    Exemplu 2
                  </h3>
                  <h4 className="font-semibold text-slate-900">
                    15 ani România + 5 ani UK (după aderarea României la UE)
                  </h4>
                  <p>
                    România ia în calcul anii lucrați în UK pentru a vedea dacă îndeplinești
                    stagiul minim. UK aplică regulile din acordul cu UE și calculează partea lui de
                    pensie, pe baza contribuțiilor plătite acolo.
                  </p>
                </div>
                <div className="rounded-2xl bg-softBg border border-sky-100 p-4 space-y-2">
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-[0.15em]">
                    Exemplu 3
                  </h3>
                  <h4 className="font-semibold text-slate-900">
                    10 ani România + 5 ani Spania + 5 ani Germania
                  </h4>
                  <p>
                    Fiecare stat calculează partea lui și îți plătește separat. Poți ajunge să ai
                    trei decizii de pensie și trei plăți lunare, eventual în aceeași bancă, dacă
                    alegi contul potrivit.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 6. GRESELI */}
          <section id="greseli" className="bg-softBg">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                6. Greșeli frecvente și cum le eviți
              </h2>
              <p>
                Procedura este gândită să protejeze drepturile lucrătorilor care se mută dintr-o
                țară în alta. Totuși, în practică apar multe probleme din cauză că anumite etape
                sunt ignorate sau înțelese greșit.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Nu menționezi toate țările în care ai lucrat.</strong> Chiar dacă ai
                  lucrat doar un an, este mai bine să treci acea țară în cerere.
                </li>
                <li>
                  <strong>Nu păstrezi dovezi ale muncii în străinătate.</strong> Fără documente,
                  autoritățile pot avea dificultăți în a confirma perioadele.
                </li>
                <li>
                  <strong>Te bazezi doar pe informații din grupuri de Facebook.</strong> Pot fi
                  utile, dar fiecare caz are particularitățile lui.
                </li>
                <li>
                  <strong>Nu verifici adresele și datele de contact.</strong> Dacă te muți sau îți
                  schimbi contul bancar și nu anunți, pot apărea blocaje la plată.
                </li>
              </ul>
            </div>
          </section>

          {/* 7. FAQ */}
          <section id="intrebari" className="bg-white">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                7. Întrebări frecvente despre pensia comunitară
              </h2>

              <div className="space-y-4 text-sm">
                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900 mb-1">
                    Pot primi pensie din două sau mai multe țări?
                  </p>
                  <p>
                    Da. Dacă ai lucrat legal în mai multe state și ai îndeplinit condițiile minime
                    de asigurare, fiecare stat îți va calcula și plăti partea lui de pensie. În
                    practică, vei primi mai multe pensii, de obicei în același cont bancar.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900 mb-1">
                    Ce se întâmplă dacă am lucrat doar 1–2 ani într-o țară?
                  </p>
                  <p>
                    Perioadele scurte pot fi totuși utile pentru a atinge stagiul minim de
                    cotizare atunci când se adună toate țările. Chiar dacă acea țară nu îți plătește
                    pensie separată, anii pot conta la calculul dreptului de pensie în alt stat.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900 mb-1">
                    Unde depun cererea dacă acum locuiesc în alt stat decât România?
                  </p>
                  <p>
                    De regulă, depui cererea în țara în care ai domiciliul la momentul
                    pensionării. Autoritatea de acolo va contacta România și celelalte state în
                    care ai lucrat și va coordona schimbul de informații.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900 mb-1">
                    Procedura pentru UK este diferită după Brexit?
                  </p>
                  <p>
                    După Brexit, UK nu mai face parte din UE, dar există acorduri speciale care
                    continuă să protejeze drepturile persoanelor care au lucrat în Regatul Unit și
                    în statele membre. Procedura poate fi puțin mai lentă, dar principiul de bază –
                    fiecare stat plătește partea lui – rămâne valabil.
                  </p>
                  <p className="text-slate-700">
                    După Brexit, UK nu mai este membru UE, dar există acorduri speciale care asigură 
                    <strong>totalizarea stagiilor lucrate în România și UK</strong>. Procedura este similară 
                    cu cea europeană, dar uneori poate dura mai mult.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-softBg border border-slate-100 p-4 text-sm text-slate-700">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Concluzie: pensia comunitară nu este un „bonus”, ci dreptul tău
                </h3>
                <p>
                  Dacă ai muncit cinstit, cu acte, în mai multe țări, ai dreptul ca toți anii tăi
                  să fie luați în calcul. Nu este un favor, ci rezultatul contribuțiilor plătite.
                  Cheia este să îți pregătești bine documentele și să fii pregătit pentru un proces
                  administrativ care poate dura, dar care merită.
                </p>
                <p className="text-slate-700">
                  Dacă locuiești în România, <strong>poți primi în continuare pensie din toate țările în 
                  care ai contribuit</strong>. Plățile sunt trimise direct în contul tău bancar, în moneda 
                  statului care plătește pensia.
                </p>

              </div>
            </div>
          </section>

          <section className="section-container py-10 text-center text-slate-700 text-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Ai nevoie de ajutor în situația ta specifică?
            </h2>
            
            <p className="mb-3">
              Îmi poți trimite situația ta pe email și te ajut cu un răspuns ghid personalizat.
            </p>
            <a
              href="mailto:contact@dosarpensie.com"
              className="inline-flex items-center rounded-full bg-primary text-white px-5 py-2 text-xs font-semibold shadow hover:bg-primaryDark"
            >
              Scrie-mi cazul tău →
            </a>
            <p className="mt-2 text-xs text-slate-500">
              Răspunsurile sunt orientative și nu înlocuiesc comunicările oficiale ale Casei de Pensii.
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