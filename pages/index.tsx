import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <>
      <Typography variant="h4">Navigation:</Typography>
      <Link href="/mathematica">Math</Link>
    </>
  );
};
export default HomePage;
