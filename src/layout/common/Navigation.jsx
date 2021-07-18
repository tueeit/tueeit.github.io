import styled from '@emotion/styled';
import Link from 'next/link';
import { Flex, Spacer, Stack, Button } from '@chakra-ui/react';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2011;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 1.5em;
  min-height: 64px;
  background-color: #fff;
  border-color: #e7e7e7;
  border-width: 0 0 1px;
  box-shadow: rgb(0 0 0 / 15%) 0 0 21px 0;
`;

const Navigation = () => {
  return (
    <Wrapper>
      <Flex fontSize="1.5em" fontWeight="700">
        <Link href="/">
          <a>TUEEIT</a>
        </Link>
      </Flex>
      <Spacer />
      <Flex as="nav">
        <Stack direction="row" spacing="8px">
          <Link href="/news" passHref>
            <Button as="a" colorScheme="blackAlpha" variant="ghost">
              最新消息
            </Button>
          </Link>
          <Link href="/press" passHref>
            <Button as="a" colorScheme="blackAlpha" variant="ghost">
              會員通訊
            </Button>
          </Link>
          <Link href="/about" passHref>
            <Button as="a" colorScheme="blackAlpha" variant="ghost">
              關於本會
            </Button>
          </Link>
          <Link href="/join" passHref>
            <Button as="a" colorScheme="red" variant="solid">
              加入我們
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Wrapper>
  );
};

export default Navigation;
