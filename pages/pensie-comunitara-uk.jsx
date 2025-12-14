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
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Primesc o singură pensie dacă am lucrat în România și în UK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nu. Vei primi două pensii separate: una din România pentru anii lucrați acolo și una din UK pentru anii cu contribuții la National Insurance. Fiecare stat plătește doar partea care îi aparține."
      }
    },
    {
      "@type": "Question",
      "name": "Anii lucrați în România îmi cresc pensia din UK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nu. Anii lucrați în România nu cresc suma pensiei din UK. Ei pot ajuta doar la îndeplinirea condiției minime de eligibilitate, dacă este necesar."
      }
    },
    {
      "@type": "Question",
      "name": "Care este numărul minim de ani necesari pentru pensia din UK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "În general, este nevoie de minimum 10 ani de contribuții la National Insurance pentru a avea dreptul la pensie din UK. Pentru pensia completă sunt necesari 35 de ani."
      }
    },
    {
      "@type": "Question",
      "name": "Dacă am lucrat mai puțin de 10 ani în UK, mai primesc pensie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "În anumite situații, da. Anii lucrați în România pot fi luați în calcul pentru deschiderea dreptului la pensie, însă UK va plăti doar pentru anii lucrați efectiv pe teritoriul său."
      }
    },
    {
      "@type": "Question",
      "name": "Unde depun cererea pentru pensia comunitară UK – România?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cererea se depune o singură dată, fie în România, la Casa de Pensii, fie în UK, la Department for Work and Pensions. Instituțiile comunică între ele."
      }
    },
    {
      "@type": "Question",
      "name": "Pot primi pensia din UK într-un cont bancar din România?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Da. Pensia din UK poate fi plătită într-un cont bancar din România, dacă furnizezi corect datele bancare solicitate."
      }
    },
    {
      "@type": "Question",
      "name": "Brexit a afectat dreptul meu la pensie din UK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nu. Drepturile de pensie sunt protejate prin acorduri internaționale. Procedura este mai birocratică, dar anii lucrați nu se pierd."
      }
    },
    {
      "@type": "Question",
      "name": "Cât durează obținerea pensiei comunitare UK – România?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "În general, procesul durează între 6 și 18 luni. În cazurile mai complexe, durata poate fi mai mare, în funcție de claritatea documentelor și de comunicarea dintre instituții."
      }
    },
    {
      "@type": "Question",
      "name": "Ce se întâmplă dacă îmi lipsesc documente din perioada lucrată în UK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lipsa unor documente nu înseamnă automat pierderea dreptului la pensie, dar poate duce la întârzieri. Este recomandat să încerci recuperarea documentelor sau să întrebi ce dovezi alternative sunt acceptate."
      }
    },
    {
      "@type": "Question",
      "name": "Unde pot afla regulile generale despre pensia comunitară, valabile pentru toate țările?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pentru regulile generale despre pensia comunitară, valabile pentru toate țările, consultă ghidul complet disponibil pe pagina dedicată pensiei comunitare."
      }
    }
  ]
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

          {/* 1. CE ESTE */}
<section id="ce-este" className="bg-white">
  <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
      1. Ce este pensia comunitară UK – România și de ce este importantă
    </h2>

    <p>
      Pensia comunitară este mecanismul prin care statul român și statul britanic
      îți recunosc anii de muncă realizați în ambele țări. Scopul acestui sistem
      este simplu: <strong>să nu pierzi anii munciți</strong> doar pentru că ai
      lucrat în afara României.
    </p>

    <p>
      Mulți români cred, în mod greșit, că dacă au muncit în două țări vor primi
      o singură pensie „la comun”. În realitate, lucrurile stau diferit:
      <strong> fiecare stat plătește separat</strong>, doar pentru anii lucrați
      în sistemul său.
    </p>

    <p>
      Pensia comunitară nu este un ajutor social și nu este un bonus. Este un
      <strong> drept legal</strong>, reglementat prin acorduri internaționale,
      care se aplică automat atunci când ai vechime în mai multe state.
    </p>
  </div>
</section>

{/* 2. CINE ARE DREPTUL */}
<section id="drept" className="bg-softBg">
  <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
      2. Cine are dreptul la pensie comunitară dacă a lucrat în UK și România
    </h2>

    <p>
      Ai dreptul la pensie comunitară dacă ai lucrat legal cel puțin într-una
      dintre cele două țări și ai plătit contribuțiile obligatorii. Nu contează
      dacă ai lucrat întâi în România și apoi în UK sau invers.
    </p>

    <p>
      În cazul Marii Britanii, contribuțiile se numesc
      <strong> National Insurance</strong>. Ele apar pe fluturașul de salariu
      și sunt esențiale pentru recunoașterea anilor de muncă.
    </p>

    <p>
      Chiar și perioadele mai scurte de muncă pot conta. Important este ca
      activitatea să fi fost declarată și să existe dovezi oficiale.
    </p>
  </div>
</section>

{/* 3. CALCUL */}
<section id="calcul" className="bg-white">
  <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
      3. Cum se calculează pensia din UK și pensia din România
    </h2>

    <p>
      Calculul pensiei comunitare îi sperie pe mulți oameni, dar în realitate
      este mai simplu decât pare. Fiecare stat își face propriul calcul,
      <strong> independent</strong>.
    </p>

    <p>
      În UK, statul se uită la câți ani ai plătit National Insurance:
      minimum <strong>10 ani</strong> pentru a avea dreptul la pensie și
      <strong>35 de ani</strong> pentru pensia completă.
    </p>

    <p>
      Anii din România <strong>nu măresc suma</strong> pensiei din UK.
      Ei pot ajuta doar la îndeplinirea condițiilor minime, dacă este cazul.
      România calculează separat pensia sa, pe baza legislației românești.
    </p>
  </div>
</section>

{/* 4. CERERE */}
<section id="cerere" className="bg-softBg">
  <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
      4. Unde și cum se depune cererea pentru pensia comunitară
    </h2>

    <p>
      Un aspect foarte important este că <strong>nu trebuie să depui două
      cereri diferite</strong>. Cererea pentru pensia comunitară se depune
      o singură dată.
    </p>

    <p>
      Dacă locuiești în România, cererea se depune la Casa de Pensii.
      Dacă locuiești în UK, cererea se depune la Department for Work and Pensions.
      Instituțiile comunică între ele.
    </p>

    <p>
      Este important să menționezi clar toate perioadele lucrate în străinătate
      încă de la început, pentru a evita întârzieri.
    </p>
  </div>
</section>

{/* 5. ACTE */}
<section id="acte" className="bg-white">
  <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
      5. Acte necesare pentru pensia comunitară UK – România
    </h2>

    <p>
      Actele necesare pot varia ușor de la un caz la altul, dar în practică
      există câteva documente care sunt cerute aproape întotdeauna.
    </p>

    <p>
      Vei avea nevoie de acte de identitate, dovezi ale perioadelor lucrate
      în România și documente care să ateste contribuțiile din UK
      (National Insurance Number, scrisori oficiale).
    </p>

    <p>
      Lipsa unui document nu înseamnă automat pierderea dreptului, dar poate
      duce la întârzieri mari dacă nu este clarificată din timp.
    </p>
  </div>
</section>

{/* 6. DURATA */}
<section id="durata" className="bg-softBg">
  <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
      6. Cât durează procedura de pensie comunitară
    </h2>

    <p>
      Dosarele de pensie comunitară sunt, de obicei, mai lente decât cele
      naționale. Comunicarea între instituții durează.
    </p>

    <p>
      În medie, procedura poate dura între
      <strong> 6 și 18 luni</strong>, uneori chiar mai mult dacă apar lipsuri
      sau neclarități.
    </p>

    <p>
      Este important să păstrezi dovada depunerii cererii și să urmărești
      periodic stadiul dosarului.
    </p>
  </div>
</section>

{/* 7. GREȘELI */}
<section id="greseli" className="bg-white">
  <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
      7. Greșeli frecvente care pot întârzia pensia
    </h2>

    <p>
      Cele mai multe probleme nu apar din rea-voință, ci din lipsă de informație.
      Mulți oameni presupun că „statul știe”.
    </p>

    <p>
      Greșeli frecvente sunt: nedeclararea perioadelor din UK, lipsa verificării
      anilor de National Insurance sau depunerea cererii pe ultima sută de metri.
    </p>

    <p>
      O cerere completă și clară de la început poate face diferența între
      o pensie stabilită corect și luni întregi de așteptare.
    </p>
  </div>
</section>

{/* 8. FAQ */}
<section id="faq" className="bg-softBg">
  <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
      8. Întrebări frecvente despre pensia comunitară UK – România
    </h2>

    <div className="space-y-4 text-sm">

      <div className="rounded-2xl border border-slate-100 bg-white p-4">
        <p className="font-semibold text-slate-900 mb-1">
          1. Primesc o singură pensie dacă am lucrat în România și în UK?
        </p>
        <p>
          Nu. Vei primi <strong>două pensii separate</strong>: una din România
          pentru anii lucrați acolo și una din UK pentru anii cu contribuții
          la National Insurance. Fiecare stat plătește doar partea sa.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white p-4">
        <p className="font-semibold text-slate-900 mb-1">
          2. Anii lucrați în România îmi cresc pensia din UK?
        </p>
        <p>
          Nu. Anii din România <strong>nu cresc suma</strong> pensiei din UK.
          Ei pot ajuta doar la îndeplinirea condiției minime de eligibilitate,
          dacă este nevoie.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white p-4">
        <p className="font-semibold text-slate-900 mb-1">
          3. Care este numărul minim de ani necesari pentru pensia din UK?
        </p>
        <p>
          În general, ai nevoie de <strong>minimum 10 ani</strong> de
          contribuții la National Insurance pentru a avea dreptul la pensie
          din UK. Pentru pensia completă sunt necesari 35 de ani.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white p-4">
        <p className="font-semibold text-slate-900 mb-1">
          4. Dacă am lucrat mai puțin de 10 ani în UK, mai primesc pensie?
        </p>
        <p>
          În unele situații, da. Anii din România pot fi luați în calcul
          pentru deschiderea dreptului la pensie, însă UK va plăti doar
          pentru anii lucrați efectiv acolo.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white p-4">
        <p className="font-semibold text-slate-900 mb-1">
          5. Unde depun cererea pentru pensia comunitară?
        </p>
        <p>
          Cererea se depune <strong>o singură dată</strong>, fie în România
          (la Casa de Pensii), fie în UK (la Department for Work and Pensions).
          Instituțiile comunică între ele.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white p-4">
        <p className="font-semibold text-slate-900 mb-1">
          6. Pot primi pensia din UK într-un cont din România?
        </p>
        <p>
          Da. Pensia din UK poate fi plătită într-un cont bancar din România,
          cu condiția să furnizezi corect datele bancare cerute.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white p-4">
        <p className="font-semibold text-slate-900 mb-1">
          7. Brexit a afectat dreptul meu la pensie?
        </p>
        <p>
          Nu. Drepturile de pensie sunt protejate prin acorduri internaționale.
          Procedura este mai birocratică, dar <strong>anii lucrați nu se pierd</strong>.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white p-4">
        <p className="font-semibold text-slate-900 mb-1">
          8. Cât durează obținerea pensiei comunitare?
        </p>
        <p>
          În general, procesul durează între <strong>6 și 18 luni</strong>.
          Dosarele cu muncă în străinătate pot dura mai mult, în funcție de
          claritatea documentelor.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white p-4">
        <p className="font-semibold text-slate-900 mb-1">
          9. Ce se întâmplă dacă lipsesc documente din UK?
        </p>
        <p>
          Lipsa unor documente nu înseamnă automat pierderea dreptului.
          Totuși, poate duce la întârzieri. Este important să încerci
          recuperarea lor sau să întrebi ce alternative sunt acceptate.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white p-4">
        <p className="font-semibold text-slate-900 mb-1">
          10. Unde pot afla regulile generale, valabile pentru toate țările?
        </p>
        <p>
          Acest ghid explică situația UK – România. Pentru regulile generale
          și alte țări, consultă{" "}
          <a
            href="/pensie-comunitara"
            className="text-primary underline hover:text-primaryDark"
          >
            ghidul complet despre pensia comunitară
          </a>.
        </p>
      </div>

    </div>
  </div>
</section>
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