import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import { newsFilePaths, NEWS_PATH } from '@/utils/mdx';
import { Box, Flex, Text, ListItem, UnorderedList } from '@chakra-ui/react';
import Anchor from '@/components/Anchor';
export default function Index({ news }) {
  return (
    <>
      <Flex paddingY="16px">
        <Text fontSize="20px">最新消息</Text>
      </Flex>

      <UnorderedList>
        {news.map((news) => (
          <ListItem key={news.filePath}>
            <Box>
              <Text>{news.data.createdAt}</Text>
            </Box>
            <Box>
              <Link as={`/news/${news.filePath.replace(/\.mdx?$/, '')}`} href={`/news/[slug]`} passHref>
                <Anchor>{news.data.title}</Anchor>
              </Link>
            </Box>
          </ListItem>
        ))}
      </UnorderedList>
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
