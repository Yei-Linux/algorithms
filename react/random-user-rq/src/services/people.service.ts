import { IPeopleResponse } from '../types/user.type';

type TGetPeoplePaginated = {
  page: number;
  results: number;
};

export const getPeoplePaginatedService = async ({
  page,
  results,
}: TGetPeoplePaginated) => {
  try {
    const params = new URLSearchParams(
      JSON.parse(JSON.stringify({ page, results }))
    ).toString();
    const promise = await fetch(`https://randomuser.me/api/?${params}`);
    const json = await promise.json();
    return json as IPeopleResponse;
  } catch (error) {
    throw new Error('Error getting people');
  }
};
