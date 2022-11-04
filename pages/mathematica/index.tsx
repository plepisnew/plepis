import React, { useState } from 'react';
import {
  ButtonGroup,
  ToggleButton,
  TextField,
  Stack,
  Button,
  Typography,
  Box
} from '@mui/material';
import mathematica from '@/modules/mathematica';

const MathematicaPage: React.FC = () => {
  const [isExpression, setIsExpression] = useState<boolean>(true);
  const [result, setResult] = useState<string>('');
  const [mathInput, setMathInput] = useState<string>('');

  const solve = () => {
    const calculationInput = mathInput;
    const calculationOutput = mathematica.stringToExpression(calculationInput);
    // console.log(calculationOutput);
    // setResult(calculationOutput);
  };

  return (
    <>
      <Stack spacing={3}>
        <Stack direction="row" sx={{ alignItems: 'center' }} spacing={3}>
          <Typography fontWeight={600}>Select Type:</Typography>
          <ButtonGroup variant="outlined">
            <ToggleButton
              selected={isExpression}
              value={isExpression}
              onClick={() => setIsExpression(true)}
            >
              Expression
            </ToggleButton>
            <ToggleButton
              selected={!isExpression}
              value={isExpression}
              onClick={() => setIsExpression(false)}
            >
              Equation
            </ToggleButton>
          </ButtonGroup>
        </Stack>
        <Stack direction="row" spacing={6}>
          <TextField
            sx={{
              flexGrow: 1
            }}
            placeholder="Input Mathematical expression or equation e.g. x^2=1"
            value={mathInput}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{
              paddingX: 6
            }}
            onClick={solve}
          >
            Solve
          </Button>
        </Stack>
        <Stack direction="row">
          <Stack width="50%">
            <Typography>{result}</Typography>
          </Stack>
          <Box width="50%">Abstract Syntax Tree</Box>
        </Stack>
      </Stack>
    </>
  );
};

export default MathematicaPage;
