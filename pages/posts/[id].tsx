import Layout from '../../components/layout';
import PostActions from '../../components/postActions';
import { PostData } from '../../interfaces';
import { getAllPostIds, getPostData } from '../../lib/posts';

const Post = ({ postData }: { postData: PostData }) => {
  return (
    <Layout>
      <div className="mt-8 mb-16">
        <p className="text-4xl font-bold mb-4">{postData.title}</p>
        <p className="text-gray-500 mb-4">...</p>
        <div className="mb-4">
          <PostActions />
        </div>
        <div className="text-lg" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: { id: string } }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
