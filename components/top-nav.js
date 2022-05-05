import Link from "next/link"

import navStyles from "../styles/top-nav.module.css"

export default function TopNav() {
  return (
    <div className={ navStyles["top-nav"] }>
      <Link href="/">
        <a>Austin White</a>
      </Link>
      
      <div className={ navStyles["top-nav-right"] }>
        <Link href="/projects">
          <a>Projects</a>
        </Link>

        <Link href="/blog">
          <a>Blog</a>
        </Link>

        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  )
}
