import Page from '@/components/Page';
import '@/styles/globals.css';
import '@/styles/sort.css';
import type { AppProps } from 'next/app';
import theme from '@/theme';
import { ThemeProvider } from '@mui/material';
import Header from '@/components/Header';
import { Provider } from 'react-redux';
import store from '@/store';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Plepis Portfolio</title>
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header />
          <Page>
            <Component {...pageProps} />
          </Page>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
