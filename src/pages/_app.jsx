import Head from 'next/head';
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
        ]}
      />
      <Head>
        <meta property="og:title" content="台灣電子電機資訊產業工會" />
        <meta
          property="og:description"
          content="台灣電子電機資訊產業工會成立於2011年，組織對象為全台灣所有電子、電機、資訊相關產業勞工。本工會是2011年新工會法上路後，第一家以「科技業」為組織範圍的產業工會。目前會址設於新竹縣。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tueeit.org.tw/" />
        <meta property="og:image" content="https://www.tueeit.org.tw/images/default-preview.jpeg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
