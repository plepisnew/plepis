import { AnimateFn, UseCanvas, useCanvas } from "@/hooks/useCanvas";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useCallback } from "react";
import { headerHeight } from "./HeaderLayout";
import { useBackground } from "../contexts/BackgroundContext";

export type BackgroundProps = {
  customSize?: { width: number; height: number };
};

export const Background: React.FC<BackgroundProps> = ({ customSize }) => {
  const [windowWidth, windowHeight] = useWindowSize();

  const { setOptions: _, ...options } = useBackground();

  const animate: AnimateFn = useCallback(
    ({ frame, ctx }) => {
      const {
        cellSize,
        shouldFill,
        shouldStroke,
        frameSkip,
        gapX,
        gapY,
        spiralGap,
        strongOpacity,
        weakOpacity,
        shouldDraw,
        shouldUpdate,
      } = options;

      if (!shouldDraw) {
        return ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      }

      if (!shouldUpdate) return;

      if (frame % frameSkip === 0) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        const rows = Math.floor(windowHeight / cellSize) + 1;
        const columns = Math.floor(windowWidth / cellSize) + 1;

        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";

        for (let row = 0; row < rows; row++) {
          for (let column = 0; column < columns; column++) {
            const [textureX, textureY] = [column * cellSize, row * cellSize];
            const [squareX, squareY] = [textureX + gapX, textureY + gapY];
            const [squareWidth, squareHeight] = [
              cellSize - 2 * gapX,
              cellSize - 2 * gapY,
            ];
            ctx.globalAlpha =
              (row + column - frame) % spiralGap === 0
                ? strongOpacity
                : weakOpacity;

            ctx.beginPath();
            ctx.roundRect(squareX, squareY, squareWidth, squareHeight, 2);
            shouldFill && ctx.fill();
            shouldStroke && ctx.stroke();
          }
        }
      }
    },
    [options, windowWidth, windowHeight]
  );

  const [canvasWidth, canvasHeight] = [
    customSize ? customSize.width : windowWidth,
    customSize ? customSize.height : windowHeight - headerHeight,
  ];
  const canvasProps: Parameters<UseCanvas>[0]["canvasProps"] = customSize
    ? {}
    : { style: { position: "fixed", top: headerHeight, left: 0, zIndex: -1 } };

  const { Canvas } = useCanvas({
    width: canvasWidth,
    height: canvasHeight,
    animate,
    clearBetweenFrames: false,
    canvasProps,
  });

  return Canvas;
};
