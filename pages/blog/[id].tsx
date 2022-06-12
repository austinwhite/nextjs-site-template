import { getAllPostIds, getPostData } from "../../lib/posts"
import Head from "next/head"
import Date from "@/src/components/date"
import utilStyles from "@/styles/utils.module.css"

interface PostData {
  postData: {
    title: string
    date: string
    conentHtml: string
  }
}

export default function Post({ postData }: PostData) {
  return (
    <div className={ utilStyles["page-container"] }>
      <div className={ utilStyles["blog-content-container"] }>
        <Head>
          <title>{ postData.title }</title>
        </Head>
        <article>
          <h1>{ postData.title }</h1>
          <div>
            <Date dateString={ postData.date }/>
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
