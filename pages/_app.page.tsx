import Page from '@/components/Page';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import theme from '@/theme';
import { ThemeProvider } from '@mui/material';
import Header from '@/components/Header';
import { Provider } from 'react-redux';
import store from '@/store';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        <Page>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
