import { Stack, StackProps } from '@mui/material';

import React from 'react';

type Props = {
  children: React.ReactNode;
  dualColumn?: boolean;
} & StackProps;

const ColumnStack: React.FC<Props> = ({ children, dualColumn, ...stackProps }) => {
  return (
    <Stack
      {...stackProps}
      direction="column"
      sx={{
        width: dualColumn
          ? {
              xs: '100%',
              sm: '50%'
            }
          : undefined,
        ...stackProps.sx
      }}
    >
      {children}
    </Stack>
  );
};

export default ColumnStack;
