import { Page } from "..";
import { BackgroundPage } from "./BackgroundPage";

export const backgroundPage: Page = {
  Content: <BackgroundPage />,
  path: "/background",
  withHeader: true,
};
