import { Box } from '@chakra-ui/react';

const Block = ({ children }) => {
  return (
    <Box padding="16px" backgroundColor="orange.100" borderRadius="3px">
      {children}
    </Box>
  );
};

export default Block;
