import ArticleTemplate from '../../components/ArticleTemplate'

export default function Page() {
  return (
    <ArticleTemplate
      title="Totalizarea anilor lucrați în UE și UK"
      description="Cum se adună anii lucrați în România, UE și UK pentru stabilirea pensiei. Explicații simple, exemple și reguli actuale."
      slug="articole/pensie-totalizare-ue"
      datePublished="2025-01-05"
      coverImage="/images/pensie-totalizare.jpg"
      faq={[
        { q: "Cum se adună anii?", a: "..." },
        { q: "Ce acte sunt necesare?", a: "..." }
      ]}
      content={
        <>
          <h2>Introducere</h2>
          <p>Aici vine conținutul generat...</p>
        </>
      }
    />
  )
}