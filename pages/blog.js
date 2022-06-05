import Head from 'next/head'
import { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'

export default function Blog({ allPostsData }) {
  return (
    <div className={ utilStyles["page-container"] }>
      <Head>
        <title>Blog</title>
      </Head>
      <div className={ utilStyles["blog-container"] }>
        <ul className={ utilStyles["list"] }>
          {allPostsData.map(({ id, date, title }) => (
            <li className={ utilStyles["listItem"] } key={id}>
              <Link href={ `/posts/${id}` }>
                <a>{title}</a>
              </Link>
              <br />
              <small className={ utilStyles["lightText"] }>
                <Date dateString={ date } />
              </small>
            </li>
          ))}
        </ul>
      </div>
    </div>
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
