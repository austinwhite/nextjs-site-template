import Head from 'next/head'
import Link from "next/link"
import utilStyles from "@/styles/utils.module.css"
import projStyles from "@/styles/projects.module.css"

export default function Projects() {
  return (
    <div className={ utilStyles["page-container"] }>
      <Head>
        <title>Projects</title>
      </Head>

      <div className={ projStyles["container"] }>
        <Link href="/projects/interpreters-and-pl-theory">
          <a>
            <h2>Interpreters and PL Theory</h2>
          </a>
        </Link>
        <Link href="/projects/machine-learning">
          <a>
            <h2>Machine Learning</h2>
          </a>
        </Link>
      </div>
    </div>
  )
}
