import { Box, Stack } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Canvas from './Canvas';

const SortPage: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Stack>
      Data Sorter
      <Box>
        <button onClick={() => setCount(count + 1)}>Click me :)</button>
        {count}
        <Canvas
          callback={(context, { frame }) => {
            const { width, height } = context.canvas;
            context.clearRect(0, 0, width, height);
            context.fillRect(frame % 1000, frame % 1000, 1000, 1000);
            console.log(frame);
          }}
          width={1000}
          height={1000}
          style={{
            backgroundColor: 'white'
          }}
          deps={[count]}
        />
      </Box>
    </Stack>
  );
};

export default SortPage;
