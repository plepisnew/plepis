import { Stack, SxProps } from "@mui/material";

import React from "react";

type Props = {
  children: React.ReactNode;
  spacing?: number;
  sx?: SxProps;
};

const RowStack: React.FC<Props> = ({ children, spacing, sx }) => {
  return (
    <Stack direction="row" spacing={spacing} sx={sx}>
      {children}
    </Stack>
  );
};

export default RowStack;
