import { Box, BoxProps } from '@mui/material';
import React from 'react';

type Props = {
  /**
   * Automatically prefix with `/images` (maps to public dir)
   */
  src: string;
  alt: string;
  rounded?: boolean;
  shadow?: boolean;
} & BoxProps;

const Image: React.FC<Props> = ({ src, rounded, alt, shadow, ...boxProps }) => {
  return (
    <Box
      {...boxProps}
      component="img"
      src={`/images${src}`}
      sx={{
        borderRadius: rounded ? '5px' : '',
        boxShadow: shadow ? '0 0 3px rgba(0, 0, 0, 0.5)' : undefined,
        cursor: boxProps.onClick ? 'pointer' : undefined,
        ...boxProps.sx
      }}
      alt={alt}
    />
  );
};

export default Image;
