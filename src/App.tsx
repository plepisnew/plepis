import React, { ReactNode } from "react";
import { PropsWithChildren } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { headfulPages, headlessPages } from "./pages";
import { HeaderLayout } from "./components/adhoc/HeaderLayout";
import { ArrayMap } from "./utils/types";
import { Page } from "./pages";
import { BackgroundProvider } from "./components/contexts/BackgroundContext";

const pageRenderer: ArrayMap<Page, ReactNode> = ({ Content, path }) => (
  <Route path={path} element={Content} key={path} />
);

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        {headfulPages.map(pageRenderer)}
      </Route>
      {headlessPages.map(pageRenderer)}
    </Routes>
  </BrowserRouter>
);

const Providers: React.FC<PropsWithChildren> = ({ children }) => (
  <BackgroundProvider>{children}</BackgroundProvider>
);

export const App: React.FC = () => (
  <Providers>
    <Router />
  </Providers>
);
