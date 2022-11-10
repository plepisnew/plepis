import { NextApiRequest, NextApiResponse } from 'next';
import { twitchReqInit as reqInit, TwitchGame as Game } from './config';
const topGamesEndpoint = (count: string) => `https://api.twitch.tv/helix/games/top?first=${count}`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { key = 'game', count = '100' } = req.query;
  const gameRes = await fetch(topGamesEndpoint(count as string), reqInit);
  const { data }: { data: Game[] } = await gameRes.json();
  res.json(data);
}
