import { MDXProvider } from '@mdx-js/react';

import { Image, Divider } from '@chakra-ui/react';
import { ListItem, OrderedList, UnorderedList } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from '@chakra-ui/react';
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import Anchor from '@/components/Anchor';
import Block from '@/components/Block';
import InlineCode from '@/components/InlineCode';
import Quote from '@/components/Quote';
import YouTube from 'react-youtube';

const HR = () => {
  return <Divider my="1em" />;
};

export const components = {
  p: Paragraph,
  img: Image,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  li: ListItem,
  ol: OrderedList,
  ul: UnorderedList,
  table: Table,
  tr: Tr,
  th: Th,
  td: Td,
  code: Block,
  inlineCode: InlineCode,
  hr: HR,
  a: Anchor,
  YouTube: YouTube,
  blockquote: Quote,
};

const Provider = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default Provider;
