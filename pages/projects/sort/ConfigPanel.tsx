import Platform from '@/components/auxiliary/Platform';
import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  Stack,
  TextField,
  Typography,
  Button,
  Divider,
  Autocomplete,
  Box,
  TextFieldProps,
  styled,
  Paper,
  MenuItem,
  Menu,
  List
} from '@mui/material';
import algorithms, { Algorithm } from './algorithms';
import { randomIntegers } from '@/util/random';
import RowStack from '@/components/auxiliary/RowStack';
import { shuffle } from '@/util/sort';

type Props = {
  data: number[];
  setData: Dispatch<SetStateAction<number[]>>;
  sorting: boolean;
  setSorting: Dispatch<SetStateAction<boolean>>;
  setAlgorithm: Dispatch<SetStateAction<Algorithm>>;
};

const WhiteDivider = styled(Divider)({
  color: 'white',
  borderColor: 'white',
  '&::before, &::after': {
    borderColor: 'white'
  }
});

const WhiteTextField: React.FC<TextFieldProps> = styled((props) => (
  <TextField {...props} variant="outlined" />
))({
  '& .MuiInputBase-input': {
    color: 'white'
  },
  '& .MuiOutlinedInput-root:hover': {
    '& > fieldset': {
      borderColor: 'white'
    }
  },
  '& .MuiOutlinedInput-root': {
    '& > fieldset': {
      borderColor: 'white'
    }
  }
});

const ConfigPanel: React.FC<Props> = ({ data, setData, sorting, setSorting, setAlgorithm }) => {
  const [inputData, setInputData] = useState<string>('');

  return (
    <Platform
      bg={1}
      fg={1}
      radius="10px"
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Stack
        spacing={2}
        sx={{
          flex: 1
        }}
      >
        <Typography variant="h5" fontWeight={500}>
          Data Set:
        </Typography>
        <WhiteTextField
          value={inputData}
          onChange={(e) => {
            const values = e.currentTarget.value;
            setInputData(values);
            setData(values.split(',').map((value) => +value));
          }}
          rows={10}
          multiline
          placeholder="Type in some comma, semicolon or space delimited data"
        />
        <RowStack spacing={1}>
          <Button
            variant="contained"
            color="secondary"
            component="label"
            sx={{ flex: 1, color: 'black' }}
            onClick={() => {
              //   setData('1,2,3,4,5,6');
            }}
          >
            Upload CSV File <input type="file" accept=".csv" hidden />
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ flex: 2 }}
            onClick={() => {
              const values = randomIntegers({ format: 'arr', count: 500 }) as number[];
              setData(values);
              setInputData(values.join(','));
            }}
          >
            Generate Random Data
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{ flex: 1, color: 'black' }}
            onClick={() => {
              const shuffled = shuffle(data);
              setData(shuffled);
              setInputData(shuffled.join(','));
            }}
          >
            Scramble Data
          </Button>
        </RowStack>
      </Stack>
      <WhiteDivider sx={{ marginY: 3 }} />
      <Stack spacing={2} sx={{ flex: 1 }}>
        <Typography variant="h5" fontWeight={500}>
          Sorting Algorithm:
        </Typography>
        <Autocomplete
          clearOnEscape
          getOptionLabel={(option) => option.name}
          onChange={(_, value) => (value ? setAlgorithm(value) : null)}
          renderInput={(params) => (
            <WhiteTextField {...params} placeholder="Select existing algorithm" />
          )}
          getOptionDisabled={(option) => !option.sorter}
          options={algorithms}
          ListboxComponent={(props) => <ul {...props} className="sort-autocomplete" />}
        />
        <Box>
          <WhiteDivider>OR</WhiteDivider>
        </Box>
        <code>(item1, item2) =&gt;</code>
        <WhiteTextField placeholder="Type your own algorithm" multiline rows={2} />
        <RowStack spacing={1}>
          <Button
            color="error"
            variant="outlined"
            onClick={() => setSorting(false)}
            sx={{ flex: 1 }}
          >
            LETS not GO
          </Button>
          <Button
            color="success"
            variant={sorting ? 'contained' : 'outlined'}
            onClick={() => setSorting(true)}
            sx={{ flex: 1 }}
          >
            LETS GO
          </Button>
        </RowStack>
      </Stack>
    </Platform>
  );
};

export default ConfigPanel;
