import TopNav from "./top-nav"

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <TopNav />
      <main>{ children }</main>
    </div>
  )
}
