// scripts/articlesConfig.js

/** 
 * Fiecare articol va genera un fișier .tsx în: pages/articole/<slug>.tsx
 * slug = numele fișierului fără .tsx
 */
const articles = [
  {
    slug: 'pensie-totalizare-ue', // => pages/articole/pensie-totalizare-ue.tsx
    title: 'Totalizarea anilor lucrați în UE și UK',
    description:
      'Cum se adună anii lucrați în România, UE și UK pentru stabilirea pensiei. Explicații simple, exemple și reguli actuale.',
    datePublished: '2025-01-05',
    coverImage: '/images/pensie-comunitara-cover.jpg',
    faq: [
      {
        q: 'Cum se adună anii lucrați în mai multe țări?',
        a: 'Anii lucrați în fiecare stat se comunică între instituțiile de pensii și se totalizează pentru a verifica îndeplinirea stagiului minim. Fiecare stat plătește partea lui, proporțional cu anii lucrați acolo.',
      },
      {
        q: 'Dacă am doar 1–2 ani într-o țară, contează?',
        a: 'Da, perioadele scurte pot fi utile la totalizarea stagiilor chiar dacă statul respectiv nu îți plătește o pensie separată.',
      },
    ],
    body: `
<>
  <h2>Introducere</h2>
  <p>
    În acest articol explicăm concret cum se pun la un loc anii lucrați în România și alte state
    din UE sau UK, astfel încât să nu pierzi dreptul la pensie pentru perioada petrecută în străinătate.
  </p>

  <h2>1. De ce contează totalizarea anilor?</h2>
  <p>
    Totalizarea stagiilor este mecanismul prin care perioadele de asigurare din mai multe țări
    se adună pentru a vedea dacă îndeplinești condițiile minime de pensionare.
  </p>

  <h2>2. Cum colaborează statele între ele</h2>
  <p>
    Casa de Pensii din țara în care depui cererea contactează celelalte state în care ai lucrat
    și solicită confirmarea perioadelor de asigurare. Pe baza acestor informații se fac calculele.
  </p>
</>
    `,
  },

  // Aici poți adăuga încă articole, pe același model:
  // {
  //   slug: 'pensie-anticipata-diaspora',
  //   title: 'Pensie anticipată pentru românii din diaspora',
  //   ...
  // }
]

module.exports = { articles }