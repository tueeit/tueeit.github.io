import Head from 'next/head';
import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { components } from '@/layout/common/Provider';
import path from 'path';
import { Box } from '@chakra-ui/react';
import { pressFilePaths, PRESS_PATH } from '@/utils/mdx';
import { PressBreadcrumb } from '@/components/Breadcrumbs';
import { Heading1 } from '@/components/Heading';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.

export default function PressPage({ source, frontMatter }) {
  return (
    <>
      <Head>
        <meta property="og:title" content={`${frontMatter.title} - 台灣電子電機資訊產業工會`} />
        <meta property="og:description" content="2015 -2022 年年報" />
        <meta property="og:type" content="website" />
      </Head>
      <PressBreadcrumb title={frontMatter.title} />
      <Box>
        <Heading1 fontSize="20px">{frontMatter.title}</Heading1>
      </Box>
      <Box>
        <MDXRemote {...source} components={components} />
      </Box>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const pressFilePath = path.join(PRESS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(pressFilePath);

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
  const paths = pressFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
