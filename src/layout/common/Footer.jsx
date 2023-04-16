import styled from '@emotion/styled';
import Link from 'next/link';
import { Box, Spacer, Stack, Image } from '@chakra-ui/react';

import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';

const Wrapper = styled.footer`
  display: flex;
  flex-wrap: wrap;
  padding: 0 1.5em;
  height: 72px;
  background-color: #4c769b;
  color: #fff;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Stack direction="row" alignItems="center" spacing="1em" py="1em">
        <Box display={['none', 'block']}>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/tueeit">
            <Image src="/images/logo-blue.png" alt="Logo" width="40px" height="40px" />
          </a>
        </Box>
        <Link href="/contacts">
          <a>聯絡我們</a>
        </Link>
        <Link href="/regulation">
          <a>本會規章</a>
        </Link>
        <Link href="/faq">
          <a>常見問題</a>
        </Link>
        <Link href="/document">
          <a>參考文件</a>
        </Link>
      </Stack>
      <Spacer />
      <Stack display={['none', 'flex']} direction="row" alignItems="center" spacing="1em" fontSize="24px">
        社群平台
        <a href="https://www.youtube.com/channel/UCc0KxmaoEG0p--YIGe1zNNA" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://www.facebook.com/TUEEIT" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare />
        </a>
      </Stack>
    </Wrapper>
  );
};

export default Footer;
