import { Stack, SxProps } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode;
  spacing?: number;
  sx?: SxProps;
  alignCenter?: boolean;
  fullHeight?: boolean;
  fullWidth?: boolean;
};

const RowStack: React.FC<Props> = ({
  children,
  spacing,
  sx,
  alignCenter,
  fullHeight,
  fullWidth
}) => {
  return (
    <Stack
      direction="row"
      spacing={spacing}
      sx={{
        alignItems: alignCenter ? 'center' : undefined,
        height: fullHeight ? '100%' : undefined,
        width: fullWidth ? '100%' : undefined,
        ...sx
      }}
    >
      {children}
    </Stack>
  );
};

export default RowStack;
