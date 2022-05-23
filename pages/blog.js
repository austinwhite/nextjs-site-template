import Head from 'next/head'
import { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

<<<<<<< HEAD
export default function Blog({ allPostsData }) {
=======
export default function Blog( allPostsData ) {
>>>>>>> 1e23e6adb77723a03aabd7e5dae2fd51807a303e
  return (
    <>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
