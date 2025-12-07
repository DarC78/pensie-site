import { supabase } from '../../lib/supabaseClient'
import ReactMarkdown from 'react-markdown'

export default function Page({ data }: any) {
  if (!data) return <div>Pagina nu există</div>

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
      <h1>{data.h1}</h1>
      <ReactMarkdown>{data.content_md}</ReactMarkdown>
    </div>
  )
}

export async function getStaticPaths() {
  const { data } = await supabase
    .from('community_pension_topics')
    .select('slug')

  const paths =
    data?.map((item) => ({
      params: { slug: item.slug }
    })) ?? []

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }: any) {
  const { data } = await supabase
    .from('community_pension_topics')
    .select('*')
    .eq('slug', params.slug)
    .single()

  return {
    props: { data },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}