import React, { useState } from 'react';
import { Typography, Button, CircularProgress, Box } from '@mui/material';
import RowStack from '@/components/auxiliary/RowStack';
import useComboDrawer from './useComboDrawer';

const HomePage: React.FC = () => {
  return (
    <RowStack>
      <Typography>Home Page</Typography>
    </RowStack>
  );
};
export default HomePage;
