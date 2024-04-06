import { useEffect, useMemo, useState } from 'react';

type UseFetchPaginationSpoti<T> = {
  getDataService: (props: { limit: number; offset: number }) => Promise<T>;
};

export const useFetchPaginationSpoti = <T,>({
  getDataService,
}: UseFetchPaginationSpoti<T>) => {
  const limit = 10;
  const [offset, setOffset] = useState(1);
  const [data, setData] = useState<Record<string, T>>();

  useEffect(() => {
    handleFetchReleases();
  }, []);

  useEffect(() => {
    handleFetchReleases();
  }, [offset]);

  const handleFetchReleases = async () => {
    if (data?.[offset]) return;

    try {
      const items = await getDataService({
        limit,
        offset: offset * limit,
      });

      setData((prev) => ({ ...prev, [offset]: items }));
    } catch (error) {}
  };

  const handleNext = () => setOffset((prev) => prev + 1);
  const handlePrev = () => setOffset((prev) => Math.max(1, prev - 1));

  const dataValues = useMemo(() => {
    if (!data) return [];

    return data?.[offset] ?? [];
  }, [Object.keys(data ?? {}).length, offset]);

  return { dataValues, handleNext, handlePrev };
};
