import { useEffect, useState } from 'react';

export const WindowsResize = () => {
  const [width, setWidth] = useState(() => window.innerWidth);
  const [height, setHeight] = useState(() => window.innerHeight);

  const handleResize = (e: Event) => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <p>
        <strong>width:</strong> {width}px
      </p>
      <p>
        <strong>height:</strong> {height}px
      </p>
    </div>
  );
};
