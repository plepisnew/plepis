import React, { useState } from 'react';
import { Typography, Button, CircularProgress, Box } from '@mui/material';
import RowStack from '@/components/auxiliary/RowStack';
import useComboDrawer from './useComboDrawer';

const HomePage: React.FC = () => {
  return (
    <Box position="relative">
      <RowStack>
        <Typography>Home Page</Typography>
      </RowStack>
    </Box>
  );
};
export default HomePage;
