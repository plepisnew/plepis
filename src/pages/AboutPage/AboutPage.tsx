import React, { useReducer } from "react";
import { MachineDescription } from "./MachineDescription";
import { HumanDescription } from "./HumanDescription";
import { cn } from "@/utils/cn";

export const AboutPage: React.FC = () => {
  const [isMachineMode, toggleMachineMode] = useReducer(
    (isEnabled: boolean) => !isEnabled,
    true
  );

  return (
    <div>
      <h1 className="text-2xl">Hello 👋</h1>
      <div className="h-4" />
      <p>
        So, you want to know more about me? That's flattering :) However, I'm
        kinda more of a JSON [
        <a
          target="_blank"
          href="https://datatracker.ietf.org/doc/html/rfc8259"
          className="underline text-blue-500"
        >
          RFC8259
        </a>
        ] guy, so I only have this JSON document:
      </p>
      <p>
        (JK, press{" "}
        <button
          className="border border-primary-boundary px-3 py-1 rounded-md bg-primary-darker cursor-pointer"
          onClick={toggleMachineMode}
        >
          here
        </button>{" "}
        if you you're actually not a machine)
      </p>
      <div className="h-6" />
      <div className="relative">
        <MachineDescription
          className={cn(
            // "absolute w-full",
            isMachineMode ? "opacity-100 delay-300" : "opacity-0 hidden",
            "transition-opacity duration-200"
          )}
        />
        <HumanDescription
          className={cn(
            // "absolute w-full",
            isMachineMode ? "opacity-0 hidden" : "opacity-100 delay-300",
            "transition-opacity duration-200"
          )}
        />
      </div>
    </div>
  );
};
