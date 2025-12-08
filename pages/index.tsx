import Head from 'next/head'
import { useState } from 'react'

/* --------------------------------------------------
   CONSTANTE SEO
-------------------------------------------------- */
const SITE_URL = 'https://dosarpensie.com'
const OG_IMAGE = `${SITE_URL}/images/pensie-comunitara-cover.jpg`

/* --------------------------------------------------
   TIPURI + COMPONENTE EXISTENTE
-------------------------------------------------- */
type Article = {
  id: string
  category: string
  title: string
  excerpt: string
  href: string
  image: string
  time?: string
}

// LOGO – combinație instituțional + prietenos
function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-9 w-9 rounded-2xl bg-primary flex items-center justify-center shadow-sm">
        <div className="h-6 w-6 rounded-xl border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
          DP
        </div>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-semibold text-slate-900 text-sm sm:text-base">
          dosar<span className="text-primary">pensie</span>.com
        </span>
        <span className="text-[11px] text-slate-500">
          Ghiduri clare pentru pensie & diaspora
        </span>
      </div>
    </div>
  )
}

/* --------------------------------------------------
   MENIURI + DATE ARTICOLE
-------------------------------------------------- */
const mainSections = [
  'Ghiduri pensie',
  'Pensie comunitară',
  'Recalculare pensie',
  'Pensie în străinătate',
  'Pensie anticipată',
  'Întrebări frecvente',
] as const

type SectionKey = (typeof mainSections)[number]

const subMenus: Record<SectionKey, string[]> = {
  'Ghiduri pensie': [
    'Dosarul de pensionare',
    'Tipuri de pensie în România',
    'Vârsta de pensionare',
    'Stagiul de cotizare',
  ],
  'Pensie comunitară': [
    'Ce este pensia comunitară',
    'Pașii pentru diaspora',
    'Exemple România + UE',
    'Întrebări frecvente',
  ],
  'Recalculare pensie': [
    'Când merită recalcularea',
    'Acte necesare',
    'Modele de cereri',
    'Decizii și contestații',
  ],
  'Pensie în străinătate': [
    'Locuiești în România',
    'Locuiești în alt stat',
    'Plata pensiei în cont',
    'Modificări de adresă',
  ],
  'Pensie anticipată': [
    'Condiții de acordare',
    'Penalizări',
    'Exemple de calcul',
    'Transformarea în limită de vârstă',
  ],
  'Întrebări frecvente': [
    'Ani lucrați în două țări',
    'Pensie din UK după Brexit',
    'Contribuții mici sau lipsă',
    'Ce faci dacă nu găsești actele',
  ],
}

const featuredArticle: Article = {
  id: 'feat-1',
  category: 'Pensie comunitară',
  title:
    'Pensia comunitară: ghid complet pentru românii care au lucrat în UE și UK',
  excerpt:
    'Ai lucrat în 2 sau mai multe țări și nu știi de unde să începi cu pensia? Îți explicăm pas cu pas cum se adună anii și cum depui cererea.',
  href: '/pensie-comunitara',
  image: '/images/pensie-comunitara-cover.jpg',
  time: 'Actualizat azi',
}

const topArticles: Article[] = [
  {
    id: 'top-1',
    category: 'Dosar pensie',
    title:
      'Dosarul de pensionare în 2025: lista completă de acte, explicată simplu',
    excerpt:
      'Vezi lista de documente necesare pentru dosarul de pensie, plus exemple de situații speciale (ani lipsă, muncă în străinătate).',
    href: '#',
    image: '/images/dosar-pensie.jpg',
  },
  {
    id: 'top-2',
    category: 'Recalculare pensie',
    title: 'Când merită să ceri recalcularea pensiei și ce poți obține',
    excerpt:
      'Nu orice recalculare aduce bani în plus. Îți arătăm situațiile în care merită cu adevărat și cum pregătești cererea.',
    href: '#',
    image: '/images/recalculare.jpg',
  },
  {
    id: 'top-3',
    category: 'Pensie în străinătate',
    title:
      'Locuiești în străinătate, dar ai ani lucrați în România? Cum îți păstrezi drepturile',
    excerpt:
      'Ce trebuie să faci ca să nu pierzi drepturile din România, dacă trăiești deja în alt stat și te apropii de vârsta de pensie.',
    href: '#',
    image: '/images/pensie-strainatate.jpg',
  },
]

const latestArticles: Article[] = [
  {
    id: 'lat-1',
    category: 'Actualizare',
    title: 'Cum se schimbă pensia comunitară după noile reguli de coordonare UE',
    href: '#',
    image: '',
    time: '12:40',
  },
  {
    id: 'lat-2',
    category: 'Exemplu practic',
    title: 'Studiu de caz: 20 ani România + 10 ani Spania – cât iese pensia?',
    href: '#',
    image: '',
    time: '12:10',
  },
  {
    id: 'lat-3',
    category: 'Întrebări frecvente',
    title:
      'Pot primi pensie din două țări dacă am lucrat doar câțiva ani în fiecare?',
    href: '#',
    image: '',
    time: '11:45',
  },
  {
    id: 'lat-4',
    category: 'Diaspora',
    title:
      'Pașii pentru românii care se întorc în țară și vor să-și pună actele de pensie în ordine',
    href: '#',
    image: '',
    time: '11:20',
  },
]

/* --------------------------------------------------
   PAGINA PRINCIPALĂ
-------------------------------------------------- */
export default function HomePage() {
  const [activeSection, setActiveSection] =
    useState<SectionKey>('Pensie comunitară')

  /* Schema.org */
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'dosarpensie.com',
    url: SITE_URL,
  }

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'dosarpensie.com',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
  }

  return (
    <>
      <Head>
        <title>
          dosarpensie.com – Ghiduri clare despre pensii în România, UE și UK
        </title>

        <meta
          name="description"
          content="Ghiduri clare despre pensii, pensie comunitară UE și UK, dosar de pensionare, recalculare și drepturile românilor din diaspora."
        />

        <link rel="canonical" href={SITE_URL} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="dosarpensie.com – Ghiduri clare despre pensie" />
        <meta
          property="og:description"
          content="Tot ce trebuie să știi despre pensia din România, UE și UK. Explicații simple pentru românii de peste tot."
        />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={OG_IMAGE} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </Head>

      {/* ----- RESTUL PAGINII RĂMÂNE EXACT CA LA TINE ----- */}

      <div className="min-h-screen bg-slate-50 text-slate-900">
        {/* BANDA 1 – HEADER */}
        <header className="w-full border-b border-slate-200 bg-white">
          <div className="section-container flex items-center justify-between py-3 gap-4">
            <Logo />
            <div className="hidden sm:flex items-center gap-3 text-xs">
              <span className="text-slate-500">
                Informații independente, explicate simplu
              </span>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-primaryDark transition-colors"
              >
                Ai nevoie de ajutor cu pensia?
              </a>
            </div>
          </div>
        </header>

        {/* BANDA 2 – MENIU */}
        <nav className="w-full border-b border-slate-200 bg-slate-900 text-slate-100 sticky top-0 z-40">
          <div className="section-container flex overflow-x-auto gap-4 py-2 text-[13px] sm:text-sm">
            {mainSections.map((section) => (
              <button
                key={section}
                type="button"
                onClick={() => setActiveSection(section)}
                className={`whitespace-nowrap rounded-full px-3 py-1 font-medium transition-colors ${
                  activeSection === section
                    ? 'bg-primary text-white'
                    : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </nav>

        {/* BANDA 3 – SUBMENIU */}
        <div className="w-full border-b border-slate-200 bg-white">
          <div className="section-container flex overflow-x-auto gap-3 py-2 text-[12px] sm:text-[13px] text-slate-600">
            {subMenus[activeSection].map((item) => (
              <button
                key={item}
                type="button"
                className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-3 py-1 hover:border-primary/40 hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* CONTINUT PRINCIPAL */}
        <main className="section-container py-6 lg:py-8 grid lg:grid-cols-[2.3fr,1fr] gap-6 lg:gap-8">
          <section className="space-y-6">
            {/* Featured article */}
            <article className="rounded-3xl bg-white shadow-sm border border-slate-100 overflow-hidden grid md:grid-cols-[1.6fr,1.4fr]">
              <div className="relative">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {featuredArticle.category}
                </div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug">
                  {featuredArticle.title}
                </h1>
                <p className="text-sm sm:text-base text-slate-700">
                  {featuredArticle.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between text-xs text-slate-500">
                  <span>{featuredArticle.time}</span>
                  <a
                    href={featuredArticle.href}
                    className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-white hover:bg-primaryDark transition-colors"
                  >
                    Deschide ghidul complet →
                  </a>
                </div>
              </div>
            </article>

            {/* TOP 3 ARTICLES */}
            <div className="grid md:grid-cols-3 gap-4">
              {topArticles.map((article) => (
                <article
                  key={article.id}
                  className="flex flex-col rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden"
                >
                  <div className="relative h-36 w-full">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-3 sm:p-4 flex flex-col gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                      {article.category}
                    </span>
                    <a
                      href={article.href}
                      className="font-semibold text-sm sm:text-base leading-snug hover:text-primaryDark transition-colors"
                    >
                      {article.title}
                    </a>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* SIDEBAR */}
          <aside className="space-y-4">
            <div className="rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="border-b border-slate-100 px-4 py-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-900">
                  Ultima oră – pensii & diaspora
                </h2>
                <span className="text-[11px] text-slate-500">
                  Actualizăm pe măsură ce apar schimbări
                </span>
              </div>
              <div className="divide-y divide-slate-100">
                {latestArticles.map((article) => (
                  <a
                    key={article.id}
                    href={article.href}
                    className="flex gap-3 px-4 py-3 hover:bg-slate-50 transition-colors"
                  >
                    <div className="text-[11px] font-semibold text-slate-500 w-10 shrink-0">
                      {article.time}
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-primary mb-0.5">
                        {article.category}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-800 leading-snug">
                        {article.title}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div
              id="contact"
              className="rounded-2xl bg-slate-900 text-slate-50 p-4 space-y-2 text-sm"
            >
              <h3 className="text-sm font-semibold">
                Ai întrebări concrete despre pensia ta?
              </h3>
              <p className="text-xs text-slate-200">
                Trimite-ne situația ta pe email și vom încerca să îți oferim un răspuns
                ghid, pe înțelesul tău. Nu înlocuiește comunicările oficiale ale Casei
                de Pensii.
              </p>
              <a
                href="mailto:contact@dosarpensie.com"
                className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-white hover:bg-primaryDark transition-colors"
              >
                Scrie-ne situația ta
              </a>
            </div>
          </aside>
        </main>

        {/* FOOTER */}
        <footer className="bg-slate-900 text-slate-300 text-xs py-5 mt-4">
          <div className="section-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p>
              © {new Date().getFullYear()} dosarpensie.com – ghiduri independente
              despre pensie.
            </p>
            <p className="text-slate-400">
              Informațiile sunt generale și nu înlocuiesc comunicările oficiale ale
              caselor de pensii.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}