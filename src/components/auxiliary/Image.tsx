import { Box, SxProps } from "@mui/material";
import React from "react";

type Props = {
  src: string;
  sx?: SxProps;
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
};

const Image: React.FC<Props> = ({ src, sx, width, height, rounded }) => {
  return (
    <Box
      component="img"
      src={src}
      sx={{
        borderRadius: rounded ? "5px" : "",
        ...sx,
      }}
      width={width}
      height={height}
    />
  );
};

export default Image;
