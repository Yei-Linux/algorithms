import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../services/characters';
import { useEffect, useState } from 'react';
import { Result } from '../types/api.type';

interface IUseFetchCaracters {
  page: number;
}

export const useFetchCharacters = ({ page }: IUseFetchCaracters) => {
  const [characters, setCharacters] = useState<Result[]>([]);
  const { data: charactersByPage, isLoading } = useQuery({
    queryKey: ['characters', page],
    queryFn: () => fetchCharacters(page.toString()),
    select: (data) => data.results,
  });

  const updateCharacters = () => {
    if (!charactersByPage) return;
    setCharacters((prev) => [...prev, ...charactersByPage]);
  };

  useEffect(() => {
    updateCharacters();
  }, [charactersByPage]);

  return { characters, isLoading };
};
