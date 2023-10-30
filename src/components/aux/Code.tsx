import { cn } from "@/utils/cn";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export type CodeProps = DetailedHTMLProps<
  HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
>;

export const Code: React.FC<CodeProps> = ({ className, ...props }) => (
  <pre
    className={cn(
      "font-mono bg-primary-dark px-2 py-1 rounded-md border border-primary-foreground/40 overflow-x-scroll",
      props.onClick && "cursor-pointer",
      className
    )}
    {...props}
  />
);
