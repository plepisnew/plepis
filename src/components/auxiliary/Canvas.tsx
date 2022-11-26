import React, {
  DependencyList,
  useEffect,
  useRef,
  useState,
  DetailedHTMLProps,
  CanvasHTMLAttributes
} from 'react';

type LoopChronos = {
  time: number;
  dt: number;
  frame: number;
};

type Props = {
  callback: (context: CanvasRenderingContext2D, chrono: LoopChronos) => void;
  beforeAll?: () => void;
  deps?: DependencyList | undefined;
  width: number;
  height: number;
} & DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;

const Canvas: React.FC<Props> = ({ callback, beforeAll, deps, width, height, ...canvasProps }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loopId = useRef<number>();
  const previousTime = useRef<number>();
  const currentFrame = useRef<number>();

  const [context, setContext] = useState<CanvasRenderingContext2D>();

  const loop = (time: number) => {
    if (!previousTime.current && beforeAll) beforeAll();
    if (
      previousTime.current !== undefined &&
      currentFrame.current !== undefined &&
      context !== undefined
    ) {
      const dt = time - previousTime.current;
      const frame = currentFrame.current;
      callback(context, { frame, time, dt });
    }

    previousTime.current = time;
    currentFrame.current = (currentFrame.current || 0) + 1;
    loopId.current = requestAnimationFrame(loop);
  };

  const dependencyArray = deps ? [context, ...(deps as unknown[])] : [context];

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (!context) setContext(ctx);

    loopId.current = requestAnimationFrame(loop);
    //console.log(`Destroyed loop ${loopId.current} since dependency changed`);
    return () => cancelAnimationFrame(loopId.current as number);

    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, dependencyArray);

  return <canvas ref={canvasRef} width={width} height={height} {...canvasProps} />;
};

export default Canvas;
