import { PropsWithChildren } from "react";

export const Italic: React.FC<PropsWithChildren> = ({ children }) => (
  <span className="italic">{children}</span>
);
