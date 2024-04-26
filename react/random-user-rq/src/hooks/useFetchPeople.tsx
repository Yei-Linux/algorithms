import { useQuery } from '@tanstack/react-query';
import { getPeoplePaginatedService } from '../services/people.service';

const RESULSET_SIZE = 10;

export interface IUseFetchPeople {
  page: number;
}

export const useFetchPeople = ({ page }: IUseFetchPeople) => {
  const { data } = useQuery({
    queryKey: ['people', page],
    queryFn: () => getPeoplePaginatedService({ page, results: RESULSET_SIZE }),
  });

  return { data };
};
