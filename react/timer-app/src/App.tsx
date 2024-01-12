import { useEffect, useRef, useState } from 'react';
import styles from './App.module.css';

/**
 * 10m -> 10 * 60 = 600
 * 590 => 590 / 60
 * @returns
 */

const formatTimer = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secondsRest = Math.floor(seconds % 60);

  return `${minutes.toString().padStart(2, '0')}:${secondsRest
    .toString()
    .padStart(2, '0')}`;
};

const INITIAL_STARTED_SECONDS = 600;

function App() {
  const timerSeconds = useRef(INITIAL_STARTED_SECONDS);
  const [timerString, setTimerString] = useState('');

  const calculateNewTimer = () => {
    const recalculated = timerSeconds.current - 1;
    const isNegative = recalculated < 0;
    if (isNegative) {
      return INITIAL_STARTED_SECONDS;
    }
    return recalculated;
  };

  useEffect(() => {
    const storageReactTimer = localStorage.getItem('react_timer');
    if (storageReactTimer) {
      timerSeconds.current = Number(storageReactTimer);
    }

    const intervalId = setInterval(() => {
      const timerString = formatTimer(timerSeconds.current);
      const recalculated = calculateNewTimer();

      localStorage.setItem('react_timer', recalculated.toString());

      timerSeconds.current = recalculated;
      setTimerString(timerString);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <time className={styles.timer}>{timerString}</time>
    </div>
  );
}

export default App;
