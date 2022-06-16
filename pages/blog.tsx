import { getAllPosts, PostMeta } from "@/src/api"
import Link from "next/link"
import BlogPosts from "@/src/components/blog-posts"

const active_tags = new Map() 

export default function Blog( { posts, tags }: { posts: PostMeta[], tags: string[] }) {
  const handleClick = (tag: string) => {
    if (active_tags.has(tag)) {
      active_tags.delete(tag)
    } else {
      active_tags.set(tag, true)
    }
    console.log(active_tags)
  }

  return (
    <>
      <BlogPosts posts={ posts }/>
      <ul>
        { tags.map((tag) => (
          <li key={ tag }>
            <Link href={ `/tags/${ tag }` }>
              <a onClick={ () => {
                handleClick(tag)
              }}>{ tag }</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  const tags = Array.from(new Set(posts.map((post) => post.tags).flat()))

  return { props: { posts, tags } }
}
