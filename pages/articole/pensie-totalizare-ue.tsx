import ArticleTemplate from '../../components/ArticleTemplate'

export default function Page() {
  return (
    <ArticleTemplate
      title="Totalizarea anilor lucrați în UE și UK"
      description="Cum se adună anii lucrați în România, UE și UK pentru stabilirea pensiei. Explicații simple, exemple și reguli actuale."
      slug="articole/pensie-totalizare-ue"
      datePublished="2025-01-05"
      coverImage="/images/pensie-comunitara-cover.jpg"
      faq={[
        { q: "Cum se adună anii lucrați în străinătate?", a: "..." },
        { q: "Dacă am doar 1-2 ani într-o țară, se iau în calcul?", a: "..." },
        { q: "Ce acte sunt necesare?", a: "..." }
      ]}
    >
      <>
        <h2>Introducere</h2>
        <p>Aici vine conținutul paginii...</p>

        <h2>Secțiune 2</h2>
        <p>Conținut detaliat...</p>
      </>
    </ArticleTemplate>
  )
}