import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "posts")

interface Post {
  content: string
  meta: PostMeta

}

export interface PostMeta {
  exerpt: string
  slug: string
  title: string
  tags: string[]
  hidden: boolean
  date: string
}

export const getSlugs = (): string[] => {
  const paths = sync(`${POSTS_PATH}/*.mdx`)

  return paths.map((path) => {
    const parts = path.split("/")
    const fileName = parts[parts.length - 1]
    const [slug, _ext] = fileName.split(".")
    return slug;
  })
}

export const getAllPosts = (): Post[] => {
  const posts = getSlugs()
    .map(slug => getPostFromSlug(slug))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1
      if (a.meta.date < b.meta.date) return -1
      return 0
  })
  return posts
}

export const getPostFromSlug = (slug: string): Post => {
  const postPath = path.join(POSTS_PATH, `${ slug }.mdx`)
  const source = fs.readFileSync(postPath)
  const { content, data } = matter(source)

  return {
    content,
    meta: {
      slug,
      exerpt: data.exerpt ?? "",
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      hidden: false,
      date: (data.date ?? new Date()).toString(),
    }
  }
}
