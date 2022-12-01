import React from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import Navigation from './Navigation';
import Image from '@/components/auxiliary/Image';
import MetaMenu from './MetaMenu';
import { useSelector } from '@/hooks/redux';
import { selectDebug } from '@/store/debugSlice';
import useComboDrawer from 'pages/useComboDrawer';

export const headerHeight = '80px';

const Header: React.FC = () => {
  const { loading, start, Drawers } = useComboDrawer();

  const debug = useSelector(selectDebug);
  return (
    <AppBar
      position="sticky"
      sx={{
        height: headerHeight,
        '&': {
          backgroundColor: debug ? 'header.debugMain' : 'header.main',
          color: debug ? 'header.debugContrastText' : 'header.contrastText'
        }
      }}
    >
      <Container maxWidth="xl" sx={{ height: '100%' }}>
        <Toolbar sx={{ gap: 3, height: '100%' }}>
          <Image
            src={debug ? `/tarnished-eden.png` : '/tainted_eden.png'}
            width={45}
            alt="pfp"
            rounded
            onClick={() => (debug ? start() : undefined)}
          />
          <Navigation />
          <MetaMenu />
        </Toolbar>
      </Container>
      {Drawers}
    </AppBar>
  );
};

export default Header;
