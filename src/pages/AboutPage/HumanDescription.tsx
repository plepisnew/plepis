import { cn } from "@/utils/cn";
import { PropsWithClassName } from "@/utils/types";
import React from "react";

export const HumanDescription: React.FC<PropsWithClassName> = ({
  className,
}) => {
  return <div className={cn("", className)}>human</div>;
};
