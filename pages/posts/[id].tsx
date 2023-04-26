import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

type PostData = {
  title: string;
  id: string;
  date: string;
};

export default function Post(postData: PostData) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}

type Params = {
  id: string;
};

export async function getStaticProps(params: Params) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
