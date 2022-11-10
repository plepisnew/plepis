import ColumnStack from '@/components/auxiliary/ColumnStack';
import RowStack from '@/components/auxiliary/RowStack';
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  Grid,
  Autocomplete,
  TextField,
  Divider,
  Switch
} from '@mui/material';
import { TwitchGame as Game } from 'pages/api/config';
import React, { useState, useEffect } from 'react';
import StyledFilter from './Filter.styled';
import StyledSnackbar from './Snackbar.styled';

const topGamesUri = `http://localhost:3000/api/top?key=game&count=${100}`;

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
  const [downloading, setDownloading] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [gameFilter, setGameFilter] = useState(false);
  const [userFilter, setUserFilter] = useState(false);

  const downloadVideo = async () => {
    if (downloading) {
      setSnackOpen(false);
      setErrorOpen(true);
      return;
    }
    setDownloading(true);
    try {
      const res = await fetch('/api/concat', {
        method: 'POST',
        body: JSON.stringify({
          sources: [
            'https://production.assets.clips.twitchcdn.net/2EzkNlR1n0a50U_UC4aCAA/AT-cm%7C2EzkNlR1n0a50U_UC4aCAA.mp4?sig=cfbcf9b3af342cc424d1221c9c65692484cebe20&token=%7B%22authorization%22%3A%7B%22forbidden%22%3Afalse%2C%22reason%22%3A%22%22%7D%2C%22clip_uri%22%3A%22https%3A%2F%2Fproduction.assets.clips.twitchcdn.net%2F2EzkNlR1n0a50U_UC4aCAA%2FAT-cm%257C2EzkNlR1n0a50U_UC4aCAA.mp4%22%2C%22device_id%22%3A%22RapEqvBcXjawJ9GWuo0kyBpvb9SaepOS%22%2C%22expires%22%3A1668093851%2C%22user_id%22%3A%22%22%2C%22version%22%3A2%7D',
            'https://production.assets.clips.twitchcdn.net/2EzkNlR1n0a50U_UC4aCAA/AT-cm%7C2EzkNlR1n0a50U_UC4aCAA.mp4?sig=cfbcf9b3af342cc424d1221c9c65692484cebe20&token=%7B%22authorization%22%3A%7B%22forbidden%22%3Afalse%2C%22reason%22%3A%22%22%7D%2C%22clip_uri%22%3A%22https%3A%2F%2Fproduction.assets.clips.twitchcdn.net%2F2EzkNlR1n0a50U_UC4aCAA%2FAT-cm%257C2EzkNlR1n0a50U_UC4aCAA.mp4%22%2C%22device_id%22%3A%22RapEqvBcXjawJ9GWuo0kyBpvb9SaepOS%22%2C%22expires%22%3A1668093851%2C%22user_id%22%3A%22%22%2C%22version%22%3A2%7D'
          ]
        })
      });
      setDownloading(false);
      setSnackOpen(true);
      const data = await res.blob();
      const link: HTMLAnchorElement = document.createElement('a');
      link.href = URL.createObjectURL(data);
      link.download = 'output.mp4';
      link.click();
      link.remove();
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
        <ColumnStack spacing={3}>
          <Typography variant="h5" fontWeight={600}>
            Ok so tf popping?
          </Typography>
          <Typography variant="body1">
            Ok so basically choose which filter you want to use (at least 1) and enter the payload.
            Then search and the clips will appear on the right. It is recommended to use exactly 1
            filter
          </Typography>
          <StyledFilter checked={userFilter} setChecked={setUserFilter} />
          {/* <RowStack alignCenter>
            <Switch value={userFilter} onChange={(_, checked: boolean) => setUserFilter(checked)} />
            <Autocomplete
            renderInput={(params) => <TextField {...params} placeholder="Enter Username" />}
              options={['Anomaly']}
              freeSolo
              sx={{
                flexGrow: 1
              }}
              disabled={!userFilter}
            />
          </RowStack> */}
          <Divider />
          <StyledFilter checked={gameFilter} setChecked={setGameFilter} />
          {/* <RowStack alignCenter>
            <Switch value={gameFilter} onChange={(_, checked: boolean) => setGameFilter(checked)} />
            <Autocomplete
              renderInput={(params) => <TextField {...params} placeholder="Enter Game" />}
              options={topGames.map((topGame) => ({ label: topGame.name, id: topGame.id }))}
              freeSolo
              sx={{
                flexGrow: 1
              }}
              disabled={!gameFilter}
            />
          </RowStack> */}
        </ColumnStack>
      </Grid>
      <Grid item {...gridColumns} height="70%" bgcolor="rgba(0, 0, 255, 0.2)" p={3}>
        found clips
      </Grid>
      <Grid item {...gridColumns} p={3}>
        clip concat
      </Grid>
    </Grid>
    // <RowStack
    //   sx={{
    //     backgroundColor: 'rgb(255, 0, 0, 0.2)',
    //     height: '100vh'
    //   }}
    // >
    //   <RowStack fullWidth spacing={4}>
    //     <ColumnStack dualColumn>
    //       <Typography>Click here to download!!!</Typography>
    //       {/* {downloading && <CircularProgress />}
    //       <Button variant="contained" onClick={downloadVideo} disabled={downloading}>
    //         Download
    //       </Button> */}
    //     </ColumnStack>
    //     <ColumnStack dualColumn>found clips</ColumnStack>
    //   </RowStack>
    //   <Box>clip section</Box>
    //   <StyledSnackbar
    //     open={errorOpen}
    //     setOpen={setErrorOpen}
    //     content={'Error occurred! Please check console'}
    //     color="error"
    //   />
    //   <StyledSnackbar
    //     open={snackOpen}
    //     setOpen={setSnackOpen}
    //     content={'Successfully downloaded clip!'}
    //     color="success"
    //   />
    // </RowStack>
  );
};

export async function getServerSideProps() {
  const topGamesRes = await fetch(topGamesUri);
  const topGames = await topGamesRes.json();
  console.log(topGames);
  return {
    props: {
      topGames
    }
  };
}

export default PogulumPage;
