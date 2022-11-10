import { Stack, SxProps } from '@mui/material';

import React from 'react';

type Props = {
  children: React.ReactNode;
  spacing?: number;
  sx?: SxProps;
  alignCenter?: boolean;
  dualColumn?: boolean;
};

const ColumnStack: React.FC<Props> = ({ children, spacing, sx, alignCenter, dualColumn }) => {
  return (
    <Stack
      direction="column"
      spacing={spacing}
      sx={{
        alignItems: alignCenter ? 'center' : undefined,
        width: dualColumn
          ? {
              xs: '100%',
              sm: '50%'
            }
          : undefined,
        ...sx
      }}
    >
      {children}
    </Stack>
  );
};

export default ColumnStack;
