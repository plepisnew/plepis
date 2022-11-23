import React, { useState } from 'react';
import { TwitchClip as Clip } from 'pages/api/config';
import ColumnStack from '@/components/auxiliary/ColumnStack';
import { TextField, Box } from '@mui/material';
import ClipCard from './ClipCard';

type Props = {
  clips: Clip[];
};

const ClipCards: React.FC<Props> = ({ clips = [] }) => {
  const [filter, setFilter] = useState('');
  return (
    <ColumnStack
      spacing={2}
      sx={{
        height: '100%'
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Filter"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setFilter(event.currentTarget.value.toLowerCase())
        }
      />
      <Box
        sx={{
          overflowY: 'scroll'
        }}
      >
        {clips
          .filter((clip) => clip.title.toLowerCase().includes(filter))
          .map((clip) => (
            <ClipCard clip={clip} key={clip.id} />
          ))}
      </Box>
    </ColumnStack>
  );
};

export default ClipCards;
