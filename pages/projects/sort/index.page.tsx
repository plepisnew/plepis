import RowStack from '@/components/auxiliary/RowStack';
import React, { useEffect, useRef, useState } from 'react';
import algorithms, { Algorithm } from './algorithms';
import CanvasPanel from './CanvasPanel';
import ConfigPanel from './ConfigPanel';

const SortPage: React.FC = () => {
  const [data, setData] = useState<number[]>([]);
  const [sorting, setSorting] = useState<boolean>(false);
  const [algorithm, setAlgorithm] = useState<Algorithm>(algorithms[0]);

  // use context
  return (
    <RowStack spacing={2}>
      <CanvasPanel
        data={data}
        setData={setData}
        setSorting={setSorting}
        sorting={sorting}
        algorithm={algorithm}
      />
      <ConfigPanel
        data={data}
        setData={setData}
        setSorting={setSorting}
        sorting={sorting}
        setAlgorithm={setAlgorithm}
      />
    </RowStack>
  );
};

export default SortPage;
