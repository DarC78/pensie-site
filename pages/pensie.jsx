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
<section id="calcul">
  <h2>4. Cum se calculează pensia</h2>

  {/* 4.1 */}
  <h3>4.1 Ce înseamnă, pe scurt, calculul pensiei</h3>
  <p>
    Calculul pensiei reprezintă modul prin care statul stabilește
    <strong> suma lunară</strong> pe care o vei primi după pensionare, pe baza
    activității tale profesionale.
  </p>
  <p>
    Deși formula legală poate părea complicată, principiul este simplu:
    pensia reflectă <strong>cât ai contribuit</strong> și
    <strong>cât timp ai contribuit</strong>.
  </p>
  <p>
    Din acest motiv, două persoane cu același număr de ani lucrați pot primi
    pensii diferite.
  </p>

  <div style={{ borderLeft: "4px solid #2563eb", paddingLeft: "12px" }}>
    <p>
      <strong>Ideea de bază:</strong> Pensia nu se calculează „din ochi”, ci pe
      baza contribuțiilor reale.
    </p>
  </div>

  {/* 4.2 */}
  <h3>4.2 Rolul stagiului de cotizare în calcul</h3>
  <p>
    <strong>Stagiul de cotizare</strong> reprezintă totalul perioadelor în care
    ai plătit contribuții la sistemul public de pensii.
  </p>
  <p>
    Fiecare lună de contribuție contează, iar lipsurile pot afecta atât
    <strong>dreptul la pensie</strong>, cât și valoarea acesteia.
  </p>
  <p>
    Stagiul complet influențează direct cuantumul pensiei, nu doar accesul la ea.
  </p>

  <ul>
    <li>stagiu minim = drept la pensie;</li>
    <li>stagiu complet = pensie mai mare;</li>
    <li>perioadele lipsă contează negativ.</li>
  </ul>

  {/* 4.3 */}
  <h3>4.3 Cum influențează salariul valoarea pensiei</h3>
  <p>
    Pensia nu depinde doar de anii munciți, ci și de
    <strong> nivelul salariilor</strong> pentru care s-au plătit contribuții.
  </p>
  <p>
    Salariile mai mari duc, în general, la
    <strong> punctaje mai mari</strong>, care se reflectă ulterior în pensie.
  </p>
  <p>
    Munca la negru sau perioadele cu venituri nedeclarate nu aduc beneficii la
    calculul pensiei.
  </p>

  <div style={{ background: "#f8fafc", padding: "12px", borderRadius: "6px" }}>
    <p>
      <strong>Sfat:</strong> Dacă ai lucrat cu normă parțială sau pe salarii mici,
      este normal ca pensia să fie mai redusă.
    </p>
  </div>

  {/* 4.4 */}
  <h3>4.4 Ce este punctajul de pensie</h3>
  <p>
    <strong>Punctajul de pensie</strong> este elementul central în calculul
    pensiei și reflectă raportul dintre venitul tău și salariul mediu din
    economie.
  </p>
  <p>
    Fiecare an de muncă generează un punctaj anual, care se adună pe întreaga
    perioadă de activitate.
  </p>
  <p>
    La final, punctajul total este transformat în bani, conform legii.
  </p>

  <div style={{ border: "1px dashed #94a3b8", padding: "12px" }}>
    <p>
      Punctaj mare = pensie mai mare. Punctaj mic = pensie mai mică.
    </p>
  </div>

  {/* 4.5 */}
  <h3>4.5 De ce apar diferențe între persoane cu aceeași vechime</h3>
  <p>
    Diferențele de pensie apar frecvent între persoane cu
    <strong> vechime similară</strong>, dar cu venituri diferite.
  </p>
  <p>
    De asemenea, întreruperile de activitate, concediile fără plată sau munca
    part-time influențează negativ punctajul.
  </p>
  <p>
    Fiecare detaliu din cariera profesională contează la calcul.
  </p>

  <div style={{ background: "#fff7ed", padding: "12px", borderRadius: "6px" }}>
    <p>
      <strong>Important:</strong> Nu compara pensia ta doar după ani, ci și după
      contribuții.
    </p>
  </div>

  {/* 4.6 */}
  <h3>4.6 Cum influențează perioadele speciale calculul pensiei</h3>
  <p>
    Anumite perioade pot fi considerate
    <strong> perioade asimilate</strong>, chiar dacă nu ai contribuit direct
    (de exemplu, armata sau studiile).
  </p>
  <p>
    Aceste perioade sunt recunoscute de lege, dar pot avea un impact diferit
    asupra punctajului.
  </p>
  <p>
    Este important să verifici dacă aceste perioade sunt corect evidențiate
    în dosar.
  </p>

  <ul>
    <li>serviciul militar;</li>
    <li>studiile universitare;</li>
    <li>alte perioade prevăzute de lege.</li>
  </ul>

  {/* 4.7 */}
  <h3>4.7 De ce este util să îți estimezi pensia din timp</h3>
  <p>
    Mulți oameni află valoarea aproximativă a pensiei abia după depunerea
    cererii, ceea ce poate fi un șoc.
  </p>
  <p>
    O estimare făcută din timp îți oferă
    <strong> claritate și control</strong> asupra deciziilor viitoare.
  </p>
  <p>
    Chiar dacă suma finală poate varia, o estimare te ajută să te pregătești
    financiar.
  </p>

  <div style={{ borderLeft: "4px solid #16a34a", paddingLeft: "12px" }}>
    <p>
      <strong>Concluzie:</strong> Cu cât înțelegi mai bine calculul pensiei,
      cu atât vei avea mai puține surprize.
    </p>
  </div>
</section>

          {/* ================= SECTIUNEA 5 ================= */}
<section id="dosar">
  <h2>5. Dosarul de pensionare</h2>

  {/* 5.1 */}
  <h3>5.1 Ce este dosarul de pensionare și de ce contează</h3>
  <p>
    <strong>Dosarul de pensionare</strong> este setul de documente pe baza căruia
    Casa de Pensii îți stabilește dreptul la pensie și valoarea acesteia.
  </p>
  <p>
    Practic, dosarul este „povestea ta profesională” spusă prin acte. Orice
    perioadă lipsă sau document incorect poate influența
    <strong> decizia finală</strong>.
  </p>
  <p>
    De aceea, dosarul nu trebuie tratat ca o simplă formalitate, ci ca un
    element esențial al pensionării.
  </p>

  <div style={{ borderLeft: "4px solid #2563eb", paddingLeft: "12px" }}>
    <p>
      <strong>Important:</strong> Casa de Pensii decide strict pe baza actelor,
      nu pe baza declarațiilor verbale.
    </p>
  </div>

  {/* 5.2 */}
  <h3>5.2 Când trebuie începută pregătirea dosarului</h3>
  <p>
    Pregătirea dosarului de pensionare ar trebui să înceapă cu
    <strong> 6–12 luni</strong> înainte de data estimată a pensionării.
  </p>
  <p>
    Acest interval îți permite să verifici vechimea, să ceri adeverințe și să
    corectezi eventuale erori fără presiune.
  </p>
  <p>
    Mulți oameni amână acest pas și ajung să se confrunte cu întârzieri mari.
  </p>

  <ul>
    <li>verifici vechimea;</li>
    <li>identifici perioade lipsă;</li>
    <li>soliciți documente;</li>
    <li>organizezi actele.</li>
  </ul>

  {/* 5.3 */}
  <h3>5.3 Actele de bază din dosarul de pensionare</h3>
  <p>
    Deși lista exactă poate varia, există câteva
    <strong> documente de bază</strong> care apar în aproape toate dosarele.
  </p>
  <p>
    Lipsa unuia dintre aceste documente poate duce la amânarea soluționării
    dosarului.
  </p>
  <p>
    Este recomandat să ai atât originalele, cât și copii clare.
  </p>

  <div style={{ background: "#f8fafc", padding: "12px", borderRadius: "6px" }}>
    <p>
      <strong>Documente frecvente:</strong> act de identitate, cerere tip,
      carnet de muncă sau adeverințe de vechime, acte de stare civilă.
    </p>
  </div>

  {/* 5.4 */}
  <h3>5.4 Adeverințele de vechime și rolul lor</h3>
  <p>
    <strong>Adeverințele de vechime</strong> sunt esențiale pentru perioadele
    care nu apar clar în carnetul de muncă sau în evidențele electronice.
  </p>
  <p>
    Ele trebuie să conțină informații corecte despre perioadă, funcție și
    contribuții.
  </p>
  <p>
    Adeverințele incomplete sau greșite pot fi respinse.
  </p>

  <div style={{ border: "1px dashed #94a3b8", padding: "12px" }}>
    <p>
      Verifică atent datele din adeverințe înainte de depunere.
    </p>
  </div>

  {/* 5.5 */}
  <h3>5.5 Ce faci dacă îți lipsesc acte sau angajatori</h3>
  <p>
    O situație des întâlnită este lipsa unor documente sau dispariția
    angajatorilor vechi.
  </p>
  <p>
    În astfel de cazuri, există soluții precum arhivele, instituțiile care au
    preluat documentele sau alte dovezi acceptate de lege.
  </p>
  <p>
    Important este să nu presupui că acea perioadă este pierdută definitiv.
  </p>

  <div style={{ background: "#fff7ed", padding: "12px", borderRadius: "6px" }}>
    <p>
      <strong>Atenție:</strong> Recuperarea documentelor poate dura luni.
    </p>
  </div>

  {/* 5.6 */}
  <h3>5.6 Unde și cum se depune dosarul de pensionare</h3>
  <p>
    Dosarul de pensionare se depune la
    <strong> Casa Teritorială de Pensii</strong> de care aparții, în funcție de
    domiciliu.
  </p>
  <p>
    La depunere, vei primi un număr de înregistrare care îți permite să
    urmărești dosarul.
  </p>
  <p>
    Dosarul poate fi depus personal sau prin împuternicit, în anumite condiții.
  </p>

  <ul>
    <li>verifică programul;</li>
    <li>pregătește copii;</li>
    <li>notează numărul de înregistrare.</li>
  </ul>

  {/* 5.7 */}
  <h3>5.7 De ce merită să consulți un ghid dedicat</h3>
  <p>
    Dosarul de pensionare este una dintre cele mai
    <strong> sensibile etape</strong> ale pensionării.
  </p>
  <p>
    Un ghid dedicat te poate ajuta să înțelegi pașii, actele și greșelile
    frecvente înainte de a ajunge la ghișeu.
  </p>
  <p>
    Pentru detalii complete, poți consulta{" "}
    <a
      href="/dosar-pensie"
      className="text-primary underline hover:text-primaryDark"
    >
      ghidul complet despre dosarul de pensionare
    </a>.
  </p>

  <div style={{ borderLeft: "4px solid #16a34a", paddingLeft: "12px" }}>
    <p>
      <strong>Concluzie:</strong> Un dosar bine pregătit înseamnă mai puțin stres
      și mai puține întârzieri.
    </p>
  </div>
</section>

          {/* ================= SECTIUNEA 6 ================= */}
<section id="strainatate">
  <h2>6. Pensia dacă ai lucrat în străinătate</h2>

  {/* 6.1 */}
  <h3>6.1 Ce se întâmplă cu anii lucrați în afara României</h3>
  <p>
    Mulți români au lucrat o parte din viață în afara țării și se întreabă ce
    se întâmplă cu <strong>anii lucrați în străinătate</strong> la pensionare.
  </p>
  <p>
    În general, acești ani <strong>nu se pierd</strong>, atâta timp cât munca a
    fost legală și s-au plătit contribuții în statul respectiv.
  </p>
  <p>
    Fiecare stat își plătește partea de pensie pentru perioadele lucrate în
    sistemul său.
  </p>

  <div style={{ borderLeft: "4px solid #2563eb", paddingLeft: "12px" }}>
    <p>
      <strong>Important:</strong> Nu primești o singură pensie „combinată”, ci
      pensii separate de la fiecare stat.
    </p>
  </div>

  {/* 6.2 */}
  <h3>6.2 Ce este pensia comunitară</h3>
  <p>
    <strong>Pensia comunitară</strong> este mecanismul prin care perioadele de
    muncă realizate în mai multe state sunt recunoscute împreună, pentru a nu
    pierde dreptul la pensie.
  </p>
  <p>
    Acest sistem funcționează între România și statele din Uniunea Europeană,
    dar și cu anumite țări din afara UE, precum Marea Britanie.
  </p>
  <p>
    Pensia comunitară nu înseamnă că un stat îți plătește pentru anii lucrați în
    alt stat.
  </p>

  <div style={{ background: "#f8fafc", padding: "12px", borderRadius: "6px" }}>
    <p>
      <strong>Pe scurt:</strong> Anii se adună pentru drept, banii se plătesc
      separat.
    </p>
  </div>

  {/* 6.3 */}
  <h3>6.3 Diferența dintre UE, UK și alte țări</h3>
  <p>
    Regulile diferă în funcție de țara în care ai lucrat.
    În Uniunea Europeană se aplică regulile clasice de coordonare.
  </p>
  <p>
    Pentru <strong>UK</strong>, drepturile sunt protejate prin acorduri speciale,
    inclusiv după Brexit.
  </p>
  <p>
    Pentru alte țări (non-UE), situația depinde de existența unor acorduri
    bilaterale.
  </p>

  <ul>
    <li>UE – reguli comunitare;</li>
    <li>UK – acord post-Brexit;</li>
    <li>alte state – acorduri bilaterale sau deloc.</li>
  </ul>

  {/* 6.4 */}
  <h3>6.4 Unde depui cererea de pensie dacă ai lucrat în străinătate</h3>
  <p>
    Cererea de pensie se depune, de regulă, în
    <strong> statul de reședință</strong> la momentul pensionării.
  </p>
  <p>
    Instituția respectivă va comunica cu celelalte state pentru verificarea
    perioadelor de muncă.
  </p>
  <p>
    Procedura este unică, dar poate dura mai mult decât un dosar intern.
  </p>

  <div style={{ border: "1px dashed #94a3b8", padding: "12px" }}>
    <p>
      Nu este nevoie să depui dosare separate în fiecare țară.
    </p>
  </div>

  {/* 6.5 */}
  <h3>6.5 Documente necesare pentru pensia din străinătate</h3>
  <p>
    Dosarele cu muncă în străinătate necesită, de regulă,
    <strong> mai multe documente</strong>.
  </p>
  <p>
    Pe lângă actele din România, pot fi cerute dovezi ale contribuțiilor din
    celelalte state.
  </p>
  <p>
    Lipsa documentelor este una dintre cele mai frecvente cauze de întârziere.
  </p>

  <ul>
    <li>contracte de muncă;</li>
    <li>număr de asigurare socială;</li>
    <li>adeverințe de contribuții;</li>
    <li>documente fiscale.</li>
  </ul>

  {/* 6.6 */}
  <h3>6.6 Probleme frecvente în dosarele internaționale</h3>
  <p>
    Dosarele de pensie cu muncă în străinătate sunt printre cele mai
    <strong> complexe</strong>.
  </p>
  <p>
    Apar frecvent probleme precum lipsa contribuțiilor, diferențe de nume sau
    perioade neclare.
  </p>
  <p>
    Comunicarea dintre instituții poate dura luni sau chiar peste un an.
  </p>

  <div style={{ background: "#fff7ed", padding: "12px", borderRadius: "6px" }}>
    <p>
      <strong>Atenție:</strong> Dosarele internaționale necesită răbdare și
      organizare.
    </p>
  </div>

  {/* 6.7 */}
  <h3>6.7 Unde găsești informații detaliate despre pensia comunitară</h3>
  <p>
    Pensia comunitară are reguli specifice și multe situații particulare.
  </p>
  <p>
    De aceea, este recomandat să consulți un ghid dedicat exclusiv acestui
    subiect.
  </p>
  <p>
    Poți citi explicațiile detaliate în{" "}
    <a
      href="/pensie-comunitara"
      className="text-primary underline hover:text-primaryDark"
    >
      ghidul complet despre pensia comunitară
    </a>.
  </p>

  <div style={{ borderLeft: "4px solid #16a34a", paddingLeft: "12px" }}>
    <p>
      <strong>Concluzie:</strong> Anii munciți în străinătate pot conta decisiv
      pentru dreptul tău la pensie.
    </p>
  </div>
</section>


          {/* ================= SECTIUNEA 7 ================= */}
<section id="greseli">
  <h2>7. Greșeli frecvente la pensionare</h2>

  {/* 7.1 */}
  <h3>7.1 Amânarea verificării vechimii</h3>
  <p>
    Una dintre cele mai frecvente greșeli este amânarea verificării
    <strong> vechimii în muncă</strong> până în ultimul moment.
  </p>
  <p>
    Mulți oameni presupun că toate perioadele sunt corect înregistrate, iar
    surprizele apar abia la depunerea dosarului.
  </p>
  <p>
    Verificarea din timp îți permite să corectezi erori fără stres.
  </p>

  <div style={{ borderLeft: "4px solid #2563eb", paddingLeft: "12px" }}>
    <p>
      <strong>Sfat:</strong> Verifică-ți vechimea cu cel puțin un an înainte de
      pensionare.
    </p>
  </div>

  {/* 7.2 */}
  <h3>7.2 Lipsa unor documente esențiale</h3>
  <p>
    Un dosar incomplet este una dintre principalele cauze ale
    <strong> întârzierilor</strong> în soluționarea cererii de pensie.
  </p>
  <p>
    Adeverințele lipsă, actele deteriorate sau copiile ilizibile pot crea
    probleme.
  </p>
  <p>
    Este important să verifici din timp dacă ai toate documentele necesare.
  </p>

  <ul>
    <li>acte de identitate;</li>
    <li>adeverințe de vechime;</li>
    <li>documente pentru perioade speciale.</li>
  </ul>

  {/* 7.3 */}
  <h3>7.3 Neînțelegerea tipului de pensie ales</h3>
  <p>
    Mulți oameni aleg un tip de pensie fără să înțeleagă pe deplin
    <strong> consecințele</strong>.
  </p>
  <p>
    De exemplu, pensia anticipată sau anticipată parțială poate aduce
    penalizări permanente.
  </p>
  <p>
    O decizie greșită poate afecta venitul pe toată durata vieții.
  </p>

  <div style={{ background: "#fff7ed", padding: "12px", borderRadius: "6px" }}>
    <p>
      <strong>Atenție:</strong> O alegere greșită poate fi greu de corectat.
    </p>
  </div>

  {/* 7.4 */}
  <h3>7.4 Ignorarea muncii în străinătate</h3>
  <p>
    O altă greșeală frecventă este neglijarea perioadelor lucrate în
    <strong> străinătate</strong>.
  </p>
  <p>
    Mulți oameni nu menționează aceste perioade în dosar, crezând că nu contează.
  </p>
  <p>
    În realitate, ele pot fi decisive pentru îndeplinirea stagiului minim.
  </p>

  <div style={{ background: "#f8fafc", padding: "12px", borderRadius: "6px" }}>
    <p>
      Anii lucrați în afara României pot face diferența între a primi sau nu
      pensie.
    </p>
  </div>

  {/* 7.5 */}
  <h3>7.5 Compararea pensiei cu a altora</h3>
  <p>
    Compararea pensiei cu cea a prietenilor sau vecinilor este o sursă frecventă
    de frustrare.
  </p>
  <p>
    Fiecare pensie este calculată individual, în funcție de
    <strong> contribuții</strong>.
  </p>
  <p>
    Diferențele nu înseamnă automat erori.
  </p>

  <div style={{ border: "1px dashed #94a3b8", padding: "12px" }}>
    <p>
      Două cariere diferite duc la două pensii diferite.
    </p>
  </div>

  {/* 7.6 */}
  <h3>7.6 Lipsa răbdării în procesul de pensionare</h3>
  <p>
    Procesul de pensionare poate dura luni, mai ales în dosarele complexe.
  </p>
  <p>
    Lipsa răbdării duce adesea la stres inutil și conflicte cu funcționarii.
  </p>
  <p>
    Este important să urmărești dosarul, dar și să accepți timpii legali.
  </p>

  <ul>
    <li>notează numărul de înregistrare;</li>
    <li>cere termene orientative;</li>
    <li>păstrează documentele.</li>
  </ul>

  {/* 7.7 */}
  <h3>7.7 Neinformarea din surse sigure</h3>
  <p>
    Informațiile greșite sunt una dintre cele mai mari probleme la pensionare.
  </p>
  <p>
    Mulți oameni se bazează pe zvonuri sau discuții informale, în loc de surse
    sigure.
  </p>
  <p>
    Ghidurile clare și informațiile oficiale reduc riscul de greșeli.
  </p>

  <div style={{ borderLeft: "4px solid #16a34a", paddingLeft: "12px" }}>
    <p>
      <strong>Concluzie:</strong> Informația corectă te ajută să eviți cele mai
      frecvente greșeli la pensionare.
    </p>
  </div>

  <p className="text-sm text-primary">
    Multe greșeli pot fi evitate dacă parcurgi din timp{" "}
    <a href="/dosar-pensie" className="underline hover:text-primaryDark">
        ghidul despre dosarul de pensionare
    </a>.
    </p>
</section>

          {/* ================= SECTIUNEA 8 ================= */}
<section id="faq">
  <h2>8. Întrebări frecvente despre pensie</h2>

  {/* FAQ 1 */}
  <div className="faq-box">
    <h3>8.1 Ce este pensia și cine are dreptul la pensie?</h3>
    <p>
      Pensia este un <strong>drept financiar lunar</strong> acordat persoanelor
      care au muncit și au contribuit la sistemul public de pensii.
    </p>
    <p>
      Dreptul la pensie apare atunci când sunt îndeplinite
      <strong> condițiile legale</strong> privind vârsta și stagiul de cotizare.
    </p>
    <p>
      Fără contribuții sau fără stagiu minim, pensia de stat nu poate fi
      acordată.
    </p>
  </div>

  {/* FAQ 2 */}
  <div className="faq-box">
    <h3>8.2 Care este vârsta de pensionare în România?</h3>
    <p>
      <strong>Vârsta de pensionare</strong> diferă în funcție de sex și de anul
      nașterii.
    </p>
    <p>
      Există tabele oficiale care stabilesc exact luna și anul în care o
      persoană se poate pensiona.
    </p>
    <p>
      Este important să verifici datele exacte înainte de a depune cererea.
    </p>
  </div>

  {/* FAQ 3 */}
  <div className="faq-box">
    <h3>8.3 Câți ani trebuie să muncesc pentru a primi pensie?</h3>
    <p>
      Pentru pensia de stat este necesar un
      <strong> stagiu minim de cotizare</strong>.
    </p>
    <p>
      Stagiul complet este mai mare și influențează valoarea pensiei.
    </p>
    <p>
      Anii lucrați peste minim pot crește semnificativ pensia.
    </p>
  </div>

  {/* FAQ 4 */}
  <div className="faq-box">
    <h3>8.4 Cum se calculează pensia?</h3>
    <p>
      Pensia se calculează pe baza
      <strong> contribuțiilor plătite</strong> și a perioadei de muncă.
    </p>
    <p>
      Elementul central este punctajul de pensie, care reflectă raportul dintre
      venitul tău și salariul mediu.
    </p>
    <p>
      Două persoane cu aceeași vechime pot avea pensii diferite.
    </p>
  </div>

  {/* FAQ 5 */}
  <div className="faq-box">
    <h3>8.5 Ce este dosarul de pensionare?</h3>
    <p>
      Dosarul de pensionare este setul de documente pe baza căruia
      Casa de Pensii stabilește dreptul la pensie.
    </p>
    <p>
      El conține acte care dovedesc vechimea, contribuțiile și identitatea.
    </p>
    <p>
      Un dosar incomplet poate duce la întârzieri sau recalculări.
    </p>
  </div>

  {/* FAQ 6 */}
  <div className="faq-box">
    <h3>8.6 Ce se întâmplă dacă îmi lipsesc acte din dosar?</h3>
    <p>
      Lipsa unor acte nu înseamnă automat pierderea dreptului la pensie.
    </p>
    <p>
      În multe cazuri, documentele pot fi recuperate din arhive sau prin
      adeverințe.
    </p>
    <p>
      Este important să începi aceste demersuri din timp.
    </p>
  </div>

  {/* FAQ 7 */}
  <div className="faq-box">
    <h3>8.7 Pot primi pensie dacă am lucrat în străinătate?</h3>
    <p>
      Da. <strong>Anii lucrați în străinătate</strong> pot fi luați în calcul,
      în anumite condiții.
    </p>
    <p>
      Fiecare stat îți va plăti partea de pensie pentru anii lucrați acolo.
    </p>
    <p>
      Acest mecanism este cunoscut ca <strong>pensia comunitară</strong>.
    </p>
  </div>

  {/* FAQ 8 */}
  <div className="faq-box">
    <h3>8.8 Pot primi pensia din străinătate în România?</h3>
    <p>
      Da. În majoritatea cazurilor, pensia din străinătate poate fi plătită
      într-un cont bancar din România.
    </p>
    <p>
      Procedura poate diferi în funcție de statul plătitor.
    </p>
    <p>
      Este posibil să fie necesare confirmări periodice de viață.
    </p>
  </div>

  {/* FAQ 9 */}
  <div className="faq-box">
    <h3>8.9 Cât durează soluționarea dosarului de pensie?</h3>
    <p>
      Durata soluționării depinde de complexitatea dosarului.
    </p>
    <p>
      Dosarele simple pot fi soluționate în câteva luni.
    </p>
    <p>
      Dosarele cu muncă în străinătate pot dura mai mult.
    </p>
  </div>

  {/* FAQ 10 */}
  <div className="faq-box">
    <h3>8.10 Unde pot găsi informații sigure despre pensie?</h3>
    <p>
      Informațiile sigure provin din surse oficiale și din
      <strong> ghiduri specializate</strong>.
    </p>
    <p>
      Este important să eviți zvonurile și informațiile neconfirmate.
    </p>
    <p>
      Acest ghid este conceput pentru a oferi explicații clare și actualizate.
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