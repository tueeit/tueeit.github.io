import styled from '@emotion/styled';
import Link from 'next/link';
import { Box, Spacer, Stack, Image } from '@chakra-ui/react';

import { FaFacebookSquare, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';

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
          <a>籌會須知</a>
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
        <a href="https://www.instagram.com/tueeit_0501" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.threads.com/@tueeit_0501" target="_blank" rel="noopener noreferrer">
          <FaThreads />
        </a>
      </Stack>
    </Wrapper>
  );
};

export default Footer;
