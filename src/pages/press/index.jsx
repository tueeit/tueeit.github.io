import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import { pressFilePaths, PRESS_PATH } from '@/utils/mdx';
import { Box, Flex, Text, Stack } from '@chakra-ui/react';
import Anchor from '@/components/Anchor';
import PostBlock from '@/components/PostBlock';
export default function PressIndexPage({ pressList }) {
  return (
    <>
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
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });
  pressList.sort((a, b) => (a.data.createdAt > b.data.createAt ? 1 : -1));

  return { props: { pressList } };
}
