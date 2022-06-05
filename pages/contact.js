import Head from 'next/head'
import ComingSoon from "../components/coming-soon"

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <ComingSoon text="Contact page" /> 
    </div>
  )
}
