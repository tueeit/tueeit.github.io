import styled from '@emotion/styled';
import Link from 'next/link';
import { Spacer, Stack } from '@chakra-ui/react';

import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';

const Wrapper = styled.footer`
  display: flex;
  flex-wrap: wrap;
  padding: 2em 1.5em 1em;
  background-color: #274079;
  color: azure;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Stack direction="row" alignItems="center" spacing="1em" py="1em">
        <Link href="mailto:tueeit@tueeit.org.tw">
          <a>聯絡我們</a>
        </Link>
        <Link href="/faq">
          <a>常見問題</a>
        </Link>
        <Link href="/document">
          <a>參考文件</a>
        </Link>
      </Stack>
      <Spacer />
      <Stack direction="row" alignItems="center" spacing="1em" fontSize="24px" py="1em">
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
