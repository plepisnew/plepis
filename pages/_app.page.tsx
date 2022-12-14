import Page from '@/components/Page';
import '@/styles/globals.css';
import '@/styles/sort.css';
import type { AppProps } from 'next/app';
import theme from '@/theme';
import { ThemeProvider } from '@mui/material';
import Header from '@/components/Header';
import { Provider as StoreProvider } from 'react-redux';
import store from '@/store';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        <Page>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
