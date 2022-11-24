import useCanvas from './useCanvas';
import useFrameLoop from './useFrameLoop';

type ChronoParams = {
  dt: number;
  time: number;
  frame: number;
};

type CanvasFrameCallback = (
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  time: ChronoParams
) => void;

type CanvasSetupParams = {
  width: number;
  height: number;
};

const useCanvasFrame = (callback: CanvasFrameCallback, params: CanvasSetupParams): React.FC => {
  const { width, height } = params;

  const [Canvas, context, canvas] = useCanvas(width, height);

  useFrameLoop(
    (frame: number, time: number, dt: number) => {
      if (frame === 1 && canvas) {
        canvas.width = width;
        canvas.height = height;
      }
      if (!context || !canvas) return;
      callback(context, canvas, {
        dt,
        time,
        frame
      });
    },
    [canvas, context]
  );

  return Canvas;
};

export default useCanvasFrame;
