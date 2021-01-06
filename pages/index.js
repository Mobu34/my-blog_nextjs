import Head from "next/head";
import Link from "next/link";
import axios from "axios";

const Home = ({ posts }) => {
  return (
    <div className="Home">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>
        Hello, I'm <strong>Lucas</strong>. I’m a FullStack JS Developer. You can
        contact me on <a href="#">LinkedIn</a>.
      </p>
      <p>
        This is a sample website - you’ll be building a site like this in
        <a href="#">our Next.js tutorial</a>.
      </p>
      <h2>Blog</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/post/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;

export const getServerSideProps = async (context) => {
  try {
    const response = await axios.get("http://localhost:3000/api/posts");
    return {
      props: {
        posts: response.data,
      },
    };
  } catch (err) {
    console.log(err);
  }
};
