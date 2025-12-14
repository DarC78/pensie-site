import Head from 'next/head'

const SITE_URL = 'https://dosarpensie.com'
const PAGE_URL = `${SITE_URL}/pensie-comunitara-uk-romania`
const OG_IMAGE = `${SITE_URL}/images/pensie-comunitara-uk.jpg`

export default function PensieComunitaraUKRomaniaPage() {
  const lastUpdated = new Date().toLocaleDateString('ro-RO')

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Pensia comunitară UK – România: ghid complet pentru românii care au muncit în ambele țări',
    description:
      'Ghid complet și explicat simplu despre pensia comunitară dacă ai lucrat în România și UK: cum se recunosc anii, National Insurance, cerere, acte, durată și greșeli frecvente.',
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
        name: 'Primesc o singură pensie dacă am lucrat în România și UK?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Nu. Vei primi două pensii separate: una din România și una din UK. Fiecare stat plătește doar pentru anii lucrați în sistemul său.',
        },
      },
      {
        '@type': 'Question',
        name: 'Contează anii din România la pensia din UK?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Anii din România nu cresc suma pensiei din UK. Ei pot ajuta doar la îndeplinirea condiției minime de eligibilitate.',
        },
      },
      {
        '@type': 'Question',
        name: 'Unde depun cererea pentru pensia comunitară?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Cererea se depune o singură dată, fie în România, fie în UK. Instituțiile comunică între ele.',
        },
      },
      {
        '@type': 'Question',
        name: 'Brexit afectează pensia din UK?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Nu. Drepturile de pensie sunt protejate prin acorduri internaționale. Procedura este doar mai birocratică.',
        },
      },
    ],
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Acasă', item: SITE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Pensia comunitară',
        item: `${SITE_URL}/pensie-comunitara`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'UK + România',
        item: PAGE_URL,
      },
    ],
  }

  return (
    <>
      <Head>
        <title>
          Pensia comunitară UK – România | Ghid complet, explicat simplu
        </title>
        <meta
          name="description"
          content="Ghid complet despre pensia comunitară dacă ai lucrat în România și UK. Explicat pe înțelesul tuturor: anii de muncă, National Insurance, cerere, acte, durată."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index,follow" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Pensia comunitară UK – România" />
        <meta
          property="og:description"
          content="Cum funcționează pensia comunitară dacă ai lucrat în România și UK."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* HEADER */}
        <header className="border-b border-slate-100 bg-white">
          <div className="section-container py-4 flex justify-between">
            <a href="/" className="font-semibold text-slate-800">
              dosar<span className="text-primary">pensie</span>.com
            </a>
            <a
              href="/pensie-comunitara"
              className="text-xs text-primary hover:text-primaryDark"
            >
              ← Înapoi la ghidul general
            </a>
          </div>
        </header>

        <main>
          {/* HERO */}
          <section className="bg-softBg border-b border-slate-100">
            <div className="section-container py-12 grid lg:grid-cols-[3fr,2fr] gap-10">
              <div className="space-y-5">
                <p className="inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-medium text-primary shadow-sm">
                  Ghid complet · Pensia comunitară UK – România
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">
                  Pensia comunitară dacă ai lucrat în România și în UK
                </h1>

                <p className="text-xs text-slate-500">
                  Adrian Defta – Expert Pensii · Actualizat: {lastUpdated}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Dacă ai muncit o parte din viață în România și o parte în
                  Marea Britanie, acest ghid te ajută să înțelegi ce se
                  întâmplă cu pensia ta și ce pași trebuie să urmezi.
                </p>
              </div>

              <aside className="rounded-3xl bg-white border p-5 text-sm">
                <h2 className="font-semibold mb-2">Pe scurt</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>vei primi două pensii separate;</li>
                  <li>UK plătește doar anii cu National Insurance;</li>
                  <li>cererea se face o singură dată;</li>
                  <li>anii nu se pierd.</li>
                </ul>
              </aside>
            </div>
          </section>

          {/* CUPRINS */}
          <section className="bg-white border-b">
            <div className="section-container py-8 grid lg:grid-cols-[3fr,2fr] gap-8">
              <div>
                <h2 className="font-semibold text-lg">
                  Ce vei găsi în acest ghid
                </h2>
                <p className="text-sm text-slate-600">
                  Ghidul este structurat pas cu pas, exact ca un dosar
                  administrativ.
                </p>
              </div>
              <nav className="bg-softBg rounded-2xl p-4 text-sm">
                <ol className="list-decimal list-inside space-y-2">
                  <li><a href="#ce-este" className="text-primary">Ce este pensia comunitară</a></li>
                  <li><a href="#drept" className="text-primary">Cine are dreptul</a></li>
                  <li><a href="#calcul" className="text-primary">Cum se calculează</a></li>
                  <li><a href="#cerere" className="text-primary">Unde depui cererea</a></li>
                  <li><a href="#acte" className="text-primary">Acte necesare</a></li>
                  <li><a href="#durata" className="text-primary">Cât durează</a></li>
                  <li><a href="#greseli" className="text-primary">Greșeli frecvente</a></li>
                  <li><a href="#faq" className="text-primary">Întrebări frecvente</a></li>
                </ol>
              </nav>
            </div>
          </section>

          {/* SECTIUNI 1–8 */}
          <Section id="ce-este" title="1. Ce este pensia comunitară UK – România">
            Pensia comunitară este mecanismul prin care statul român și statul
            britanic îți recunosc anii de muncă, astfel încât să nu pierzi
            vechimea acumulată.
          </Section>

          <Section id="drept" title="2. Cine are dreptul la pensie comunitară">
            Ai dreptul dacă ai lucrat legal în una sau ambele țări și ai plătit
            contribuțiile obligatorii.
          </Section>

          <Section id="calcul" title="3. Cum se calculează pensia">
            UK se uită doar la anii cu National Insurance. România calculează
            separat partea sa.
          </Section>

          <Section id="cerere" title="4. Unde și cum depui cererea">
            Cererea se depune o singură dată. Instituțiile comunică între ele.
          </Section>

          <Section id="acte" title="5. Acte necesare">
            Ai nevoie de acte de identitate, dovezi de muncă și documente din
            ambele țări.
          </Section>

          <Section id="durata" title="6. Cât durează procedura">
            De regulă între 6 și 18 luni, în funcție de complexitate.
          </Section>

          <Section id="greseli" title="7. Greșeli frecvente">
            Lipsa anilor de NI, cererea incompletă și informațiile greșite sunt
            cele mai frecvente probleme.
          </Section>

          <Section id="faq" title="8. Întrebări frecvente">
            Vezi secțiunea de mai sus pentru răspunsuri rapide la cele mai
            comune întrebări.
          </Section>
        </main>

        <footer className="bg-slate-950 text-slate-400 py-6 text-xs">
          <div className="section-container">
            © {new Date().getFullYear()} dosarpensie.com
          </div>
        </footer>
      </div>
    </>
  )
}

/* Helper simplu pentru secțiuni */
function Section({ id, title, children }) {
  return (
    <section id={id} className="bg-white">
      <div className="section-container py-10 space-y-4 text-slate-800">
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        <p>{children}</p>
      </div>
    </section>
  )
}