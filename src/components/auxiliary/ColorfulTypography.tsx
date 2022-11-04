import { Typography } from "@mui/material";
import React from "react";
import RowStack from "./RowStack";

type Props = {
  words: {
    text: string;
    color: string;
  }[];
  fontFamily?: string;
  spaced?: boolean;
};

const ColorfulTypography: React.FC<Props> = ({ words, fontFamily, spaced }) => {
  console.log(spaced);
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
