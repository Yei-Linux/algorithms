import { getTokenFromStorage } from '../helpers';
import { CategoriesResponse } from '../types/categories';
import { Pagination } from './release.service';

type Playlist = Pagination;

export const fetchCategories = async ({ limit, offset }: Playlist) => {
  const token = getTokenFromStorage();

  try {
    const params = new URLSearchParams(
      JSON.parse(JSON.stringify({ limit, offset }))
    );
    const promise = await fetch(
      'https://api.spotify.com/v1/browse/categories?' + params.toString(),
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    const json = (await promise.json()) as CategoriesResponse;
    return json.categories.items;
  } catch (error) {
    throw new Error('Getting categories throw an error');
  }
};
