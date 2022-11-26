import React from 'react';
import { Paper, PaperProps } from '@mui/material';

type Props = {
  children: React.ReactNode;
  bg: number;
  fg: number;
  radius: number | string;
} & PaperProps;

const Platform: React.FC<Props> = ({ children, bg, fg, radius, ...paperProps }) => {
  return (
    <Paper
      {...paperProps}
      sx={{
        backgroundColor: `rgb(${bg * 10},${bg * 10},${bg * 10})`,
        color: `rgb(${255 - fg * 10},${255 - fg * 10},${255 - fg * 10})`,
        borderRadius: radius,
        padding: 2,
        ...paperProps.sx
      }}
    >
      {children}
    </Paper>
  );
};

export default Platform;
