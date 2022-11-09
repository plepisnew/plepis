import React from 'react';
import navItems from './navItems';
import { prefix, suffix, comma } from './navDecorator';
import RowStack from '@/components/auxiliary/RowStack';
import ColorfulTypography from '@/components/auxiliary/ColorfulTypography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Tooltip, Typography } from '@mui/material';

type NavItemProps = {
  title: string;
  path: string;
  selected: boolean;
  suffix?: React.ReactNode;
};

const Navigation: React.FC = () => {
  const router = useRouter();

  return (
    <RowStack
      sx={{
        flexGrow: 1,
        gap: 1
      }}
    >
      <ColorfulTypography words={prefix} fontFamily="Consolas" spaced />
      {navItems.map((navItem, index) => {
        const { title, path } = navItem;
        return (
          <NavItem
            title={title}
            path={path}
            key={title}
            selected={router.pathname === path}
            suffix={
              index === navItems.length - 1 ? undefined : (
                <ColorfulTypography words={comma} fontFamily="Consolas" />
              )
            }
          />
        );
      })}
      <ColorfulTypography words={suffix} fontFamily="Consolas" sx={{}} />
    </RowStack>
  );
};

const NavItem: React.FC<NavItemProps> = ({ title, path, selected, suffix }) => {
  return (
    <>
      <Link href={path}>
        <Typography
          sx={{
            borderTop: selected ? '1px solid white' : '1px solid rgba(0, 0, 0, 0)',
            opacity: selected ? 1 : 0.65,
            fontFamily: 'Consolas',
            transition: 'opacity 400ms',
            '&:hover': {
              opacity: selected ? 1 : 0.8
            }
          }}
        >
          {title}
        </Typography>
      </Link>
      {suffix}
    </>
  );
};

export default Navigation;
