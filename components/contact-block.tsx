import Link from "next/link"
import contactStyles from "../styles/contact.module.css"
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"

export default function TitleBlock() {
  const mailTo = "mailto:austinlldb@gmail.com"
  const githubURL = "https://github.com/austinwhite"
  const linkedinURL = "https://www.linkedin.com/in/austinwhiteln/"

  return (
    <div className={ contactStyles["container"] }>
      <Link href={ mailTo }>
        <a id={ contactStyles["mail"] } target="_blank">
          <h1><AiOutlineMail/></h1>
        </a>
      </Link>

      <Link href={ githubURL }>
        <a id={ contactStyles["github"] } target="_blank">
          <h1><AiOutlineGithub/></h1>
        </a>
      </Link>

      <Link href={ linkedinURL }>
        <a id={ contactStyles["linkedin"] } target="_blank">
          <h1><AiOutlineLinkedin/></h1>
        </a>
      </Link>
    </div>
  )
}
