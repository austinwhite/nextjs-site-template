import Head from 'next/head'
import MlAlg from "@/src/components/ml-alg"
import utilStyles from "@/styles/utils.module.css"
import projStyles from "@/styles/projects.module.css"

export default function Contact() {
  return (
    <div className={ utilStyles["page-container"] }>
      <Head>
        <title>Projects</title>
      </Head>

      <div className={ projStyles["ml-algs"] }>
        <h1>Programming Language Theory and Interpreters</h1>
        <br/>
        <MlAlg 
          name="jlox"
          url="https://github.com/austinwhite/jlox" 
        />
        <MlAlg 
          name="Scheme Interpreter"
          url="https://github.com/austinwhite/scheme-interpreter" 
        />
      </div>
    </div>
  )
}
