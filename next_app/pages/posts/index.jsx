import Link from "next/link";
import React from "react";
import Post from "./[postId]";

import ListPost from "../../components/posts/ListPost";
import { Button, Container } from "@mui/material";
import Increment from "../../components/increment";
import { useSelector } from "react-redux";

const PostList = ({ posts }) => {
  const {totalPosts} = useSelector((state) => state.posts);

  return (
    <Container size="md">
      <Increment />
      <h1>List Of Posts - Total Post {totalPosts}</h1>
      <ListPost posts={posts} />
    </Container>
  );
};
export default PostList;

// pre-render these page at build time
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  // This is meant to support use cases like user-generated content getting removed by its author
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data,
    },
  };
}

// This gets called on every request, run on server-side only
/*export const getServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
};*/
