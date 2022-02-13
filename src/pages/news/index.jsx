import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import { newsFilePaths, NEWS_PATH } from '@/utils/mdx';
import { Box, Flex, Text, Stack } from '@chakra-ui/react';
import Anchor from '@/components/Anchor';
import PostBlock from '@/components/PostBlock';
export default function NewsIndexPage({ news }) {
  return (
    <>
      <Flex paddingY="16px">
        <Text fontSize="20px">最新消息</Text>
      </Flex>
      <Stack spacing="16px">
        {news.map((news, index) => (
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
  const news = newsFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(NEWS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });
  news.sort((a, b) => (a.data.createdAt > b.data.createAt ? 1 : -1));

  return { props: { news } };
}
