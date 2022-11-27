import React from 'react';
import navItems from './navItems';
import { prefix, suffix, comma } from './navDecorator';
import RowStack from '@/components/auxiliary/RowStack';
import ColorfulTypography from '@/components/auxiliary/ColorfulTypography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SxProps, Typography } from '@mui/material';
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

  const typographyProps: Partial<Parameters<typeof ColorfulTypography>[0]> = {
    fontFamily: 'Consolas',
    display: {
      xs: 'none',
      lg: 'block'
    }
  };

  return (
    <RowStack
      sx={{
        flexGrow: 1,
        gap: debug ? 1 : 2,
        alignItems: 'center'
      }}
    >
      {debug && <ColorfulTypography words={prefix} {...typographyProps} spaced />}
      {navItems.map((navItem, index) => {
        const path = navItem.path;
        const title = debug ? navItem.debugTitle : navItem.title;
        return (
          <NavItem
            title={title}
            path={path}
            key={title}
            selected={path === '/' ? router.pathname === '/' : router.pathname.startsWith(path)}
            debug={debug}
            suffix={
              index === navItems.length - 1 || !debug ? undefined : (
                <ColorfulTypography words={comma} {...typographyProps} />
              )
            }
          />
        );
      })}
      {debug && <ColorfulTypography words={suffix} {...typographyProps} />}
    </RowStack>
  );
};

const NavItem: React.FC<NavItemProps> = ({ title, path, selected, suffix, debug }) => {
  const commonStyle: SxProps = {
    opacity: selected ? 1 : 0.65,
    transition: 'opacity 400ms',
    '&:hover': {
      opacity: selected ? 1 : 0.8
    }
  };

  const normalStyle: SxProps = {
    borderBottomColor: selected ? 'header.contrastText' : 'rgba(69, 69, 69, 0)',
    backgroundColor: selected ? 'white' : 'none',
    border: '2px solid white',
    color: 'black',
    borderRadius: '3px',
    padding: '4px 7px',
    ...commonStyle
  };

  const debugStyle: SxProps = {
    borderColor: selected ? 'header.debugContrastText' : 'rgba(69, 69, 69, 0)',
    borderWidth: 2,
    borderStyle: 'solid',
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
