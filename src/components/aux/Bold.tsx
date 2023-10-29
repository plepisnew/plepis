import { PropsWithChildren } from "react";

export const Bold: React.FC<PropsWithChildren> = ({ children }) => (
  <span className="font-semibold">{children}</span>
);
