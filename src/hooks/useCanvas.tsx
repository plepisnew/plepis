import {
  CanvasHTMLAttributes,
  DetailedHTMLProps,
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
} from "react";

type CanvasProps = DetailedHTMLProps<
  CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
>;

export type AnimateFn = (renderContext: {
  time: number;
  frame: number;
  ctx: CanvasRenderingContext2D;
}) => void;

export type UseCanvas = (options: {
  clearBetweenFrames?: boolean;
  width: number;
  height: number;
  animate: AnimateFn;
  canvasProps?: Partial<Omit<CanvasProps, "width" | "height">>;
}) => {
  Canvas: ReactNode;
  frameRef: MutableRefObject<number>;
};

export const useCanvas: UseCanvas = ({
  animate,
  canvasProps,
  width,
  height,
  clearBetweenFrames = true,
}) => {
  const requestIdRef = useRef<number>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!ctx || !canvas) {
      return;
    }

    const frameCallback: FrameRequestCallback = (time) => {
      if (clearBetweenFrames) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      animate({ ctx, frame: frameRef.current, time });
      frameRef.current++;

      requestIdRef.current = requestAnimationFrame(frameCallback);
    };

    // If you don't set requestId here as well, you will have a head ache
    requestIdRef.current = requestAnimationFrame(frameCallback);

    return () => cancelAnimationFrame(requestIdRef.current!);
  }, [animate, clearBetweenFrames, canvasProps]);

  const Canvas = (
    <canvas width={width} height={height} ref={canvasRef} {...canvasProps} />
  );

  return { Canvas, frameRef };
};
