import Head from 'next/head';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import { AspectRatio, Box, Button, Center, Flex, Image, Text, Stack } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Anchor from '@/components/Anchor';
import PostBlock from '@/components/PostBlock';
import { newsFilePaths, NEWS_PATH } from '@/utils/mdx';

import { AddIcon } from '@chakra-ui/icons';

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
      <Flex direction={['column']}>
        <Box width={['100%']}>
          <AspectRatio maxWidth="100%" ratio={800 / 600} marginBottom="16px">
            <Link
              href="https://tueeit.neticrm.tw/civicrm/contribute/transact?reset=1&id=7&utm_source=google&utm_medium=office+web"
              passHref
            >
              <Image src="/images/2025-banner.png" alt="加入本會" objectFit="cover" cursor="pointer" />
            </Link>
          </AspectRatio>
        </Box>

        <Stack spacing="8px">
          <Link href="https://tueeit.neticrm.tw/civicrm/contribute/transact?reset=1&id=7" passHref>
            <Button as="a" colorScheme="red" variant="outline" padding="3em" size="lg" leftIcon={<AddIcon />}>
              加入工會
            </Button>
          </Link>
          <Stack direction="row" spacing="8px" width="100%">
            <Link href="https://tueeit.neticrm.tw/civicrm/contribute/transact?reset=1&id=4" passHref>
              <Button as="a" colorScheme="teal" variant="outline" padding="3em" width="50%" size="lg">
                續繳會費
              </Button>
            </Link>
            <Link href="https://tueeit.neticrm.tw/civicrm/contribute/transact?reset=1&id=5" passHref>
              <Button as="a" colorScheme="green" variant="outline" padding="3em" width="50%" size="lg">
                小額捐款
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>

      <Center flexDirection="column" paddingY="64px">
        <Text fontSize="24px">工會需要你我的力量</Text>
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
