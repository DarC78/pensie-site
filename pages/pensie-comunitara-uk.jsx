import Head from "next/head";
import Section from "@/components/Section";
import { BulletList } from "@/components/List";

export default function PensieComunitaraUK() {
  const siteUrl = "https://dosarpensie.com";
  const pagePath = "/pensie-comunitara-uk";
  const canonicalUrl = `${siteUrl}${pagePath}`;

  const brandName = "DosarPensie";
  const countryName = "UK";

  const title =
    "Pensia comunitară în UK – Ghid complet pentru românii care au muncit în Marea Britanie";
  const description =
    "Ghid complet despre pensia comunitară în UK pentru români: ce este, cine are dreptul, cum se recunosc anii lucrați în Marea Britanie, ce se întâmplă după Brexit și cum funcționează legătura cu pensia din România.";

  /* ================= JSON-LD ================= */

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Acasă",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pensia comunitară",
        item: `${siteUrl}/pensie-comunitara`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Pensia comunitară în UK",
        item: canonicalUrl,
      },
    ],
  };

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    mainEntityOfPage: canonicalUrl,
    datePublished: "2025-12-13",
    dateModified: "2025-12-13",
    inLanguage: "ro-RO",
    author: {
      "@type": "Organization",
      name: brandName,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: brandName,
      url: siteUrl,
    },
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="ro_RO" />

        <meta name="robots" content="index, follow" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdBreadcrumbs),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdArticle),
          }}
        />
      </Head>

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "24px" }}>
        <nav aria-label="Cuprins">
            <ul>
                <li><a href="#calcul">Cum se calculează pensia</a></li>
                <li><a href="#cerere">Unde se depune cererea</a></li>
                <li><a href="#documente">Documente necesare</a></li>
                <li><a href="#intrebari">Întrebări frecvente</a></li>
            </ul>
        </nav>
        <article>
          <h1>Pensia comunitară în UK</h1>

          <Section level={1} title="Pensia comunitară în UK">
            <p>
                <a href="/pensie-comunitara">Pensia comunitară</a> în UK este un subiect de
                interes major pentru românii care au muncit în Marea Britanie și care doresc
                să își valorifice anii lucrați în România și UK.
            </p>

            <p>
                În practică, dosarele de pensie comunitară cu UK sunt printre cele mai
                complexe din Europa, implicând instituții diferite și proceduri distincte.
            </p>
            </Section>

          <p>
            În practică, pensia comunitară cu UK este unul dintre cele mai
            complexe tipuri de dosare de pensie. Sunt implicate instituții
            diferite, sisteme de calcul distincte și perioade de muncă care nu
            sunt întotdeauna ușor de dovedit. Tocmai de aceea, este esențial să
            înțelegi exact cum funcționează acest mecanism și ce pași trebuie
            urmați.
          </p>

          <h2>Ce este pensia comunitară în relația cu UK</h2>

          <p>
            <a href="/pensie-comunitara">Pensia comunitară</a> reprezintă mecanismul prin care perioadele de muncă
            realizate în mai multe state sunt recunoscute împreună, astfel încât
            persoana să nu piardă anii lucrați atunci când ajunge la vârsta de
            pensionare. În cazul UK, acest mecanism funcționează pe baza
            coordonării sistemelor de securitate socială, chiar și după Brexit.
          </p>

          <p>
            Concret, dacă ai muncit în România și în Marea Britanie, fiecare stat
            va calcula separat partea sa de pensie. România va plăti pensia
            aferentă anilor lucrați în România, iar UK va plăti pensia
            corespunzătoare perioadelor de contribuție din sistemul britanic.
          </p>

          <p>
            Important de reținut este că nu primești o singură pensie „combinată”.
            Vei primi plăți distincte, de la fiecare stat, în funcție de
            contribuțiile realizate.
          </p>

          <h2>Ce s-a schimbat după Brexit</h2>

          <p>
            Una dintre cele mai frecvente temeri ale românilor din UK este legată
            de Brexit și impactul acestuia asupra drepturilor de pensie. În
            realitate, pentru majoritatea persoanelor, drepturile de pensie sunt
            în continuare protejate.
          </p>

          <p>
            Acordul de Retragere dintre UK și UE prevede că perioadele de muncă
            realizate înainte de finalizarea perioadei de tranziție sunt
            recunoscute în continuare. De asemenea, există un acord de securitate
            socială care permite coordonarea sistemelor și după Brexit.
          </p>

          <p>
            Totuși, procedura este mai birocratică decât în cazul statelor membre
            UE. Comunicarea între instituțiile din România și UK poate dura mai
            mult, iar solicitările suplimentare de documente sunt frecvente.
          </p>

          <h2>Cine are dreptul la pensie comunitară în UK</h2>

          <Section title="Cine are dreptul la pensie comunitară în UK">
            <p>
                Ai dreptul la pensie comunitară în relația cu UK dacă îndeplinești una sau
                mai multe dintre următoarele condiții:
            </p>

            <BulletList
                items={[
                "ai lucrat legal în Marea Britanie",
                "ai avut contribuții la National Insurance (NI)",
                "ai stagii de cotizare în România sau alte state",
                "ai atins vârsta legală de pensionare",
                ]}
            />
            <p>
            Nu este obligatoriu să fi lucrat un număr mare de ani în UK. Chiar și
            perioadele mai scurte pot fi luate în calcul prin mecanismul de
            totalizare a stagiilor, în anumite condiții.
          </p>
            </Section>

          

          <Section title="Tipuri de muncă recunoscute în UK" level={3}>
            <BulletList
                items={[
                "contract PAYE",
                "muncă prin agenții",
                "self-employed / sole trader",
                "zero-hours contracts",
                "NI credits din beneficii",
                ]}
            />
            </Section>

          <p>
            În cadrul pensiei comunitare, UK recunoaște mai multe forme de muncă,
            atât timp cât au fost declarate și au generat contribuții:
          </p>

          <ul>
            <li>contract de muncă standard (PAYE);</li>
            <li>muncă prin agenții;</li>
            <li>self-employed (PFA / sole trader);</li>
            <li>zero-hours contracts;</li>
            <li>anumite beneficii care includ NI credits.</li>
          </ul>

          <p>
            Problemele apar frecvent în cazul perioadelor în care contribuțiile
            nu au fost plătite complet sau corect, ori în situațiile în care
            persoana a lucrat „cash in hand”. Aceste aspecte pot complica
            semnificativ dosarul de pensie.
          </p>

          <h2>Legătura dintre pensia din UK și pensia din România</h2>

          <p>
            Pensia comunitară nu înseamnă că UK îți va plăti pensia românească sau
            invers. Fiecare stat este responsabil exclusiv pentru partea de
            pensie aferentă perioadelor lucrate în sistemul său.
          </p>

          <p>
            Totuși, perioadele lucrate în UK pot fi esențiale pentru îndeplinirea
            stagiului minim de cotizare din România. De exemplu, dacă în România
            nu ai suficienți ani pentru a obține pensia, anii din UK pot fi luați
            în calcul pentru deschiderea dreptului.
          </p>

          <p>
            Acesta este unul dintre cele mai importante avantaje ale pensiei
            comunitare și, în același timp, una dintre cele mai frecvente surse
            de confuzie pentru solicitanți.
          </p> <h2>Cum se calculează pensia comunitară în UK</h2>

          <p>
            Calculul pensiei comunitare în UK se face pe baza principiului
            <strong> pro-rata</strong>. Asta înseamnă că fiecare stat implicat
            calculează separat partea de pensie corespunzătoare perioadelor
            lucrate în sistemul său.
          </p>

          <p>
            UK nu „completează” pensia românească și nici România nu plătește
            pentru anii lucrați în Marea Britanie. Fiecare stat își asumă strict
            responsabilitatea pentru anii de contribuție din propriul sistem.
          </p>

          <h3>Rolul National Insurance în calculul pensiei din UK</h3>

          <p>
            În Marea Britanie, pensia de stat este legată direct de anii de
            contribuție la <strong>National Insurance (NI)</strong>. Pentru a
            beneficia de pensie de stat britanică, este necesar un număr minim
            de ani de contribuție.
          </p>

          <p>
            În prezent, sistemul britanic funcționează astfel:
          </p>

          <ul>
            <li>minim 10 ani de contribuții pentru a primi pensie;</li>
            <li>35 de ani pentru pensia completă;</li>
            <li>fiecare an adaugă o fracțiune din pensia totală.</li>
          </ul>

          <p>
            În cazul pensiei comunitare, dacă nu atingi pragul minim de ani doar
            în UK, perioadele din România pot fi folosite pentru
            <strong> deschiderea dreptului</strong>, dar UK va plăti doar partea
            aferentă anilor lucrați efectiv în Marea Britanie.
          </p>

          <h3>Exemplu concret de calcul</h3>

          <p>
            Să presupunem următoarea situație:
          </p>

          <ul>
            <li>10 ani lucrați în România;</li>
            <li>12 ani lucrați în UK cu contribuții NI;</li>
            <li>vârsta legală de pensionare atinsă.</li>
          </ul>

          <p>
            În acest caz:
          </p>

          <ul>
            <li>
              România va calcula pensia pe baza celor 10 ani de cotizare
              realizați în sistemul românesc;
            </li>
            <li>
              UK va calcula separat pensia pentru cei 12 ani de contribuții NI;
            </li>
            <li>
              vei primi <strong>două plăți distincte</strong>, una din România și
              una din UK.
            </li>
          </ul>

          <p>
            Acest mod de calcul se bazează pe principiile generale ale
            <a href="/pensie-comunitara">
                pensiei comunitare la nivel european
            </a>,
            adaptate relației specifice dintre România și UK.
        </p>

          <p>
            Dacă în România nu ai fi îndeplinit stagiul minim, anii din UK ar fi
            putut fi folosiți pentru deschiderea dreptului, fără ca România să
            plătească pentru anii din afara țării.
          </p>

          <h2>Unde și cum se depune cererea pentru pensia comunitară în UK</h2>

          <p>
            Cererea pentru pensia comunitară în relația cu UK poate fi depusă în
            două moduri, în funcție de locul de reședință la momentul
            pensionării.
          </p>

          <h3>Depunerea cererii din România</h3>

          <p>
            Dacă locuiești în România, cererea se depune la Casa Teritorială de
            Pensii de care aparții. Instituția română va transmite automat
            solicitarea către autoritățile britanice.
          </p>

          <p>
            Avantajul acestei variante este că depui un singur dosar. Dezavantajul
            este că procesul poate dura mai mult, deoarece comunicarea dintre
            instituții este lentă.
          </p>

          <h3>Depunerea cererii din UK</h3>

          <p>
            Dacă locuiești în Marea Britanie, cererea se depune la instituția
            competentă din UK (Department for Work and Pensions). Aceasta va
            solicita ulterior informații de la Casa de Pensii din România.
          </p>

          <p>
            Această variantă este preferată de multe persoane, deoarece
            interacțiunea directă cu autoritățile britanice poate fi mai rapidă,
            însă presupune o bună organizare a documentelor din România.
          </p>

          <h2>Documente necesare pentru pensia comunitară UK</h2>

          <p>
            Lista documentelor poate varia în funcție de situația personală, dar
            în general sunt necesare:
          </p>

          <ul>
            <li>act de identitate valabil;</li>
            <li>certificat de naștere și, dacă este cazul, de căsătorie;</li>
            <li>dovezi ale perioadelor lucrate în România;</li>
            <li>National Insurance Number;</li>
            <li>dovezi ale contribuțiilor din UK;</li>
            <li>formulare europene de coordonare;</li>
            <li>extras de cont pentru plata pensiei.</li>
          </ul>

          <p>
            Lipsa unor documente sau inconsecvențele între datele declarate sunt
            printre cele mai frecvente motive de întârziere sau respingere a
            dosarului.
          </p>

          <h2>Cât durează procesul pensiei comunitare în UK</h2>

          <p>
            Durata procesului este variabilă și depinde de mai mulți factori:
          </p>

          <ul>
            <li>numărul de state implicate;</li>
            <li>claritatea documentelor;</li>
            <li>rapiditatea comunicării între instituții;</li>
            <li>situații speciale (self-employed, lipsă contribuții).</li>
          </ul>

          <p>
            În practică, un dosar de pensie comunitară cu UK poate dura între
            <strong>6 luni și peste 18 luni</strong>. Există și cazuri în care
            procesul se prelungește semnificativ.
          </p>

          <h2>Probleme frecvente întâlnite în dosarele cu UK</h2>

          <ul>
            <li>ani de National Insurance lipsă sau incompleți;</li>
            <li>diferențe de nume între documente;</li>
            <li>muncă nedeclarată sau „cash in hand”;</li>
            <li>perioade self-employed fără contribuții clare;</li>
            <li>lipsa comunicării între instituții.</li>
          </ul>

          <p>
            Majoritatea acestor probleme pot fi prevenite sau corectate, însă
            necesită experiență și cunoașterea procedurilor specifice.
          </p>

          <h2>Întrebări frecvente despre pensia comunitară în UK</h2>

          <h3>Pot primi pensie din UK dacă am lucrat mai puțin de 10 ani?</h3>
          <p>
            În anumite situații, da. Anii din România pot ajuta la deschiderea
            dreptului, însă UK va plăti doar partea aferentă anilor lucrați acolo.
          </p>

          <h3>Primesc pensia din UK în România?</h3>
          <p>
            Da. Pensia britanică poate fi plătită într-un cont din România.
          </p>

          <h3>Brexit afectează pensia mea?</h3>
          <p>
            Drepturile dobândite sunt protejate, însă procedura este mai
            birocratică.
          </p>

          <h3>Pot aplica singur?</h3>
          <p>
            Da, însă dosarele cu UK sunt printre cele mai complexe din punct de
            vedere procedural.
          </p>

          <hr />

          <p>
            <strong>
                Pensia comunitară în UK implică reguli diferite și instituții multiple.
                <a href="/pensie-comunitara">
                Află cum funcționează pensia comunitară în ansamblu
                </a>
                și cum ProveIt te ajută să îți aperi drepturile tale în fața instituțiilor.
            </strong>
        </p>
        </article>
      </main>
    </>
  );
}