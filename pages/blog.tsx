import { getAllPosts, PostMeta } from "@/src/api"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import BlogPosts from "@/src/components/blog-posts"


export default function Blog( { posts, tags }: { posts: PostMeta[], tags: string[] }) {
  const [activeTags, setActiveTags] = useState(new Map<string, boolean>())

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
    posts.forEach((post) => post.tags.forEach((tag) => {
      if (activeTags.has(tag)) {
        post.hidden = true
      } else {
        post.hidden = false
      }
    }))
  })

  return (
    <>
      <BlogPosts posts={ posts }/>
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
