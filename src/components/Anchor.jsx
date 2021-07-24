import { Link } from '@chakra-ui/react';

const Anchor = ({ children, href }) => {
  return (
    <Link href={href} color="#6495cf">
      {children}
    </Link>
  );
};

export default Anchor;
