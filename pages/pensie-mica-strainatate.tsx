import Head from 'next/head'

export default function PensieMicaStrainatatePage() {
  return (
    <>
      <Head>
        <title>
          Pensia mică din străinătate – de ce se întâmplă și ce poți face | DosarPensie
        </title>

        <link
          rel="canonical"
          href="https://dosarpensie.com/pensie-mica-strainatate"
        />

        <meta
          name="description"
          content="De ce iese pensia atât de mică pentru anii lucrați în străinătate și ce poți face ca să nu pierzi drepturi? Explicăm clar, cu exemple, pași și sfaturi practice pentru românii care au muncit în UE și UK."
        />

        {/* Open Graph / Twitter */}
        <meta
          property="og:title"
          content="Pensia mică din străinătate – de ce se întâmplă și ce poți face"
        />
        <meta
          property="og:description"
          content="Ghid clar pentru românii care au muncit în străinătate și constată că pensia este mai mică decât se așteptau. Exemple, explicații și pași concreți."
        />
        <meta
          property="og:url"
          content="https://dosarpensie.com/pensie-mica-strainatate"
        />
        <meta
          property="og:image"
          content="https://dosarpensie.com/images/pensie-strainatate.jpg"
        />
        <meta property="og:type" content="article" />

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
                'Pensia mică din străinătate – de ce se întâmplă și ce poți face ca să nu pierzi ani de muncă',
              description:
                'Ghid complet pentru românii care au lucrat în străinătate (UE și UK) și constată că pensia este mai mică decât se așteptau. Explicăm cauze, exemple și soluții posibile.',
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
                'https://dosarpensie.com/pensie-mica-strainatate',
              datePublished: '2025-01-01',
              dateModified: new Date().toISOString(),
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
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Pensia mică din străinătate',
                  item: 'https://dosarpensie.com/pensie-mica-strainatate',
                },
              ],
            }),
          }}
        />

        {/* Schema.org – FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'De ce este pensia mea atât de mică pentru anii lucrați în străinătate?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Pensia poate fi mică deoarece fiecare stat calculează separat, pe baza contribuțiilor și a salariilor reale din acea țară. Diferențele de salariu minim, perioadele neasigurate, cursul valutar și regulile locale pot duce la sume mai mici decât te așteptai.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Se pot “pierde” anii lucrați în străinătate?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Anii nu se pierd dacă au fost declarați și există dovezi clare. Dar dacă nu apar în registrele de asigurări sau nu au fost plătite contribuțiile, autoritățile îi pot ignora la calcul. De aceea sunt importante verificările și, la nevoie, cererile de clarificare.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Pot cere recalcularea pensiei dacă mi se pare prea mică?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Da, în multe cazuri poți depune o cerere de reconsiderare sau contestație, în termenele prevăzute de lege. Este important să atașezi documente suplimentare care să dovedească perioadele de muncă și contribuțiile plătite.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Contează în ce monedă am fost plătit când lucram în străinătate?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Moneda în care ai fost plătit nu influențează direct suma finală, dar nivelul salariilor și contribuțiile efective din acea țară influențează baza de calcul. Pensia se plătește conform regulilor din statul respectiv, în moneda lui.',
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-white">

          {/* HEADER MIC – LOGO + BACK LINK */}
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
              href="/pensie-strainatate"
              className="text-xs sm:text-sm text-primary hover:text-primaryDark"
            >
              ← Înapoi la pensie în străinătate
            </a>
          </div>
        </header>

        <main>
          {/* HERO / INTRO */}
          <section className="bg-softBg border-b border-slate-100">
            <div className="section-container py-10 lg:py-14 grid lg:grid-cols-[3fr,2fr] gap-10">
              <div className="space-y-5">
                <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-primary shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  Ghid practic · Pensie mică pentru anii din străinătate
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Pensia mică din străinătate: de ce se întâmplă și ce poți face ca să nu pierzi ani de muncă
                </h1>

                <p className="text-xs text-slate-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>

                <nav className="text-xs text-primary space-x-3 mt-2">
                  <a href="/">Acasă</a>
                  <span>•</span>
                  <a href="/pensie-strainatate">Pensie în străinătate</a>
                </nav>

                <p className="text-base lg:text-lg text-slate-700">
                  Mulți români descoperă că pensia calculată de o țară străină este mult mai mică decât se așteptau. 
                  În acest ghid îți explic, pe înțelesul tuturor, care sunt motivele reale, ce înseamnă pensia pro-rata, 
                  cum se calculează contribuțiile și ce poți face dacă observi greșeli sau perioade lipsă.
                </p>

                <div className="grid sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div className="rounded-2xl bg-white p-3 shadow-sm flex flex-col gap-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
                      Pentru cine
                    </span>
                    <span className="font-semibold text-slate-900">
                      Români care au muncit în UE / UK
                    </span>
                    <span className="text-slate-500">Și au primit o pensie mai mică</span>
                  </div>

                  <div className="rounded-2xl bg-white p-3 shadow-sm flex flex-col gap-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
                      Află
                    </span>
                    <span className="font-semibold text-slate-900">
                      Cum se calculează pro-rata
                    </span>
                    <span className="text-slate-500">Și de unde apar diferențele</span>
                  </div>

                  <div className="rounded-2xl bg-white p-3 shadow-sm flex flex-col gap-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
                      Important
                    </span>
                    <span className="font-semibold text-slate-900">
                      Ce poți corecta
                    </span>
                    <span className="text-slate-500">Și cum eviți pierderea anilor</span>
                  </div>
                </div>
              </div>

              {/* ASIDE */}
              <aside className="rounded-3xl bg-white shadow-sm border border-slate-100 p-5 lg:p-6 space-y-4 text-sm text-slate-700">
                <h2 className="text-base font-semibold text-slate-900">
                  De ce iese pensia atât de mică?
                </h2>
                <p className="text-primary">
                  Vezi și:{" "}
                  <a href="/pensie-comunitara" className="underline hover:text-primaryDark">
                    Pensia comunitară – ghid complet
                  </a>
                </p>
                <p>
                  Fiecare stat îți calculează partea lui de pensie în funcție de contribuțiile și salariile tale reale 
                  din acea țară. Dacă salariile au fost mici, dacă au existat perioade neasigurate sau dacă ai lucrat doar 
                  câțiva ani, suma poate fi mult mai mică decât în România.
                </p>
                <p className="text-xs text-slate-500">
                  Informațiile sunt generale și pot diferi în funcție de legislația fiecărui stat. Verifică întotdeauna 
                  situația exactă cu autoritatea care a emis decizia.
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
                  Poți parcurge ghidul cap-coadă sau poți sări direct la secțiunea care te interesează.
                </p>
              </div>

              <nav className="bg-softBg rounded-2xl border border-slate-100 p-4 text-sm text-slate-700">
                <ol className="list-decimal list-inside space-y-2">
                  <li><a href="#motive" className="text-primary hover:text-primaryDark">De ce este pensia atât de mică?</a></li>
                  <li><a href="#calcul" className="text-primary hover:text-primaryDark">Cum se calculează pensia pro-rata?</a></li>
                  <li><a href="#pierderi" className="text-primary hover:text-primaryDark">Ce înseamnă „ani pierduți”?</a></li>
                  <li><a href="#solutii" className="text-primary hover:text-primaryDark">Ce poți corecta sau verifica?</a></li>
                  <li><a href="#exemple" className="text-primary hover:text-primaryDark">Exemple de situații reale</a></li>
                  <li><a href="#intrebari" className="text-primary hover:text-primaryDark">Întrebări frecvente</a></li>
                </ol>
              </nav>
            </div>
          </section>

          {/* SECTION 1 – MOTIVE */}
          <section id="motive" className="bg-white">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                1. De ce este pensia atât de mică pentru anii lucrați în străinătate?
              </h2>

              <p>
                Majoritatea oamenilor presupun că dacă au lucrat 5–10 ani în străinătate, pensia din acea țară va fi 
                „proporțională”. De exemplu: „Dacă acolo salariile sunt mai mari, ar trebui să fie și pensia mare”. 
                Realitatea este mai complexă.
              </p>

              <p>
                Există **4 motive principale** pentru care pensia poate ieși foarte mică:
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li><strong>Salariile din acei ani au fost mici</strong> (joburi entry-level, part-time, sezonier).</li>
                <li><strong>Contribuțiile nu au fost plătite integral</strong> de angajator (situații surprinzător de frecvente).</li>
                <li><strong>Ai lucrat perioade scurte</strong>, iar unele state nu acordă pensie sub un anumit prag.</li>
                <li><strong>Țara aplică strict formula pro-rata</strong>, care poate reduce suma finală.</li>
              </ul>

              <div className="rounded-2xl bg-softBg border border-sky-100 p-4 text-sm">
                <p className="font-semibold text-slate-900">Important</p>
                <p>
                  O pensie mică nu înseamnă neapărat că ți s-a greșit dosarul. În multe cazuri, suma reflectă exact 
                  contribuțiile din acea țară.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2 – CALCUL */}
          <section id="calcul" className="bg-softBg">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                2. Cum se calculează pensia pro-rata în străinătate?
              </h2>

              <p>
                Formula europeană pro-rata este destul de tehnică, dar principiul este simplu: 
                **fiecare țară calculează o pensie teoretică pentru întreaga ta viață de muncă, 
                apoi îți acordă doar procentul care corespunde anilor reali lucrați acolo.**
              </p>

              <h3 className="text-lg font-semibold text-slate-900">Formula de bază:</h3>

              <p className="text-sm bg-white rounded-xl border border-slate-200 p-4">
                Pensia pro-rata = Pensie teoretică × (Ani lucrați în statul respectiv / Total ani lucrați în toate statele)
              </p>

              <p>
                Exemplu simplificat: ai 25 ani de muncă în total – 5 în Spania și 20 în România.  
                Spania calculează o pensie pentru 25 ani, apoi îți plătește doar **5/25 = 20%**.
              </p>

              <p className="text-xs text-slate-500">
                Atenție: fiecare stat are propriile reguli privind salariile de referință, contribuțiile minime și perioadele neasigurate.
              </p>
            </div>
          </section>

          {/* SECTION 3 – ANI PIERDUȚI */}
          <section id="pierderi" className="bg-white">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                3. Ce înseamnă „ani pierduți” în străinătate?
              </h2>

              <p>
                Mulți români se tem că statul „nu le recunoaște anii”. În practică, există trei situații diferite:
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li><strong>Anii există, dar nu apar în sistem</strong> – de obicei din cauza angajatorului.</li>
                <li><strong>Anii au fost lucrați fără contribuții</strong> – în unele state, anumite contracte nu generează drept de pensie.</li>
                <li><strong>Anii sunt recunoscuți, dar nu generează pensie separată</strong> – sunt folosiți doar pentru totalizarea UE.</li>
              </ul>

              <p>
                Dacă perioadele nu apar sau sunt incomplete, poți cere rectificarea dosarului printr-o cerere oficială către statul respectiv.
              </p>
            </div>
          </section>

             {/* SECTION 4 – SOLUȚII */}
          <section id="solutii" className="bg-softBg">
            <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">

              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                4. Ce poți face dacă pensia din străinătate este prea mică?
              </h2>

              <p>
                Pensia mică nu este finalul poveștii. Există soluții reale pentru a verifica, corecta 
                sau completa dosarul tău. De multe ori, după o simplă verificare, oamenii descoperă că 
                lipsesc perioade, salariile nu au fost raportate corect sau angajatorul nu a plătit contribuțiile.
              </p>

              <h3 className="text-lg font-semibold text-slate-900">
                4.1. Verifică dacă toți anii lucrați apar în sistem
              </h3>
              <p>
                Primul pas este să ceri statului respectiv un <strong>extras oficial al perioadelor de asigurare</strong>.  
                În Italia se numește Estratto Conto Contributivo, în Germania Versicherungsverlauf, în Spania Vida Laboral.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Verifică fiecare lună</li>
                <li>Caută perioade lipsă</li>
                <li>Compară cu contractele și fluturașii de salariu</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900">
                4.2. Solicită corectarea perioadelor lipsă
              </h3>
              <p>
                Dacă descoperi perioade lipsă, poți depune o cerere de corectare. De obicei se solicită:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>contractul de muncă</li>
                <li>fluturași de salariu</li>
                <li>declarații fiscale</li>
                <li>orice document fiscal emis de statul respectiv</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900">
                4.3. Verifică dacă angajatorul a plătit contribuțiile
              </h3>
              <p>
                În unele țări, chiar dacă ai contract, angajatorul poate să nu plătească contribuțiile.  
                Dacă sistemul arată perioade „zero contribuții”, este un semnal de alarmă.
              </p>

              <h3 className="text-lg font-semibold text-slate-900">
                4.4. Depune cererea de pensie în țara în care locuiești
              </h3>
              <p>
                Una dintre cele mai frecvente greșeli este ca oamenii să depună cererea în țara 
                „unde cred ei că e mai bine”.  
                Regula este simplă: <strong>depui cererea în țara în care locuiești acum</strong>.
              </p>

              <h3 className="text-lg font-semibold text-slate-900">
                4.5. Cere recalcularea dacă s-au omis perioade
              </h3>
              <p>
                Dacă ai primit decizia și observi greșeli, poți solicita recalcularea.  
                Atenție: în multe țări există termene limită de contestare.
              </p>

            </div>
          </section>


          {/* SECTION 5 – EXEMPLE */}
          <section id="exemple" className="bg-white">
            <div className="section-container py-10 lg:py-14 space-y-8 text-slate-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                5. Exemple reale care arată diferențele de calcul
              </h2>

              <div className="grid lg:grid-cols-3 gap-6 text-sm">

                {/* EXEMPLU 1 */}
                <div className="rounded-2xl bg-softBg border border-sky-100 p-4 space-y-2">
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-[0.15em]">
                    Exemplul 1
                  </h3>
                  <h4 className="font-semibold text-slate-900">
                    5 ani în Spania, salariu minim
                  </h4>
                  <p>
                    Deși salariile din Spania par mari comparativ cu România, contribuțiile la 
                    pensie pentru salariul minim sunt reduse. Rezultatul: pensie mică, uneori sub 50 €.
                  </p>
                </div>

                {/* EXEMPLU 2 */}
                <div className="rounded-2xl bg-softBg border border-sky-100 p-4 space-y-2">
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-[0.15em]">
                    Exemplul 2
                  </h3>
                  <h4 className="font-semibold text-slate-900">
                    7 ani în Italia, perioade lipsă
                  </h4>
                  <p>
                    În Italia, dacă angajatorul nu plătește contribuțiile, INPS poate afișa perioade 
                    „non utili”. Aceste luni nu generează pensie, iar suma finală este mult mai mică
                    decât se aștepta persoana.
                  </p>
                </div>

                {/* EXEMPLU 3 */}
                <div className="rounded-2xl bg-softBg border border-sky-100 p-4 space-y-2">
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-[0.15em]">
                    Exemplul 3
                  </h3>
                  <h4 className="font-semibold text-slate-900">
                    4 ani în UK, joburi part-time
                  </h4>
                  <p>
                    În UK, contribuțiile Național Insurance pentru joburi part-time sunt mici sau 
                    chiar inexistente, dacă salariul a fost sub pragul minim.  
                    Rezultatul: pensie aproape simbolică.
                  </p>
                </div>

              </div>
            </div>
          </section>


          {/* SECTION 6 – FAQ */}
          <section id="intrebari" className="bg-softBg">
            <div className="section-container py-10 lg:py-14 space-y-8 text-slate-800">

              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                6. Întrebări frecvente despre pensiile mici din străinătate
              </h2>

              <div className="space-y-4 text-sm">

                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="font-semibold text-slate-900 mb-1">
                    Pensia mică înseamnă că am pierdut anii?
                  </p>
                  <p>
                    Nu. De obicei, anii sunt recunoscuți pentru totalizarea UE, dar contribuțiile 
                    au fost mici. Totuși, poți primi o reparație dacă lipsesc perioade din sistem.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="font-semibold text-slate-900 mb-1">
                    Pot cere recalcularea pensiei?
                  </p>
                  <p>
                    Da, dacă observi perioade lipsă sau contribuții greșite. Fiecare stat are 
                    procedura lui de contestare.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="font-semibold text-slate-900 mb-1">
                    De ce e pensia mai mică decât în România?
                  </p>
                  <p>
                    Pentru că majoritatea joburilor pentru români în străinătate sunt la salarii 
                    minime, cu contribuții reduse. Pensia reflectă doar aceste contribuții, nu nivelul general 
                    al salariilor din țara respectivă.
                  </p>
                </div>

              </div>
            </div>
          </section>


          {/* CTA FINAL */}
          <section className="section-container py-10 text-center text-slate-700 text-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Ai nevoie de ajutor cu dosarul tău de pensie din străinătate?
            </h2>

            <p className="mb-3">
              Îmi poți scrie situația ta și te ajut cu un răspuns orientativ, adaptat țării în care ai lucrat.
            </p>

            <a
              href="mailto:contact@dosarpensie.com"
              className="inline-flex items-center rounded-full bg-primary text-white px-5 py-2 text-xs font-semibold shadow hover:bg-primaryDark"
            >
              Scrie-mi cazul tău →
            </a>

            <p className="mt-2 text-xs text-slate-500">
              Răspunsurile sunt informative și nu înlocuiesc deciziile oficiale ale instituțiilor din străinătate.
            </p>
          </section>

        </main>


        {/* FOOTER */}
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
  );
}