/**
 * Fetch API Request Initializer for sending requests against Twitch API (Auth)
 */
export const twitchReqInit = {
  headers: {
    Authorization: `Bearer ${process.env.TWITCH_TOKEN}`,
    'Client-Id': `${process.env.TWITCH_CLIENT_ID}`
  }
};

/**
 * API Data Types
 */

export type TwitchUser = {
  id: string;
  login: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: number;
  createdAt: string;
};

export type TwitchGame = {
  id: string;
  name: string;
  box_art_url: string;
};

export type TwitchClip = {
  id: string;
  url: string;
  embed_url: string;
  broadcaster_id: string;
  broadcaster_name: string;
  creator_id: string;
  creator_name: string;
  video_id: string;
  game_id: string;
  language: string;
  title: string;
  view_count: number;
  created_at: string;
  thumbnail_url: string;
  duration: number;
  vod_offset: number;
};
