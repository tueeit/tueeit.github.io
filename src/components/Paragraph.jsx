import { Text } from '@chakra-ui/react';

const Paragraph = ({ children }) => {
  return (
    <Text marginBottom="1em" lineHeight="2">
      {children}
    </Text>
  );
};

export default Paragraph;
