import Link from "next/link"
import { FiExternalLink } from "react-icons/fi"

export default function MlAlg( { name, url } : 
    { name: string, url: string } ) {
  return (
    <div>
      <Link href={ url  }>
        <a target="_blank">
          <h2><FiExternalLink/> { name } </h2>
        </a>
      </Link>
    </div>
  )
}
