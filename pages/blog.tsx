import { getAllPosts, PostMeta } from "@/src/api"
import Articles from "@/src/components/articles"

export default function Blog( { posts }: { posts: PostMeta[] }) {
  return (
    <>
      <h1>Blog</h1>
      <Articles posts={ posts }/>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } }
}
