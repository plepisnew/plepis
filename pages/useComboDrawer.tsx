import React, { useState } from 'react';
import DeepDrawer from './DeepDrawer';

type UseComboDrawer = {
  Drawers: React.ReactElement[];
  start: () => void;
  loading: boolean;
};

const useComboDrawer = (
  correctCombination: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
): UseComboDrawer => {
  const [drawerOpen, setDrawerOpen] = useState(correctCombination.map((_) => false));
  const openDrawer = (index: number) =>
    setDrawerOpen(drawerOpen.map((val, drawerIndex) => (index === drawerIndex ? true : val)));
  const closeAll = () => setDrawerOpen(drawerOpen.map((val) => false));
  const [loading, setLoading] = useState(false);

  return {
    loading,
    start: () => openDrawer(0),
    Drawers: correctCombination.map((correctDigit, index) => (
      <DeepDrawer
        open={drawerOpen[index]}
        onClose={() => {
          closeAll();
          setLoading(false);
        }}
        openNext={(e) => {
          openDrawer(index + 1);
          if (index === correctCombination.length - 1) setLoading(true);
        }}
        layer={index}
        correctNumber={correctDigit}
        key={index}
      />
    ))
  };
};

export default useComboDrawer;
