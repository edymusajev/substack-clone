import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';

const Blog: NextPage = () => {
  return (
    <Layout pageTitle="Blog">
      <Head>
        <title>Blog</title>
      </Head>
    </Layout>
  );
};

export default Blog;
