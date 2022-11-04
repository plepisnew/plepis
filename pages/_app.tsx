import Page from "@/components/Page";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import theme from "@/theme";
import { ThemeProvider } from "@mui/material";
import Header from "@/components/Header";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Page>
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  );
};

export default App;
