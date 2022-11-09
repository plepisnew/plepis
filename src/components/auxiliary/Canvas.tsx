import React, { forwardRef } from 'react';

interface Props {
  width?: number | string;
  height?: number | string;
}

const Canvas = forwardRef(function Canvas(props: Props, ref: React.LegacyRef<HTMLCanvasElement>) {
  return <canvas width={props.width} height={props.height} ref={ref} />;
});

export default Canvas;
