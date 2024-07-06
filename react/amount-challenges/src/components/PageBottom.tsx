import { useEffect, useState } from 'react';

export const PageBottom = () => {
  const [isOnBottom, setIsOnBottom] = useState(false);

  const scroll = () => {
    const offsetHeight = document.documentElement.offsetHeight;
    const scrollTop = document.documentElement.scrollTop;
    const innerHeight = window.innerHeight;

    const computed = offsetHeight - (innerHeight + scrollTop);
    const hasReachedBottom = computed <= 10;
    setIsOnBottom(hasReachedBottom);
  };

  useEffect(() => {
    window.addEventListener('scroll', scroll);

    return () => window.removeEventListener('scroll', scroll);
  }, []);

  return (
    <div style={{ background: isOnBottom ? 'red' : 'white', color: 'black' }}>
      <h1>Welcome to Page Bottom Component</h1>

      <ul>
        {Array(50)
          .fill('')
          .map((_, index) => (
            <li>{index + 1}</li>
          ))}
      </ul>
    </div>
  );
};
