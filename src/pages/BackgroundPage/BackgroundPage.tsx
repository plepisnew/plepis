// @ts-nocheckt
import { Background } from "@/components/adhoc/Background";
import {
  booleanLimits,
  numericLimits,
  useBackground,
} from "@/components/contexts/BackgroundContext";
import { Slider } from "@/components/ui/Slider";
import { Switch } from "@/components/ui/Switch";
import { cn } from "@/utils/cn";
import { objectEntries } from "@/utils/object";
import React from "react";

export const BackgroundPage: React.FC = () => {
  const { setOptions, ...options } = useBackground();

  const numericLimitEntries = objectEntries(numericLimits);
  const booleanLimitEntries = objectEntries(booleanLimits);
  return (
    <div>
      <div className={cn("flex gap-8")}>
        <div className={cn("flex flex-col gap-5")}>
          {numericLimitEntries.map(([key, value]) => (
            <div className="flex gap-5">
              <span className="w-[200px] font-semibold text-lg flex justify-end">
                {value.label}
              </span>
              <Slider
                key={key}
                min={value.min}
                max={value.max}
                step={value.step}
                defaultValue={options[key]}
                onChange={(value) => setOptions({ ...options, [key]: value })}
              />
            </div>
          ))}
          {booleanLimitEntries.map(([key, value]) => (
            <Switch key={key} defaultValue={options[key]} />
          ))}
        </div>
        <div
          className={cn(
            "p-1 rounded-lg overflow-hidden border border-primary-boundary w-min h-min bg-primary"
          )}
        >
          <Background customSize={{ width: 600, height: 400 }} />
        </div>
      </div>
    </div>
  );
};
