import Head from 'next/head'
import TitleBlock from "../components/title-block"
import utilStyles from "../styles/utils.module.css"
import Image from 'next/image'

export default function Home() {
  return (
    <div className={ utilStyles["page-container"] }>
      <Head>
        <title>Austin White</title>
      </Head>
      <div className={ utilStyles["hero-image"] }>
        <Image
          src="/IsometricObject.png"
          alt="Isometric Object"
          width={3440}
          height={1440}
        />
      </div>
    </div>
  )
}
