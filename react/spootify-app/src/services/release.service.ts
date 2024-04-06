import { ReleasesResponse } from '../types/releases';

export type Pagination = {
  limit: number;
  offset: number;
};

type FetchReleases = Pagination;

export const fetchReleases = async ({ limit, offset }: FetchReleases) => {
  const token = localStorage.getItem('SPOTI_TOKEN');
  if (!token) {
    throw new Error('Token is not valid');
  }

  try {
    const params = new URLSearchParams(
      JSON.parse(JSON.stringify({ limit, offset }))
    );
    const promise = await fetch(
      'https://api.spotify.com/v1/browse/new-releases?' + params.toString(),
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    const json = (await promise.json()) as ReleasesResponse;
    return json.albums.items;
  } catch (error) {
    throw new Error('Error getting releases');
  }
};
