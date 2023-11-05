import { KeysMatching, Setter } from "@/utils/types";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

export type BackgroundOptions = {
  cellSize: number;
  gapX: number;
  gapY: number;
  frameSkip: number;
  spiralGap: number;
  shouldFill: boolean;
  shouldStroke: boolean;
  shouldUpdate: boolean;
  shouldDraw: boolean;
  weakOpacity: number;
  strongOpacity: number;
};

export const numericLimits: Record<
  KeysMatching<BackgroundOptions, number>,
  { min: number; max: number; default: number; step: number; label: string }
> = {
  cellSize: { min: 2, max: 60, default: 30, step: 1, label: "Size of cells" },
  gapX: { min: 0, max: 10, default: 9, step: 0.1, label: "Horizontal padding" },
  gapY: { min: 0, max: 10, default: 3, step: 0.1, label: "Vertical padding" },
  frameSkip: { min: 1, max: 10, default: 9, step: 1, label: "Frame skip" },
  spiralGap: { min: 1, max: 20, default: 12, step: 1, label: "Spiral gap" },
  weakOpacity: {
    min: 0,
    max: 1,
    default: 0.1,
    step: 0.01,
    label: "Weak square opacity",
  },
  strongOpacity: {
    min: 0,
    max: 1,
    default: 0.15,
    step: 0.01,
    label: "Strong square opacity",
  },
};

export const booleanLimits: Record<
  KeysMatching<BackgroundOptions, boolean>,
  { default: boolean; label: string }
> = {
  shouldDraw: { default: true, label: "Enabled" },
  shouldFill: { default: false, label: "Fill squares" },
  shouldStroke: { default: true, label: "Stroke squares" },
  shouldUpdate: { default: true, label: "Animate" },
};

export type BackgroundContext = BackgroundOptions & {
  setOptions: Setter<BackgroundOptions>;
};

export const BackgroundContext = createContext({} as BackgroundContext);

export const useBackground = () => useContext(BackgroundContext);

const numericDefaults = Object.fromEntries(
  Object.entries(numericLimits).map(([key, value]) => [key, value.default])
);

const booleanDefaults = Object.fromEntries(
  Object.entries(booleanLimits).map(([key, value]) => [key, value.default])
);

const defaultBackgroundOptions = {
  ...numericDefaults,
  ...booleanDefaults,
} as BackgroundOptions;

export const BackgroundProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [options, setOptions] = useState<BackgroundOptions>(
    defaultBackgroundOptions
  );

  return (
    <BackgroundContext.Provider value={{ ...options, setOptions }}>
      {children}
    </BackgroundContext.Provider>
  );
};
