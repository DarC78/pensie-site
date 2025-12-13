import Head from "next/head";
import Section from "@/components/Section";
import { BulletList } from "@/components/BulletList";

export default function PensieComunitaraUK() {
  const siteUrl = "https://dosarpensie.com";
  const canonicalUrl = `${siteUrl}/pensie-comunitara-uk`;

  const title =
    "Pensia comunitară în UK – Ghid simplu pentru românii care au muncit în Marea Britanie";
  const description =
    "Explicație clară, pas cu pas, despre pensia comunitară în UK. Află cine are dreptul, cum se calculează pensia din Marea Britanie, ce înseamnă National Insurance și ce trebuie să faci la pensionare.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
      </Head>

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "24px" }}>
        <article>
          {/* HERO */}
          <Section level={1} title="Pensia comunitară în UK – explicată pe înțelesul tuturor">
            <p>
              <a href="/pensie-comunitara">Pensia comunitară</a> în UK îi ajută pe
              românii care au muncit în Marea Britanie să nu piardă anii de muncă
              atunci când ajung la pensie.
            </p>

            <p>
              Dacă ai lucrat o parte din viață în România și o parte în UK,
              este normal să te întrebi:
              <strong> „Oare primesc pensie din ambele țări?”</strong>
            </p>

            <p>
              Răspunsul este: <strong>da</strong>.
              Dar sistemul din UK este diferit și merită explicat simplu.
            </p>
          </Section>

          {/* CE ESTE */}
          <Section id="ce-este" title="Ce este pensia comunitară în relația cu UK">
            <p>
              Pensia comunitară este modul prin care statele își recunosc între ele
              anii de muncă.
            </p>

            <p>
              Asta NU înseamnă o singură pensie.
              Înseamnă <strong>două pensii separate</strong>:
            </p>

            <BulletList
              items={[
                "pensia din România – pentru anii lucrați acolo",
                "pensia din UK – pentru anii cu contribuții în Marea Britanie",
              ]}
            />

            <p>
              Fiecare țară plătește doar ce îi aparține.
            </p>
          </Section>

          {/* BREXIT */}
          <Section title="Ce s-a schimbat după Brexit">
            <p>
              Mulți români se tem că Brexit le-a afectat pensia.
              În realitate, <strong>drepturile tale sunt protejate</strong>.
            </p>

            <p>
              Anii lucrați în UK sunt în continuare luați în calcul.
              Procedura este puțin mai birocratică, dar pensia nu se pierde.
            </p>
          </Section>

          {/* CINE ARE DREPTUL */}
          <Section id="drept" title="Cine are dreptul la pensie din UK">
            <p>
              Ai dreptul la pensie din UK dacă:
            </p>

            <BulletList
              items={[
                "ai lucrat legal în Marea Britanie",
                "ai plătit contribuții numite National Insurance",
                "ai atins vârsta legală de pensionare",
              ]}
            />

            <p>
              National Insurance (NI) este contribuția care apare pe fluturașul
              tău de salariu. Fără ea, anii NU sunt recunoscuți.
            </p>
          </Section>

          {/* CALCUL */}
          <Section id="calcul" title="Cum se calculează pensia din UK – explicat simplu">
            <p>
              În UK, statul se uită la <strong>un singur lucru</strong>:
              câți ani ai plătit National Insurance.
            </p>

            <BulletList
              items={[
                "minimum 10 ani → ai dreptul la pensie",
                "35 de ani → pensia completă",
                "mai puțini ani → pensie mai mică",
              ]}
            />

            <p>
              Anii din România NU cresc suma pensiei din UK.
              Ei ajută doar să îndeplinești condițiile minime.
            </p>
          </Section>

          {/* CERERE */}
          <Section id="cerere" title="Unde și cum se depune cererea">
            <p>
              Poți depune cererea:
            </p>

            <BulletList
              items={[
                "din România – la Casa de Pensii",
                "din UK – la Department for Work and Pensions",
              ]}
            />

            <p>
              Instituțiile comunică între ele.
              Tu nu trebuie să mergi dintr-o țară în alta.
            </p>
          </Section>

          {/* DOCUMENTE */}
          <Section id="documente" title="Documente necesare">
            <BulletList
              items={[
                "act de identitate",
                "National Insurance Number",
                "dovezi ale muncii din România",
                "cont bancar pentru plată",
              ]}
            />
          </Section>

          {/* DURATA */}
          <Section title="Cât durează procesul">
            <p>
              De obicei, procesul durează între
              <strong> 6 și 18 luni</strong>.
            </p>

            <p>
              Întârzierile apar din lipsa documentelor sau a anilor lipsă de NI.
            </p>
          </Section>

          {/* PROBLEME */}
          <Section title="Probleme frecvente">
            <BulletList
              items={[
                "ani lipsă de National Insurance",
                "muncă nedeclarată",
                "diferențe de nume în acte",
                "lipsă documente vechi",
              ]}
            />
          </Section>

          {/* CTA */}
          <Section title="Ai nevoie de ajutor?">
            <p>
              <strong>
                Pensia comunitară în UK poate fi complicată.
                <a href="/pensie-comunitara">
                  Vezi ghidul complet despre pensia comunitară
                </a>{" "}
                sau lasă ProveIt să te ajute să îți aperi drepturile.
              </strong>
            </p>
          </Section>
        </article>
      </main>
    </>
  );
}