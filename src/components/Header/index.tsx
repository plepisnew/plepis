import React from 'react';
import { AppBar, Container, Toolbar, useTheme } from '@mui/material';
import Navigation from './Navigation';
import Image from '@/components/auxiliary/Image';
import MetaMenu from './MetaMenu';
import { useSelector } from '@/hooks/redux';
import { selectDebug } from '@/store/debugSlice';

const Header: React.FC = () => {
  const debug = useSelector(selectDebug);

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            gap: 3
          }}
        >
          <Image
            src={debug ? `/tarnished-eden.png` : '/tainted_eden.png'}
            width={45}
            alt="pfp"
            rounded
          />
          <Navigation />
          <MetaMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
