import Link from "next/link"

import titleStyles from "../styles/title-block.module.css"

export default function TitleBlock() {
  const githubURL = "https://github.com/austinwhite"
  const linkedinURL = "https://www.linkedin.com/in/austinwhiteln/"

  return (
    <div className={ titleStyles["container"] }>
      <h1 className={ titleStyles["heading"] }>Lorem Ipsum</h1>
      <p className={ titleStyles["sub-text"] }>
        Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium,
      </p>
      <div className={ titleStyles["links"] }>
        <Link href={ githubURL }>
          <a>GitHub</a>
        </Link>
        <Link href={ linkedinURL }>
          <a>Linkedin</a>
        </Link>
      </div>
    </div>
  )
}
