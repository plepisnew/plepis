import React, { ReactNode } from "react";
import { PropsWithChildren } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { headfulPages, headlessPages } from "./pages";
import { HeaderLayout } from "./components/adhoc/HeaderLayout";
import { ArrayMap } from "./utils/types";
import { Page } from "./pages/Page";

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
  <React.Fragment>{children}</React.Fragment>
);

export const App: React.FC = () => (
  <Providers>
    <Router />
  </Providers>
);
