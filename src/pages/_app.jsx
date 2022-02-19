import { Helmet } from 'react-helmet';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '@/layout/common';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Helmet
        htmlAttributes={{ lang: 'zh-hant' }}
        title="台灣電子電機資訊產業工會"
        meta={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          { property: 'og:title', content: '台灣電子電機資訊產業工會' },
          { property: 'og:image', content: 'https://www.tueeit.org.tw/default-preview.jpg' },
          { property: 'og:image:type', content: 'image/jpg' },
        ]}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
