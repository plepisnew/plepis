import React from "react";
import ReactJson from "react-json-view";
import { me } from "./me";
import { PropsWithClassName } from "@/utils/types";
import { cn } from "@/utils/cn";

export const MachineDescription: React.FC<PropsWithClassName> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-lg overflow-hidden p-3 border-primary-boundary border",
        // "max-h-[620px] overflow-y-scroll",
        className
      )}
      style={{ backgroundColor: "#272822" }}
    >
      <ReactJson
        onSelect={({ namespace, value }) => {
          if (namespace.includes("links")) {
            window.open(value as string, "_blank");
          }
        }}
        src={me}
        name="me"
        theme="monokai"
        displayDataTypes={false}
        displayObjectSize={false}
        displayArrayKey={false}
        enableClipboard={false}
        quotesOnKeys={false}
      />
    </div>
  );
};
