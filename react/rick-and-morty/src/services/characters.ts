import { THIRDPARTY_API_URL } from '../constants';
import { ThirdPartyApiError } from '../errors/ThirdPartyApiError';
import { Root } from '../types/api.type';

export const fetchCharacters = async (page: string): Promise<Root> => {
  try {
    const params = new URLSearchParams({
      page,
    }).toString();

    const result = await fetch(`${THIRDPARTY_API_URL}/character?${params}`);
    const json = await result.json();
    return json;
  } catch (error) {
    throw new ThirdPartyApiError(
      'Error getting characters fronm rick and morty api'
    );
  }
};
