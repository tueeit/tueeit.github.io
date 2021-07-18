import { Heading } from '@chakra-ui/react';

export const Heading1 = ({ children }) => {
  return (
    <Heading as="h1" size="xl" marginY="0.67em">
      {children}
    </Heading>
  );
};

export const Heading2 = ({ children }) => {
  return (
    <Heading as="h2" size="lg">
      {children}
    </Heading>
  );
};

export const Heading3 = ({ children }) => {
  return (
    <Heading as="h3" size="md">
      {children}
    </Heading>
  );
};

export const Heading4 = ({ children }) => {
  return (
    <Heading as="h4" size="sm">
      {children}
    </Heading>
  );
};

export const Heading5 = ({ children }) => {
  return (
    <Heading as="h5" size="xs">
      {children}
    </Heading>
  );
};

export const Heading6 = ({ children }) => {
  return (
    <Heading as="h6" size="xs" fontSize="14px">
      {children}
    </Heading>
  );
};
