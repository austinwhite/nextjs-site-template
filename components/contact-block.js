import Link from "next/link"
import utilStyles from "../styles/utils.module.css"
import contactStyles from "../styles/contact.module.css"
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"

export default function TitleBlock() {
  const mailTo = "mailto:austinlldb@gmail.com"
  const githubURL = "https://github.com/austinwhite"
  const linkedinURL = "https://www.linkedin.com/in/austinwhiteln/"

  return (
    <div className={ utilStyles["page-container"] }>
      <div className={ contactStyles["container"] }>
        <Link href={ mailTo }>
          <a id={ contactStyles["mail"]}>
            <h1><AiOutlineMail/></h1>
          </a>
        </Link>

        <Link href={ githubURL }>
          <a id={ contactStyles["github"]}>
            <h1><AiOutlineGithub/></h1>
          </a>
        </Link>

        <Link href={ linkedinURL }>
          <a id={ contactStyles["linkedin"]}>
            <h1><AiOutlineLinkedin/></h1>
          </a>
        </Link>
      </div>
    </div>
  )
}
