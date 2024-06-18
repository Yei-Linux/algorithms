import { useEffect, useState } from 'react';
import { Board } from './components/Board';
import { deck } from './constants';

function App() {
  const [corrects, setCorrects] = useState<Array<number>>([]);
  const [cardsSelected, setCardsSelected] = useState<Array<number>>([]);

  const resetCards = () => setCardsSelected([]);

  const isCorrect = (index: number) => corrects.includes(index);

  const handleVerify = (index: number) => {
    const correct = isCorrect(index);
    if (correct) return;

    const filtered = cardsSelected.filter((item) => item !== index);
    const isIncluded = filtered.length !== cardsSelected.length;
    if (cardsSelected.length === 2 && !isIncluded) return;

    if (!isIncluded) {
      setCardsSelected([...filtered, index]);
      return;
    }
    if (isIncluded) {
      setCardsSelected(filtered);
      return;
    }
  };

  const timeoutPromisify = (timer: number, cb: () => void) => {
    return new Promise((res) => {
      setTimeout(() => {
        res(cb());
      }, timer);
    });
  };

  const analyzeCardsSelected = async () => {
    if (cardsSelected.length !== 2) return;

    const [item1, item2] = cardsSelected;
    if (deck[item1] !== deck[item2]) {
      await timeoutPromisify(2000, resetCards);
      return;
    }

    setCorrects((prev) => [...prev, item1, item2]);
    resetCards();
  };

  const isFlipped = (index: number) =>
    corrects.includes(index) || cardsSelected.includes(index);

  useEffect(() => {
    analyzeCardsSelected();
  }, [cardsSelected.length]);

  return (
    <Board>
      {deck.map((symbol, index) => (
        <Board.Square
          content={symbol}
          onClick={() => handleVerify(index)}
          isFlipped={isFlipped(index)}
        />
      ))}
    </Board>
  );
}

export default App;
