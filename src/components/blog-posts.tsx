import { PostMeta } from "@/src/api"
import Link from "next/link"

export default function BlogPosts( { posts }: { posts: PostMeta[] }) {
  posts.forEach((post) => console.log(post))

  return (
    <div>
      <ul>
        { posts.map((post) => (
          <li key={ post.slug }>
            <Link href={ `/blog/${ post.slug }` }>
              { post.title }
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
