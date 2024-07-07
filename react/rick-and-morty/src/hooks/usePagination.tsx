import { useState } from 'react';

export const usePagination = () => {
  const [page, setPage] = useState(1);

  const nextPage = () => setPage((prev) => prev + 1);

  return { page, nextPage };
};
