import { Container } from '@chakra-ui/react';
import Navigation from './Navigation';
import Footer from './Footer';

const CommonLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Container paddingTop="80px" minHeight="calc(100vh - 80px)" as="main">
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default CommonLayout;
