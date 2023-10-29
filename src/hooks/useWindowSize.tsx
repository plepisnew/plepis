import { useEffect, useState } from "react";

type Size = { width: number; height: number };

export type UseWindowSize = () => Size;

export const useWindowSize = () => {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  useEffect(() => {
    const resizeHandler = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resizeHandler);

    resizeHandler();

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return size;
};
