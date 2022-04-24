import TopNav from "./top-nav"

export default function Layout({ children }) {
  return (
    <div>
      <TopNav />
      <main>{ children }</main>
    </div>
  )
}
