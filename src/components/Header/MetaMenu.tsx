import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button } from '@mui/material';
const MetaMenu: React.FC = () => {
  return (
    <>
      <Button>
        Meta data <ArrowDropDownIcon />
      </Button>
    </>
  );
};

export default MetaMenu;
