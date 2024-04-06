import { getTokenFromStorage } from '../helpers';
import { PlaylistResponse } from '../types/playlist';
import { Pagination } from './release.service';

type Playlist = Pagination;

export const fetchPlaylist = async ({ limit, offset }: Playlist) => {
  const token = getTokenFromStorage();

  try {
    const params = new URLSearchParams(
      JSON.parse(JSON.stringify({ limit, offset }))
    );
    const promise = await fetch(
      'https://api.spotify.com/v1/browse/featured-playlists?' +
        params.toString(),
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    const json = (await promise.json()) as PlaylistResponse;
    return json.playlists.items;
  } catch (error) {
    throw new Error('Getting playlist throw an error');
  }
};
