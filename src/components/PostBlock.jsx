import { Box } from '@chakra-ui/react';

const PostBlock = ({ children, index = 0 }) => {
  return (
    <Box border={`1px solid ${index % 2 ? '#B4B4B4' : '#4C769B'}`} padding="16px">
      {children}
    </Box>
  );
};

export default PostBlock;
