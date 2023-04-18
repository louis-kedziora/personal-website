import Link from "next/link";
import Head from "next/head";
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>Here be the first of many posts</h1>

    </Layout>
  );
}
