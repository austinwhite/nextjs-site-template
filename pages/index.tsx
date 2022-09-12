import { getAllPosts, PostMeta } from "@/src/api"
import Link from "next/link"
import Head from 'next/head'
import React, { useState, useEffect } from "react"
import blogStyles from "@/styles/blog.module.css"
import utilStyles from "@/styles/utils.module.css"

export default function Blog( { posts, tags }: { posts: PostMeta[], tags: string[] }) {
  const [activeTags, setActiveTags] = useState(new Map<string, boolean>())
  const [tagUpdateCount, setTagUpdateCount] = useState(0)
  const [filteredPosts, setFilteredPosts] = useState(posts)

  const handleTagClick = (tag: string) => {
    if (activeTags.has(tag)) {
      activeTags.delete(tag)
    } else {
      activeTags.set(tag, true)
    }

    if (activeTags.size == tags.length) {
      activeTags.clear()
    }

    setActiveTags(activeTags)
    setTagUpdateCount(tagUpdateCount +  1)
  }

  const handleTopClick = () => {
    activeTags.clear()
    setTagUpdateCount(tagUpdateCount + 1)
  }

  const formatDate = (date: string): string => {
    const parts = date.split(" ")
    const month = 1
    const day = 2
    const year = 3

    return parts[month] + " " + parts[day] + ", " + parts[year]
  }

  const highlightTopItem = (): boolean => {
    if (activeTags.size == 0) {
      return true
    }
    return false
  }

  useEffect(() => {
    if (activeTags.size == 0) {
      setFilteredPosts(posts)
    } else {
      setFilteredPosts((
        posts.filter((post) => post.tags.some(
          (tag) => activeTags.has(tag)
        ))
      ))
    }
  }, [tagUpdateCount])

  return (
    <div className={ utilStyles["page-container"] }>
      <Head>
        <title>Austin White</title>
      </Head>
      <div className={ blogStyles["posts-selection-container"] }>
        <div className={ blogStyles["tags-list-container"]}>
          <ul className={ blogStyles["list"] }>
            <li className={ blogStyles["tagListItem"] }>
              <div className={
                blogStyles[highlightTopItem() ? "tagItemActive" : "tagItem"]
              }>
                <Link href={"#"}>
                  <a onClick={ () => {
                    handleTopClick()
                  }}>all categories</a>
                </Link>
              </div>
            </li>
            { tags.map((tag) => (
              <li key={ tag } className={ blogStyles["tagListItem"] }>
                <div className={
                  blogStyles[activeTags.has(tag) ? "tagItemActive" : "tagItem"]
                }>
                  <Link href={"#"}>
                    <a onClick={ () => {
                      handleTagClick(tag)
                    }}>{ tag.toLowerCase() }</a>
                  </Link>
                </div>
              </li>
            )) }
          </ul>
        </div>
        <div className={ blogStyles["posts-list-container"] }>
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

  const tags = Array.from(new Set(posts.map((post) => 
    post.tags).flat()
  ))

  return { props: { posts, tags } }
}
