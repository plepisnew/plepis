import { Stack, SxProps, StackProps } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode;
} & StackProps;

const RowStack: React.FC<Props> = ({ children, ...stackProps }) => {
  return (
    <Stack direction="row" {...stackProps}>
      {children}
    </Stack>
  );
};

export default RowStack;
