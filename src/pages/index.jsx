import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import { AspectRatio, Box, Button, Center, Image, Text, Stack } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Anchor from '@/components/Anchor';
import PostBlock from '@/components/PostBlock';
import { newsFilePaths, NEWS_PATH } from '@/utils/mdx';

export default function Index({ newsList }) {
  return (
    <>
      <AspectRatio maxWidth="100%" ratio={3 / 2}>
        <Image src="/images/homepage-union.jpeg" alt="" objectFit="cover" />
      </AspectRatio>

      <Center flexDirection="column" paddingY="32px">
        <Text fontSize="20px" marginBottom="16px">
          工會需要你我的力量
        </Text>

        <Link href="/join" passHref>
          <Button as="a" colorScheme="red" variant="solid" paddingX="2em">
            加入我們
          </Button>
        </Link>
      </Center>

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
  const newsList = newsFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(NEWS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });
  newsList.sort((a, b) => (a.data.createdAt > b.data.createAt ? 1 : -1));

  return { props: { newsList: newsList.slice(0, 5) } };
}
