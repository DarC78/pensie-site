export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* HERO */}
      <header className="border-b border-slate-100 bg-white">
        <div className="section-container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-primary text-white flex items-center justify-center text-lg font-bold">
              DP
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-slate-800">DosarPensie</span>
              <span className="text-xs text-slate-500">Ghiduri clare despre pensie!</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="bg-white">
          <div className="section-container flex flex-col lg:flex-row items-center gap-10 py-14 lg:py-20">
            {/* Text */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-softBg px-3 py-1 text-xs font-medium text-primary">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Ghiduri actualizate pentru 2025
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Ghidul complet pentru{' '}
                <span className="text-primary">dosarul de pensie</span> în România
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl">
                Află, pas cu pas, ce acte îți trebuie, cum pregătești dosarul, când poți
                cere recalcularea pensiei și cum se iau în calcul anii lucrați în străinătate.
                Explicat simplu, fără limbaj juridic complicat.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#ghiduri"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primaryDark transition-colors"
                >
                  Vezi ghidul de început
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors"
                >
                  Întreabă un consultant
                </a>
              </div>

              <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-slate-600">
                <div className="inline-flex items-center gap-2 rounded-full bg-softBg px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Explicat simplu
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-softBg px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Gratuit
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-softBg px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Pentru România & diaspora
                </div>
              </div>
            </div>

            {/* Vizual */}
            <div className="flex-1 w-full">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent text-white shadow-xl">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#ffffff_0,_transparent_60%)]" />
                <div className="relative p-6 sm:p-8 space-y-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-100">
                    Panorama pensiei
                  </p>
                  <h2 className="text-xl sm:text-2xl font-semibold">
                    Vezi dintr-o privire situația dosarului de pensie
                  </h2>

                  <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
                      <p className="text-sky-100 text-xs">Status dosar</p>
                      <p className="text-base font-semibold">Pregătit în proporție de 80%</p>
                      <p className="text-[11px] text-sky-100 mt-1">
                        Lipsesc 2 adeverințe de vechime
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
                      <p className="text-sky-100 text-xs">Stagiu total</p>
                      <p className="text-base font-semibold">37 ani</p>
                      <p className="text-[11px] text-sky-100 mt-1">
                        29 ani România · 8 ani străinătate
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
                      <p className="text-sky-100 text-xs">Tip pensie estimat</p>
                      <p className="text-base font-semibold">Limită de vârstă</p>
                      <p className="text-[11px] text-sky-100 mt-1">
                        Poți depune dosarul în curând
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
                      <p className="text-sky-100 text-xs">Timp estimat</p>
                      <p className="text-base font-semibold">3–6 luni</p>
                      <p className="text-[11px] text-sky-100 mt-1">
                        În funcție de Casa de pensii & dosar
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <div className="text-xs text-sky-100">
                      <p className="font-semibold text-white">Ghid bazat pe legislația în vigoare</p>
                      <p>Actualizat periodic în funcție de modificările legale</p>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 rounded-full bg-white/90 border border-sky-100" />
                      <div className="h-8 w-8 rounded-full bg-white/70 border border-sky-100" />
                      <div className="h-8 w-8 rounded-full bg-white/50 border border-sky-100 flex items-center justify-center text-[10px] font-semibold text-primary">
                        +100k
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GHIDURI PRINCIPALE */}
        <section id="ghiduri" className="bg-softBg py-14 lg:py-20">
          <div className="section-container">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Alege unul dintre ghidurile principale
                </h2>
                <p className="mt-2 text-slate-600 max-w-2xl">
                  Începem cu cele mai frecvente întrebări despre dosarul de pensie, recalculare,
                  pensia comunitară și drepturile tale.
                </p>
              </div>
              <p className="text-sm text-slate-500">
                Toate ghidurile sunt explicate simplu, cu exemple și modele de cereri.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Dosarul de pensie (2025)',
                  desc: 'Acte necesare, termene, cum pregătești dosarul și unde îl depui.',
                  href: '#',
                },
                {
                  title: 'Recalcularea pensiei',
                  desc: 'Când poți cere recalcularea, ce documente atașezi și cât durează.',
                  href: '#',
                },
                {
                  title: 'Pensia comunitară (UE / UK)',
                  desc: 'Cum se cumulează anii lucrați în alte țări și cum se depozitează cererea.',
                  href: {
                    title: 'Pensia comunitară (UE / UK)',
                    desc: 'Cum se cumulează anii lucrați în alte țări și cum se depozitează cererea.',
                    href: '/pensie-comunitara',
                  },
                },
                {
                  title: 'Stagiul minim de cotizare',
                  desc: 'Ce înseamnă, cum verifici vechimea și ce perioade se iau în calcul.',
                  href: '#',
                },
                {
                  title: 'Pensie anticipată',
                  desc: 'Condiții, penalizări, exemple concrete de situații.',
                  href: '#',
                },
                {
                  title: 'Pensie de urmaș',
                  desc: 'Cine are dreptul, ce acte sunt necesare și cum se depune cererea.',
                  href: '#',
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="group rounded-2xl bg-white shadow-sm hover:shadow-md border border-slate-100 p-5 sm:p-6 transition-all cursor-pointer"
                >
                  <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 text-primary h-9 w-9 mb-4">
                    <span className="text-lg">📘</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">{item.desc}</p>
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-primaryDark">
                    Deschide ghidul
                    <span className="ml-1">→</span>
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEME FRECVENTE */}
        <section className="bg-white py-14 lg:py-20">
          <div className="section-container grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Cele mai frecvente probleme la dosarul de pensie
              </h2>
              <p className="text-slate-600 mb-6">
                În practică, multe dosare de pensie întârzie sau sunt respinse din cauză că lipsesc
                documente sau există erori în acte. Noi îți explicăm din timp la ce să fii atent.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primaryDark"
              >
                Vezi soluțiile complete
                <span className="ml-1">→</span>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
              {[
                'Acte lipsă sau incomplete',
                'Erori în carnetul de muncă/adeverințe',
                'Perioade de muncă neînregistrate',
                'Neconcordanțe între acte',
                'Confuzie între tipurile de pensie',
                'Neclarități la pensia comunitară',
                'Termene depășite sau întârziate',
                'Dosar respins și contestații',
              ].map((text) => (
                <div key={text} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIASPORA */}
        <section className="bg-softBg py-14 lg:py-20">
          <div className="section-container grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Lucrezi sau ai lucrat în străinătate?
              </h2>
              <p className="text-slate-600 mb-4">
                Explicăm clar cum se pun la un loc anii lucrați în România cu cei din alte țări
                (UE, UK și nu numai) și cum funcționează pensia comunitară.
              </p>
              <p className="text-slate-600 mb-6">
                Află ce face fiecare stat, unde depui cererea, ce formulare se trimit între casele
                de pensii și cât poate dura procesul.
              </p>
              <a
                href="/pensie-comunitara"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primaryDark transition-colors"
              >
                Ghid pensie comunitară
              </a>
            </div>
            <div className="relative">
              <div className="rounded-3xl bg-white shadow-lg border border-slate-100 p-6 sm:p-7 space-y-4">
                <p className="text-xs font-semibold text-primary uppercase tracking-[0.25em]">
                  Exemple de situații
                </p>
                <div className="space-y-3 text-sm text-slate-700">
                  <div className="border-l-2 border-primary pl-3">
                    <p className="font-semibold">România + Italia</p>
                    <p>12 ani România · 8 ani Italia – unde depui cererea și cum se calculează.</p>
                  </div>
                  <div className="border-l-2 border-primary pl-3">
                    <p className="font-semibold">România + UK</p>
                    <p>Ce s-a schimbat după Brexit și cum se iau în calcul anii lucrați în UK.</p>
                  </div>
                  <div className="border-l-2 border-primary pl-3">
                    <p className="font-semibold">Mai multe țări UE</p>
                    <p>Spania, Germania, Belgia – totalizarea stagiilor și plăți separate.</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500">
                  Informațiile sunt orientative și nu înlocuiesc comunicările oficiale ale caselor
                  de pensii. Verifică întotdeauna ultimele formulare și proceduri.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER / CONTACT */}
        <section id="contact" className="bg-white py-14 lg:py-20">
          <div className="section-container grid md:grid-cols-[3fr,2fr] gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                Vrei să fii la curent cu schimbările despre pensii?
              </h2>
              <p className="text-slate-600 mb-5 max-w-xl">
                Te anunțăm când apar modificări importante la lege, noi formulare sau termene
                limită care te pot afecta. Fără spam, doar informații utile.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Adresa ta de email"
                  className="w-full rounded-full border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primaryDark transition-colors">
                  Abonează-mă
                </button>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Te poți dezabona oricând. Nu trimitem reclame, doar actualizări importante.
              </p>
            </div>
            <div className="rounded-2xl bg-softBg p-5 sm:p-6 text-sm text-slate-700 border border-slate-100">
              <h3 className="font-semibold text-slate-900 mb-3">
                Important de știut
              </h3>
              <ul className="space-y-2">
                <li>• Acest site nu reprezintă Casa Națională de Pensii sau o instituție publică.</li>
                <li>• Informațiile sunt bazate pe legislația în vigoare și ghiduri oficiale.</li>
                <li>• Pentru situații complexe, îți recomandăm să consulți și un specialist.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-300 py-8 mt-6">
        <div className="section-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm">
          <div>
            <p className="font-semibold text-slate-100">DosarPensie</p>
            <p className="text-slate-400 text-xs">
              Ghiduri independente despre pensie, pentru România și diaspora.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs">
            <a href="#ghiduri" className="hover:text-white">
              Ghiduri principale
            </a>
            <a href="#" className="hover:text-white">
              Despre proiect
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
          <p className="text-[11px] text-slate-500">
            Acest site oferă informații generale și nu înlocuiește consultanța juridică.
          </p>
        </div>
      </footer>
    </div>
  )
}