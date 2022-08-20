import React from "react";
import { useRouter } from "next/router";

function Post({ post }) {
  const router = useRouter();
  // if the page is not yet generated, this will be dsplayed
  // initially until getStaticProps() finises running
  if (router.isFallback) {
    return <div>Loading data...</div>;
  }

  return (
    <>
      <div>
        <h1>
          Post Degail {post.id} - {post.title}
        </h1>
      </div>
    </>
  );
}
export default Post;

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated
export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.API_URL}/posts`);
  const posts = await res.json();

  const paths = posts.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    paths,
    fallback: true, // runs in the background when using fallback: true, false means other routes should 404.

    /** Incremental Static Regeneration (ISR)
     * Re-generate the post at most once per second
     * allows you to create or update static pages after you’ve built your site
     * enables you to use static-generation on a per-page basis,
     * without needing to rebuild the entire site
     *
     * Re-generate the page:
     *  When a request comes in
     *  At most once every 10 seconds
     */
    //  revalidate: 10, // In seconds
  };
};

// pre-render page at build time
export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(`${process.env.API_URL}/posts/${params.postId}`);
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
}
