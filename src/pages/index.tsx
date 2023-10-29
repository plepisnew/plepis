import { homePage } from "./HomePage";
import { Page } from "./Page";
import { projectsPage } from "./ProjectsPage";

const pages: Page[] = [homePage, projectsPage];

export const headfulPages = pages.filter((page) => page.withHeader);

export const headlessPages = pages.filter((page) => !page.withHeader);
