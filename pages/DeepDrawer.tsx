import React, { MouseEvent } from 'react';
import { Drawer, Stack, Button, useMediaQuery, SxProps } from '@mui/material';
import { headerHeight } from '@/components/Header';

type Props = {
  open: boolean;
  onClose: () => void;
  openNext: (e: MouseEvent) => void;
  layer: number;
  correctNumber: number;
};

const DeepDrawer: React.FC<Props> = ({ open, onClose, openNext, layer, correctNumber }) => {
  const layerWidth = 80;
  const layerHeight = 50;
  const leftOffset = `${layer * layerWidth}px`;
  const topOffset = `${layer * layerHeight}px`;

  const landscape = useMediaQuery('(orientation: landscape)');

  const popperStyle: SxProps = {
    marginTop: landscape ? headerHeight : `calc(${headerHeight} + ${topOffset})`,
    marginLeft: landscape ? leftOffset : 0
  };

  const drawerStyle: SxProps = {
    width: landscape ? layerWidth : '100vw',
    height: landscape ? 'calc(100vh - 80px)' : layerHeight,
    ...popperStyle
  };

  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor={landscape ? 'left' : 'top'}
      sx={{
        '& .MuiPaper-root': {
          ...drawerStyle,
          backgroundColor: 'z5.main',
          padding: 2
        },
        '& .MuiBackdrop-root': {
          ...popperStyle
        },
        ...drawerStyle
      }}
    >
      <Stack direction={landscape ? 'column' : 'row'} flex={1} gap={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <Button
            variant="outlined"
            key={number}
            onClick={(e: MouseEvent<HTMLButtonElement>) =>
              number === correctNumber ? openNext(e) : onClose()
            }
            sx={{
              borderWidth: 2,
              flex: 1,
              //   height: '100%',
              //   width: '100%',
              minWidth: '20px',
              minHeight: '20px',
              // overflowY: 'scroll',
              //   overflow: 'scroll',
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
