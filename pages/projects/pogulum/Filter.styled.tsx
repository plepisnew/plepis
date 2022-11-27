import { Autocomplete, AutocompleteProps, Switch, TextField } from '@mui/material';
import { styled } from '@/theme';
import RowStack from '@/components/auxiliary/RowStack';
import { Dispatch, SetStateAction } from 'react';

type FilterProps = {
  checked: boolean;
  value: string | undefined;
  setValue: Dispatch<SetStateAction<string>>;
  setChecked: Dispatch<SetStateAction<boolean>>;
  placeholder: string;
  options: string[];
};

const StyledFilter = styled(
  ({ value, setValue, checked, setChecked, placeholder, options }: FilterProps) => (
    <RowStack alignItems="center">
      <Switch value={checked} onChange={(_, checked: boolean) => setChecked(checked)} />
      <Autocomplete
        inputValue={value}
        onInputChange={(_, newValue) => setValue(newValue ?? '')}
        renderInput={(params) => <TextField {...params} placeholder={placeholder} />}
        options={options}
        freeSolo
        disabled={!checked}
        sx={{
          flexGrow: 1
        }}
      />
    </RowStack>
  )
)({
  '.MuiAutocomplete-popper': {
    backgroundColor: 'red'
  },
  '.MuiPaper-root': {
    backgroundColor: 'red'
  }
});

export default StyledFilter;
