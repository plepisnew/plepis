import { Typography, SxProps, Theme } from '@mui/material';
import React from 'react';
import RowStack from './RowStack';

type Props = {
  words: {
    text: string;
    color: string;
  }[];
  fontFamily?: string;
  spaced?: boolean;
  //   sx?: SxProps;
};

const ColorfulTypography: React.FC<Props> = ({ words, fontFamily, spaced }) => {
  return (
    <RowStack spacing={spaced ? 1 : 0}>
      {words.map((word) => {
        const { text, color } = word;
        return (
          <Typography color={color} fontFamily={fontFamily} key={text + color}>
            {text}
          </Typography>
        );
      })}
    </RowStack>
  );
};

export default ColorfulTypography;
