import { useContext } from 'react';
import { vocabulary } from '../../constants';
import { Square } from '../ui/Square';
import { LettersContext } from '../../context/letters';
import { useKeyboard } from './useKeykoad';

export const LettersBoard = () => {
  const { updateLetter } = useContext(LettersContext);

  const { updateKeySelectedIndex, keySelectedIndex } = useKeyboard({
    vocabulary,
    updateLetter,
  });
  const vocabularyArray = vocabulary.split('');

  return (
    <div className="flex flex-wrap gap-3">
      {vocabularyArray.map((letter, index) => (
        <Square
          key={letter}
          isSelected={keySelectedIndex === index}
          letter={letter}
          theme="secondary"
          onClick={() => {
            updateKeySelectedIndex(index);
            updateLetter(letter);
          }}
        />
      ))}
    </div>
  );
};
