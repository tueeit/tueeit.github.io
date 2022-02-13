import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import { AspectRatio, Box, Button, Flex, Image, Text, Stack } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Anchor from '@/components/Anchor';
import PostBlock from '@/components/PostBlock';
import { newsFilePaths, NEWS_PATH } from '@/utils/mdx';

export default function Index({ news }) {
  return (
    <>
      <AspectRatio maxWidth="100%" ratio={3 / 2}>
        <Image src="/images/homepage-union.jpeg" alt="連結。跨越。一同打造理想的生活型態。" objectFit="cover" />
      </AspectRatio>
      <Flex paddingY="16px">
        <Text fontSize="20px">首頁</Text>
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
        <Box>
          <Link href="/news" passHref>
            <Button as="a" colorScheme="teal" rightIcon={<ArrowForwardIcon />} variant="outline" isFullWidth>
              查看更多
            </Button>
          </Link>
        </Box>
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

  return { props: { news: news.slice(5) } };
}
