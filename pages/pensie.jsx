import Head from "next/head";

export default function PensiePage() {
  const SITE_URL = "https://dosarpensie.com";
  const PAGE_URL = `${SITE_URL}/pensie`;

  const title =
    "Pensia în România – Ghid complet despre pensie și pensionare";
  const description =
    "Ghid complet despre pensie și pensionare în România: tipuri de pensii, calcul, dosar de pensionare, pensia dacă ai lucrat în străinătate și greșeli frecvente.";

  /* ================= JSON-LD (TEMP – va fi refăcut complet) ================= */

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Acasă",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pensia",
        item: PAGE_URL,
      },
    ],
  };

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    mainEntityOfPage: PAGE_URL,
    inLanguage: "ro-RO",
    author: {
      "@type": "Organization",
      name: "dosarpensie.com",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "dosarpensie.com",
      url: SITE_URL,
    },
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />

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
                    "item": "https://dosarpensie.com/"
                    },
                    {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Pensii",
                    "item": "https://dosarpensie.com/pensie"
                    }
                ]
                }),
            }}
            />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdArticle),
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
          "name": "Ce este pensia și cine are dreptul la pensie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pensia este un drept financiar lunar acordat persoanelor care au muncit și au contribuit la sistemul public de pensii. Dreptul la pensie apare atunci când sunt îndeplinite condițiile legale privind vârsta și stagiul de cotizare. Fără contribuții sau fără stagiu minim, pensia de stat nu poate fi acordată."
          }
        },
        {
          "@type": "Question",
          "name": "Care este vârsta de pensionare în România?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vârsta de pensionare diferă în funcție de sex și de anul nașterii. Există tabele oficiale care stabilesc exact luna și anul în care o persoană se poate pensiona. Este important să verifici datele exacte înainte de a depune cererea."
          }
        },
        {
          "@type": "Question",
          "name": "Câți ani trebuie să muncesc pentru a primi pensie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pentru pensia de stat este necesar un stagiu minim de cotizare. Stagiul complet este mai mare și influențează valoarea pensiei. Anii lucrați peste minim pot crește semnificativ pensia."
          }
        },
        {
          "@type": "Question",
          "name": "Cum se calculează pensia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pensia se calculează pe baza contribuțiilor plătite și a perioadei de muncă. Elementul central este punctajul de pensie, care reflectă raportul dintre venitul tău și salariul mediu. Două persoane cu aceeași vechime pot avea pensii diferite."
          }
        },
        {
          "@type": "Question",
          "name": "Ce este dosarul de pensionare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dosarul de pensionare este setul de documente pe baza căruia Casa de Pensii stabilește dreptul la pensie. El conține acte care dovedesc vechimea, contribuțiile și identitatea. Un dosar incomplet poate duce la întârzieri sau recalculări."
          }
        },
        {
          "@type": "Question",
          "name": "Ce se întâmplă dacă îmi lipsesc acte din dosar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lipsa unor acte nu înseamnă automat pierderea dreptului la pensie. În multe cazuri, documentele pot fi recuperate din arhive sau prin adeverințe. Este important să începi aceste demersuri din timp."
          }
        },
        {
          "@type": "Question",
          "name": "Pot primi pensie dacă am lucrat în străinătate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Da. Anii lucrați în străinătate pot fi luați în calcul, în anumite condiții. Fiecare stat îți va plăti partea de pensie pentru anii lucrați acolo. Acest mecanism este cunoscut ca pensia comunitară."
          }
        },
        {
          "@type": "Question",
          "name": "Pot primi pensia din străinătate în România?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Da. În majoritatea cazurilor, pensia din străinătate poate fi plătită într-un cont bancar din România. Procedura diferă în funcție de statul plătitor și pot fi necesare confirmări periodice de viață."
          }
        },
        {
          "@type": "Question",
          "name": "Cât durează soluționarea dosarului de pensie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Durata soluționării depinde de complexitatea dosarului. Dosarele simple pot fi soluționate în câteva luni. Dosarele care includ muncă în străinătate pot dura mai mult."
          }
        },
        {
          "@type": "Question",
          "name": "Unde pot găsi informații sigure despre pensie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Informațiile sigure provin din surse oficiale și din ghiduri specializate despre pensii. Este important să eviți zvonurile și informațiile neconfirmate. Ghidurile bine documentate te ajută să înțelegi corect drepturile tale."
          }
        }
      ]
    }),
  }}
/>
      </Head>

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "24px" }}>
        <article>
          {/* ================= HERO ================= */}
          <h1>Pensia în România</h1>

          <p>
            Acest ghid explică, pe înțelesul tuturor, ce este pensia, cum
            funcționează pensionarea în România și ce trebuie să știi dacă te
            apropii de vârsta de pensionare.
          </p>

          <hr />

          {/* ================= CUPRINS ================= */}
          <nav>
            <h2>Cuprins</h2>
            <ol>
              <li><a href="#ce-este">Ce este pensia</a></li>
              <li><a href="#tipuri">Tipuri de pensii</a></li>
              <li><a href="#cand">Când te poți pensiona</a></li>
              <li><a href="#calcul">Cum se calculează pensia</a></li>
              <li><a href="#dosar">Dosarul de pensionare</a></li>
              <li><a href="#strainatate">Pensia dacă ai lucrat în străinătate</a></li>
              <li><a href="#greseli">Greșeli frecvente</a></li>
              <li><a href="#faq">Întrebări frecvente</a></li>
            </ol>
          </nav>

          <hr />

          {/* ================= SECTIUNEA 1 ================= */}
<section className="bg-white border-b border-slate-100">
  <div className="section-container py-10 lg:py-14 space-y-10 text-slate-800">
    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
      1. Ce este pensia și de ce este important să o înțelegi
    </h2>

    <p className="text-base lg:text-lg text-slate-700">
      Pensia reprezintă venitul lunar pe care îl primești după ce încetezi
      activitatea profesională. Pentru mulți oameni, aceasta devine principala
      sursă de trai la o anumită vârstă, motiv pentru care este esențial să
      înțelegi cum funcționează.
    </p>

    <p className="text-base lg:text-lg text-slate-700">
      Deși termenul „pensie” este foarte des folosit, regulile din spatele lui
      nu sunt întotdeauna clare. Lipsa de informare poate duce la decizii
      greșite sau la pierderi financiare pe termen lung.
    </p>

    {/* 1.1 */}
    <h3 className="text-xl font-semibold text-slate-900">
      1.1 Ce înseamnă, de fapt, pensia
    </h3>

    <p className="text-slate-700">
      Pensia este un drept social obținut în urma contribuțiilor plătite pe
      parcursul vieții active. Practic, o parte din veniturile tale au fost
      direcționate către sistemul public pentru a-ți asigura un venit la
      bătrânețe.
    </p>

    <p className="text-slate-700">
      Statul calculează pensia pe baza anilor lucrați și a contribuțiilor
      achitate, conform legislației în vigoare la momentul pensionării.
      Aceasta nu este o sumă „standard”, ci diferă de la persoană la persoană.
    </p>

    <p className="text-slate-700">
      De aceea, două persoane care se pensionează în același an pot primi
      pensii foarte diferite, chiar dacă au avut cariere aparent similare.
    </p>

    {/* 1.2 */}
    <h3 className="text-xl font-semibold text-slate-900">
      1.2 De ce pensia nu este automată
    </h3>

    <p className="text-slate-700">
      Un mit frecvent este că pensia se acordă automat la împlinirea unei
      anumite vârste. În realitate, este necesară depunerea unei cereri și a
      unui dosar complet.
    </p>

    <p className="text-slate-700">
      Fără cerere și fără documente justificative, Casa de Pensii nu poate
      stabili dreptul la pensie, chiar dacă îndeplinești condițiile legale.
    </p>

    <div className="rounded-3xl bg-sky-50 border border-sky-200 p-5 lg:p-6">
      <p className="font-semibold text-slate-900 mb-1">
        Important
      </p>
      <p className="text-slate-700">
        Pensia nu începe „din oficiu”. Ea se acordă doar din luna următoare
        depunerii cererii complete, indiferent de cât timp îndeplinești
        condițiile.
      </p>
    </div>

    {/* 1.3 */}
    <h3 className="text-xl font-semibold text-slate-900">
      1.3 Ce rol are contribuția la pensie
    </h3>

    <p className="text-slate-700">
      Contribuția la pensie reprezintă baza sistemului public. Fiecare lună
      lucrată cu contribuții plătite contează în calculul final.
    </p>

    <p className="text-slate-700">
      Atât angajații, cât și persoanele care lucrează pe cont propriu
      contribuie la sistem, chiar dacă modalitatea de plată diferă.
    </p>

    <p className="text-slate-700">
      Lipsa contribuțiilor sau perioadele nedeclarate pot reduce semnificativ
      valoarea pensiei.
    </p>

    {/* 1.4 */}
    <h3 className="text-xl font-semibold text-slate-900">
      1.4 Pensia ca venit pe termen lung
    </h3>

    <p className="text-slate-700">
      Pensionarea nu este un eveniment de moment, ci începutul unei perioade
      care poate dura mulți ani. De aceea, pensia trebuie privită ca un venit
      pe termen lung.
    </p>

    <p className="text-slate-700">
      O pensie mai mică poate afecta calitatea vieții, mai ales dacă nu există
      alte surse de venit sau economii.
    </p>

    <p className="text-slate-700">
      Înțelegerea modului de calcul te ajută să îți faci așteptări realiste.
    </p>

    {/* 1.5 */}
    <h3 className="text-xl font-semibold text-slate-900">
      1.5 Diferența dintre pensie și ajutor social
    </h3>

    <p className="text-slate-700">
      Pensia nu este un ajutor social. Ea este rezultatul contribuțiilor tale
      din timpul vieții active și se acordă în baza unui drept câștigat.
    </p>

    <p className="text-slate-700">
      Ajutoarele sociale sunt acordate în funcție de situația financiară și
      pot fi condiționate sau retrase.
    </p>

    <div className="rounded-3xl bg-white border border-slate-100 p-5 lg:p-6">
      <ul className="list-disc list-inside space-y-2 text-slate-700">
        <li>pensia este un drept dobândit;</li>
        <li>ajutorul social este o formă de sprijin temporar;</li>
        <li>condițiile de acordare sunt diferite.</li>
      </ul>
    </div>

    {/* 1.6 */}
    <h3 className="text-xl font-semibold text-slate-900">
      1.6 De ce este bine să te informezi din timp
    </h3>

    <p className="text-slate-700">
      Mulți oameni se interesează de pensie abia cu câteva luni înainte de
      pensionare. În acel moment, opțiunile sunt limitate.
    </p>

    <p className="text-slate-700">
      Informarea din timp îți oferă posibilitatea să verifici vechimea,
      contribuțiile și eventualele lipsuri.
    </p>

    <p className="text-slate-700">
      Cu cât începi mai devreme, cu atât ai mai mult control asupra situației
      tale.
    </p>

    {/* 1.7 */}
    <h3 className="text-xl font-semibold text-slate-900">
      1.7 Ce urmează după ce înțelegi ce este pensia
    </h3>

    <p className="text-slate-700">
      După ce ai o imagine clară despre ce este pensia, următorul pas este să
      afli ce tip de pensie ți se potrivește și când te poți pensiona.
    </p>

    <p className="text-slate-700">
      Fiecare situație este diferită, iar informațiile generale trebuie
      adaptate la cazul tău concret.
    </p>

    <p className="text-slate-700">
      În secțiunile următoare vei găsi explicații detaliate care te vor ajuta
      să mergi mai departe, pas cu pas.
    </p>
  </div>
</section>

          {/* ================= SECTIUNEA 2 ================= */}
<section className="bg-white border-b border-slate-100">
  <div className="section-container py-10 lg:py-14 space-y-10 text-slate-800">
    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
      2. Tipuri de pensii în România
    </h2>

    <p className="text-base lg:text-lg text-slate-700">
      Sistemul de pensii din România cuprinde mai multe tipuri de pensii,
      fiecare destinată unor situații diferite. Alegerea tipului corect de
      pensie este esențială, deoarece influențează atât momentul pensionării,
      cât și suma primită lunar.
    </p>

    <p className="text-base lg:text-lg text-slate-700">
      Mulți oameni folosesc termenul „pensie” într-un sens general, fără să
      știe că există diferențe importante între pensia pentru limită de vârstă,
      pensia anticipată sau pensia de invaliditate. În această secțiune le
      explicăm pe rând, într-un mod clar și ușor de înțeles.
    </p>

    {/* 2.1 */}
    <h3 className="text-xl font-semibold text-slate-900">
      2.1 Pensia pentru limită de vârstă
    </h3>

    <p className="text-slate-700">
      Pensia pentru limită de vârstă este forma cea mai cunoscută de pensie și
      se acordă persoanelor care au atins vârsta legală de pensionare și au
      realizat stagiul minim de cotizare.
    </p>

    <p className="text-slate-700">
      Aceasta este pensia „standard”, fără penalizări, și reprezintă baza
      sistemului public. Majoritatea oamenilor se pensionează prin acest tip
      de pensie.
    </p>

    <p className="text-slate-700">
      Valoarea pensiei pentru limită de vârstă depinde de anii lucrați, de
      nivelul contribuțiilor și de legislația în vigoare la momentul
      pensionării.
    </p>

    {/* 2.2 */}
    <h3 className="text-xl font-semibold text-slate-900">
      2.2 Pensia anticipată
    </h3>

    <p className="text-slate-700">
      Pensia anticipată permite retragerea din activitate înainte de vârsta
      standard de pensionare, însă doar în anumite condiții stricte.
    </p>

    <p className="text-slate-700">
      De regulă, este necesar un stagiu de cotizare mai mare decât cel minim,
      iar pensia se acordă cu penalizări aplicate sumei finale.
    </p>

    <p className="text-slate-700">
      Această opțiune poate fi utilă în anumite situații, dar trebuie analizată
      cu atenție, deoarece penalizările pot afecta pensia pe termen lung.
    </p>

    <div className="rounded-3xl bg-sky-50 border border-sky-200 p-5 lg:p-6">
      <p className="font-semibold text-slate-900 mb-1">
        Atenție
      </p>
      <p className="text-slate-700">
        Pensia anticipată nu este potrivită pentru toată lumea. O decizie
        luată în grabă poate duce la pierderi financiare permanente.
      </p>
    </div>

    {/* 2.3 */}
    <h3 className="text-xl font-semibold text-slate-900">
      2.3 Pensia anticipată parțială
    </h3>

    <p className="text-slate-700">
      Pensia anticipată parțială se acordă persoanelor care doresc să se
      pensioneze înainte de vârsta standard, dar nu îndeplinesc toate
      condițiile pentru pensia anticipată completă.
    </p>

    <p className="text-slate-700">
      În acest caz, penalizările sunt mai mari și se aplică până la atingerea
      vârstei standard de pensionare.
    </p>

    <p className="text-slate-700">
      De aceea, această variantă este considerată una dintre cele mai
      dezavantajoase din punct de vedere financiar.
    </p>

    {/* 2.4 */}
    <h3 className="text-xl font-semibold text-slate-900">
      2.4 Pensia de invaliditate
    </h3>

    <p className="text-slate-700">
      Pensia de invaliditate se acordă persoanelor care și-au pierdut total sau
      parțial capacitatea de muncă din cauza unor afecțiuni medicale.
    </p>

    <p className="text-slate-700">
      Aceasta nu este condiționată strict de vârstă, ci de gradul de
      invaliditate stabilit prin expertiză medicală.
    </p>

    <p className="text-slate-700">
      Pensia de invaliditate poate fi temporară sau permanentă, în funcție de
      evoluția stării de sănătate.
    </p>

    {/* 2.5 */}
    <h3 className="text-xl font-semibold text-slate-900">
      2.5 Pensia de urmaș
    </h3>

    <p className="text-slate-700">
      Pensia de urmaș se acordă membrilor familiei unei persoane decedate care
      era pensionară sau îndeplinea condițiile pentru pensionare.
    </p>

    <p className="text-slate-700">
      Beneficiarii pot fi copiii, soțul sau soția supraviețuitoare, în
      condițiile prevăzute de lege.
    </p>

    <p className="text-slate-700">
      Durata și valoarea pensiei de urmaș depind de mai mulți factori,
      inclusiv de situația fiecărui beneficiar.
    </p>

    <div className="rounded-3xl bg-white border border-slate-100 p-5 lg:p-6">
      <ul className="list-disc list-inside space-y-2 text-slate-700">
        <li>se acordă pe baza unei cereri;</li>
        <li>necesită documente doveditoare;</li>
        <li>nu este automată.</li>
      </ul>
    </div>

    {/* 2.6 */}
    <h3 className="text-xl font-semibold text-slate-900">
      2.6 Pensia socială (indemnizația socială)
    </h3>

    <p className="text-slate-700">
      Indemnizația socială pentru pensionari este destinată persoanelor care
      nu au realizat suficiente contribuții pentru o pensie decentă.
    </p>

    <p className="text-slate-700">
      Aceasta nu este o pensie în sensul clasic, ci un sprijin acordat de stat
      pentru a asigura un venit minim.
    </p>

    <p className="text-slate-700">
      Acordarea indemnizației este condiționată de nivelul total al veniturilor.
    </p>

    {/* 2.7 */}
    <h3 className="text-xl font-semibold text-slate-900">
      2.7 Pensii speciale și alte categorii
    </h3>

    <p className="text-slate-700">
      Există anumite categorii profesionale care beneficiază de reglementări
      speciale privind pensionarea, stabilite prin legi distincte.
    </p>

    <p className="text-slate-700">
      Aceste pensii sunt adesea subiect de dezbatere publică, însă regulile lor
      sunt diferite de cele ale sistemului public standard.
    </p>

    <p className="text-slate-700">
      Pentru aceste situații, este important să consulți legislația specifică
      sau instituțiile competente.
    </p>

    {/* 2.8 */}
    <h3 className="text-xl font-semibold text-slate-900">
      2.8 Cum alegi tipul de pensie potrivit
    </h3>

    <p className="text-slate-700">
      Alegerea tipului de pensie potrivit depinde de vârstă, de vechimea în
      muncă și de situația personală.
    </p>

    <p className="text-slate-700">
      O alegere greșită poate duce la pierderi financiare sau la întârzieri în
      acordarea pensiei.
    </p>

    <p className="text-slate-700">
      De aceea, este recomandat să te informezi din timp și să analizezi toate
      opțiunile disponibile.
    </p>

    <p className="text-sm text-primary">
      Dacă ai lucrat și în afara României, vezi explicațiile dedicate despre{" "}
      <a href="/pensie-comunitara" className="underline hover:text-primaryDark">
        pensia comunitară
      </a>.
    </p>
  </div>
</section>

{/* section 3*/}

          <section className="bg-white border-b border-slate-100">
  <div className="section-container py-10 lg:py-14 space-y-10 text-slate-800">
    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
      3. Când te poți pensiona
    </h2>

    <p className="text-base lg:text-lg text-slate-700">
      Momentul pensionării nu este identic pentru toată lumea și nu depinde
      doar de vârstă. El este influențat de mai mulți factori, precum anii
      lucrați, tipul activității desfășurate și situația personală.
      Înțelegerea acestor elemente din timp te ajută să eviți surprizele
      neplăcute.
    </p>

    <p className="text-base lg:text-lg text-slate-700">
      Mulți oameni descoperă prea târziu că nu îndeplinesc toate condițiile
      pentru pensionare la data dorită. De aceea, este important să știi
      exact când poți depune cererea și ce condiții trebuie să îndeplinești
      în mod concret.
    </p>

    {/* 3.1 */}
    <h3 className="text-xl font-semibold text-slate-900">
      3.1 Vârsta standard de pensionare
    </h3>

    <p className="text-slate-700">
      Vârsta standard de pensionare este momentul stabilit prin lege în care
      poți solicita pensia pentru limită de vârstă fără penalizări. Aceasta
      nu este aceeași pentru toți și diferă în funcție de sex și de anul
      nașterii.
    </p>

    <p className="text-slate-700">
      Pentru anumite generații, vârsta de pensionare a fost crescută gradual,
      astfel încât data exactă poate varia chiar și cu câteva luni față de
      estimările generale. De aceea, verificarea tabelului oficial este
      esențială.
    </p>

    <div className="rounded-3xl bg-sky-50 border border-sky-200 p-5 lg:p-6">
      <p className="font-semibold text-slate-900 mb-1">
        De reținut
      </p>
      <p className="text-slate-700">
        Cererea de pensionare depusă înainte de împlinirea exactă a vârstei
        standard poate fi respinsă, chiar dacă mai lipsesc doar câteva luni.
        Din acest motiv, este important să știi data exactă, nu doar anul.
      </p>
    </div>

    {/* 3.2 */}
    <h3 className="text-xl font-semibold text-slate-900">
      3.2 Stagiul minim de cotizare
    </h3>

    <p className="text-slate-700">
      Pe lângă vârstă, legea impune realizarea unui stagiu minim de cotizare.
      Acesta reprezintă numărul minim de ani în care ai contribuit la sistemul
      public de pensii.
    </p>

    <p className="text-slate-700">
      Fără acest stagiu minim, dreptul la pensie nu poate fi deschis, chiar
      dacă ai atins vârsta standard. Din acest motiv, verificarea vechimii
      este un pas absolut necesar.
    </p>

    <p className="text-slate-700">
      În anumite situații, perioadele lucrate în străinătate pot fi luate în
      calcul pentru îndeplinirea acestui stagiu, prin mecanismele de
      coordonare între state.
    </p>

    {/* 3.3 */}
    <h3 className="text-xl font-semibold text-slate-900">
      3.3 Stagiul complet și influența asupra pensiei
    </h3>

    <p className="text-slate-700">
      Stagiul complet de cotizare este diferit de stagiul minim și are rolul
      de a influența valoarea finală a pensiei. Cu cât ai mai mulți ani de
      contribuții, cu atât punctajul acumulat este mai mare.
    </p>

    <p className="text-slate-700">
      Mulți oameni se pensionează fără a atinge stagiul complet, ceea ce este
      perfect legal. Totuși, acest lucru se reflectă, de regulă, într-o
      pensie mai mică.
    </p>

    <div className="rounded-3xl bg-white border border-slate-100 p-5 lg:p-6">
      <p className="font-semibold text-slate-900 mb-1">
        Important
      </p>
      <p className="text-slate-700">
        Stagiul complet nu este o condiție obligatorie pentru pensionare,
        dar este unul dintre factorii principali care influențează suma
        primită lunar.
      </p>
    </div>

    {/* 3.4 */}
    <h3 className="text-xl font-semibold text-slate-900">
      3.4 Pensionarea anticipată
    </h3>

    <p className="text-slate-700">
      Pensionarea anticipată permite ieșirea la pensie înainte de vârsta
      standard, însă doar în condiții stricte. De regulă, este necesar un
      stagiu de cotizare mai mare decât cel minim.
    </p>

    <p className="text-slate-700">
      Această formă de pensionare implică penalizări aplicate pensiei,
      penalizări care pot fi permanente. Din acest motiv, decizia trebuie
      analizată cu atenție.
    </p>

    <p className="text-slate-700">
      Pentru unele persoane, pensionarea anticipată poate fi o soluție, dar
      pentru altele poate însemna o pierdere financiară semnificativă pe
      termen lung.
    </p>

    {/* 3.5 */}
    <h3 className="text-xl font-semibold text-slate-900">
      3.5 Pensionarea anticipată parțială
    </h3>

    <p className="text-slate-700">
      Pensionarea anticipată parțială se aplică persoanelor care nu
      îndeplinesc toate condițiile pentru pensionarea anticipată completă,
      dar doresc să se retragă mai devreme din activitate.
    </p>

    <p className="text-slate-700">
      În acest caz, penalizările sunt mai mari și se aplică până la atingerea
      vârstei standard de pensionare. Aceste reduceri pot afecta semnificativ
      venitul lunar.
    </p>

    <div className="rounded-3xl bg-sky-50 border border-sky-200 p-5 lg:p-6">
      <ul className="list-disc list-inside space-y-2 text-slate-700">
        <li>ieșire mai devreme din activitate, dar cu restricții;</li>
        <li>pensia este redusă pe toată durata acordării;</li>
        <li>decizia este dificil de corectat ulterior.</li>
      </ul>
    </div>

    {/* 3.6 */}
    <h3 className="text-xl font-semibold text-slate-900">
      3.6 Reducerea vârstei pentru condiții speciale
    </h3>

    <p className="text-slate-700">
      Anumite locuri de muncă permit reducerea vârstei de pensionare datorită
      condițiilor deosebite sau speciale. Aceste reduceri sunt strict
      reglementate.
    </p>

    <p className="text-slate-700">
      Pentru a beneficia de reducere, perioadele trebuie dovedite prin
      documente oficiale. Lipsa acestora poate duce la pierderea dreptului.
    </p>

    <p className="text-slate-700">
      De aceea, este important să verifici din timp dacă aceste perioade sunt
      corect recunoscute în evidențele tale.
    </p>

    {/* 3.7 */}
    <h3 className="text-xl font-semibold text-slate-900">
      3.7 Diferențe între femei și bărbați
    </h3>

    <p className="text-slate-700">
      Vârsta de pensionare diferă între femei și bărbați, în funcție de anul
      nașterii. Aceste diferențe sunt prevăzute de lege și se aplică gradual.
    </p>

    <p className="text-slate-700">
      Din acest motiv, este posibil ca persoane de vârste apropiate să se
      pensioneze la momente diferite.
    </p>

    <div className="rounded-3xl bg-white border border-slate-100 p-5 lg:p-6">
      <p className="text-slate-700">
        Verifică întotdeauna situația ta exactă în funcție de data nașterii,
        nu pe baza exemplelor generale.
      </p>
    </div>

    {/* 3.8 */}
    <h3 className="text-xl font-semibold text-slate-900">
      3.8 De ce este important să știi din timp când te pensionezi
    </h3>

    <p className="text-slate-700">
      Cunoașterea exactă a momentului pensionării îți permite să îți
      organizezi mai bine documentele și să iei decizii informate.
    </p>

    <p className="text-slate-700">
      O planificare făcută din timp reduce stresul și te ajută să eviți
      situațiile neplăcute în care dosarul este respins sau amânat.
    </p>

    <p className="text-slate-700">
      Pensionarea este un moment important al vieții și merită tratată cu
      atenție și responsabilitate.
    </p>
  </div>
</section>

          {/* ================= SECTIUNEA 4 ================= */}
<section className="bg-white border-b border-slate-100">
  <div className="section-container py-10 lg:py-14 space-y-10 text-slate-800">
    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
      4. Cum se calculează pensia
    </h2>

    <p className="text-base lg:text-lg text-slate-700">
      Modul de calcul al pensiei este unul dintre cele mai neclare subiecte
      pentru mulți oameni. Deși formula de calcul este stabilită prin lege,
      rezultatul final depinde de mai mulți factori care se acumulează de-a
      lungul anilor de muncă.
    </p>

    <p className="text-base lg:text-lg text-slate-700">
      În această secțiune explicăm, pas cu pas, elementele care influențează
      valoarea pensiei, fără formule complicate și fără jargon tehnic.
    </p>

    {/* 4.1 */}
    <h3 className="text-xl font-semibold text-slate-900">
      4.1 Ce înseamnă punctajul de pensie
    </h3>

    <p className="text-slate-700">
      Punctajul de pensie este mecanismul prin care statul transformă veniturile
      tale din timpul activității într-o valoare care va fi folosită la calcul.
      Practic, fiecare lună lucrată generează un anumit punctaj.
    </p>

    <p className="text-slate-700">
      Acest punctaj este influențat de nivelul salariului și de contribuțiile
      plătite la sistemul public de pensii. Cu cât venitul declarat este mai
      mare, cu atât punctajul acumulat este mai mare.
    </p>

    <p className="text-slate-700">
      La final, punctajele lunare se adună și se transformă într-un punctaj
      total, care stă la baza pensiei tale.
    </p>

    {/* 4.2 */}
    <h3 className="text-xl font-semibold text-slate-900">
      4.2 Valoarea punctului de pensie
    </h3>

    <p className="text-slate-700">
      Valoarea punctului de pensie este stabilită prin lege și poate fi
      modificată în timp. Aceasta reprezintă suma de bani asociată unui punct
      de pensie.
    </p>

    <p className="text-slate-700">
      Pensia ta se obține prin înmulțirea punctajului total cu valoarea
      punctului de pensie valabilă la momentul stabilirii dreptului.
    </p>

    <div className="rounded-3xl bg-sky-50 border border-sky-200 p-5 lg:p-6">
      <p className="font-semibold text-slate-900 mb-1">
        De reținut
      </p>
      <p className="text-slate-700">
        Modificările valorii punctului de pensie se aplică tuturor
        pensionarilor, nu doar celor care ies la pensie într-un anumit an.
      </p>
    </div>

    {/* 4.3 */}
    <h3 className="text-xl font-semibold text-slate-900">
      4.3 Rolul vechimii în muncă
    </h3>

    <p className="text-slate-700">
      Vechimea în muncă reprezintă totalul perioadelor în care ai contribuit la
      sistemul public de pensii. Fiecare an lucrat contează în calculul final.
    </p>

    <p className="text-slate-700">
      Perioadele fără contribuții sau cele nedeclarate pot reduce semnificativ
      punctajul total și, implicit, valoarea pensiei.
    </p>

    <p className="text-slate-700">
      De aceea, este important să verifici dacă toate perioadele lucrate sunt
      corect înregistrate.
    </p>

    {/* 4.4 */}
    <h3 className="text-xl font-semibold text-slate-900">
      4.4 Veniturile luate în calcul
    </h3>

    <p className="text-slate-700">
      Nu toate veniturile obținute de-a lungul vieții sunt luate în calcul la
      pensie. Sunt considerate doar acele venituri pentru care s-au plătit
      contribuții.
    </p>

    <p className="text-slate-700">
      Sporurile, primele sau alte venituri pot influența pensia doar dacă au
      fost declarate și pentru ele s-au achitat contribuții.
    </p>

    <div className="rounded-3xl bg-white border border-slate-100 p-5 lg:p-6">
      <ul className="list-disc list-inside space-y-2 text-slate-700">
        <li>salariile brute declarate;</li>
        <li>sporurile permanente;</li>
        <li>alte venituri supuse contribuțiilor.</li>
      </ul>
    </div>

    {/* 4.5 */}
    <h3 className="text-xl font-semibold text-slate-900">
      4.5 Perioade asimilate la pensie
    </h3>

    <p className="text-slate-700">
      Există perioade care nu presupun muncă efectivă, dar care sunt totuși
      luate în calcul la pensie. Acestea se numesc perioade asimilate.
    </p>

    <p className="text-slate-700">
      Printre acestea se numără studiile universitare, serviciul militar sau
      concediile medicale de lungă durată, în anumite condiții.
    </p>

    <p className="text-slate-700">
      Recunoașterea acestor perioade depinde de documentele doveditoare.
    </p>

    {/* 4.6 */}
    <h3 className="text-xl font-semibold text-slate-900">
      4.6 Diferențe între pensia minimă și pensia calculată
    </h3>

    <p className="text-slate-700">
      Pensia calculată pe baza contribuțiilor poate fi mai mică decât nivelul
      minim stabilit de stat.
    </p>

    <p className="text-slate-700">
      În aceste situații, se acordă indemnizația socială pentru pensionari,
      astfel încât venitul să ajungă la un prag minim.
    </p>

    <p className="text-slate-700">
      Această diferență este suportată de stat și nu afectează punctajul tău.
    </p>

    {/* 4.7 */}
    <h3 className="text-xl font-semibold text-slate-900">
      4.7 Calculul pensiei dacă ai lucrat în străinătate
    </h3>

    <p className="text-slate-700">
      Dacă ai lucrat și în alte țări, pensia se calculează separat pentru
      fiecare stat, în funcție de perioadele lucrate în fiecare sistem.
    </p>

    <p className="text-slate-700">
      România va plăti pensia aferentă anilor lucrați aici, iar celelalte
      state vor plăti partea lor.
    </p>

    <p className="text-slate-700">
      Acest mecanism este cunoscut sub denumirea de pensie comunitară.
    </p>

    <p className="text-sm text-primary">
      Vezi explicațiile detaliate în{" "}
      <a href="/pensie-comunitara" className="underline hover:text-primaryDark">
        ghidul despre pensia comunitară
      </a>.
    </p>

    {/* 4.8 */}
    <h3 className="text-xl font-semibold text-slate-900">
      4.8 De ce apar diferențe între estimări și pensia reală
    </h3>

    <p className="text-slate-700">
      Mulți oameni fac calcule aproximative și sunt surprinși de suma finală.
      Diferențele apar din cauza veniturilor nedeclarate sau a perioadelor
      lipsă.
    </p>

    <p className="text-slate-700">
      De asemenea, modificările legislative pot influența valoarea pensiei
      față de estimările făcute cu mulți ani înainte.
    </p>

    <p className="text-slate-700">
      De aceea, este recomandat să verifici periodic situația ta și să ceri
      clarificări atunci când apar neconcordanțe.
    </p>
  </div>
</section>

          {/* ================= SECTIUNEA 5 ================= */}
<section className="bg-white border-b border-slate-100">
  <div className="section-container py-10 lg:py-14 space-y-10 text-slate-800">
    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
      5. Dosarul de pensionare
    </h2>

    <p className="text-base lg:text-lg text-slate-700">
      Dosarul de pensionare este setul de documente pe baza căruia Casa de
      Pensii îți stabilește dreptul la pensie. Chiar dacă îndeplinești toate
      condițiile de vârstă și vechime, fără un dosar complet pensia nu poate fi
      acordată.
    </p>

    <p className="text-base lg:text-lg text-slate-700">
      Mulți oameni subestimează importanța dosarului și descoperă probleme
      abia după depunere. O pregătire atentă din timp reduce riscul
      întârzierilor și al refuzurilor.
    </p>

    {/* 5.1 */}
    <h3 className="text-xl font-semibold text-slate-900">
      5.1 Ce este dosarul de pensionare
    </h3>

    <p className="text-slate-700">
      Dosarul de pensionare reprezintă dovada oficială a întregii tale
      activități profesionale. El conține documente care arată când și unde ai
      lucrat, ce venituri ai avut și ce contribuții ai plătit.
    </p>

    <p className="text-slate-700">
      Funcționarii de la Casa de Pensii folosesc acest dosar pentru a verifica
      dacă îndeplinești condițiile legale și pentru a calcula pensia.
    </p>

    <p className="text-slate-700">
      Orice neclaritate sau lipsă de documente poate duce la solicitări
      suplimentare sau la amânarea soluționării dosarului.
    </p>

    {/* 5.2 */}
    <h3 className="text-xl font-semibold text-slate-900">
      5.2 Când se depune dosarul de pensionare
    </h3>

    <p className="text-slate-700">
      Dosarul de pensionare se depune, de regulă, cu câteva săptămâni înainte
      sau imediat după împlinirea condițiilor legale de pensionare.
    </p>

    <p className="text-slate-700">
      Este recomandat să începi pregătirea documentelor cu 6–12 luni înainte,
      mai ales dacă ai lucrat la mai mulți angajatori sau în străinătate.
    </p>

    <div className="rounded-3xl bg-sky-50 border border-sky-200 p-5 lg:p-6">
      <p className="font-semibold text-slate-900 mb-1">
        De reținut
      </p>
      <p className="text-slate-700">
        Pensia se acordă, de regulă, din luna următoare depunerii cererii
        complete, nu retroactiv pentru perioade mai vechi.
      </p>
    </div>

    {/* 5.3 */}
    <h3 className="text-xl font-semibold text-slate-900">
      5.3 Actele necesare pentru dosarul de pensionare
    </h3>

    <p className="text-slate-700">
      Lista actelor necesare poate varia în funcție de tipul de pensie și de
      situația fiecărei persoane. Totuși, există documente care apar aproape
      întotdeauna.
    </p>

    <p className="text-slate-700">
      Este important ca toate actele să fie complete, lizibile și corecte,
      pentru a evita solicitările ulterioare.
    </p>

    <div className="rounded-3xl bg-white border border-slate-100 p-5 lg:p-6">
      <ul className="list-disc list-inside space-y-2 text-slate-700">
        <li>cererea tip de pensionare;</li>
        <li>actul de identitate;</li>
        <li>carnetul de muncă sau adeverințe de vechime;</li>
        <li>documente pentru perioade speciale sau asimilate;</li>
        <li>alte acte specifice situației tale.</li>
      </ul>
    </div>

    {/* 5.4 */}
    <h3 className="text-xl font-semibold text-slate-900">
      5.4 Verificarea vechimii și a documentelor
    </h3>

    <p className="text-slate-700">
      Înainte de depunerea dosarului, este esențial să verifici vechimea și
      perioadele lucrate. Erorile din documente sunt mai frecvente decât se
      crede.
    </p>

    <p className="text-slate-700">
      Diferențele de nume, datele greșite sau perioadele lipsă pot crea
      întârzieri semnificative.
    </p>

    <p className="text-slate-700">
      Corectarea acestor probleme este mult mai ușoară înainte de depunerea
      dosarului.
    </p>

    {/* 5.5 */}
    <h3 className="text-xl font-semibold text-slate-900">
      5.5 Ce faci dacă îți lipsesc acte
    </h3>

    <p className="text-slate-700">
      Lipsa unor documente nu înseamnă automat pierderea dreptului la pensie.
      Există soluții pentru majoritatea situațiilor.
    </p>

    <p className="text-slate-700">
      Poți solicita adeverințe de la foștii angajatori, de la arhive sau de la
      instituțiile care au preluat documentele.
    </p>

    <p className="text-slate-700">
      Important este să începi aceste demersuri din timp, deoarece pot dura
      câteva luni.
    </p>

    {/* 5.6 */}
    <h3 className="text-xl font-semibold text-slate-900">
      5.6 Unde se depune dosarul de pensionare
    </h3>

    <p className="text-slate-700">
      Dosarul se depune la Casa Teritorială de Pensii de care aparții, în
      funcție de domiciliu.
    </p>

    <p className="text-slate-700">
      În anumite situații, dosarul poate fi transmis și prin alte instituții,
      mai ales dacă ai lucrat în străinătate.
    </p>

    <p className="text-slate-700">
      Este important să păstrezi dovada depunerii dosarului.
    </p>

    {/* 5.7 */}
    <h3 className="text-xl font-semibold text-slate-900">
      5.7 Cât durează analiza dosarului
    </h3>

    <p className="text-slate-700">
      Durata analizei dosarului depinde de complexitatea situației tale și de
      volumul de lucru al Casei de Pensii.
    </p>

    <p className="text-slate-700">
      Dosarele simple pot fi soluționate în câteva luni, în timp ce cele care
      implică muncă în străinătate pot dura mai mult.
    </p>

    <p className="text-slate-700">
      În acest timp, pot fi solicitate documente suplimentare.
    </p>

    {/* 5.8 */}
    <h3 className="text-xl font-semibold text-slate-900">
      5.8 Legătura dintre dosar și pensia comunitară
    </h3>

    <p className="text-slate-700">
      Dacă ai lucrat și în alte țări, dosarul de pensionare din România joacă
      un rol esențial în inițierea procedurii de pensie comunitară.
    </p>

    <p className="text-slate-700">
      Pe baza informațiilor din dosar, instituțiile din diferite state
      comunică pentru a stabili drepturile tale.
    </p>

    <p className="text-slate-700">
      De aceea, este important ca dosarul să conțină toate perioadele lucrate.
    </p>

    <p className="text-sm text-primary">
      Vezi ghidul detaliat despre{" "}
      <a href="/dosar-pensie" className="underline hover:text-primaryDark">
        dosarul de pensionare
      </a>{" "}
      pentru explicații pas cu pas.
    </p>
  </div>
</section>

          {/* ================= SECTIUNEA 6 ================= */}
<section className="bg-white border-b border-slate-100">
  <div className="section-container py-10 lg:py-14 space-y-10 text-slate-800">
    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
      6. Pensia dacă ai lucrat în străinătate
    </h2>

    <p className="text-base lg:text-lg text-slate-700">
      Tot mai mulți români au lucrat o parte din viață în afara României.
      Această situație ridică întrebări firești despre ce se întâmplă cu
      anii lucrați în străinătate și dacă aceștia sunt pierduți la pensie.
    </p>

    <p className="text-base lg:text-lg text-slate-700">
      Vestea bună este că, în majoritatea cazurilor, perioadele lucrate în
      alte țări pot fi valorificate. Totuși, procedura este diferită față
      de un dosar obișnuit și necesită mai multă atenție.
    </p>

    {/* 6.1 */}
    <h3 className="text-xl font-semibold text-slate-900">
      6.1 Ce se întâmplă cu anii lucrați în străinătate
    </h3>

    <p className="text-slate-700">
      Anii lucrați în străinătate nu se pierd, atâta timp cât activitatea a
      fost legală și au fost plătite contribuții la sistemul de pensii din
      țara respectivă.
    </p>

    <p className="text-slate-700">
      Fiecare stat este responsabil pentru plata pensiei aferente perioadelor
      lucrate pe teritoriul său. Nu există o „pensie combinată” plătită de
      un singur stat.
    </p>

    <p className="text-slate-700">
      La pensionare, vei primi plăți separate din fiecare țară în care ai
      lucrat, în funcție de contribuțiile realizate.
    </p>

    {/* 6.2 */}
    <h3 className="text-xl font-semibold text-slate-900">
      6.2 Ce este pensia comunitară
    </h3>

    <p className="text-slate-700">
      Pensia comunitară este mecanismul prin care perioadele de muncă din mai
      multe state sunt recunoscute împreună, pentru a nu pierde anii lucrați.
    </p>

    <p className="text-slate-700">
      Acest sistem se aplică în relația dintre România și statele membre ale
      Uniunii Europene, precum și în relația cu Marea Britanie, pe baza
      acordurilor existente.
    </p>

    <div className="rounded-3xl bg-sky-50 border border-sky-200 p-5 lg:p-6">
      <p className="font-semibold text-slate-900 mb-1">
        Important
      </p>
      <p className="text-slate-700">
        Pensia comunitară nu înseamnă o singură pensie. Fiecare stat plătește
        separat partea care îi revine.
      </p>
    </div>

    {/* 6.3 */}
    <h3 className="text-xl font-semibold text-slate-900">
      6.3 Diferența dintre UE și țări din afara UE
    </h3>

    <p className="text-slate-700">
      Pentru statele membre UE, regulile de coordonare a sistemelor de pensii
      sunt clare și bine stabilite prin regulamente europene.
    </p>

    <p className="text-slate-700">
      Pentru țările din afara UE, situația depinde de existența unor acorduri
      bilaterale de securitate socială.
    </p>

    <p className="text-slate-700">
      În lipsa unui acord, recunoașterea anilor lucrați poate fi limitată sau
      chiar imposibilă.
    </p>

    {/* 6.4 */}
    <h3 className="text-xl font-semibold text-slate-900">
      6.4 Pensia dacă ai lucrat în Marea Britanie (UK)
    </h3>

    <p className="text-slate-700">
      Marea Britanie a părăsit Uniunea Europeană, însă drepturile de pensie
      ale românilor care au lucrat în UK sunt, în mare parte, protejate.
    </p>

    <p className="text-slate-700">
      Perioadele lucrate în UK sunt recunoscute pe baza contribuțiilor la
      sistemul britanic de asigurări sociale (National Insurance).
    </p>

    <p className="text-slate-700">
      Procedura poate fi mai birocratică decât în cazul statelor UE, iar
      termenele de soluționare pot fi mai lungi.
    </p>

    {/* 6.5 */}
    <h3 className="text-xl font-semibold text-slate-900">
      6.5 Cum se calculează pensia pentru munca în străinătate
    </h3>

    <p className="text-slate-700">
      Calculul se face pe principiul pro-rata. Fiecare stat calculează
      separat pensia pentru perioadele lucrate în sistemul său.
    </p>

    <p className="text-slate-700">
      Anii lucrați în străinătate pot fi folosiți pentru a îndeplini stagiul
      minim de cotizare din România, fără ca România să plătească pentru
      acești ani.
    </p>

    <div className="rounded-3xl bg-white border border-slate-100 p-5 lg:p-6">
      <ul className="list-disc list-inside space-y-2 text-slate-700">
        <li>fiecare stat calculează separat;</li>
        <li>plăți distincte din fiecare țară;</li>
        <li>anii se cumulează doar pentru drept.</li>
      </ul>
    </div>

    {/* 6.6 */}
    <h3 className="text-xl font-semibold text-slate-900">
      6.6 Unde se depune cererea pentru pensia internațională
    </h3>

    <p className="text-slate-700">
      Cererea se depune, de regulă, în statul în care locuiești la momentul
      pensionării.
    </p>

    <p className="text-slate-700">
      Instituția respectivă va transmite solicitarea către celelalte state
      implicate, pe baza documentelor din dosar.
    </p>

    <p className="text-slate-700">
      Acest proces poate dura mai mult decât un dosar exclusiv național.
    </p>

    {/* 6.7 */}
    <h3 className="text-xl font-semibold text-slate-900">
      6.7 Documente necesare pentru pensia din străinătate
    </h3>

    <p className="text-slate-700">
      Pe lângă actele standard, sunt necesare documente care dovedesc
      perioadele lucrate în străinătate.
    </p>

    <p className="text-slate-700">
      Lipsa acestor documente poate întârzia sau complica procedura de
      stabilire a pensiei.
    </p>

    <p className="text-slate-700">
      De aceea, este recomandat să le pregătești din timp.
    </p>

    {/* 6.8 */}
    <h3 className="text-xl font-semibold text-slate-900">
      6.8 De ce este important să începi din timp
    </h3>

    <p className="text-slate-700">
      Dosarele de pensie care implică muncă în străinătate sunt mai complexe
      și necesită mai mult timp de analiză.
    </p>

    <p className="text-slate-700">
      Începerea procedurii din timp îți oferă șansa să corectezi eventualele
      probleme și să eviți întârzierile.
    </p>

    <p className="text-slate-700">
      Cu cât dosarul este mai bine pregătit, cu atât procesul va fi mai clar
      și mai previzibil.
    </p>

    <p className="text-sm text-primary">
      Vezi explicațiile complete în{" "}
      <a href="/pensie-comunitara" className="underline hover:text-primaryDark">
        ghidul despre pensia comunitară
      </a>.
    </p>
  </div>
</section>


          {/* ================= SECTIUNEA 7 ================= */}
<section className="bg-white border-b border-slate-100">
  <div className="section-container py-10 lg:py-14 space-y-10 text-slate-800">
    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
      7. Greșeli frecvente legate de pensie
    </h2>

    <p className="text-base lg:text-lg text-slate-700">
      Mulți oameni ajung la vârsta pensionării convinși că „totul este în
      regulă”, doar pentru a descoperi ulterior că există probleme care le
      întârzie pensia sau îi reduc valoarea.
    </p>

    <p className="text-base lg:text-lg text-slate-700">
      Cele mai multe greșeli nu apar din rea-voință, ci din lipsă de informații
      sau din amânarea verificărilor importante. Mai jos sunt cele mai frecvente
      situații întâlnite.
    </p>

    {/* 7.1 */}
    <h3 className="text-xl font-semibold text-slate-900">
      7.1 Amânarea verificării vechimii
    </h3>

    <p className="text-slate-700">
      Una dintre cele mai comune greșeli este verificarea vechimii abia în
      momentul depunerii dosarului de pensionare.
    </p>

    <p className="text-slate-700">
      În acest stadiu, corectarea erorilor este mai dificilă și poate duce la
      întârzieri semnificative.
    </p>

    <p className="text-slate-700">
      Verificarea vechimii cu 6–12 luni înainte de pensionare oferă timp pentru
      clarificări și completări.
    </p>

    {/* 7.2 */}
    <h3 className="text-xl font-semibold text-slate-900">
      7.2 Lipsa unor documente importante
    </h3>

    <p className="text-slate-700">
      Mulți oameni presupun că instituțiile „au deja toate datele”, însă acest
      lucru nu este întotdeauna adevărat.
    </p>

    <p className="text-slate-700">
      Actele lipsă sau incomplete pot duce la nevalorificarea unor perioade de
      muncă.
    </p>

    <div className="rounded-3xl bg-sky-50 border border-sky-200 p-5 lg:p-6">
      <p className="font-semibold text-slate-900 mb-1">
        Documente frecvent lipsă
      </p>
      <ul className="list-disc list-inside space-y-2 text-slate-700">
        <li>adeverințe de vechime de la angajatori vechi;</li>
        <li>documente pentru perioade speciale;</li>
        <li>dovezi pentru munca în străinătate.</li>
      </ul>
    </div>

    {/* 7.3 */}
    <h3 className="text-xl font-semibold text-slate-900">
      7.3 Neînțelegerea modului de calcul
    </h3>

    <p className="text-slate-700">
      Mulți pensionari sunt surprinși de valoarea pensiei deoarece nu au
      înțeles cum se face calculul.
    </p>

    <p className="text-slate-700">
      Estimările bazate pe „auzite” sau pe exemple din jur pot fi înșelătoare.
    </p>

    <p className="text-slate-700">
      Înțelegerea elementelor de bază ale calculului ajută la evitarea
      surprizelor neplăcute.
    </p>

    {/* 7.4 */}
    <h3 className="text-xl font-semibold text-slate-900">
      7.4 Ignorarea perioadelor lucrate în străinătate
    </h3>

    <p className="text-slate-700">
      Unele persoane nu menționează munca în străinătate, crezând că acei ani
      „nu contează”.
    </p>

    <p className="text-slate-700">
      Această omisiune poate duce la pierderea dreptului la pensie sau la
      întârzierea stabilirii acesteia.
    </p>

    <p className="text-slate-700">
      Toate perioadele lucrate trebuie declarate în dosar.
    </p>

    {/* 7.5 */}
    <h3 className="text-xl font-semibold text-slate-900">
      7.5 Depunerea dosarului în grabă
    </h3>

    <p className="text-slate-700">
      Graba este un factor major de eroare. Mulți oameni depun dosarul fără a
      verifica toate documentele.
    </p>

    <p className="text-slate-700">
      Ulterior, completările și corecturile pot dura luni de zile.
    </p>

    <div className="rounded-3xl bg-white border border-slate-100 p-5 lg:p-6">
      <p className="font-semibold text-slate-900 mb-1">
        Sfat practic
      </p>
      <p className="text-slate-700">
        Alocă timp pentru a reciti dosarul și pentru a face o listă clară a
        documentelor înainte de depunere.
      </p>
    </div>

    {/* 7.6 */}
    <h3 className="text-xl font-semibold text-slate-900">
      7.6 Încrederea exclusivă în informații neoficiale
    </h3>

    <p className="text-slate-700">
      Grupurile online și discuțiile informale pot fi utile, dar informațiile
      pot fi incomplete sau greșite.
    </p>

    <p className="text-slate-700">
      Fiecare situație este diferită, iar ce a fost valabil pentru altcineva
      nu se aplică automat și în cazul tău.
    </p>

    <p className="text-slate-700">
      Verifică întotdeauna informațiile din surse oficiale sau ghiduri clare.
    </p>

    {/* 7.7 */}
    <h3 className="text-xl font-semibold text-slate-900">
      7.7 Lipsa urmăririi dosarului
    </h3>

    <p className="text-slate-700">
      După depunerea dosarului, unii oameni presupun că totul va merge de la
      sine.
    </p>

    <p className="text-slate-700">
      În realitate, pot apărea solicitări suplimentare sau clarificări.
    </p>

    <p className="text-slate-700">
      Urmărirea dosarului ajută la rezolvarea mai rapidă a problemelor.
    </p>

    {/* 7.8 */}
    <h3 className="text-xl font-semibold text-slate-900">
      7.8 Amânarea cererii de ajutor
    </h3>

    <p className="text-slate-700">
      Mulți oameni evită să ceară ajutor de teamă că procedura va fi
      complicată sau costisitoare.
    </p>

    <p className="text-slate-700">
      În realitate, o clarificare la timp poate preveni pierderi financiare
      pe termen lung.
    </p>

    <p className="text-slate-700">
      Cu cât acționezi mai devreme, cu atât situația este mai ușor de
      corectat.
    </p>
  </div>
</section>

          {/* ================= SECTIUNEA 8 ================= */}
<section className="bg-white border-b border-slate-100">
  <div className="section-container py-10 lg:py-14 space-y-10 text-slate-800">
    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
      8. Întrebări frecvente despre pensie
    </h2>

    <p className="text-base lg:text-lg text-slate-700">
      Mai jos găsești răspunsuri la cele mai frecvente întrebări primite de la
      persoanele care se apropie de vârsta pensionării sau care vor să își
      înțeleagă mai bine drepturile.
    </p>

    {/* FAQ 1 */}
    <h3 className="text-xl font-semibold text-slate-900">
      8.1 De la ce vârstă mă pot pensiona?
    </h3>
    <p>
      Vârsta de pensionare depinde de anul nașterii și de sex. În România,
      aceasta crește gradual, conform unui calendar stabilit prin lege.
    </p>
    <p>
      Pentru majoritatea persoanelor, pensionarea la limită de vârstă are loc
      în jurul vârstei de 65 de ani, însă există diferențe în funcție de situație.
    </p>
    <p>
      Este important să verifici exact vârsta aplicabilă în cazul tău, nu să te
      bazezi pe exemple generale.
    </p>

    {/* FAQ 2 */}
    <h3 className="text-xl font-semibold text-slate-900">
      8.2 Câți ani de muncă sunt necesari pentru pensie?
    </h3>
    <p>
      Legea prevede un stagiu minim de cotizare și un stagiu complet de
      cotizare. Stagiul minim este necesar pentru a avea drept la pensie.
    </p>
    <p>
      Stagiul complet influențează valoarea pensiei, nu doar dreptul de a o
      primi.
    </p>
    <p>
      Anii lucrați peste stagiul complet pot aduce un punctaj mai mare.
    </p>

    {/* FAQ 3 */}
    <h3 className="text-xl font-semibold text-slate-900">
      8.3 Pot primi pensie dacă nu am vechime suficientă?
    </h3>
    <p>
      Dacă nu îndeplinești stagiul minim, nu poți primi pensie contributivă.
    </p>
    <p>
      În anumite situații, statul acordă indemnizația socială pentru pensionari,
      care asigură un venit minim.
    </p>
    <p>
      Condițiile diferă și trebuie verificate punctual.
    </p>

    {/* FAQ 4 */}
    <h3 className="text-xl font-semibold text-slate-900">
      8.4 Ce se întâmplă dacă am lucrat în străinătate?
    </h3>
    <p>
      Anii lucrați în străinătate nu se pierd, dacă munca a fost legală și cu
      contribuții.
    </p>
    <p>
      Fiecare stat plătește partea de pensie corespunzătoare perioadelor
      lucrate în sistemul său.
    </p>
    <p>
      Această procedură este cunoscută sub numele de pensie comunitară.
    </p>

    {/* FAQ 5 */}
    <h3 className="text-xl font-semibold text-slate-900">
      8.5 Primesc o singură pensie sau mai multe?
    </h3>
    <p>
      Dacă ai lucrat în mai multe țări, vei primi plăți separate din fiecare
      stat.
    </p>
    <p>
      Nu există o pensie „unitară” care să includă toate perioadele într-o
      singură plată.
    </p>
    <p>
      Acest lucru este normal și prevăzut de legislația internațională.
    </p>

    {/* FAQ 6 */}
    <h3 className="text-xl font-semibold text-slate-900">
      8.6 Unde se depune cererea de pensionare?
    </h3>
    <p>
      Cererea se depune la Casa de Pensii din statul în care locuiești la
      momentul pensionării.
    </p>
    <p>
      Instituția respectivă comunică apoi cu celelalte state implicate, dacă
      este cazul.
    </p>
    <p>
      Este important să păstrezi dovada depunerii cererii.
    </p>

    {/* FAQ 7 */}
    <h3 className="text-xl font-semibold text-slate-900">
      8.7 Cât durează stabilirea pensiei?
    </h3>
    <p>
      Durata poate varia de la câteva luni la peste un an, în funcție de
      complexitatea dosarului.
    </p>
    <p>
      Dosarele care implică muncă în străinătate durează, de regulă, mai mult.
    </p>
    <p>
      Comunicarea între instituții poate influența termenele.
    </p>

    {/* FAQ 8 */}
    <h3 className="text-xl font-semibold text-slate-900">
      8.8 Pot lucra după ce ies la pensie?
    </h3>
    <p>
      Da, pensionarii pot desfășura activități profesionale, în anumite
      condiții.
    </p>
    <p>
      Tipul de pensie și natura activității pot influența acest drept.
    </p>
    <p>
      Este recomandat să verifici regulile aplicabile înainte de a începe
      activitatea.
    </p>

    {/* FAQ 9 */}
    <h3 className="text-xl font-semibold text-slate-900">
      8.9 Pot cere recalcularea pensiei?
    </h3>
    <p>
      Da, recalcularea pensiei este posibilă dacă apar documente noi sau dacă
      legislația permite acest lucru.
    </p>
    <p>
      Recalcularea poate duce la creșterea pensiei, dar nu întotdeauna.
    </p>
    <p>
      Cererea trebuie susținută cu acte justificative.
    </p>

    {/* FAQ 10 */}
    <h3 className="text-xl font-semibold text-slate-900">
      8.10 Ce fac dacă nu sunt de acord cu decizia de pensionare?
    </h3>
    <p>
      Dacă nu ești de acord cu decizia primită, ai dreptul să o contești.
    </p>
    <p>
      Contestația trebuie depusă în termenul legal prevăzut.
    </p>
    <p>
      Este important să argumentezi clar și să atașezi documentele relevante.
    </p>
  </div>
</section>

{/* ================= MINI CONCLUZIE ================= */}
<section id="ce-urmeaza" className="bg-softBg border-t border-slate-100">
  <div className="section-container py-10 lg:py-14 space-y-6 text-slate-800">
    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
      Ce faci acum?
    </h2>

    <p>
      Pensionarea este un proces important și este normal să pară complicat la
      început. Vestea bună este că, pas cu pas, lucrurile pot deveni clare și
      ușor de gestionat.
    </p>

    <p>
      Dacă ai ajuns până aici, înseamnă că ai deja o imagine de ansamblu despre
      <strong> ce este pensia</strong>, <strong>când te poți pensiona</strong> și
      <strong> ce influențează valoarea ei</strong>.
    </p>

    <div className="rounded-2xl bg-white border border-slate-100 p-5 space-y-4">
      <p className="font-semibold text-slate-900">
        Următorii pași practici recomandati:
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>
          verifică <strong>vechimea în muncă</strong> și perioadele lucrate;
        </li>
        <li>
          identifică dacă îți lipsesc <strong>documente sau adeverințe</strong>;
        </li>
        <li>
          stabilește <strong>când te poți pensiona</strong> exact;
        </li>
        <li>
          începe din timp <strong>pregătirea dosarului de pensionare</strong>.
        </li>
      </ul>
    </div>

    <div className="grid sm:grid-cols-2 gap-4 text-sm">
      <div className="rounded-2xl bg-white border border-slate-100 p-4">
        <p className="font-semibold text-slate-900 mb-1">
          👉 Dacă urmează să îți pregătești dosarul
        </p>
        <p>
          Vezi explicațiile detaliate din{" "}
          <a
            href="/dosar-pensie"
            className="text-primary underline hover:text-primaryDark"
          >
            ghidul complet despre dosarul de pensionare
          </a>
          , unde găsești actele necesare, pașii și greșelile frecvente.
        </p>
      </div>

      <div className="rounded-2xl bg-white border border-slate-100 p-4">
        <p className="font-semibold text-slate-900 mb-1">
          👉 Dacă ai lucrat și în străinătate
        </p>
        <p>
          Informează-te din timp despre{" "}
          <a
            href="/pensie-comunitara"
            className="text-primary underline hover:text-primaryDark"
          >
            pensia comunitară
          </a>{" "}
          și cum sunt recunoscuți anii lucrați în alte țări.
        </p>
      </div>
    </div>

    <div
      style={{ borderLeft: "4px solid #16a34a", paddingLeft: "12px" }}
      className="text-sm"
    >
      <p>
        <strong>Mesaj important:</strong> Nu lăsa pensionarea pe ultima sută de
        metri. Cu cât începi mai devreme, cu atât vei avea mai mult control și
        mai puțin stres.
      </p>
    </div>
  </div>
</section>

          <hr />

          <p>
            <strong>
              Acest ghid este un punct de plecare. Pentru situații specifice,
              consultă ghidurile dedicate sau informațiile oficiale.
            </strong>
          </p>
        </article>
      </main>
    </>
  );
}