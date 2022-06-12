import comingSoonStyles from "../styles/coming-soon.module.css"

export default function ComingSoon({ text }) {
  return (
    <div className={ comingSoonStyles["container"] }>
      <h1>{text} under development.</h1>
    </div>
  )
}
