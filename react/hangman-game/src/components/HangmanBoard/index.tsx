import { useFetchWord } from './useFetchWord';
import { useBuildLetters } from './useBuildLetters';
import { Square } from '../ui/Square';

export const HangmanBoard = () => {
  const { word } = useFetchWord();
  const { letters } = useBuildLetters({ word });

  return (
    <div className="flex flex-wrap gap-3">
      {letters.map(({ letter, isDisplayed, index }) => (
        <Square
          key={index}
          letter={isDisplayed ? letter : ''}
          theme="primary"
        />
      ))}
    </div>
  );
};
