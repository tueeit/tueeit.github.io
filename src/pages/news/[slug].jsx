import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { components } from '@/layout/common/Provider';
import path from 'path';
import { newsFilePaths, NEWS_PATH } from '@/utils/mdx';
import { NewsBreadcrumb } from '@/components/Breadcrumbs';
import { Heading1 } from '@/components/Heading';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.

export default function PostPage({ source, frontMatter }) {
  return (
    <>
      <NewsBreadcrumb title={frontMatter.title} />
      <div className="news-header">
        <Heading1>{frontMatter.title}</Heading1>
      </div>
      <main>
        <MDXRemote {...source} components={components} />
      </main>

      <style jsx>{`
        .news-header h1 {
          margin-bottom: 0;
        }

        .news-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const newsFilePath = path.join(NEWS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(newsFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = newsFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
