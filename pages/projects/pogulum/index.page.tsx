import Image from '@/components/auxiliary/Image';
import RowStack from '@/components/auxiliary/RowStack';
import { Box, Button, CircularProgress, Typography, Grid, Divider, Stack } from '@mui/material';
import { TwitchGame as Game } from 'pages/api/config';
import React, { useState, useEffect } from 'react';
import StyledFilter from './Filter.styled';
import StyledSnackbar from './Snackbar.styled';
import { twitchReqInit as reqInit, TwitchClip as Clip } from 'pages/api/config';
import downloadData from '@/util/downloadData';
import ClipCards from './ClipCards';

const topGamesUri = `http://localhost:3000/api/top?key=game&count=${100}`;
const clipUri = `http://localhost:3000/api/clips`;

const gridColumns = {
  xs: 12,
  sm: 6,
  md: 6,
  lg: 6,
  xl: 6
};

type Props = {
  topGames: Game[];
};

const PogulumPage: React.FC<Props> = ({ topGames }) => {
  /* UI State */
  const [downloading, setDownloading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  /* User Input */
  const [gameFilter, setGameFilter] = useState(false);
  const [userFilter, setUserFilter] = useState(false);
  const [user, setUser] = useState<string>('');
  const [game, setGame] = useState<string>('');

  /* Resulting Data */
  const [clips, setClips] = useState<Clip[]>([]);
  const [sources, setSources] = useState<string[]>([]);

  const downloadVideo = async () => {
    if (downloading) {
      return setErrorOpen(true);
    }
    setInfoOpen(true);
    setDownloading(true);
    try {
      const res = await fetch('/api/concat', {
        method: 'POST',
        body: JSON.stringify({ sources })
      });
      const data = await res.blob();
      downloadData(data);
      setDownloading(false);
      setSuccessOpen(true);
    } catch (err) {
      setErrorOpen(true);
      console.log(err);
    }
  };

  const findClips = async () => {
    try {
      console.log(user);
      const res = await fetch(clipUri, {
        headers: reqInit.headers,
        body: JSON.stringify({
          user,
          game
        }),
        method: 'POST'
      });
      const data: Clip[] = await res.json();
      setClips(data);
    } catch (err) {
      setErrorOpen(true);
      console.log(err);
    }
  };

  return (
    <Grid
      container
      sx={{
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        height: '600px'
      }}
    >
      <Grid item {...gridColumns} height="70%" bgcolor="rgba(0, 255, 0, 0.2)" p={3}>
        <Stack spacing={3}>
          <RowStack alignItems="center" spacing={3}>
            <Image
              src="/projects/tcs_horizontal.png"
              alt="tcs_horizontal"
              rounded
              shadow
              width="60%"
            />
            <Typography variant="h5" fontWeight={700}>
              2.0 (functional)
            </Typography>
          </RowStack>
          <Typography variant="h5" fontWeight={600}>
            Ok so tf popping?
          </Typography>
          <Typography variant="body1">
            Ok so basically choose which filter you want to use (at least 1) and enter the payload.
            Then search and the clips will appear on the right. It is recommended to use exactly 1
            filter
          </Typography>
          <StyledFilter
            value={user}
            setValue={setUser}
            checked={userFilter}
            setChecked={setUserFilter}
            placeholder="Username"
            options={[]}
          />
          <Divider />
          <StyledFilter
            value={game}
            setValue={setGame}
            checked={gameFilter}
            setChecked={setGameFilter}
            placeholder="Game"
            options={topGames.map((topGame) => topGame.name)}
          />
          <Button variant="contained" onClick={findClips}>
            Find Clips
          </Button>
        </Stack>
      </Grid>
      <Grid item {...gridColumns} height="70%" bgcolor="rgba(0, 0, 255, 0.2)" p={3}>
        <ClipCards clips={clips} />
      </Grid>
      <Grid item {...gridColumns} p={3}>
        <Typography>Click here to download!!!</Typography>
        {downloading && <CircularProgress />}
        <Button variant="contained" onClick={downloadVideo} disabled={downloading}>
          Download
        </Button>
      </Grid>
      <StyledSnackbar
        open={errorOpen}
        setOpen={setErrorOpen}
        content={'Error occurred! Please check console'}
        color="error"
      />
      <StyledSnackbar
        open={successOpen}
        setOpen={setSuccessOpen}
        content={'Successfully downloaded clip!'}
        color="success"
      />
      <StyledSnackbar
        open={infoOpen}
        setOpen={setInfoOpen}
        content={'Concatenating clips...'}
        color="info"
      />
    </Grid>
  );
};

// TODO: change to getStaticProps
export async function getServerSideProps() {
  const topGamesRes = await fetch(topGamesUri);
  const topGames = await topGamesRes.json();
  return {
    props: {
      topGames
    }
  };
}

export default PogulumPage;
