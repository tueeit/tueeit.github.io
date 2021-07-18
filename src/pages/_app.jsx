import { Helmet } from 'react-helmet';
import { ChakraProvider } from '@chakra-ui/react';

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
        ]}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
