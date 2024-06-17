import { useEffect, useState } from 'react';
import { fetchRandomWordsService } from '../../services/random-word';

const isDisableFetching = true;

export const useFetchWord = () => {
  const [word, setWord] = useState('');

  const fetchRandomWord = async () => {
    try {
      const res = isDisableFetching
        ? 'testing'
        : await fetchRandomWordsService();
      setWord(res);
    } catch (error) {}
  };

  useEffect(() => {
    fetchRandomWord();
  }, []);

  return { word };
};

