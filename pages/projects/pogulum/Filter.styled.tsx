import { Autocomplete, Switch, TextField, styled } from '@mui/material';
// import { styled } from '@/theme';
import RowStack from '@/components/auxiliary/RowStack';

type FilterProps = {
  checked: boolean;
  setChecked: (state: boolean) => void;
  options?: {
    label: string;
  }[];
};

const StyledFilter = styled(({ checked, setChecked, options }: FilterProps) => (
  <RowStack alignCenter>
    <Switch value={checked} onChange={(_, checked: boolean) => setChecked(checked)} />
    <Autocomplete
      renderInput={(params) => <TextField {...params} placeholder="Enter Username" />}
      options={options || []}
      freeSolo
      disabled={!checked}
    />
  </RowStack>
))({
  '& .MuiAutocomplete-root': {
    flexGrow: 1
  },
  backgroundColor: 'red',
  height: 200
});

export default StyledFilter;
