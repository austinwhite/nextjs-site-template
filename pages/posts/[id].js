import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'

export default function Post({ postData }) {
  return (
<<<<<<< HEAD
    <>
=======
    <Layout>
>>>>>>> 1e23e6adb77723a03aabd7e5dae2fd51807a303e
      <Head>
        <title>{ postData.title }</title>
      </Head>
      <article>
        <h1>{ postData.title }</h1>
        <div>
<<<<<<< HEAD
          <Date dateString={ postData.date }/>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
=======
          <Date />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
>>>>>>> 1e23e6adb77723a03aabd7e5dae2fd51807a303e
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
