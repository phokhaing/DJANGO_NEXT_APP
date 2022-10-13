import React from 'react'

const userDetail = () => {
  return (
    <div>userDetail</div>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated
// export const getStaticPaths = async () => {
//   const res = await fetch(`${process.env.API_URL}/posts`);
//   const posts = await res.json();

//   const paths = posts.map((post) => {
//     return {
//       params: {
//         postId: `${post.id}`,
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: true, // runs in the background when using fallback: true, false means other routes should 404.

//     /** Incremental Static Regeneration (ISR)
//      * Re-generate the post at most once per second
//      * allows you to create or update static pages after you’ve built your site
//      * enables you to use static-generation on a per-page basis,
//      * without needing to rebuild the entire site
//      *
//      * Re-generate the page:
//      *  When a request comes in
//      *  At most once every 10 seconds
//      */
//     //  revalidate: 10, // In seconds
//   };
// };

// export async function getStaticProps(context) {
//   const { params } = context;
//   const response = await fetch(`${process.env.API_URL}/posts/${params.postId}`);
//   const data = await response.json();
//   return {
//     props: {
//       post: data,
//     },
//   };
// }

export default userDetail