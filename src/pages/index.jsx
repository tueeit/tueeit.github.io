import Head from 'next/head';
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
      <Head>
        <meta property="og:title" content="首頁 - 台灣電子電機資訊產業工會" />
        <meta
          property="og:description"
          content="台灣電子電機資訊產業工會成立於2011年，組織對象為全台灣所有電子、電機、資訊相關產業勞工。本工會是2011年新工會法上路後，第一家以「科技業」為組織範圍的產業工會。目前會址設於新竹縣。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tueeit.org.tw/" />
        <meta property="og:image" content="https://www.tueeit.org.tw/images/default-preview.jpeg" />
      </Head>
      <AspectRatio maxWidth="100%" ratio={677 / 959}>
        <Image src="/images/events/2023-lecture-right-to-disconnect.png" alt="離線權：不讀不回的下班時間 " objectFit="cover" />
      </AspectRatio>

      <Center flexDirection="column" paddingY="32px">
        <Text fontSize="20px" marginBottom="16px">
          工會需要你我的力量
        </Text>

        <Link href="https://tueeit.neticrm.tw/civicrm/contribute/transact?reset=1&id=7" passHref>
          <Button as="a" colorScheme="red" variant="solid" paddingX="2em">
            加入我們
          </Button>
        </Link>

        <Text marginTop="16px">
          或
          <Link href="https://tueeit.neticrm.tw/civicrm/contribute/transact?reset=1&id=5" passHref>
            <Anchor>小額捐款</Anchor>
          </Link>
          支持電資工會
        </Text>
      </Center>

      <Stack spacing="16px">
        {newsList.map((news, index) => (
          <PostBlock key={news.filePath} index={index}>
            <Box>
              <Text fontSize="14px" lineHeight={1.6} color="#AAAAAA">
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
