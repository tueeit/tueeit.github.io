import Head from 'next/head';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import { newsFilePaths, NEWS_PATH } from '@/utils/mdx';
import { Box, Flex, Text, Stack } from '@chakra-ui/react';
import Anchor from '@/components/Anchor';
import PostBlock from '@/components/PostBlock';
import { NewsListBreadcrumb } from '@/components/Breadcrumbs';

export default function NewsIndexPage({ newsList }) {
  return (
    <>
      <Head>
        <meta property="og:title" content="最新消息 - 台灣電子電機資訊產業工會" />
        <meta
          property="og:description"
          content={newsList
            .slice(0, 5)
            .map((news) => news.data.title)
            .join('、')}
        />
      </Head>
      <Box>
        <NewsListBreadcrumb />
      </Box>
      <Flex paddingY="16px">
        <Text fontSize="20px">最新消息</Text>
      </Flex>
      <Stack spacing="16px">
        {newsList.map((news, index) => (
          <PostBlock key={news.filePath} index={index}>
            <Box>
              <Text fontSize="14px" color="#AAAAAA">
                {news.data.createdAt}
              </Text>
            </Box>
            <Box>
              <Link as={`/news/${news.filePath.replace(/\.mdx?$/, '')}`} href={`/news/[slug]`} passHref>
                <Anchor>{news.data.title}</Anchor>
              </Link>
            </Box>
          </PostBlock>
        ))}
      </Stack>
    </>
  );
}

export function getStaticProps() {
  const newsList = newsFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(NEWS_PATH, filePath));
    const { data } = matter(source);

    return {
      data,
      filePath,
    };
  });
  newsList.sort((a, b) => (a.data.createdAt > b.data.createAt ? 1 : -1));

  return { props: { newsList } };
}
