import React from 'react';
import { Box } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

const Page: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh'
      }}
      p={6}
    >
      <Box
        sx={{
          width: '100%',
          height: '10000px',
          backgroundImage: 'url(/images/minecraft/brick_background.png)',
          position: 'absolute',
          zIndex: -1,
          top: 0,
          left: 0,
          opacity: 0.9,
          filter: 'brightness(50%)'
        }}
      />
      {children}
    </Box>
  );
};

export default Page;
