import { Container } from '@chakra-ui/react';
import Navigation from './Navigation';
import Footer from './Footer';
import Provider from './Provider';

const CommonLayout = ({ children }) => {
  return (
    <Provider>
      <Navigation />
      <Container maxW="3xl" paddingY="64px" minHeight="calc(100vh - 60px)" as="main">
        {children}
      </Container>
      <Footer />
    </Provider>
  );
};

export default CommonLayout;
