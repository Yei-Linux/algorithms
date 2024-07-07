import { RefObject, useEffect, useState } from 'react';

interface IUseIntersectionObserve {
  observedRef: RefObject<any>;
  onVisibleToViewport?: () => void;
}

const options = {
  root: null,
  margin: '0px',
  threshold: 1,
};

export const useIntersectionObserve = ({
  observedRef,
  onVisibleToViewport,
}: IUseIntersectionObserve) => {
  const [isRefInViewport, setIsRefInViewport] = useState(false);

  const callback = ([entry]: IntersectionObserverEntry[]) => {
    setIsRefInViewport(entry.isIntersecting);
    entry.isIntersecting && onVisibleToViewport?.();
  };

  useEffect(() => {
    if (!observedRef?.current) return;

    const observer = new IntersectionObserver(callback, options);
    observer.observe(observedRef.current);

    return () => {
      observer.unobserve(observedRef.current);
    };
  }, [observedRef]);

  return { isRefInViewport };
};
