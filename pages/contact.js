import Head from 'next/head'
import ContactBlock from "../components/contact-block"
import utilStyles from "../styles/utils.module.css"

export default function Contact() {
  return (
    <div className={ utilStyles["page-container"] }>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactBlock/>
    </div>
  )
}
