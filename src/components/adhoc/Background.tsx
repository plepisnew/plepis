import { AnimateFn, useCanvas } from "@/hooks/useCanvas";
import { useWindowSize } from "@/hooks/useWindowSize";
import { random } from "@/utils/random";
import { useCallback } from "react";
import { headerHeight } from "./HeaderLayout";
import { useLocation } from "react-router-dom";

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
  strongOpacityFloor: number;
  strongOpacityCeiling: number;
};

export type BackgroundProps = {
  options?: Partial<BackgroundOptions>;
};

export const defaultBackgroundOptions: BackgroundOptions = {
  cellSize: 30,
  gapX: 4,
  gapY: 4,
  frameSkip: 1,
  spiralGap: 1,
  shouldDraw: true,
  shouldUpdate: true,
  shouldFill: false,
  shouldStroke: true,
  weakOpacity: 0.2,
  strongOpacityFloor: 0.3,
  strongOpacityCeiling: 0.3,
};

export const Background: React.FC<BackgroundProps> = ({
  options: _options,
}) => {
  const [windowWidth, windowHeight] = useWindowSize();
  const { pathname } = useLocation();

  const animate: AnimateFn = useCallback(
    ({ frame, ctx }) => {
      const options: BackgroundOptions = {
        ...defaultBackgroundOptions,
        ..._options,
      };

      const {
        cellSize,
        shouldFill,
        shouldStroke,
        frameSkip,
        gapX,
        gapY,
        spiralGap,
        strongOpacityCeiling,
        strongOpacityFloor,
        weakOpacity,
        shouldDraw,
        shouldUpdate,
      } = options;

      if (pathname === "/" || !shouldDraw) {
        return ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      }

      if (!shouldUpdate) return;

      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      if (frame % frameSkip === 0) {
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
                ? random(strongOpacityFloor, strongOpacityCeiling)
                : weakOpacity;

            ctx.beginPath();
            ctx.roundRect(squareX, squareY, squareWidth, squareHeight, 2);
            shouldFill && ctx.fill();
            shouldStroke && ctx.stroke();
          }
        }
      }
    },
    [windowWidth, windowHeight, _options, pathname]
  );

  const { Canvas } = useCanvas({
    width: windowWidth,
    height: windowHeight - headerHeight,
    animate,
    clearBetweenFrames: false,
    canvasProps: {
      style: { position: "fixed", top: headerHeight, left: 0, zIndex: -1 },
    },
  });

  return Canvas;
};
