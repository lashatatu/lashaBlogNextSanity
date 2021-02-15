import PageLayout from '../../components/PageLayout';
import {getBlogBySlug} from '../../lib/api';

const BlogDetail = ({blog}) => {

  return (
     <PageLayout >
       <h1 >hello detail page- {blog?.slug}</h1 >
     </PageLayout >
  );
};

export async function getStaticProps ({params}) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: {blog}
  };
}

export function getStaticPaths () {
  return {
    paths: [
      {
        params: {slug:'my-first-blog-post'}
      },
      {
        params: {slug:'my-second-blog-post'}
      },
      {
        params: {slug:'my-third-blog-post'}
      }
    ],
    fallback:false
  };
}

export default BlogDetail;
