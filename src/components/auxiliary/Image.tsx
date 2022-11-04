import { Box, SxProps } from '@mui/material';
import React from 'react';

type Props = {
  /**
   * Automatically prefix with `/images` (maps to public dir)
   */
  src: string;
  alt: string;
  sx?: SxProps;
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
};

const Image: React.FC<Props> = ({ src, sx, width, height, rounded, alt }) => {
  return (
    <Box
      component="img"
      src={`/images/${src}`}
      sx={{
        borderRadius: rounded ? '5px' : '',
        ...sx
      }}
      width={width}
      height={height}
      alt={alt}
    />
  );
};

export default Image;
