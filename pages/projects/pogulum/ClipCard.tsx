import { Box } from '@mui/material';
import React from 'react';
import { TwitchClip as Clip } from 'pages/api/config';

type Props = {
  clip: Clip;
};

const ClipCard: React.FC<Props> = ({ clip }) => {
  return <Box>{clip.title}</Box>;
};

export default ClipCard;
