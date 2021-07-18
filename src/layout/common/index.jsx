import Header from './Header';
import Footer from './Footer';

const CommonLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;
