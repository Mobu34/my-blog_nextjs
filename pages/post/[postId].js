import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";

const Post = ({ post }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => router.back()}>Back to home</button>
    </div>
  );
};

export default Post;

export const getServerSideProps = async (context) => {
  try {
    const id = context.params.postId;
    const response = await axios.get(`http://localhost:3000/api/post/${id}`);
    const { post } = response.data;

    return {
      props: {
        post,
      },
    };
  } catch (err) {
    console.log(err);
  }
};
