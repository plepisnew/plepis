import { NextApiRequest, NextApiResponse } from 'next';
import {
  twitchReqInit as reqInit,
  TwitchGame as Game,
  TwitchUser as User,
  TwitchClip as Clip
} from './config';

const userEndpoint = (user: string) => `https://api.twitch.tv/helix/users?login=${user}`;
const gameEndpoint = (game: string) => `https://api.twitch.tv/helix/games?name=${game}`;
const userClipEndpoint = (broadcasterId: string) =>
  `https://api.twitch.tv/helix/clips?broadcaster_id=${broadcasterId}`;
const gameClipEndpoint = (gameId: string) => `https://api.twitch.tv/helix/clips?game_id=${gameId}`;

// TODO: allow searching more than 20 clips
// TODO: search based on user AND game
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user, game } = JSON.parse(req.body);
  console.log(user, game);
  try {
    if (user) {
      const userRes = await fetch(userEndpoint(user as string), reqInit);
      const { data: users }: { data: User[] } = await userRes.json();
      if (users.length === 0) return res.json([]);
      const clipRes = await fetch(userClipEndpoint(users[0].id), reqInit);
      const { data: clips }: { data: Clip[] } = await clipRes.json();
      return res.json(clips);
    }
    if (game) {
      const gameRes = await fetch(gameEndpoint(game as string), reqInit);
      const { data: games }: { data: Game[] } = await gameRes.json();
      if (games.length === 0) return res.json([]);
      const clipRes = await fetch(gameClipEndpoint(games[0].id), reqInit);
      const { data: clips }: { data: Clip[] } = await clipRes.json();
      return res.json(clips);
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ err });
  }
  res.status(200).json([]);
}
