import Link from "next/link"
import type { PostMeta } from "@/src/api"
// import styles

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
      <ul>
        { posts.map((post) => (
          <li key={ post.slug }>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
  )
}

