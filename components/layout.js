import TopNav from "./top-nav"

export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }) {
  return (
    <div>
      <TopNav />
      <main>{ children }</main>
    </div>
  )
}
