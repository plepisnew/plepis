import { aboutPage } from "./AboutPage";
import { homePage } from "./HomePage";
import { projectsPage } from "./ProjectsPage";
import { ReactNode } from "react";

export type Page = {
  path: string;
  Content: ReactNode;
  withHeader?: boolean;
};

const pages: Page[] = [homePage, projectsPage, aboutPage];

export const headfulPages = pages.filter((page) => page.withHeader);

export const headlessPages = pages.filter((page) => !page.withHeader);
