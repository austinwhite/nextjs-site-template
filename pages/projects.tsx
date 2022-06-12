import Head from 'next/head'
import ComingSoon from "@/src/components/coming-soon"

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>
      <ComingSoon text="Projects page" /> 
    </div>
  )
}
