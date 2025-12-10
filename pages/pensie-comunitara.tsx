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

          {/* EXTENSIE – INTRODUCERE AVANSATĂ PENTRU SECȚIUNEA 1 */}
            <section className="bg-white">
              <div className="section-container pb-10 lg:pb-14 space-y-6 text-slate-800">

                <h3 className="text-xl lg:text-2xl font-semibold text-slate-900">
                  De ce există pensia comunitară și de ce e atât de importantă pentru românii care au lucrat în străinătate?
                </h3>

                <p>
                  Milioane de români au lucrat în ultimii 20 de ani în țări diferite din Uniunea Europeană sau în Marea Britanie.
                  Pentru mulți, apare aceeași teamă: <strong>„Oare pierd anii lucrați în străinătate? Cum voi primi pensia?”</strong>.
                </p>

                <p>
                  Regulamentele europene – 883/2004 și 987/2009 – au fost create special pentru a preveni aceste situații. 
                  Ele introduc două principii de bază:
                </p>

                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Niciun an lucrat într-un stat membru nu se pierde.</strong> Indiferent de durata activității, 
                    perioada trebuie luată în calcul.
                  </li>
                  <li>
                    <strong>Fiecare stat plătește partea lui de pensie.</strong> Nu există o „pensie unică UE”, dar există 
                    coordonare între țări.
                  </li>
                </ul>

                <p>
                  Asta înseamnă că dacă ai lucrat 2 ani în România, 6 ani în Italia și 10 ani în Spania, 
                  la final nu vei primi o singură pensie, ci <strong>trei decizii de pensie</strong>.
                  Fiecare țară își va calcula contribuția în funcție de anii lucrați acolo.
                </p>

                <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mt-6">
                  Ce țări sunt incluse în sistemul de pensii comunitare?
                </h3>

                <p>
                  Lista completă include toate țările UE (27 la număr), dar și state din Spațiul Economic European 
                  (Islanda, Norvegia, Liechtenstein), plus Elveția. 
                  Dincolo de UE, <strong>Regatul Unit continuă să aplice reguli aproape identice</strong> în baza Acordului de 
                  retragere post-Brexit.
                </p>

                <p>
                  Practic, pentru majoritatea românilor care au emigrat, sistemul de pensii comunitare reprezintă
                  un cadru extrem de avantajos. Este poate singurul domeniu în care birocrația europeană lucrează 
                  efectiv în favoarea cetățenilor: coordonare, recunoaștere reciprocă, standarde comune și 
                  protecția vechimii în muncă.
                </p>

                <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mt-8">
                  Diferența dintre „pensie comunitară” și „pensie internațională”
                </h3>

                <p>
                  Mulți români confundă termenii, dar există diferențe clare:
                </p>

                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Pensia comunitară</strong> este reglementată de UE și se aplică între statele membre 
                    plus țările asociate.
                  </li>
                  <li>
                    <strong>Pensia internațională</strong> se aplică în relațiile cu țări din afara UE, pe baza 
                    unor tratate bilaterale (ex.: Canada, Israel, Turcia, Coreea de Sud).
                  </li>
                </ul>

                <p>
                  Procedurile sunt similare, dar <strong>nivelul de protecție este cu mult mai mare în UE</strong>, 
                  deoarece regulile sunt obligatorii, nu opționale.
                </p>

                <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mt-8">
                  Ce înseamnă concret „totalizarea perioadelor de muncă”?
                </h3>

                <p>
                  Totalizarea este mecanismul care adună toate perioadele asigurate în diferite state pentru a 
                  vedea dacă ai dreptul la pensie. 
                </p>

                <p>
                  De exemplu:
                </p>

                <ul className="list-disc list-inside space-y-1">
                  <li>România cere 15 ani de stagiu minim.</li>
                  <li>UK cere minim 10 ani.</li>
                  <li>Alte țări cer doar 1–2 ani.</li>
                </ul>

                <p>
                  Dacă ai lucrat:
                </p>

                <p className="pl-4 border-l-2 border-primary">
                  4 ani în România + 3 ani în UK + 8 ani în Italia  
                </p>

                <p>
                  atunci la totalizare ai 15 ani — exact cât îți trebuie pentru pensie în România.
                </p>

                <p>
                  România îți va calcula partea ei (pe cei 4 ani), 
                  iar UK și Italia îți vor calcula și plăti partea lor. 
                  Toate plățile se fac individual, direct în contul tău bancar.
                </p>

                <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mt-8">
                  Cum se împart responsabilitățile între țări?
                </h3>

                <p>
                  În momentul depunerii dosarului, <strong>statul unde locuiești</strong> devine „stat coordonator”.
                  El are obligația să contacteze toate țările în care ai lucrat și să colecteze informațiile despre 
                  contribuțiile tale. 
                </p>

                <p>
                  Fiecare dintre celelalte state:
                </p>

                <ul className="list-disc list-inside space-y-1">
                  <li>verifică datele</li>
                  <li>calculează perioada recunoscută</li>
                  <li>calculează partea de pensie datorată</li>
                  <li>trimite o decizie oficială</li>
                </ul>

                <p>
                  În final, vei primi <strong>mai multe decizii</strong>, iar plata poate fi lunară sau trimestrială,
                  în funcție de stat.
                </p>

                <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mt-8">
                  De ce durează atât de mult procesul?
                </h3>

                <p>
                  Procedura poate dura între 3 și 18 luni, în funcție de:
                </p>

                <ul className="list-disc list-inside space-y-2">
                  <li>numărul statelor implicate;</li>
                  <li>viteza cu care răspund instituțiile străine;</li>
                  <li>calitatea documentelor pe care le trimiți;</li>
                  <li>diferențele de legislație între țări.</li>
                </ul>

                <p>
                  Pentru mulți români, cel mai frustrant aspect este lipsa unei comunicări clare. 
                  Procesul este complet birocratic, iar instituțiile comunică între ele prin canale oficiale 
                  standardizate — ceea ce încetinește lucrurile. 
                </p>

                <p>
                  În ciuda acestui lucru, avantajele sunt semnificative: 
                  <strong>niciun stat nu îți poate ignora vechimea, chiar dacă ai lucrat foarte puțin acolo.</strong>
                </p>

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

          {/* EXTENSIE – SECȚIUNEA 2: TOTALIZAREA PERIOADELOR DE MUNCĂ */}
            <section className="bg-softBg">
              <div className="section-container pb-10 lg:pb-14 space-y-6 text-slate-800">

                <h3 className="text-xl lg:text-2xl font-semibold text-slate-900">
                  Cum funcționează, de fapt, totalizarea anilor lucrați în mai multe țări?
                </h3>

                <p>
                  Totalizarea este unul dintre cele mai importante mecanisme din procedura pensiei comunitare. 
                  Fără totalizare, milioane de oameni care au lucrat în mai multe țări ar rămâne fără dreptul minim 
                  de pensie într-unul dintre state. Regulamentele europene impun statelor să își recunoască reciproc 
                  perioadele de asigurare, astfel încât <strong>niciun an lucrat legal să nu fie pierdut</strong>.
                </p>

                <p>
                  Indiferent dacă ai lucrat 1 an în Spania, 4 ani în UK și 9 ani în România, toate aceste perioade 
                  se adună pentru a vedea dacă îndeplinești stagiul minim necesar într-un stat membru. 
                  Este un concept simplu în teorie, dar extrem de puternic în practică.
                </p>

                <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mt-6">
                  De ce este importantă totalizarea?
                </h3>

                <p>
                  Fiecare stat are cerințe diferite de vechime pentru acordarea pensiei:
                </p>

                <ul className="list-disc list-inside space-y-1">
                  <li><strong>România</strong>: minim 15 ani stagiu de cotizare.</li>
                  <li><strong>UK</strong>: minim 10 ani pentru pensia de stat.</li>
                  <li><strong>Italia</strong>: poate varia între 5 și 20 de ani.</li>
                  <li><strong>Spania</strong>: minim 15 ani.</li>
                  <li><strong>Germania</strong>: minim 5 ani.</li>
                </ul>

                <p>
                  Dacă fiecare stat ar analiza doar anii lucrați pe teritoriul său, milioane de români ar rămâne 
                  fără drepturi. Totalizarea schimbă complet situația: <strong>toate perioadele se adună</strong>.
                </p>

                <div className="rounded-2xl bg-white border border-sky-100 p-4 text-sm">
                  <p className="font-semibold text-slate-900 mb-1">Exemplu concret</p>
                  <p className="text-slate-700">
                    Ai lucrat 6 ani în România și 9 ani în UK.  
                    În mod normal, în România nu ai atinge stagiul minim de 15 ani.  
                    Dar, prin totalizare, cei 6 ani + 9 ani = <strong>15 ani</strong>, deci România trebuie să îți proceseze cererea.
                  </p>
                  <p className="text-slate-700 mt-2">
                    Atenție: totalizarea te ajută <strong>doar să ai dreptul la pensie</strong>, nu și să primești bani pentru anii 
                    lucrați în alt stat. Plata o face fiecare țară separat.
                  </p>
                </div>

                <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mt-8">
                  Ce perioade se iau în calcul la totalizare?
                </h3>

                <p>
                  Regulamentele europene obligă statele să ia în considerare toate perioadele care sunt recunoscute 
                  ca perioade de asigurare în statul de origine. De regulă, acestea includ:
                </p>

                <ul className="list-disc list-inside space-y-2">
                  <li>contract de muncă (full-time sau part-time);</li>
                  <li>muncă sezonieră cu contract;</li>
                  <li>activitate independentă (PFA, self-employed, sole trader);</li>
                  <li>perioade de șomaj plătit;</li>
                  <li>concedii medicale, concedii de maternitate/paternitate;</li>
                  <li>perioade de studii cu contribuție socială (în unele state).</li>
                </ul>

                <p>
                  Fiecare stat are propriile sale reguli exacte, dar în principiu, tot ce înseamnă contribuție 
                  legală la sistemul de asigurări sociale se ia în calcul.
                </p>

                <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mt-8">
                  Ce perioade NU se iau în calcul la totalizare?
                </h3>

                <p>
                  Iată câteva exemple de perioade care, în mod obișnuit, <strong>nu sunt recunoscute</strong>:
                </p>

                <ul className="list-disc list-inside space-y-2">
                  <li>munca la negru, fără contract și fără contribuții;</li>
                  <li>munca în gospodărie fără înregistrare fiscală;</li>
                  <li>perioade declarate, dar fără dovezi (firme desființate fără arhive);</li>
                  <li>voluntariatul neasigurat;</li>
                  <li>contribuții plătite în țări care nu au acord cu UE (ex.: SUA, Emiratele Arabe) – acestea intră în altă procedură.</li>
                </ul>

                <p>
                  Chiar dacă ai muncit efectiv, fără contribuții recunoscute nu se poate stabili o perioadă de 
                  asigurare valabilă.
                </p>

                <div className="rounded-2xl bg-white border border-amber-100 p-4 text-sm mt-4">
                  <p className="font-semibold text-slate-900 mb-1">Important</p>
                  <p className="text-slate-700">
                    Totalizarea NU înseamnă că o țară va plăti pentru munca din alte țări.  
                    Înseamnă doar că te ajută să atingi vechimea minimă necesară pentru acordarea dreptului la pensie.
                  </p>
                </div>

                <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mt-8">
                  Cum aplică fiecare stat regula de totalizare?
                </h3>

                <p>
                  Procesul funcționează astfel:
                </p>

                <ol className="list-decimal list-inside space-y-2">
                  <li><strong>Statul la care depui cererea devine coordonator.</strong></li>
                  <li>Acesta contactează toate țările în care ai lucrat și cere perioadele asigurate.</li>
                  <li>Fiecare stat trimite un formular oficial cu vechimea recunoscută.</li>
                  <li>Coordonatorul adună toate perioadele.</li>
                  <li>Se verifică dacă atingi stagiul minim pentru a avea dreptul la pensie.</li>
                </ol>

                <p>
                  Apoi, fiecare stat îți calculează partea lui de pensie, separat.
                </p>

                <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mt-8">
                  6 scenarii reale prin care mulți români trec
                </h3>

                <div className="grid lg:grid-cols-2 gap-6 text-sm">
                  <div className="rounded-2xl bg-white border border-sky-100 p-4 space-y-2">
                    <h4 className="font-semibold text-slate-900">Scenariul 1</h4>
                    <p>
                      Ai lucrat 2 ani în UK și 13 ani în România.  
                      Fără totalizare → România spune că nu ai 15 ani.  
                      Cu totalizare → ai 15 ani → ai drept la pensie.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white border border-sky-100 p-4 space-y-2">
                    <h4 className="font-semibold text-slate-900">Scenariul 2</h4>
                    <p>
                      Ai lucrat 7 ani în Italia și 7 ani în Spania.  
                      Niciun stat nu îți oferă pensie separat (nu ai minimul de 15 ani).  
                      Cu totalizare → 14 ani → încă nu ai drept.  
                      Îți trebuie încă 1 an muncit în orice stat membru.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white border border-sky-100 p-4 space-y-2">
                    <h4 className="font-semibold text-slate-900">Scenariul 3</h4>
                    <p>
                      Ai 4 ani în România + 4 în Germania + 4 în Olanda + 3 în UK.  
                      Total = 15 ani → drept la pensie în România, UK și Germania.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white border border-sky-100 p-4 space-y-2">
                    <h4 className="font-semibold text-slate-900">Scenariul 4</h4>
                    <p>
                      Ai lucrat 1 an în Spania.  
                      Spania nu îți va plăti pensie, dar anul contează la totalizare în România.
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  După totalizare, dreptul la pensie se stabilește mult mai ușor. În lipsa acestui mecanism, 
                  foarte multe persoane ar rămâne fără pensie într-una sau mai multe țări.
                </p>

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

          {/* EXTENSIE – SECȚIUNEA 3: CUM SE CALCULEAZĂ PENSIA COMUNITARĂ (AVANSAT) */}
          <section className="bg-white">
            <div className="section-container pb-10 lg:pb-14 space-y-6 text-slate-800">

              <h3 className="text-xl lg:text-2xl font-semibold text-slate-900">
                Cum se calculează, în detaliu, pensia comunitară în fiecare stat?
              </h3>

              <p>
                Mulți români cred că pensia comunitară este o „pensie combinată” care vine dintr-un singur loc.
                În realitate, <strong>fiecare stat calculează și plătește individual</strong> partea lui, 
                folosind două metode obligatorii:
              </p>

              <ol className="list-decimal list-inside space-y-2">
                <li><strong>Pensia națională</strong> – se calculează doar pe baza anilor lucrați în acel stat.</li>
                <li><strong>Pensia comunitară (pro-rata)</strong> – se calculează ca și cum toate perioadele lucrate în orice țară ar fi fost în acel stat.</li>
              </ol>

              <p>
                Statul este obligat să compare cele două variante și să îți acorde <strong>valoarea mai mare</strong>.
                Aceasta este cheia întregii proceduri.
              </p>

              <div className="rounded-2xl bg-softBg border border-sky-100 p-4 text-sm">
                <p className="font-semibold text-slate-900 mb-1">Important</p>
                <p className="text-slate-700">
                  Pensia comunitară nu înlocuiește pensia națională.  
                  Statul calculează ambele valori și îți plătește suma finală cea mai favorabilă.
                </p>
              </div>

              <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mt-8">
                Cum funcționează metoda pro-rata (comunitară)?
              </h3>

              <p>
                Această metodă este folosită în mod obligatoriu de toate statele UE și UK.
                Ea pornește de la următoarea idee:
              </p>

              <p className="pl-4 border-l-2 border-primary">
                Statul calculează o pensie teoretică pentru întreaga perioadă lucrată (în România + străinătate),  
                apoi îți plătește doar procentul corespunzător perioadei lucrate efectiv în acel stat.
              </p>

              <h4 className="text-lg font-semibold text-slate-900 mt-6">
                Exemplu simplu de calcul pro-rata
              </h4>

              <p>Ai lucrat:</p>

              <ul className="list-disc list-inside">
                <li>10 ani în România</li>
                <li>10 ani în Italia</li>
              </ul>

              <p>România calculează:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Pensia teoretică pentru 20 de ani lucrați în România.</li>
                <li>Aplică proporția: 10 ani în România / 20 ani total = 50%.</li>
              </ol>

              <p>
                Italia face exact același proces.  
                La final primești două pensii separate.
              </p>

              <div className="rounded-2xl bg-white border border-amber-100 p-4 text-sm mt-4">
                <p className="font-semibold text-slate-900 mb-1">Atenție</p>
                <p className="text-slate-700">
                  Pensia pro-rata este adesea mai mare decât pensia națională atunci când salariile au fost 
                  mici într-o perioadă sau când ai puțini ani în acel stat.
                </p>
              </div>

              <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mt-10">
                Cum calculează România pensia comunitară?
              </h3>

              <p>
                România aplică metoda punctajului. Asta înseamnă că valoarea pensiei depinde de:
              </p>

              <ul className="list-disc list-inside space-y-1">
                <li>veniturile tale brute din perioada de muncă;</li>
                <li>valoarea punctului de referință;</li>
                <li>numărul de ani lucrați efectiv în România.</li>
              </ul>

              <p>
                În calculul pensiei comunitare, Casa de Pensii:
              </p>

              <ol className="list-decimal list-inside space-y-2">
                <li>Calculează pensia ta teoretică pentru toți anii (România + străinătate).</li>
                <li>Aplică proporția: anii lucrați în România / total ani lucrați.</li>
                <li>Plătește doar partea corespunzătoare României.</li>
              </ol>

              <h4 className="text-lg font-semibold text-slate-900 mt-6">
                Exemplu numeric (simplificat)
              </h4>

              <p>Ai lucrat:</p>
              <ul className="list-disc list-inside">
                <li>12 ani în România</li>
                <li>8 ani în Spania</li>
              </ul>

              <p>
                Total = 20 ani. România calculează o pensie pentru 20 ani → 2.000 lei (exemplu).  
                Apoi aplică proporția:
              </p>

              <p className="font-bold text-slate-800">
                12 / 20 = 60% → pensia plătită de România = 1.200 lei.
              </p>

              <p>
                Spania va plăti restul corespunzător celor 8 ani lucrați acolo.
              </p>

              <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mt-10">
                Cum calculează UK pensia când ai lucrat și în România?
              </h3>

              <p>
                UK folosește un sistem complet diferit: **nu puncte, nu procente**, ci ani de contribuție.  
                Pensia completă de stat (full new state pension) se acordă pentru 35 de ani de contribuții.
              </p>

              <p>
                Dacă ai lucrat doar în UK:
              </p>

              <p className="font-bold text-slate-800">
                Pensia = (numărul tău de ani / 35) × valoarea pensiei complete.
              </p>

              <p>
                Când ai lucrat și în România:
              </p>

              <ul className="list-disc list-inside space-y-1">
                <li>România contează doar pentru eligibilitate (să ai minim 10 ani total).</li>
                <li>UK plătește EXCLUSIV pentru anii reali lucrați în UK.</li>
              </ul>

              <div className="rounded-2xl bg-softBg border border-sky-100 p-4 text-sm mt-4">
                <p className="font-semibold text-slate-900 mb-1">Exemplu</p>
                <p className="text-slate-700">
                  Ai lucrat 7 ani în UK și 10 ani în România.  
                  Fără România → nu ai avea minimul de 10 ani → UK nu ar plăti.  
                  Cu totalizare → ai 17 ani → ai drept la pensie UK.
                </p>
                <p className="font-bold mt-2">
                  Dar UK îți va plăti doar pentru cei 7 ani lucrați efectiv în UK.
                </p>
              </div>

              <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mt-10">
                Cum calculează Italia pensia comunitară?
              </h3>

              <p>
                Italia folosește un sistem combinat, în funcție de anul în care ai început activitatea:
              </p>

              <ul className="list-disc list-inside space-y-1">
                <li>sistem retributiv (în funcție de salariile din ultimii ani);</li>
                <li>sistem contributiv (în funcție de totalul contribuțiilor);</li>
                <li>sistem mixt.</li>
              </ul>

              <p>
                Procedura comunitară este identică: Italia calculează întâi o pensie teoretică pentru toată viața 
                ta de muncă, apoi îți plătește proporția pentru anii lucrați efectiv în Italia.
              </p>

              <div className="rounded-2xl bg-white border border-sky-100 p-4 text-sm mt-4">
                <p className="font-semibold text-slate-900">Exemplu</p>
                <p>
                  Ai lucrat 15 ani în Italia și 10 în România.  
                  Italia calculează o pensie teoretică pentru 25 de ani → apoi îți plătește 15/25 din ea.
                </p>
              </div>

              <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mt-10">
                Exemple avansate — situații reale ale românilor din străinătate
              </h3>

              <div className="space-y-6">

                <div className="rounded-2xl bg-softBg border border-slate-100 p-4 text-sm">
                  <p className="font-semibold text-slate-900 mb-1">Exemplul 1 — România + UK + Italia</p>
                  <p>
                    8 ani România + 6 ani UK + 10 ani Italia = 24 ani total.
                  </p>
                  <p>
                    România calculează pentru 24 ani → plătește 8/24.  
                    UK verifică eligibilitatea → plătește pentru 6 ani reali.  
                    Italia calculează pentru 24 ani → plătește 10/24.
                  </p>
                </div>

                <div className="rounded-2xl bg-softBg border border-slate-100 p-4 text-sm">
                  <p className="font-semibold text-slate-900 mb-1">Exemplul 2 — Germania + România</p>
                  <p>
                    12 ani Germania + 4 ani România = 16 ani total.  
                    Germania îți plătește pentru 12 ani.  
                    România îți plătește pentru 4/16 din pensia teoretică.
                  </p>
                </div>

                <div className="rounded-2xl bg-softBg border border-slate-100 p-4 text-sm">
                  <p className="font-semibold text-slate-900 mb-1">Exemplul 3 — România + Spania + UK</p>
                  <p>
                    3 ani România + 8 ani Spania + 5 ani UK = 16 ani total.  
                    Toate cele trei state aplică metoda pro-rata și plătesc separat.
                  </p>
                </div>
              </div>

              <p className="mt-6">
                În concluzie, calculul pensiei comunitare este riguros și bine stabilit prin reguli internaționale.
                Deși procedura poate părea complicată, principiul este constant: <strong>fiecare stat plătește 
                proporția care i se cuvine.</strong>
              </p>

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

          {/* EXTENSIE – SECȚIUNEA 4: PROCEDURĂ COMPLETĂ PENSIE COMUNITARĂ */}
          <section className="bg-softBg">
            <div className="section-container pb-10 lg:pb-14 space-y-8 text-slate-800">

              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
                Procedura completă pentru obținerea pensiei comunitare – ghid avansat
              </h3>

              <p>
                Depunerea unei cereri de pensie comunitară nu înseamnă doar completarea unui formular. 
                Este o procedură internațională în care sunt implicate două, trei sau chiar patru state. 
                Fiecare dintre acestea trebuie să verifice perioadele tale de muncă și să îți calculeze partea 
                de pensie pe care ți-o datorează. 
              </p>

              <p>
                De aceea, este esențial să înțelegi cum funcționează fluxul intern al unui dosar și ce 
                potențiale blocaje pot apărea. O cerere bine pregătită poate salva luni întregi de așteptare.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-10">
                1. Principiul de bază: cererea se depune în țara în care locuiești
              </h3>

              <p>
                Indiferent dacă ai lucrat în România, Italia, UK, Germania sau alt stat membru, cererea se 
                depune în <strong>țara unde ai domiciliul la momentul pensionării</strong>. 
                Acea țară devine automat <strong>stat coordonator</strong>.
              </p>

              <p>
                Statul coordonator are obligația legală să contacteze toate celelalte țări în care ai lucrat 
                și să gestioneze schimbul internațional de documente.
              </p>

              <div className="rounded-2xl bg-white border border-sky-100 p-4 text-sm">
                <p className="font-semibold text-slate-900 mb-1">Exemplu</p>
                <p className="text-slate-700">
                  Dacă locuiești în România la momentul pensionării, depui cererea la Casa de Pensii.  
                  Casa de Pensii contactează Italia, UK și Germania, dacă ai lucrat acolo.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mt-10">
                2. Care sunt documentele obligatorii pentru depunerea cererii?
              </h3>

              <p>
                Deși fiecare stat are propriile cerințe, în practică lista documentelor este foarte similară:
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>Act de identitate (buletin, pașaport).</li>
                <li>Acte de stare civilă (certificat de căsătorie, divorț etc.).</li>
                <li>Carnet de muncă, adeverințe, decizii – pentru România.</li>
                <li>Documente din străinătate: contracte, fluturași, scrisori de la angajator.</li>
                <li>Numere de asigurare socială din fiecare țară (NINo, codice fiscale etc.).</li>
                <li>Formulare standard pentru fiecare stat (completate la ghișeu).</li>
              </ul>

              <p>
                Chiar dacă nu ai toate documentele din străinătate, procedura tot poate merge mai departe — 
                statul străin este obligat să caute informațiile în bazele sale de date.  
                Dar lipsa documentelor poate întârzia termenul de soluționare.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-10">
                3. Ce se întâmplă imediat după depunerea cererii?
              </h3>

              <p>
                După ce depui cererea, instituția din statul coordonator:
              </p>

              <ol className="list-decimal list-inside space-y-2">
                <li>Verifică documentele tale.</li>
                <li>Creează dosarul internațional de pensie.</li>
                <li>Transmite solicitări oficiale către toate țările în care ai lucrat.</li>
              </ol>

              <p>
                Toate aceste comunicări se fac prin sisteme interne de interconectare ale UE, nu prin email. 
                De aceea, procedura durează mai mult decât o cerere obișnuită.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-10">
                4. Cum comunică statele între ele?  
              </h3>

              <p>
                Statele folosesc schimburi standardizate de formulare europene. 
                De exemplu:
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li><strong>Formularul P5000</strong> – confirmarea perioadelor de asigurare.</li>
                <li><strong>Formularul P4000</strong> – cerere de informații suplimentare.</li>
                <li><strong>Formularul E205</strong> – perioade de asigurare pentru lucrătorii mobili.</li>
                <li><strong>Formularul E207</strong> – date pentru stabilirea pensiei.</li>
              </ul>

              <p>
                Nu trebuie să completezi tu aceste formulare; instituțiile le trimit între ele în mod automat.
              </p>

              <div className="rounded-2xl bg-white border border-sky-100 p-4 text-sm">
                <p className="font-semibold text-slate-900 mb-1">De reținut</p>
                <p className="text-slate-700">
                  Dacă informațiile din România și străinătate nu se potrivesc (nume diferite, adrese vechi), 
                  dosarul poate rămâne blocat până la clarificare.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mt-10">
                5. Cât durează în mod real procedura?
              </h3>

              <p>
                Termenul teoretic este de 90 de zile, dar în practică depinde de:
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>numărul statelor implicate;</li>
                <li>rapiditatea cu care răspund instituțiile străine;</li>
                <li>calitatea documentelor depuse;</li>
                <li>actualizarea bazelor de date;</li>
                <li>diferențele dintre legislațiile naționale.</li>
              </ul>

              <p>
                Pentru mulți români, procedura durează <strong>între 6 luni și 18 luni</strong>, mai ales 
                când sunt implicate trei sau patru țări.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-10">
                6. Ce face fiecare stat după ce primește solicitarea?
              </h3>

              <p>
                Fiecare stat din care ai solicitat pensie are următoarele obligații:
              </p>

              <ol className="list-decimal list-inside space-y-2">
                <li>Verifică perioadele tale de muncă din arhive.</li>
                <li>Hotărăște dacă îndeplinești condițiile minime.</li>
                <li>Calculează pensia națională și pensia pro-rata.</li>
                <li>Trimite decizia oficială către statul coordonator sau direct la tine.</li>
              </ol>

              <p>
                De aceea, este posibil să primești decizii în momente diferite din țări diferite.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-10">
                7. Cum primești pensia dacă locuiești în România?
              </h3>

              <ul className="list-disc list-inside space-y-2">
                <li>Pensia din România vine normal, în lei.</li>
                <li>Pensiile din străinătate vin de regulă în euro sau în moneda locală.</li>
                <li>Plata se face în contul tău bancar internațional (IBAN).</li>
                <li>Unele state trimit plata trimestrial (ex.: Germania), altele lunar.</li>
              </ul>

              <div className="rounded-2xl bg-white border border-amber-100 p-4 text-sm">
                <p className="font-semibold text-slate-900 mb-1">Sfat util</p>
                <p className="text-slate-700">
                  Alege un cont bancar internațional fără comisioane mari de conversie (ex.: Revolut, 
                  Wise, ING, UniCredit). Îți poate economisi sute de lei anual.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mt-10">
                8. Greșeli frecvente care blochează dosarele
              </h3>

              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong>Numele diferă între acte</strong> (de ex. schimbare după căsătorie).
                </li>
                <li>
                  <strong>Nu menționezi toate perioadele lucrate</strong> – statul nu are de unde să știe că ai 
                  lucrat 3 luni în Austria dacă nu spui.
                </li>
                <li>
                  <strong>Lipsesc documente esențiale</strong> – nu trimiți contracte, contribuții, dovezi fiscale.
                </li>
                <li>
                  <strong>Adresa din buletin e diferită de adresa reală</strong> – pot apărea retururi la corespondență.
                </li>
                <li>
                  <strong>Nu răspunzi la solicitările suplimentare ale statelor</strong> – dosarul se oprește.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-10">
                9. Când poate fi respinsă cererea?
              </h3>

              <p>
                Cererea poate fi respinsă doar în situații foarte clare:
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>nu ai atins stagiul minim nici după totalizare;</li>
                <li>nu există dovezi ale contribuțiilor (și statul nu le poate găsi);</li>
                <li>nu ai atins vârsta de pensionare.</li>
              </ul>

              <p>
                În rest, chiar și perioadele scurte trebuie luate în calcul.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-10">
                10. Ce faci dacă dosarul durează foarte mult?
              </h3>

              <p>
                În situații de întârziere poți:
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>să întrebi statul coordonator dacă a primit răspuns de la celelalte state;</li>
                <li>să soliciți o copie a formularului transmis (P5000);</li>
                <li>să trimiți dovezi suplimentare ale perioadelor lucrate;</li>
                <li>să ceri includerea unui avocat sau reprezentant (în unele state).</li>
              </ul>

              <p>
                Majoritatea întârzierilor apar atunci când un stat străin nu răspunde la solicitare.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-10">
                11. Concluzie: procedura este complexă, dar drepturile tale sunt protejate
              </h3>

              <p>
                Procedura pensiei comunitare nu este rapidă, dar este una dintre cele mai bine reglementate 
                proceduri internaționale privind drepturile lucrătorilor mobili.  
                Fiecare stat este obligat să îți recunoască anii lucrați și să îți calculeze partea lui de pensie.
              </p>

              <p className="font-semibold text-slate-900">
                Dacă ai lucrat legal și ai plătit contribuții, dreptul la pensie nu se pierde.
              </p>

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

          {/* EXTENSIE – SECȚIUNEA 5: EXEMPLE DETALIATE DE SITUAȚII REALISTE */}
          <section className="bg-white">
            <div className="section-container pb-10 lg:pb-14 space-y-8 text-slate-800">

              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
                Exemple detaliate: cum se aplică pensia comunitară în situații reale
              </h3>

              <p>
                Pentru majoritatea românilor care au muncit în străinătate, întrebarea principală este:
                <strong> „Ce pensie voi primi concret, având perioade în mai multe țări?”</strong>
              </p>

              <p>
                Mai jos găsești exemple reale, inspirate din cazuri frecvente ale românilor din Europa.
                Fiecare exemplu ilustrează modul în care statele aplică regulile de totalizare și calcul pro-rata.
              </p>

              <div className="rounded-2xl bg-softBg border border-primary/20 p-4 text-sm">
                <p className="font-semibold text-slate-900 mb-1">Important</p>
                <p>
                  Sumele din exemple sunt orientative. Fiecare stat calculează pensia finală pe baza datelor 
                  exacte de salariu, contribuții și formule naționale.
                </p>
              </div>

              {/* EXEMPLUL 1 */}
              <div className="space-y-4 mt-10">
                <h4 className="text-xl font-semibold text-slate-900">
                  Exemplul 1 — 20 ani România + 10 ani Italia
                </h4>
                <p>
                  Situație foarte frecventă pentru românii care au lucrat în construcții, agricultură, logistică 
                  sau îngrijire în Italia. 
                </p>

                <p><strong>Total: 30 ani de muncă.</strong></p>

                <h5 className="font-semibold text-slate-800 mt-3">Cum calculează România</h5>
                <p>
                  România calculează mai întâi pensia teoretică pentru 30 de ani (punctaj pe toată perioada), 
                  apoi aplică proporția:
                </p>

                <p className="pl-4 border-l-2 border-primary font-semibold">
                  România plătește: 20 / 30 = 66,6% din pensia teoretică.
                </p>

                <h5 className="font-semibold text-slate-800 mt-3">Cum calculează Italia</h5>
                <p>
                  Italia calculează pensia teoretică pentru 30 ani și aplică proporția:
                </p>

                <p className="pl-4 border-l-2 border-primary font-semibold">
                  Italia plătește: 10 / 30 = 33,3% din pensia teoretică italiană.
                </p>

                <p>
                  Rezultat: **Două pensii separate**, achitate lună de lună sau trimestrial, în funcție de stat.
                </p>
              </div>

              {/* EXEMPLUL 2 */}
              <div className="space-y-4 mt-12">
                <h4 className="text-xl font-semibold text-slate-900">
                  Exemplul 2 — 15 ani România + 5 ani UK
                </h4>
                <p>
                  Situație des întâlnită după migrația masivă în UK. Unii români se întorc acasă la pensie,
                  iar alții rămân în UK.
                </p>

                <p><strong>Total: 20 ani de muncă.</strong></p>

                <h5 className="font-semibold text-slate-800 mt-3">Cum calculează România</h5>
                <p>
                  România recunoaște totalul de 20 ani, calculează o pensie teoretică pentru 20 ani și plătește:
                </p>

                <p className="pl-4 border-l-2 border-primary font-semibold">
                  15 / 20 = 75% din pensia teoretică românească.
                </p>

                <h5 className="font-semibold text-slate-800 mt-3">Cum calculează UK</h5>
                <p>
                  UK nu folosește pro-rata în calculul sumei, ci doar în eligibilitate.  
                  Cu totalizare, ai dreptul la pensie UK (minim 10 ani).
                </p>

                <p className="font-semibold">
                  UK plătește strict cei 5 ani lucrați acolo → 5/35 din pensia completă UK.
                </p>

                <p>
                  Rezultatul: primești **două pensii complet separate**.
                </p>
              </div>

              {/* EXEMPLUL 3 */}
              <div className="space-y-4 mt-12">
                <h4 className="text-xl font-semibold text-slate-900">
                  Exemplul 3 — 10 ani România + 5 ani Spania + 5 ani Germania
                </h4>

                <p><strong>Total: 20 ani de muncă.</strong></p>

                <p>
                  Scenariul celor care au lucrat în două țări diferite ale UE după plecarea din România.
                </p>

                <h5 className="font-semibold text-slate-800 mt-3">Cum calculează România</h5>
                <p className="pl-4 border-l-2 border-primary font-semibold">
                  România plătește 10 / 20 = 50% din pensia teoretică românească.
                </p>

                <h5 className="font-semibold text-slate-800 mt-3">Spania</h5>
                <p className="pl-4 border-l-2 border-primary font-semibold">
                  Spania plătește 5 / 20 = 25% din pensia teoretică spaniolă.
                </p>

                <h5 className="font-semibold text-slate-800 mt-3">Germania</h5>
                <p className="pl-4 border-l-2 border-primary font-semibold">
                  Germania plătește 5 / 20 = 25% din pensia teoretică germană.
                </p>

                <p>
                  Acesta este unul dintre cazurile în care primești <strong>trei pensii diferite</strong>.
                </p>
              </div>

              {/* EXEMPLUL 4 */}
              <div className="space-y-4 mt-12">
                <h4 className="text-xl font-semibold text-slate-900">
                  Exemplul 4 — 4 ani România + 4 ani Germania + 4 ani Olanda + 3 ani UK
                </h4>

                <p><strong>Total: 15 ani de muncă.</strong></p>

                <p>
                  Pare puțin, dar totalizarea salvează dosarul.  
                  În multe state, 4 ani nu sunt suficienți pentru o pensie separată, 
                  dar sunt extrem de valoroși pentru stagiul minim.
                </p>

                <h5 className="font-semibold text-slate-800 mt-3">România</h5>
                <p>
                  România recunoaște totalul de 15 ani → ai drept la pensie în România.  
                  Plătește 4/15 din pensia teoretică.
                </p>

                <h5 className="font-semibold text-slate-800 mt-3">Germania</h5>
                <p>Plătește 4/15 din pensia germană teoretică.</p>

                <h5 className="font-semibold text-slate-800 mt-3">Olanda</h5>
                <p>Plătește 4/15 din sistemul AOW.</p>

                <h5 className="font-semibold text-slate-800 mt-3">UK</h5>
                <p>
                  Cu 3 ani în UK + totalizare → ai drept la pensie UK.  
                  UK plătește 3/35 din pensia completă.
                </p>

                <p className="font-semibold mt-2">
                  Rezultat: patru pensii diferite, fiecare pentru partea sa.
                </p>
              </div>

              {/* EXEMPLUL 5 */}
              <div className="space-y-4 mt-12">
                <h4 className="text-xl font-semibold text-slate-900">
                  Exemplul 5 — Ai doar 1 an într-o țară. Contează?
                </h4>

                <p>
                  Da. Este unul dintre cele mai ignorate adevăruri despre pensia comunitară:
                  <strong> perioadele scurte sunt extrem de valoroase.</strong>
                </p>

                <div className="rounded-2xl bg-softBg border border-sky-100 p-4 text-sm">
                  <p>
                    Dacă ai 1 an în Spania → Spania poate să nu-ți dea o pensie separată (nu atingi minimul).  
                    DAR acel an se adaugă la total în România → te poate ajuta să atingi cei 15 ani necesari.
                  </p>
                </div>

                <p>
                  Mulți români cred că „1 an nu contează”.  
                  În realitate, acel an poate decide dacă ai sau nu dreptul la pensie în România.
                </p>
              </div>

              {/* EXEMPLUL 6 */}
              <div className="space-y-4 mt-12">
                <h4 className="text-xl font-semibold text-slate-900">
                  Exemplul 6 — Ai muncit în trei țări, dar nu ai acte dintr-una
                </h4>

                <p>
                  Situație extrem de frecventă pentru cei care au lucrat în Germania sau Italia prin firme 
                  intermediare care nu mai există.
                </p>

                <p>
                  Vestea bună: chiar dacă nu ai documente, statul străin este obligat să caute atât în 
                  baza fiscală, cât și în arhivele angajatorului.
                </p>

                <p>
                  Vestea proastă: dacă statul nu găsește informațiile, perioada poate să nu fie recunoscută.
                </p>

                <p className="font-semibold">
                  Soluție: prezintă orice dovadă ai — fluturași, contracte, extrase de cont, scrisori de la angajator.
                </p>
              </div>

              {/* EXEMPLUL 7 */}
              <div className="space-y-4 mt-12">
                <h4 className="text-xl font-semibold text-slate-900">
                  Exemplul 7 — Vrei să te pensionezi în străinătate, dar ai lucrat mulți ani în România
                </h4>

                <p>
                  Unii români rămân în Spania, Germania sau Italia la pensie.
                </p>

                <p>
                  Procedura este aceeași: statul unde locuiești devine coordonator.  
                  România va trimite toate informațiile necesare prin canalele UE.
                </p>

                <p>
                  Plata pensiei românești se va face în contul tău bancar din străinătate, fără obligația 
                  de a veni în țară.
                </p>
              </div>

              <p className="mt-10 font-semibold text-slate-800">
                Concluzie: nu există o „pensie unică” pentru toți anii lucrați.  
                <strong>Primești pensii separate, fiecare corespunzătoare anilor lucrați în acea țară.</strong>
              </p>

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

          {/* EXTENSIE – SECȚIUNEA 6: GREȘELI CARE BLOCHEAZĂ PENSIA COMUNITARĂ */}
          <section className="bg-softBg">
            <div className="section-container pb-10 lg:pb-14 space-y-8 text-slate-800">

              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
                Cele 12 greșeli care blochează pensia comunitară și cum le eviți
              </h3>

              <p>
                Deși legislația europeană protejează clar drepturile persoanelor care au lucrat în mai multe țări, 
                multe dosare rămân blocate luni sau chiar ani din cauza unor greșeli simple. În cele mai multe cazuri, 
                problema nu este lipsa dreptului, ci lipsa documentelor, diferențele între state sau completarea greșită a cererii.
              </p>

              <p>
                Mai jos găsești cele mai întâlnite 12 greșeli și modul în care le poți evita.
              </p>

              {/* GREȘEALA 1 */}
              <div className="space-y-3 mt-8">
                <h4 className="text-xl font-semibold text-slate-900">
                  1. Nu menționezi toate țările în care ai lucrat
                </h4>
                <p>
                  Este cea mai frecventă problemă. Mulți români nu menționează perioade scurte de muncă 
                  — 3 luni în Germania, 6 luni în Belgia, 1 an în Spania — crezând că „nu contează”.
                </p>

                <p className="font-semibold text-slate-800">
                  În realitate, chiar și o lună poate influența totalizarea anilor necesari pentru a avea drept la pensie.
                </p>

                <div className="rounded-2xl bg-white border border-primary/20 p-4 text-sm">
                  <p className="font-semibold">Cum eviți</p>
                  <p>
                    Notează toate țările unde ai lucrat, indiferent cât de puțin. Statul va verifica și va confirma 
                    perioadele cu autoritățile străine.
                  </p>
                </div>
              </div>

              {/* GREȘEALA 2 */}
              <div className="space-y-3 mt-10">
                <h4 className="text-xl font-semibold text-slate-900">
                  2. Diferențe de nume între acte (schimbare după căsătorie)
                </h4>
                <p>
                  Mii de dosare se blochează pentru că în România figurați cu un nume, iar în Italia sau Germania cu alt nume.  
                  Casele de pensii nu pot confirma automat identitatea.
                </p>

                <div className="rounded-2xl bg-white border border-amber-200 p-4 text-sm">
                  <p className="font-semibold">Cum eviți</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>păstrează toate certificatele de căsătorie și divorț;</li>
                    <li>anexează o declarație clară privind schimbarea numelui;</li>
                    <li>menționează în cerere numele sub care ai lucrat în fiecare țară.</li>
                  </ul>
                </div>
              </div>

              {/* GREȘEALA 3 */}
              <div className="space-y-3 mt-10">
                <h4 className="text-xl font-semibold text-slate-900">
                  3. Nu răspunzi la solicitările suplimentare ale statelor
                </h4>
                <p>
                  Fiecare stat îți poate cere informații suplimentare: acte lipsă, clarificări despre perioade, salarii, contracte.  
                  Dacă nu răspunzi în termen, dosarul se suspendă automat.
                </p>

                <div className="rounded-2xl bg-white border border-primary/20 p-4 text-sm">
                  <p className="font-semibold">Cum eviți</p>
                  <p>
                    Verifică periodic cutia poștală, emailul, contul bancar și notificările autorităților.  
                    Unele scrisori vin doar pe hârtie, nu și digital.
                  </p>
                </div>
              </div>

              {/* GREȘEALA 4 */}
              <div className="space-y-3 mt-10">
                <h4 className="text-xl font-semibold text-slate-900">
                  4. Nu ai acte din străinătate și nu încerci să le obții
                </h4>
                <p>
                  Deși statele pot verifica în arhive, procedura durează mai mult dacă nu ai niciun document.  
                  De multe ori, un singur fluturaș de salariu poate grăbi dosarul cu luni de zile.
                </p>

                <div className="rounded-2xl bg-white border border-sky-200 p-4 text-sm">
                  <p className="font-semibold">Cum eviți</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>scrie fostului angajator sau firmei de payroll;</li>
                    <li>solicită duplicatul de la autoritățile fiscale din acel stat;</li>
                    <li>folosește extrase bancare ca dovadă secundară.</li>
                  </ul>
                </div>
              </div>

              {/* GREȘEALA 5 */}
              <div className="space-y-3 mt-10">
                <h4 className="text-xl font-semibold text-slate-900">
                  5. Completezi greșit durata perioadelor de activitate
                </h4>
                <p>
                  Mulți completează doar „ani întregi”, de exemplu: 2010–2012, când de fapt au lucrat doar 14 luni.  
                  Statele pot respinge informația dacă nu este exactă.
                </p>

                <div className="rounded-2xl bg-white border border-rose-200 p-4 text-sm">
                  <p className="font-semibold">Cum eviți</p>
                  <p>
                    Notează perioadele exacte: lună și an.  
                    În procedura comunitară, exactitatea este crucială.
                  </p>
                </div>
              </div>

              {/* GREȘEALA 6 */}
              <div className="space-y-3 mt-10">
                <h4 className="text-xl font-semibold text-slate-900">
                  6. Nu păstrezi copii după toate actele depuse
                </h4>
                <p>
                  Este o greșeală periculoasă. Dacă dosarul se pierde sau un stat solicită informații din nou, 
                  trebuie să ai toate documentele la îndemână.
                </p>

                <div className="rounded-2xl bg-white border border-primary/20 p-4 text-sm">
                  <p className="font-semibold">Cum eviți</p>
                  <p>
                    Creează un dosar fizic și unul digital.  
                    Folosește o aplicație de scanare și salvează documentele în cloud.
                  </p>
                </div>
              </div>

              {/* GREȘEALA 7 */}
              <div className="space-y-3 mt-10">
                <h4 className="text-xl font-semibold text-slate-900">
                  7. Nu pregătești în avans conturile bancare pentru plăți internaționale
                </h4>
                <p>
                  Unele state plătesc doar în conturi IBAN validați, altele doar în conturi locale.  
                  Dacă nu ai contul potrivit, plata se întoarce și procedura se blochează.
                </p>

                <div className="rounded-2xl bg-white border border-sky-200 p-4 text-sm">
                  <p className="font-semibold">Cum eviți</p>
                  <ul className="list-disc list-inside">
                    <li>deschide un cont IBAN internațional (Revolut, Wise, ING etc.);</li>
                    <li>verifică dacă statul respectiv plătește în conturi non-reședință;</li>
                    <li>anunță orice schimbare a contului imediat.</li>
                  </ul>
                </div>
              </div>

              {/* GREȘEALA 8 */}
              <div className="space-y-3 mt-10">
                <h4 className="text-xl font-semibold text-slate-900">
                  8. Ignori vârstele diferite de pensionare din fiecare stat
                </h4>
                <p>
                  Este un mit comun că „mă pensionez și primesc totul odată”.  
                  În realitate, fiecare stat are vârsta lui de pensionare, iar unele pot fi mai mari decât în România.
                </p>

                <div className="rounded-2xl bg-white border border-amber-200 p-4 text-sm">
                  <p className="font-semibold">Cum eviți</p>
                  <p>
                    Verifică vârsta de pensionare pentru fiecare țară.  
                    Poți primi pensia românească acum și pensia din Germania sau Italia peste 2–5 ani.
                  </p>
                </div>
              </div>

              {/* GREȘEALA 9 */}
              <div className="space-y-3 mt-10">
                <h4 className="text-xl font-semibold text-slate-900">
                  9. Greșeli în completarea datelor de contact
                </h4>
                <p>
                  Dosare întregi rămân blocate pentru că scrisoarea nu ajunge la solicitant.  
                  O adresă defectuoasă poate amâna plata cu luni.
                </p>

                <div className="rounded-2xl bg-white border border-rose-200 p-4 text-sm">
                  <p className="font-semibold">Cum eviți</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>verifică de două ori adresa completă;</li>
                    <li>adaugă cod poștal corect;</li>
                    <li>actualizează adresa dacă te muți.</li>
                  </ul>
                </div>
              </div>

              {/* GREȘEALA 10 */}
              <div className="space-y-3 mt-10">
                <h4 className="text-xl font-semibold text-slate-900">
                  10. Te bazezi doar pe informații din grupuri de Facebook
                </h4>
                <p>
                  Sunt utile, dar deseori incomplete sau eronate.  
                  Fiecare caz este diferit, iar legislația se schimbă anual.
                </p>

                <div className="rounded-2xl bg-white border border-primary/20 p-4 text-sm">
                  <p className="font-semibold">Cum eviți</p>
                  <p>
                    Verifică informațiile cu surse oficiale sau cere sprijinul unui expert care cunoaște 
                    legislația mai multor state.
                  </p>
                </div>
              </div>

              {/* GREȘEALA 11 */}
              <div className="space-y-3 mt-10">
                <h4 className="text-xl font-semibold text-slate-900">
                  11. Nu păstrezi dovezi pentru perioadele în care ai lucrat „cu firme intermediare”
                </h4>
                <p>
                  În special în Germania, Olanda și Austria, mulți români au lucrat prin firme care nu mai există.  
                  Fără dovezi, instituțiile au dificultăți mari în confirmarea perioadelor.
                </p>

                <div className="rounded-2xl bg-white border border-sky-200 p-4 text-sm">
                  <p className="font-semibold">Cum eviți</p>
                  <p>
                    Păstrează orice dovadă: fluturași, extrase de cont, contracte, emailuri, adeverințe de la firme 
                    românești care te-au trimis la muncă.
                  </p>
                </div>
              </div>

              {/* GREȘEALA 12 */}
              <div className="space-y-3 mt-10">
                <h4 className="text-xl font-semibold text-slate-900">
                  12. Nu depui cererea în statul unde locuiești
                </h4>
                <p>
                  Aceasta este o greșeală majoră. Mulți români cred că trebuie să depună cererea în România, chiar 
                  dacă locuiesc în Italia, Spania sau Germania.
                </p>

                <p className="font-semibold">
                  Regula este clară: depui cererea în statul unde ai domiciliul la momentul pensionării.
                </p>

                <div className="rounded-2xl bg-white border border-emerald-200 p-4 text-sm">
                  <p className="font-semibold">Cum eviți</p>
                  <p>
                    Verifică unde ai domiciliul oficial și depune cererea acolo. Statul coordonator va contacta 
                    automat celelalte țări.
                  </p>
                </div>
              </div>

              <p className="mt-10 font-semibold text-slate-800">
                Concluzie: majoritatea problemelor pot fi evitate dacă pregătești documentele din timp și 
                înțelegi exact cum circulă informațiile între state.  
                Pensia comunitară este un drept puternic, dar procedura necesită atenție.
              </p>

            </div>
          </section>

          {/* 7. FAQ */}

          {/* EXTENSIE – SECȚIUNEA 7: FAQ AVANSAT DESPRE PENSIA COMUNITARĂ */}
          <section className="bg-white">
            <div className="section-container pb-12 lg:pb-16 space-y-8 text-slate-800">

              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
                Întrebări și răspunsuri esențiale despre pensia comunitară (FAQ complet)
              </h3>

              <p>
                Mai jos găsești cele mai importante întrebări pe care le primesc românii care au lucrat în două sau mai multe țări din UE și UK.  
                Răspunsurile sunt clare, actualizate și bazate pe regulile europene de coordonare a sistemelor de securitate socială.
              </p>

              {/* Q1 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">1. Există o singură „pensie comunitară” pentru toți anii lucrați?</p>
                <p>
                  Nu. <strong>Nu există o pensie unică europeană.</strong> Fiecare stat îți va plăti partea lui de pensie, proporțional cu anii lucrați acolo.
                </p>
              </div>

              {/* Q2 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">2. Cine calculează pensia dacă am lucrat în mai multe țări?</p>
                <p>
                  Fiecare stat îți calculează și plătește partea lui. Statul în care depui cererea devine „stat coordonator”, dar nu calculează pentru alte țări.
                </p>
              </div>

              {/* Q3 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">3. Trebuie să depun cererea în România chiar dacă locuiesc în străinătate?</p>
                <p>
                  Nu. Depui cererea <strong>în statul în care locuiești la momentul pensionării</strong>. Acesta contactează celelalte țări.
                </p>
              </div>

              {/* Q4 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">4. Ce se întâmplă dacă am lucrat doar 1–2 ani într-o țară?</p>
                <p>
                  Acei ani pot să nu îți ofere o pensie separată, dar contează foarte mult la totalizarea stagiului minim în alte țări.
                </p>
              </div>

              {/* Q5 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">5. De ce unele țări plătesc lunar și altele trimestrial?</p>
                <p>
                  Pentru că fiecare stat are propriile reguli interne. De exemplu, Germania plătește trimestrial, Italia lunar.
                </p>
              </div>

              {/* Q6 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">6. Pensia din străinătate vine în România?</p>
                <p>
                  Da. Poți primi pensii străine în România, în cont bancar. Banca face automat conversia valutară.
                </p>
              </div>

              {/* Q7 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">7. Ce se întâmplă dacă mă mut după ce am depus cererea?</p>
                <p>
                  Trebuie să anunți imediat instituția care procesează cererea; altfel, corespondența se poate pierde și dosarul se blochează.
                </p>
              </div>

              {/* Q8 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">8. Pot primi pensia românească mai devreme decât pensia din străinătate?</p>
                <p>
                  Da. Fiecare stat are vârsta lui. Poți primi pensia românească la 65 de ani, iar pensia italiană sau germană mai târziu.
                </p>
              </div>

              {/* Q9 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">9. Pot primi pensie din trei sau patru țări?</p>
                <p>
                  Da. Dacă ai contribuit legal în toate, fiecare stat îți va plăti partea lui.
                </p>
              </div>

              {/* Q10 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">10. Pot primi pensia UK dacă am lucrat doar 3 ani?</p>
                <p>
                  Da, dacă totalizarea cu România duce la minimum 10 ani necesari pentru eligibilitate.  
                  UK plătește strict cei 3 ani lucrați acolo.
                </p>
              </div>

              {/* Q11 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">11. Ce acte sunt absolut obligatorii?</p>
                <p>
                  Act de identitate, acte de stare civilă, documente de vechime, coduri fiscale / NINo și orice dovadă a perioadelor de muncă în străinătate.
                </p>
              </div>

              {/* Q12 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">12. Ce fac dacă angajatorul străin nu îmi mai poate da documente?</p>
                <p>
                  Autoritățile fiscale și casele de pensii din acea țară pot verifica arhivele.  
                  Orice dovadă secundară accelerează procesul (extrase bancare, fluturași).
                </p>
              </div>

              {/* Q13 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">13. Pot depune cererea online?</p>
                <p>
                  Depinde de stat. România încă nu permite complet online pentru pensia comunitară; alte state (ex. UK, Germania) au formulare digitale.
                </p>
              </div>

              {/* Q14 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">14. Contează dacă am lucrat cu pauze între perioade?</p>
                <p>
                  Nu. Perioadele se recunosc separat și se adună, indiferent cât de fragmentată este munca ta.
                </p>
              </div>

              {/* Q15 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">15. Dacă am avut perioade „la negru”, contează?</p>
                <p>
                  Nu. Doar perioadele cu contribuții oficiale pot fi recunoscute.
                </p>
              </div>

              {/* Q16 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">16. Cât durează, în medie, procesarea?</p>
                <p>
                  6–12 luni pentru două țări, 12–24 luni când sunt implicate trei sau mai multe state.
                </p>
              </div>

              {/* Q17 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">17. De ce poate dura atât?</p>
                <p>
                  Pentru că statele comunică între ele prin sisteme oficiale, nu prin email. Fiecare verifică arhive, angajatori și baze fiscale.
                </p>
              </div>

              {/* Q18 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">18. Ce fac dacă un stat nu răspunde?</p>
                <p>
                  Poți solicita statului coordonator să trimită o reamintire. În unele țări poți cere audiență sau intervenția unui avocat.
                </p>
              </div>

              {/* Q19 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">19. Pot cere pensia retroactiv?</p>
                <p>
                  Da, dar doar pentru o perioadă limitată (de obicei 3–12 luni), în funcție de legislația statului.
                </p>
              </div>

              {/* Q20 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">20. Dacă am locuit în UK înainte de aderarea României, contează?</p>
                <p>
                  Da, dar perioadele de dinainte de 2007 sunt tratate diferit. UK decide dacă le recunoaște pentru eligibilitate, nu pentru calcul.
                </p>
              </div>

              {/* Q21 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">21. Pot primi pensia comunitară dacă nu am toate actele?</p>
                <p>
                  Da, dar procesul poate dura mai mult. Statul străin este obligat să caute informațiile, dar lipsa dovezilor întârzie dosarul.
                </p>
              </div>

              {/* Q22 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">22. Ce înseamnă „totalizarea stagiilor”?</p>
                <p>
                  Înseamnă adunarea tuturor perioadelor de muncă din țările UE și UK, pentru a vedea dacă îndeplinești condițiile minime din fiecare stat.
                </p>
              </div>

              {/* Q23 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">23. Ce este pensia pro-rata?</p>
                <p>
                  Este pensia comunitară: statul calculează o pensie teoretică pentru totalul anilor și apoi plătește doar proporția care îi revine.
                </p>
              </div>

              {/* Q24 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">24. Ce se întâmplă dacă un stat îmi respinge cererea?</p>
                <p>
                  Doar acel stat îți poate respinge partea lui. Celelalte state continuă procesarea. Poți depune contestație.
                </p>
              </div>

              {/* Q25 */}
              <div className="rounded-2xl border border-slate-100 p-4 space-y-2">
                <p className="font-semibold text-slate-900">25. Pensia comunitară este un „bonus” sau un drept?</p>
                <p>
                  Este un drept garantat prin contribuțiile tale și protejat prin regulamentele europene. Nu este un favor și nu se poate pierde dacă ai contribuit legal.
                </p>
              </div>

              <p className="text-slate-700 mt-6">
                Acest FAQ acoperă cele mai comune întrebări, dar fiecare situație are particularitățile ei. 
                Dacă ai o situație specifică, îmi poți scrie oricând și te ajut cu o analiză personalizată.
              </p>

            </div>
          </section>
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

          {/* EXTENSIE – SECȚIUNEA 8: GHID PE ȚĂRI – ROMÂNIA, ITALIA, SPANIA, GERMANIA, UK */}
          <section id="ghid-pe-tari" className="bg-white">
            <div className="section-container pb-12 lg:pb-16 space-y-10 text-slate-800">

              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                8. Ghid pe țări: cum se calculează și cum se plătește pensia în România, Italia, Spania, Germania și UK
              </h2>

              <p className="text-lg text-slate-700">
                Românii care au lucrat în străinătate se confruntă cu întrebări specifice fiecărei țări.  
                Fiecare stat are regulile lui — vârsta de pensionare, modul de calcul, formularele utilizate, 
                modul în care se plătesc pensiile în România și timpul de soluționare.
              </p>

              <p>
                Mai jos găsești un ghid clar pentru cele mai importante țări unde au lucrat românii:  
                <strong>România, Italia, Spania, Germania și Regatul Unit</strong>.
              </p>

              {/* ROMÂNIA */}
              <div id="romania" className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">8.1. România – cum procesează pensia comunitară</h3>

                <p>
                  România este adesea stat coordonator, deoarece mulți români se întorc în țară înainte de pensionare.  
                  Casa Teritorială de Pensii are obligația de a comunica cu toate statele în care ai lucrat.
                </p>

                <h4 className="font-semibold text-slate-900">Reguli importante:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>vârsta standard: 65 ani bărbați, aproximativ 63 ani femei;</li>
                  <li>stagiul minim: 15 ani (inclusiv prin totalizare);</li>
                  <li>metoda de calcul: punctaj anual × valoarea punctului de referință (VPR);</li>
                  <li>România aplică formula pro-rata pentru perioada internațională.</li>
                </ul>

                <h4 className="font-semibold text-slate-900 mt-2">Documente specifice cerute în România:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>act de identitate;</li>
                  <li>carnet de muncă / adeverințe de vechime;</li>
                  <li>dovada contribuțiilor din străinătate (dacă există);</li>
                  <li>coduri fiscale din străinătate (NINo, codice fiscale etc.).</li>
                </ul>

                <h4 className="font-semibold text-slate-900 mt-2">Durata medie de soluționare:</h4>
                <p>6–12 luni când sunt implicate 1–2 țări; peste 12 luni când sunt 3+ țări.</p>

                <h4 className="font-semibold text-slate-900 mt-2">Plata pensiei:</h4>
                <p>Pensia românească se plătește în lei, în cont bancar românesc sau prin poștă.</p>
              </div>

              <hr className="border-slate-200" />

              {/* ITALIA */}
              <div id="italia" className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">8.2. Italia – INPS și sistemul mixt de pensii</h3>

                <p>
                  Italia este statul unde s-au stabilit cei mai mulți români după 2007. INPS (Istituto Nazionale della Previdenza Sociale) 
                  gestionează pensiile.
                </p>

                <h4 className="font-semibold text-slate-900">Modul de calcul în Italia:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>sistem contributiv → pentru perioade recente;</li>
                  <li>sistem retributiv → pentru perioadele vechi (înainte de reforme);</li>
                  <li>mulți români au pensie mixtă, combinată.</li>
                </ul>

                <h4 className="font-semibold text-slate-900">Vârsta de pensionare:</h4>
                <p>aprox. 67 de ani, ajustată periodic în funcție de speranța de viață.</p>

                <h4 className="font-semibold text-slate-900">Totalizarea cu România:</h4>
                <p>
                  Italia calculează pensia teoretică pentru totalul anilor și apoi plătește doar partea corespunzătoare 
                  anilor lucrați în Italia → <strong>pro-rata INPS</strong>.
                </p>

                <h4 className="font-semibold text-slate-900">Durata medie pentru răspuns:</h4>
                <p>6–12 luni. Dacă lipsesc acte, poate ajunge la 18 luni.</p>

                <h4 className="font-semibold text-slate-900">Plata pensiei în România:</h4>
                <p>Italia plătește în euro, lunar, direct în cont bancar românesc (IBAN).</p>
              </div>

              <hr className="border-slate-200" />

              {/* SPANIA */}
              <div id="spania" className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">8.3. Spania – Seguridad Social și pensia contributivă</h3>

                <p>
                  Spania are un sistem bine structurat, cu un portal digital foarte avansat. Mulți români au lucrat în agricultură, 
                  construcții sau servicii.
                </p>

                <h4 className="font-semibold text-slate-900">Modul de calcul:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Spania folosește baza de cotizare (base de cotización);</li>
                  <li>pensia se calculează în funcție de media salariilor pe un număr mare de ani;</li>
                  <li>apoi se aplică procentul corespunzător anilor lucrați în Spania.</li>
                </ul>

                <h4 className="font-semibold text-slate-900">Vârsta de pensionare:</h4>
                <p>aprox. 66 ani, în creștere graduală.</p>

                <h4 className="font-semibold text-slate-900">Particularități:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>recunoaște perioadele lucrate chiar dacă ai avut contracte scurte;</li>
                  <li>permite verificarea contribuțiilor online (via certificat digital);</li>
                  <li>are termene rapide pentru răspuns.</li>
                </ul>

                <h4 className="font-semibold text-slate-900">Durată medie pentru răspuns:</h4>
                <p>3–8 luni (Spania răspunde printre cele mai rapid).</p>

                <h4 className="font-semibold text-slate-900">Plata pensiei în România:</h4>
                <p>De obicei lunar, în euro, direct în cont bancar.</p>
              </div>

              <hr className="border-slate-200" />

              {/* GERMANIA */}
              <div id="germania" className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">8.4. Germania – Deutsche Rentenversicherung</h3>

                <p>
                  Germania are un sistem riguros, extrem de exact, bazat pe puncte („Entgeltpunkte”).  
                  Românii au lucrat preponderent în industrie, logistică, construcții și îngrijire.
                </p>

                <h4 className="font-semibold text-slate-900">Modul de calcul:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>fiecare an lucrat generează „puncte de pensie”;</li>
                  <li>punctele se înmulțesc cu valoarea anuală a punctului german;</li>
                  <li>apoi se aplică proporția pentru pensia comunitară → ani Germania / ani total.</li>
                </ul>

                <h4 className="font-semibold text-slate-900">Vârsta de pensionare:</h4>
                <p>67 de ani (cu mici excepții).</p>

                <h4 className="font-semibold text-slate-900">Particularități:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>plățile se fac trimestrial, nu lunar;</li>
                  <li>Germania solicită adesea documente suplimentare (adeverințe de muncă, Schulbescheinigung, etc.);</li>
                  <li>statul verifică extrem de riguros perioadele lucrate.</li>
                </ul>

                <h4 className="font-semibold text-slate-900">Durată medie pentru răspuns:</h4>
                <p>8–14 luni, uneori mai mult.</p>

                <h4 className="font-semibold text-slate-900">Plata în România:</h4>
                <p>Trimestrial, în euro, în cont bancar.</p>
              </div>

              <hr className="border-slate-200" />

              {/* UK */}
              <div id="uk" className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">8.5. Regatul Unit – New State Pension după Brexit</h3>

                <p>
                  UK are un sistem diferit față de UE, dar prin Acordul de Retragere după Brexit, românii au în continuare 
                  dreptul la totalizarea perioadelor lucrate în România și UE.
                </p>

                <h4 className="font-semibold text-slate-900">Modul de calcul:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>pensia se acordă pentru max. 35 ani de contribuții;</li>
                  <li>pentru fiecare an lucrat primești 1/35 din pensia completă;</li>
                  <li>UK NU aplică pro-rata pentru calculul sumei, doar pentru eligibilitate.</li>
                </ul>

                <h4 className="font-semibold text-slate-900">Eligibilitate:</h4>
                <p>Minim 10 ani de contribuții (prin totalizare România + alte țări).</p>

                <h4 className="font-semibold text-slate-900">Vârsta de pensionare:</h4>
                <p>66 ani (în creștere spre 67).</p>

                <h4 className="font-semibold text-slate-900">Plata pensiei în România:</h4>
                <p>Se plătește lunar, în lire, în cont IBAN românesc (conversia o face banca).</p>

                <h4 className="font-semibold text-slate-900">Durată medie pentru răspuns:</h4>
                <p>3–6 luni (UK răspunde foarte repede).</p>
              </div>

              <p className="text-slate-700 mt-8">
                Aceste ghiduri te ajută să înțelegi exact ce să te aștepți de la fiecare țară în parte.  
                Procedura este diferită, dar principiul este același: <strong>fiecare stat îți plătește partea sa pentru anii lucrați acolo</strong>.
              </p>

            </div>
          </section>

          {/* EXTENSIE – SECȚIUNEA 9: CALCULATOR PENSIE COMUNITARĂ – CUM ÎȚI ESTIMEZI SINGUR DREPTURILE */}
          <section id="calculator-pensie" className="bg-softBg">
            <div className="section-container pb-12 lg:pb-16 space-y-10 text-slate-800">

              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                9. Calculator explicat – cum îți estimezi singur pensia comunitară
              </h2>

              <p className="text-lg text-slate-700">
                Mulți români întreabă: <strong>„Cât voi primi pensie dacă am lucrat în două sau trei țări?”</strong>  
                Răspunsul exact vine doar de la fiecare stat în parte, dar poți face o estimare destul de apropiată 
                dacă înțelegi cum funcționează regulile de calcul.
              </p>

              <p>
                Această secțiune îți arată, în pași simpli și fără formule complicate, cum să îți estimezi singur pensia comunitară — 
                atât partea din România, cât și partea din Italia, Spania, Germania sau UK.
              </p>

              {/* PASII CONCRETIZATI */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900">9.1. Pașii principali ca să îți estimezi pensia comunitară</h3>

                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    <strong>Adună toți anii lucrați</strong> în România + străinătate. (Aceștia se numesc ani totalizați.)
                  </li>
                  <li>
                    <strong>Identifică anii lucrați în fiecare stat separat</strong>. Fiecare țară plătește doar partea ei.
                  </li>
                  <li>
                    <strong>Calculează pensia teoretică</strong> pe care fiecare stat ar fi plătit-o dacă ai fi lucrat toată viața acolo.
                  </li>
                  <li>
                    <strong>Aplică procentul pro-rata</strong>: ani lucrați în statul respectiv ÷ ani totalizați.
                  </li>
                  <li>
                    <strong>Adună pensiile</strong> — obții suma totală estimată.
                  </li>
                </ol>

                <p className="text-slate-700">
                  Procedura este aceeași pentru toate țările UE + UK, chiar dacă metodele interne diferă.
                </p>
              </div>

              {/* EXEMPLU 1 – ROMANIA + ITALIA */}
              <div className="rounded-3xl bg-white border border-slate-200 p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary">9.2. Exemplu complet: România + Italia</h3>

                <p>
                  Presupunem situația reală a multor români: <strong>20 ani România + 10 ani Italia</strong>.  
                  Total = 30 ani lucrați în două țări.
                </p>

                <h4 className="font-semibold text-slate-900">Pasul 1: Pensia teoretică România</h4>
                <p>
                  Se calculează o pensie ca și cum ai fi lucrat 30 de ani în România.  
                  Exemplu (orientativ): pensia teoretică pentru 30 ani = <strong>3.000 lei</strong>.
                </p>

                <h4 className="font-semibold text-slate-900">Pasul 2: Aplicăm pro-rata</h4>
                <p>
                  România plătește doar partea aferentă celor 20 ani din 30:
                </p>
                <p className="font-medium text-slate-900">
                  20 ÷ 30 × 3.000 lei = <strong>2.000 lei</strong>
                </p>

                <h4 className="font-semibold text-slate-900">Pasul 3: Pensia teoretică Italia</h4>
                <p>
                  Italia calculează ca și cum ai fi lucrat 30 de ani acolo.  
                  Exemplu orientativ: pensia teoretică = <strong>1.200 €</strong>.
                </p>

                <h4 className="font-semibold text-slate-900">Pasul 4: Aplicăm pro-rata italiană</h4>
                <p>
                  Italia plătește partea ei pentru 10 ani din 30:
                </p>
                <p className="font-medium text-slate-900">
                  10 ÷ 30 × 1.200 € = <strong>400 €</strong>
                </p>

                <h4 className="font-semibold text-slate-900">Total estimat</h4>
                <p className="text-lg font-bold text-slate-900">
                  România: 2.000 lei + Italia: 400 €  
                </p>
                <p className="text-slate-600">Fiecare stat îți plătește separat, lunar.</p>
              </div>

              {/* EXEMPLU 2 – ROMANIA + UK */}
              <div className="rounded-3xl bg-white border border-slate-200 p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary">9.3. Exemplu: România + UK</h3>

                <p>
                  Presupunem: <strong>15 ani România + 5 ani UK</strong>. Total = 20 ani.
                </p>

                <h4 className="font-semibold text-slate-900">Cum calculează UK?</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>nu folosește pro-rata pentru calcul;</li>
                  <li>pensia completă UK = 35 ani;</li>
                  <li>plătește doar anii efectiv contribuiți în UK.</li>
                </ul>

                <p className="font-medium text-slate-900">
                  Pensie estimată UK = 5/35 × pensia completă UK
                </p>

                <p>
                  Cu pensia completă de aprox. <strong>£221/săptămână în 2025</strong>:
                </p>

                <p className="font-medium text-slate-900">
                  5/35 × 221 £ ≈ <strong>31 £/săptămână</strong>  
                  (≈ 124 £/lună)
                </p>

                <h4 className="font-semibold text-slate-900">România:</h4>
                <p>
                  România calculează pensie teoretică pentru 20 ani → aplică pro-rata pentru 15 ani.
                </p>
                <p>
                  Dacă pensia teoretică pentru 20 ani ar fi 2.000 lei:
                </p>
                <p className="font-medium text-slate-900">
                  15 ÷ 20 × 2.000 = <strong>1.500 lei</strong>
                </p>

                <p className="text-lg font-bold text-slate-900">Total estimat: 1.500 lei + 124 £</p>
              </div>

              {/* EXEMPLU 3 – ROMANIA + SPANIA + GERMANIA */}
              <div className="rounded-3xl bg-white border border-slate-200 p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary">9.4. Exemplu: România + Spania + Germania</h3>

                <p>
                  Unul dintre cele mai întâlnite scenarii astăzi:  
                  <strong>10 ani România + 5 ani Spania + 5 ani Germania</strong>.
                </p>

                <p>Total ani = 20.</p>

                <h4 className="font-semibold text-slate-900">România:</h4>
                <p>
                  Pensie teoretică pentru 20 ani → să zicem 2.000 lei.  
                  Pro-rata România = 10/20 × 2.000 = <strong>1.000 lei</strong>.
                </p>

                <h4 className="font-semibold text-slate-900">Spania:</h4>
                <p>
                  Pensie teoretică pentru 20 ani, să zicem 900 €.  
                  Pro-rata = 5/20 × 900 = <strong>225 €</strong>.
                </p>

                <h4 className="font-semibold text-slate-900">Germania:</h4>
                <p>
                  Pensie teoretică pentru 20 ani, să spunem 1.000 €.  
                  Pro-rata = 5/20 × 1.000 = <strong>250 €</strong>.
                </p>

                <p className="text-lg font-bold text-slate-900">
                  Total estimat: 1.000 lei + 225 € + 250 €
                </p>

                <p className="text-slate-600">Toate se plătesc separat, în contul tău bancar.</p>
              </div>

              {/* SFATURI PRACTICE */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  9.5. Sfaturi practice ca să îți estimezi cât mai corect pensia
                </h3>

                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Strânge toate documentele de la angajatori (contracte, fluturași, adeverințe).
                  </li>
                  <li>
                    Verifică online contribuțiile acolo unde este posibil (Italia, Spania, Germania).
                  </li>
                  <li>
                    Ține cont că unele țări plătesc trimestrial, nu lunar.
                  </li>
                  <li>
                    Folosește rate de conversie moderate (ex.: 1 € = 5 lei).
                  </li>
                </ul>

                <p className="text-slate-700">
                  Estimarea nu va fi niciodată exactă 100%, dar de obicei este foarte apropiată de suma reală comunicată 
                  de fiecare stat.
                </p>
              </div>

              {/* CONCLUZIE */}
              <div className="rounded-2xl bg-white border border-slate-200 p-5">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Concluzie</h3>
                <p>
                  Calcularea pensiei comunitare pare dificilă, dar devine simplă dacă înțelegi regula de bază:  
                  <strong>fiecare stat îți calculează o pensie teoretică și apoi plătește procentual partea corespunzătoare anilor lucrați acolo</strong>.
                </p>
                <p className="mt-2">
                  Estimarea de acasă nu va înlocui calculele oficiale, dar îți oferă o imagine realistă asupra 
                  venitului tău la pensionare.
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