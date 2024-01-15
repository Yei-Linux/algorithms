import { useRef, useState } from 'react';
import styles from './style.module.css';

type TGameState = 'initial' | 'playing' | 'won' | 'lost';
type TGameColor = 'red' | 'green' | 'white';

const DEFAULT_TIME = 15;

export const GreendLightRedLight = () => {
  const intervalId = useRef(0);
  const [timeLeft, setTimeLeft] = useState(DEFAULT_TIME);

  const randomTimerColor = useRef(0);
  const [gameColor, setGameColor] = useState<TGameColor>('white');
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<TGameState>('initial');

  const startCounting = () => {
    const intervalIdValue = setInterval(() => {
      setTimeLeft((prev) => {
        const newValue = Math.max(prev - 1, 0);
        if (!newValue) {
          lostGame();
          return prev;
        }

        if (!randomTimerColor.current) {
          manageGameTimeColor(newValue);
          const newColor = changeRandomColor();
          setGameColor(newColor);
        }

        if (randomTimerColor.current === newValue) {
          const newColor = changeRandomColor();
          setGameColor(newColor);
          randomTimerColor.current = 0;
        }

        return newValue;
      });
    }, 1000);

    intervalId.current = intervalIdValue;
  };

  const manageGameTimeColor = (currentTime: number) => {
    const randomTime = Math.round(Math.random()) + 1;
    randomTimerColor.current = currentTime - randomTime;
  };

  const changeRandomColor = () => {
    if (gameColor === 'white') {
      const randomOne = Math.round(Math.random());
      return ['green', 'red'][randomOne] as 'green' | 'red';
    }
    if (gameColor === 'green') return 'red';
    return 'green';
  };

  const playingGame = () => setGameState('playing');

  const reset = () => {
    clearInterval(intervalId.current);
    setScore(0);
    randomTimerColor.current = 0;
    setGameColor('white');
    setTimeLeft(DEFAULT_TIME);
  };

  const lostGame = () => {
    setGameState('lost');
    reset();
  };

  const wonGame = () => {
    setGameState('won');
    reset();
  };

  const handleStartGame = () => {
    playingGame();
    startCounting();
  };

  const handleSquareClick = () => {
    if (gameColor !== 'green') {
      gameColor === 'red' && lostGame();
      return;
    }

    setScore((prev) => {
      const newValue = prev + 1;

      if (newValue >= 15) {
        wonGame();
      }

      return newValue;
    });
    return;
  };

  return (
    <div className={styles.wrapper}>
      {gameState !== 'playing' && (
        <button className={styles.button} onClick={handleStartGame}>
          Start Game
        </button>
      )}
      {gameState === 'playing' && (
        <p className={styles.timeleft_text}>Time Left: {timeLeft}s</p>
      )}
      <p className={styles.score_text}>Score: {score}</p>

      {gameState === 'lost' && <p className={styles.score_text}>Game Over!</p>}
      {gameState === 'won' && <p className={styles.score_text}>You won!</p>}

      {gameState === 'playing' && (
        <div
          className={styles.square}
          style={{ background: gameColor }}
          onClick={handleSquareClick}
        />
      )}
    </div>
  );
};
