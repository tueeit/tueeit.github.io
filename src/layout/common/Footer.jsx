import styled from '@emotion/styled';
import Link from 'next/link';
import { Flex, Spacer, Stack } from '@chakra-ui/react';

const Wrapper = styled.footer`
  display: flex;
  padding: 4em 1.5em 2em;
  background-color: #274079;
  color: azure;
`;

const Footer = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Footer;
