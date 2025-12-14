import Head from 'next/head'

const SITE_URL = 'https://dosarpensie.com'
const PAGE_URL = `${SITE_URL}/pensie-comunitara-uk-romania`
const OG_IMAGE = `${SITE_URL}/images/pensie-comunitara-uk.jpg`

export default function PensieComunitaraUKRomaniaPage() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Pensia comunitară UK – România: ghid complet pentru românii care au muncit în ambele țări',
    description:
      'Ghid complet despre pensia comunitară dacă ai lucrat în România și UK: cum se recunosc anii, ce este National Insurance, unde depui cererea, acte necesare și greșeli frecvente.',
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
        name:
          'Primesc o singură pensie dacă am lucrat în România și în UK?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Nu. Vei primi două pensii separate: una din România pentru anii lucrați acolo și una din UK pentru anii cu contribuții la National Insurance. Fiecare stat plătește doar partea care îi aparține.',
        },
      },
      {
        '@type': 'Question',
        name:
          'Contează anii din România la calculul pensiei din UK?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Anii din România nu cresc suma pensiei din UK. Ei pot ajuta doar la îndeplinirea condiției minime de eligibilitate, dacă este cazul.',
        },
      },
      {
        '@type': 'Question',
        name:
          'Unde depun cererea pentru pensia comunitară UK – România?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Cererea se poate depune fie în România, la Casa de Pensii, fie în UK, la Department for Work and Pensions. Instituțiile comunică între ele.',
        },
      },
      {
        '@type': 'Question',
        name:
          'Brexit afectează dreptul meu la pensie din UK?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Nu. Drepturile de pensie sunt protejate prin acorduri internaționale. Procedura este puțin mai birocratică, dar anii lucrați nu se pierd.',
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

  const lastUpdated = new Date().toLocaleDateString('ro-RO')

  return (
    <>
      <Head>
        <title>
          Pensia comunitară UK – România | Ghid complet, explicat simplu
        </title>
        <meta
          name="description"
          content="Ghid complet despre pensia comunitară dacă ai lucrat în România și în UK. Explicat simplu: anii de muncă, National Insurance, cerere, acte și greșeli frecvente."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index,follow" />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Pensia comunitară UK – România: ghid complet"
        />
        <meta
          property="og:description"
          content="Cum funcționează pensia comunitară dacă ai lucrat în România și UK. Explicații clare, fără jargon."
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
          <div className="section-container py-4 flex items-center justify-between">
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
            <div className="section-container py-10 lg:py-14 grid lg:grid-cols-[3fr,2fr] gap-10">
              <div className="space-y-5">
                <p className="inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-medium text-primary shadow-sm">
                  Ghid complet · Pensia comunitară UK – România
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">
                  Pensia comunitară dacă ai lucrat în România și în UK
                </h1>

                <p className="text-xs text-slate-500">
                  Scris de{' '}
                  <span className="font-semibold">
                    Adrian Defta – Expert Pensii
                  </span>{' '}
                  · Ultima actualizare: {lastUpdated}
                </p>

                <p className="text-base lg:text-lg text-slate-700">
                  Dacă ai muncit o parte din viață în România și o parte în
                  Marea Britanie, este normal să te întrebi ce se întâmplă cu
                  pensia ta. În acest ghid explicăm simplu cum funcționează
                  pensia comunitară, ce drepturi ai și ce pași trebuie să urmezi.
                </p>
              </div>

              <aside className="rounded-3xl bg-white shadow-sm border border-slate-100 p-5 text-sm">
                <h2 className="font-semibold text-slate-900 mb-2">
                  Pe scurt
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>vei primi două pensii separate;</li>
                  <li>UK plătește doar anii cu National Insurance;</li>
                  <li>România plătește doar anii lucrați în țară;</li>
                  <li>cererea se face o singură dată.</li>
                </ul>
              </aside>
            </div>
          </section>

          {/* CONTINUT */}
          <section id="ce-este" className="bg-white">
            <div className="section-container py-10 space-y-6 text-slate-800">
              <h2 className="text-2xl font-bold">
                Ce este pensia comunitară UK – România
              </h2>
              <p>
                Pensia comunitară este mecanismul prin care statele îți
                recunosc anii de muncă realizați în mai multe țări, astfel
                încât să nu pierzi vechimea acumulată.
              </p>
              <p>
                În practică, fiecare stat calculează și plătește separat
                partea sa de pensie. Nu există o „pensie combinată”.
              </p>
            </div>
          </section>

          <section id="calcul" className="bg-softBg">
            <div className="section-container py-10 space-y-6 text-slate-800">
              <h2 className="text-2xl font-bold">
                Cum se calculează pensia din UK și din România
              </h2>
              <p>
                În UK contează câți ani ai plătit contribuții numite
                National Insurance.
              </p>
              <ul className="list-disc list-inside">
                <li>minimum 10 ani – drept la pensie;</li>
                <li>35 de ani – pensia completă;</li>
                <li>mai puțini ani – pensie proporțională.</li>
              </ul>
              <p>
                Anii din România nu măresc suma pensiei din UK. Ei ajută
                doar la îndeplinirea condițiilor minime, dacă este cazul.
              </p>
            </div>
          </section>

          <section id="cerere" className="bg-white">
            <div className="section-container py-10 space-y-6 text-slate-800">
              <h2 className="text-2xl font-bold">
                Unde și cum depui cererea
              </h2>
              <p>
                Cererea pentru pensia comunitară se poate depune fie în
                România, fie în UK. Instituțiile comunică între ele, tu nu
                trebuie să faci cereri separate în fiecare țară.
              </p>
            </div>
          </section>

          <section id="greseli" className="bg-softBg">
            <div className="section-container py-10 space-y-6 text-slate-800">
              <h2 className="text-2xl font-bold">
                Greșeli frecvente
              </h2>
              <ul className="list-disc list-inside">
                <li>nu menționezi perioadele din UK;</li>
                <li>nu verifici anii de National Insurance;</li>
                <li>lași cererea pe ultima clipă;</li>
                <li>te bazezi pe informații neoficiale.</li>
              </ul>
            </div>
          </section>
        </main>

        <footer className="bg-slate-950 text-slate-400 py-6 text-xs">
          <div className="section-container">
            © {new Date().getFullYear()} dosarpensie.com – ghiduri despre pensii
          </div>
        </footer>
      </div>
    </>
  )
}