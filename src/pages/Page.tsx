import { ReactNode } from "react";

export type Page = {
  path: string;
  Content: ReactNode;
  withHeader?: boolean;
};
