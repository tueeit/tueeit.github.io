import { Box } from '@chakra-ui/react';

const PostBlock = ({ children }) => {
  return (
    <Box border="4px solid #4C769B" padding="16px">
      {children}
    </Box>
  );
};

export default PostBlock;
