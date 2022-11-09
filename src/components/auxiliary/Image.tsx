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
  shadow?: boolean;
};

const Image: React.FC<Props> = ({ src, sx, width, height, rounded, alt, shadow }) => {
  return (
    <Box
      component="img"
      src={`/images/${src}`}
      sx={{
        borderRadius: rounded ? '5px' : '',
        boxShadow: shadow ? '0 0 3px rgba(0, 0, 0, 0.5)' : undefined,
        ...sx
      }}
      width={width}
      height={height}
      alt={alt}
    />
  );
};

export default Image;
