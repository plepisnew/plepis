import { useEffect, useState } from "react";

type Size = { width: number; height: number };

export type UseWindowSize = (
  useScrollHeight?: boolean
) => [Size["width"], Size["height"]];

export const useWindowSize: UseWindowSize = (useScrollHeight = false) => {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  useEffect(() => {
    const resizeHandler = () => {
      setSize({
        width: window.innerWidth,
        height: useScrollHeight
          ? document.body.scrollHeight
          : window.innerHeight,
      });
    };

    window.addEventListener("resize", resizeHandler);

    resizeHandler();

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return [size.width, size.height];
};
