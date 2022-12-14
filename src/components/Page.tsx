import React from 'react';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { headerHeight } from '@/components/Header';

type Props = {
  children: React.ReactNode;
};

// TODO: avoid hardcoding 70px
const Page: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  return (
    <Box
      //   width="max(100vw, 100%)"
      width="max(100vw)"
      height={`calc(100vh - ${headerHeight})`}
      overflow="scroll"
      bgcolor="z0.main"
      p={6}
    >
      {/* <Box
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
      /> */}
      {children}
    </Box>
  );
};

export default Page;
