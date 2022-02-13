import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { components } from '@/layout/common/Provider';
import path from 'path';
import { Box } from '@chakra-ui/react';
import { newsFilePaths, NEWS_PATH } from '@/utils/mdx';
import { NewsBreadcrumb } from '@/components/Breadcrumbs';
import { Heading1 } from '@/components/Heading';

export default function PostPage({ source, frontMatter }) {
  return (
    <>
      <NewsBreadcrumb title={frontMatter.title} />
      <Box>
        <Heading1>{frontMatter.title}</Heading1>
      </Box>
      <Box>
        <MDXRemote {...source} components={components} />
      </Box>
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
