import Head from 'next/head';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import { pressFilePaths, PRESS_PATH } from '@/utils/mdx';
import { Box, Flex, Text, Stack } from '@chakra-ui/react';
import Anchor from '@/components/Anchor';
import PostBlock from '@/components/PostBlock';
import { PressListBreadcrumb } from '@/components/Breadcrumbs';

export default function PressIndexPage({ pressList }) {
  return (
    <>
      <Head>
        <meta property="og:title" content="會員通訊 - 台灣電子電機資訊產業工會" />
        <meta property="og:description" content="2015 -2024 年年報" />
        <meta property="og:type" content="website" />
      </Head>
      <Box>
        <PressListBreadcrumb />
      </Box>
      <Flex paddingY="16px">
        <Text fontSize="20px">會員通訊</Text>
      </Flex>
      <Stack spacing="16px">
        {pressList.map((press, index) => (
          <PostBlock key={press.filePath} index={index}>
            <Box>
              <Text fontSize="14px" color="#AAAAAA">
                {press.data.createdAt}
              </Text>
            </Box>
            <Box>
              <Link as={`/press/${press.filePath.replace(/\.mdx?$/, '')}`} href={`/press/[slug]`} passHref>
                <Anchor>{press.data.title}</Anchor>
              </Link>
            </Box>
          </PostBlock>
        ))}
      </Stack>
    </>
  );
}

export function getStaticProps() {
  const pressList = pressFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(PRESS_PATH, filePath));
    const { data } = matter(source);

    return {
      data,
      filePath,
    };
  });
  pressList.sort((a, b) => (a.data.createdAt > b.data.createAt ? 1 : -1));

  return { props: { pressList } };
}
