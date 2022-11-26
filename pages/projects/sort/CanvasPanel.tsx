import Canvas from '@/components/auxiliary/Canvas';
import React, { Dispatch, SetStateAction, useState, useRef, useEffect } from 'react';
import algorithms, { Algorithm } from './algorithms';

type Props = {
  data: number[];
  setData: Dispatch<SetStateAction<number[]>>;
  sorting: boolean;
  setSorting: Dispatch<SetStateAction<boolean>>;
  algorithm: Algorithm;
};

const CanvasPanel: React.FC<Props> = ({ data, setData, sorting, setSorting, algorithm }) => {
  const width = 1280;
  const height = 720;
  const raiseY = 10;
  const scaleY = 0.8;

  const values = useRef<number[]>(data);
  const minValue = useRef<number>(Math.min(...values.current));
  const maxValue = useRef<number>(Math.max(...values.current)); // y = height
  const amplitude = useRef<number>(maxValue.current - minValue.current); // a = height
  const dataCount = useRef<number>(values.current.length);
  const dx = useRef<number>(width / dataCount.current);

  const canvasY = (dataY: number) =>
    ((dataY - minValue.current) * height * scaleY) / amplitude.current + raiseY;
  const canvasX = (dataIndex: number) => (dataIndex * width) / dataCount.current;

  const resetIndices = () => {
    currentIndex.current = 0;
    comparingIndex.current = 1;
    lowestIndex.current = 0;
  };

  const resetParameters = () => {
    values.current = data;
    minValue.current = Math.min(...data);
    maxValue.current = Math.max(...data);
    amplitude.current = maxValue.current - minValue.current;
    dataCount.current = data.length;
    dx.current = width / dataCount.current;
  };

  const currentIndex = useRef<number>(0);
  const comparingIndex = useRef<number>(1);
  const lowestIndex = useRef<number>(0);

  // 1. setInterval with 1 action per loop 2. setInterval with 1 iteration per loop 3. separate while true loop

  useEffect(() => {
    if (sorting) {
      const timerId = setInterval(() => {
        const { current } = values;
        if (currentIndex.current === current.length - 1) {
          setSorting(false);
          clearInterval(timerId);
        }

        algorithm.sorter({
          current,
          currentIndex,
          comparingIndex,
          lowestIndex
        });
      }, 1);
      return () => clearInterval(timerId);
    }
  }, [sorting]);

  useEffect(() => {
    resetParameters();
    resetIndices();
  }, [data]);

  return (
    <Canvas
      callback={(context) => {
        const { width, height } = context.canvas;
        context.clearRect(0, 0, width, height);
        values.current.forEach((value, index) => {
          context.fillStyle = 'white';
          if (index === currentIndex.current) context.fillStyle = 'green';
          if (index === comparingIndex.current) context.fillStyle = 'red';
          context.fillRect(canvasX(index), height - canvasY(value), dx.current, canvasY(value));
        });
      }}
      width={width}
      height={height}
      style={{
        backgroundColor: 'black',
        borderRadius: '10px'
      }}
      deps={[data, sorting]}
    />
  );
};

export default CanvasPanel;
