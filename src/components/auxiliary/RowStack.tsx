import { Stack, SxProps } from '@mui/material';

import React from 'react';

type Props = {
  children: React.ReactNode;
  spacing?: number;
  sx?: SxProps;
  alignCenter?: boolean;
};

const RowStack: React.FC<Props> = ({ children, spacing, sx, alignCenter }) => {
  return (
    <Stack
      direction="row"
      spacing={spacing}
      sx={{
        alignItems: alignCenter ? 'center' : undefined,
        ...sx
      }}
    >
      {children}
    </Stack>
  );
};

export default RowStack;
