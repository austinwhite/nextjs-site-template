import { getAllPosts, PostMeta } from "@/src/api"
import Link from "next/link"
import React, { useState, useEffect } from "react"

export default function Blog( { posts, tags }: { posts: PostMeta[], tags: string[] }) {
  const [activeTags, setActiveTags] = useState(new Map<string, boolean>())
  const [filteredPosts, setFilteredPosts] = useState(posts)

  const handleClick = (tag: string) => {
    if (activeTags.has(tag)) {
      activeTags.delete(tag)
    } else {
      activeTags.set(tag, true)
    }
    setActiveTags(activeTags)
  }

  useEffect(() => {
    console.log(activeTags)
    posts.forEach((post) => (
      post.tags.forEach((tag) => {
        if (activeTags.has(tag)) {
          post.hidden = true
        } else {
          post.hidden = false
        }
      }))
    )

    if (activeTags.size == 0) {
      setFilteredPosts(posts)
    } else {
      setFilteredPosts((
        posts.filter((post) => post.tags.some(
          (tag) => activeTags.has(tag)
        ))
      ))
    }
  }, [posts])

  return (
    <div>
      <div>
        <ul>
          { filteredPosts.map((post) => (
            <li key={ post.slug }>
              <Link href={ `/blog/${ post.slug }` }>
                { post.title }
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          { tags.map((tag) => (
            <li key={ tag }>
              <Link href={"#"}>
                <a onClick={ () => {
                  handleClick(tag)
                }}>{ tag }</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  const tags = Array.from(new Set(posts.map((post) => post.tags).flat()))

  return { props: { posts, tags } }
}
