import styled from '@emotion/styled';
import Link from 'next/link';
import { Flex, Spacer, Stack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" padding="2em 1.5em" background="#274079" color="azure">
      <Stack direction="row" spacing="1em">
        <Link href="/contact">
          <a>聯絡我們</a>
        </Link>
        <Link href="/faq">
          <a>常見問題</a>
        </Link>
        <Link href="/docs">
          <a>參考文件</a>
        </Link>
      </Stack>
      <Spacer />
      <Flex>社群平台</Flex>
    </Flex>
  );
};

export default Footer;