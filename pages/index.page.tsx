import React, { useState, useRef } from 'react';
import { Typography, Button, Stack, CircularProgress, Box } from '@mui/material';
import RowStack from '@/components/auxiliary/RowStack';
import DeepDrawer from './DeepDrawer';

// const correctCombination = [1, 3, 3, 7, 6, 9, 4, 2, 0];
const correctCombination = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const HomePage: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(correctCombination.map((_) => false));
  const closeDrawer = (index: number) =>
    setDrawerOpen(drawerOpen.map((val, drawerIndex) => (index === drawerIndex ? false : val)));
  const openDrawer = (index: number) =>
    setDrawerOpen(drawerOpen.map((val, drawerIndex) => (index === drawerIndex ? true : val)));
  const closeBefore = (index: number) =>
    setDrawerOpen(drawerOpen.map((val, drawerIndex) => (drawerIndex <= index ? false : val)));
  const closeAll = () => setDrawerOpen(drawerOpen.map((val) => false));

  const [loading, setLoading] = useState(false);

  return (
    <Box
      sx={{
        position: 'relative'
      }}
    >
      {correctCombination.map((correctDigit, index) => (
        <DeepDrawer
          open={drawerOpen[index]}
          onClose={() => {
            closeAll();
            setLoading(false);
          }}
          openNext={() => {
            openDrawer(index + 1);
            if (index === correctCombination.length - 1) setLoading(true);
          }}
          layer={index}
          correctNumber={correctDigit}
          key={index}
        />
      ))}

      <RowStack>
        <Typography>Home Page</Typography>
        <Button onClick={() => openDrawer(0)}>Open drawer</Button>
      </RowStack>
      {loading && (
        <CircularProgress
          sx={{
            position: 'absolute',
            right: 100,
            top: 100,
            zIndex: 1201
          }}
        />
      )}
    </Box>
  );
};
export default HomePage;
