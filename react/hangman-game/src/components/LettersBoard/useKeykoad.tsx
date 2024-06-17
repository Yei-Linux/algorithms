import { useEffect, useState } from 'react';

export interface IUseKeyboard {
  vocabulary: string;
  updateLetter: (letter: string) => void;
}

export const useKeyboard = ({ vocabulary, updateLetter }: IUseKeyboard) => {
  const arrows = ['ArrowRight', 'ArrowLeft'];
  const [keySelectedIndex, setKeySelectedIndex] = useState<number>(-1);

  const updateKeySelectedIndex = (index: number) => setKeySelectedIndex(index);

  const handleKeySelected = (e: KeyboardEvent) => {
    const keyPressed = e.key;

    if (keyPressed === 'Enter' && keySelectedIndex !== null)
      return updateLetter(vocabulary[keySelectedIndex]);
    if (!arrows.includes(keyPressed)) return;

    const newIndex =
      keyPressed === 'ArrowRight' ? keySelectedIndex + 1 : keySelectedIndex - 1;
    const newstate = Math.min(Math.max(newIndex, 0), vocabulary.length - 1);
    setKeySelectedIndex(newstate);
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeySelected);
    return () => window.removeEventListener('keyup', handleKeySelected);
  }, [keySelectedIndex]);

  return { handleKeySelected, keySelectedIndex, updateKeySelectedIndex };
};
