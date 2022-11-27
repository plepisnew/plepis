import React from 'react';
import { Box, BoxProps } from '@mui/material';

type Props = {
  children: React.ReactNode;
  bg?: number;
  fg?: number;
  radius?: number | string;
} & BoxProps;

const Platform: React.FC<Props> = ({ children, bg = 0, fg = 0, radius, ...boxProps }) => {
  return (
    <Box
      {...boxProps}
      sx={{
        backgroundColor: `rgb(${bg * 10},${bg * 10},${bg * 10})`,
        color: `rgb(${255 - fg * 10},${255 - fg * 10},${255 - fg * 10})`,
        borderRadius: radius || 0,
        padding: 2,
        ...boxProps.sx
      }}
    >
      {children}
    </Box>
  );
};

export default Platform;
