import { useRef } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useDisclosure } from '@chakra-ui/react';
import { Image, Flex, Spacer, Stack, Button, Box, IconButton } from '@chakra-ui/react';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 0.75em;
  min-height: 64px;
  background-color: #4c769b;
  border-color: #e7e7e7;
  border-width: 0 0 1px;
  box-shadow: rgb(0 0 0 / 15%) 0 0 21px 0;
  color: #fff;
`;

const Navigation = () => {
  const menu = useDisclosure();
  const menuButtonRef = useRef();
  return (
    <Wrapper>
      <Box fontWeight="700" alignItems="center">
        <Link href="/">
          <a>
            <Image src="/images/logo.svg" alt="台灣電子電機資訊產業工會" width="300px" height="40px" />
          </a>
        </Link>
      </Box>
      <Spacer />
      <Stack direction="row" spacing="8px" display={['none', 'none', 'flex']}>
        <Link href="/news" passHref>
          <Button as="a" colorScheme="whiteAlpha" color="white" variant="ghost">
            最新消息
          </Button>
        </Link>
        <Link href="/press" passHref>
          <Button as="a" colorScheme="whiteAlpha" color="white" variant="ghost">
            會員通訊
          </Button>
        </Link>
        <Link href="/membership-dues" passHref>
          <Button as="a" colorScheme="whiteAlpha" color="white" variant="ghost">
            會費繳交
          </Button>
        </Link>
        <Link href="/about" passHref>
          <Button as="a" colorScheme="whiteAlpha" color="white" variant="ghost">
            關於本會
          </Button>
        </Link>
        <Link href="https://tueeit.neticrm.tw/civicrm/contribute/transact?reset=1&id=7" passHref>
          <Button as="a" colorScheme="red" variant="solid">
            加入我們
          </Button>
        </Link>
      </Stack>
      <Flex display={['flex', 'none']}>
        <IconButton
          colorScheme="white"
          aria-label="Navigation Hamburger Menu"
          icon={<HamburgerIcon width="32px" height="32px" />}
          ref={menuButtonRef}
          onClick={menu.onOpen}
        />
        <Drawer isOpen={menu.isOpen} placement="right" onClose={menu.onClose} finalFocusRef={menuButtonRef}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton size="lg" />
            <DrawerHeader></DrawerHeader>

            <DrawerBody>
              <Stack direction="column" spacing="8px">
                <Link href="/news" passHref>
                  <Button as="a" colorScheme="blue" variant="ghost" onClick={menu.onClose}>
                    最新消息
                  </Button>
                </Link>
                <Link href="/press" passHref>
                  <Button as="a" colorScheme="blue" variant="ghost" onClick={menu.onClose}>
                    會員通訊
                  </Button>
                </Link>
                <Link href="/membership-dues" passHref>
                  <Button as="a" colorScheme="blue" variant="ghost" onClick={menu.onClose}>
                    會費繳交
                  </Button>
                </Link>
                <Link href="/about" passHref>
                  <Button as="a" colorScheme="blue" variant="ghost" onClick={menu.onClose}>
                    關於本會
                  </Button>
                </Link>
                <Link href="https://tueeit.neticrm.tw/civicrm/contribute/transact?reset=1&id=7" passHref>
                  <Button as="a" colorScheme="red" variant="solid" onClick={menu.onClose}>
                    加入我們
                  </Button>
                </Link>
              </Stack>
            </DrawerBody>

            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Wrapper>
  );
};

export default Navigation;
