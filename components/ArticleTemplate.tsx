export default function ArticleTemplate({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <main className="section-container py-10">
        <article className="prose prose-slate max-w-none">
          {children}
        </article>
      </main>
    </div>
  )
}