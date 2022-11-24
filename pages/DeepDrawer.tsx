import React, { Dispatch, SetStateAction } from 'react';
import { Drawer, Stack, Button } from '@mui/material';
import { headerHeight } from '@/components/Header';

type Props = {
  open: boolean;
  onClose: () => void;
  openNext: () => void;
  layer: number;
  correctNumber: number;
};

const DeepDrawer: React.FC<Props> = ({ open, onClose, openNext, layer, correctNumber }) => {
  const offset = `${layer * 100}px`;
  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="left"
      sx={{
        '& .MuiPaper-root': {
          marginTop: headerHeight,
          marginLeft: offset,
          width: 100,
          padding: 2
        },
        '& .MuiBackdrop-root': {
          marginTop: headerHeight,
          marginLeft: offset
        },
        marginTop: headerHeight,
        marginLeft: offset
      }}
    >
      <Stack
        sx={{
          height: 'calc(100vh-80px)'
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <Button
            variant="outlined"
            key={number}
            onClick={() => (number === correctNumber ? openNext() : onClose())}
            sx={{
              marginBottom: 2,
              borderWidth: 2,
              flexGrow: 1,
              overflowY: 'scroll',
              '&:hover': {
                borderWidth: 2
              }
            }}
          >
            {number}
          </Button>
        ))}
      </Stack>
    </Drawer>
  );
};

export default DeepDrawer;
