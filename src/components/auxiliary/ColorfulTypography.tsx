import { Typography, TypographyProps } from '@mui/material';
import React from 'react';
import RowStack from './RowStack';

type Props = {
  words: {
    text: string;
    color: string;
  }[];
  spaced?: boolean;
} & TypographyProps;

const ColorfulTypography: React.FC<Props> = ({ words, spaced, ...typographyProps }) => {
  return (
    <RowStack spacing={spaced ? 1 : 0}>
      {words.map((word) => {
        const { text, color } = word;
        return (
          <Typography color={color} key={text + color} {...typographyProps}>
            {text}
          </Typography>
        );
      })}
    </RowStack>
  );
};

export default ColorfulTypography;
