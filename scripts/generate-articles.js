// scripts/generate-articles.js
const fs = require('fs')
const path = require('path')
const { articles } = require('./articlesConfig')

const ROOT = path.join(__dirname, '..')
const pagesDir = path.join(ROOT, 'pages', 'articole')

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true })
}

articles.forEach((article) => {
  const filePath = path.join(pagesDir, `${article.slug}.tsx`)
  const slugPath = `articole/${article.slug}`

  const faqArrayCode =
    article.faq && article.faq.length
      ? `[
${article.faq
  .map(
    (item) =>
      `        { q: ${JSON.stringify(item.q)}, a: ${JSON.stringify(item.a)} }`
  )
  .join(',\n')}
      ]`
      : '[]'

  const content = `import ArticleTemplate from '../../components/ArticleTemplate'

export default function Page() {
  return (
    <ArticleTemplate
      title={${JSON.stringify(article.title)}}
      description={${JSON.stringify(article.description)}}
      slug={${JSON.stringify(slugPath)}}
      datePublished={${JSON.stringify(article.datePublished)}}
      coverImage={${JSON.stringify(article.coverImage)}}
      faq={${faqArrayCode}}
    >
      ${article.body.trim()}
    </ArticleTemplate>
  )
}
`

  fs.writeFileSync(filePath, content, 'utf8')
  console.log('✅ Generated:', filePath)
})

console.log('\\nAll articles generated.')