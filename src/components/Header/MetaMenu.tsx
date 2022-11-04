import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button } from '@mui/material';
import RowStack from '../auxiliary/RowStack';
const MetaMenu: React.FC = () => {
  // deploy
  return (
    <RowStack>
      <Button>
        Meta data <ArrowDropDownIcon />
      </Button>
      <Button>
        Infra data <ArrowDropDownIcon />
      </Button>
    </RowStack>
  );
};

export default MetaMenu;
