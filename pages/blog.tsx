import { getAllPosts, PostMeta } from "@/src/api"
import Link from "next/link"
import Head from 'next/head'
import React, { useState, useEffect } from "react"
import blogStyles from "@/styles/blog.module.css"
import utilStyles from "@/styles/utils.module.css"

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

  const formatDate = (date: string): string => {
    const parts = date.split(" ")
    const month = 1
    const day = 2
    const year = 3

    return parts[month] + " " + parts[day] + ", " + parts[year]
  }

  useEffect(() => {
    console.log(activeTags)
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
    <div className={ utilStyles["page-container"] }>
      <Head>
        <title>Blog</title>
      </Head>
      <div className={ blogStyles["posts-selection"] }>
        <div className={ blogStyles["tags-list"]}>
          <ul className={ blogStyles["list"] }>
            { tags.map((tag) => (
              <li key={ tag } className={ blogStyles["listItem"] }>
                <Link href={"#"}>
                  <a onClick={ () => {
                    handleClick(tag)
                  }}>{ tag }</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={ blogStyles["posts-list"] }>
          <ul className={ blogStyles["list"] }>
            { filteredPosts.map((post) => (
              <li key={ post.slug } className={ blogStyles["listItem"] }>
                <Link href={ `/blog/${ post.slug }` }>
                  { post.title }
                </Link>
                <br/>
                <small className={ blogStyles["lightText"] }>
                  { formatDate(post.date) }
                </small>
              </li>
            ))}
          </ul>
        </div>
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
