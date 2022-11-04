import React from 'react';
import { AppBar, Toolbar, useTheme } from '@mui/material';
import Navigation from './Navigation';
import Image from '@/components/auxiliary/Image';
import MetaMenu from './MetaMenu';

const Header: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          gap: 3
        }}
      >
        <Image src="/t-eden.png" height={50} alt="pfp" rounded />
        {/* <Image src="/pfp.png" height={50} alt="pfp" rounded /> */}
        <Navigation />
        <MetaMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
