import type { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import Image from "next/image"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeHighlight from "rehype-highlight"
import { getPostFromSlug, getSlugs, PostMeta } from "@/src/api"
import YouTube from "@/src/components/youtube"
import "highlight.js/styles/github.css"
import blogStyles from "@/styles/blog.module.css"
import utilStyles from "@/styles/utils.module.css"

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  meta: PostMeta
}

export default function BlogPost({ post }: { post: MDXPost }) {
  return (
    <div className={ utilStyles["page-container"] }>
      <div className={ blogStyles["post-content-container"] }>
        <Head>
          <title>{ post.meta.title }</title>
        </Head>
        <h1>{ post.meta.title }</h1>
        <MDXRemote { ...post.source } components={ { YouTube, Image } }/>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }
  const { content, meta } = getPostFromSlug(slug)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight
      ]
    }
  })

  return { props: { post: { source: mdxSource, meta } } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map(slug => ({ params: { slug } }))
  
  return {
    paths,
    fallback: false,
  }
}
