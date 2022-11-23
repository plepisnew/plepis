import React from 'react';
import navItems from './navItems';
import { prefix, suffix, comma } from './navDecorator';
import RowStack from '@/components/auxiliary/RowStack';
import ColorfulTypography from '@/components/auxiliary/ColorfulTypography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
import { useSelector } from '@/hooks/redux';
import { selectDebug } from '@/store/debugSlice';

type NavItemProps = {
  title: string;
  path: string;
  selected: boolean;
  suffix?: React.ReactNode;
  debug: boolean;
};

const Navigation: React.FC = () => {
  const debug = useSelector(selectDebug);
  const router = useRouter();

  return (
    <RowStack
      sx={{
        flexGrow: 1,
        gap: 1
      }}
    >
      {debug && <ColorfulTypography words={prefix} fontFamily="Consolas" spaced />}
      {navItems.map((navItem, index) => {
        const path = navItem.path;
        const title = debug ? navItem.debugTitle : navItem.title;
        return (
          <NavItem
            title={title}
            path={path}
            key={title}
            selected={router.pathname === path}
            debug={debug}
            suffix={
              index === navItems.length - 1 || !debug ? undefined : (
                <ColorfulTypography words={comma} fontFamily="Consolas" />
              )
            }
          />
        );
      })}
      {debug && <ColorfulTypography words={suffix} fontFamily="Consolas" />}
    </RowStack>
  );
};

const NavItem: React.FC<NavItemProps> = ({ title, path, selected, suffix, debug }) => {
  const commonStyle = {
    opacity: selected ? 1 : 0.65,
    transition: 'opacity 400ms',
    '&:hover': {
      opacity: selected ? 1 : 0.8
    }
  };

  const normalStyle = {
    borderBottom: selected ? '1px solid white' : '2px solid rgba(0, 0, 0, 0)',
    padding: '4px 5px',
    ...commonStyle
  };

  const debugStyle = {
    border: selected ? '1px solid white' : '2px solid rgba(0, 0, 0, 0)',
    padding: '0 3px',
    borderRightWidth: 4,
    borderTopWidth: 2,
    borderBottom: 'none',
    borderRadius: '5px 5px 0 0',
    fontFamily: 'Consolas',
    ...commonStyle
  };

  return (
    <>
      <Link href={path}>
        <Typography sx={debug ? debugStyle : normalStyle}>{title}</Typography>
      </Link>
      {suffix}
    </>
  );
};

export default Navigation;
