import React, { useEffect, useRef, useState, RefObject } from 'react';

/**
 * React Hook which returns an array of a Canvas element (FC rendered using `<Canvas />`) and the corresponding 2D Context of that Canvas
 */
const useCanvas = (
  width: number,
  height: number
): [React.FC, CanvasRenderingContext2D | undefined, HTMLCanvasElement | undefined] => {
  const ref = useRef<HTMLCanvasElement>(null);

  const [canvas, setCanvas] = useState<HTMLCanvasElement>();
  const [context, setContext] = useState<CanvasRenderingContext2D>();

  useEffect(() => {
    const canvas = ref.current as HTMLCanvasElement;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.width = width;
    canvas.height = height;
    setCanvas(canvas);
    setContext(context);
  }, [width, height]);

  return [
    () => (
      <canvas
        ref={ref}
        width={width}
        height={height}
        style={{
          backgroundColor: 'white'
        }}
      ></canvas>
    ),
    context,
    canvas
  ];
};

export default useCanvas;
