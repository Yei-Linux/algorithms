import { useState } from 'react';

export const useToggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => setIsVisible((prev) => !prev);

  return { isVisible, toggle };
};
