import classNames from 'classnames';
import styles from './styles.module.css';
import { useRef, useState } from 'react';

interface IFormatTimer {
  minutes: number;
  seconds: number;
}

const formatTimer = (timerInSeconds: number): IFormatTimer => {
  const minutes = timerInSeconds / 60;
  const seconds = timerInSeconds % 60;

  return { minutes, seconds };
};

export const StopWatchTimer = () => {
  const intervalIdRef = useRef(0);
  const [timer, setTimer] = useState(0);
  const { minutes, seconds } = formatTimer(timer);

  const startTimer = () => {
    const intervalId = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    intervalIdRef.current = intervalId;
  };

  const stopTimer = () => {
    clearInterval(intervalIdRef.current);
  };

  const resetTimer = () => {
    clearInterval(intervalIdRef.current);
    setTimer(0);
  };

  return (
    <div className="container">
      <h1>Timer</h1>
      <span> {minutes} mins </span>
      <span> {seconds} secs</span>
      <div className={styles.controls}>
        <button
          className={classNames(styles.button, styles.button_start)}
          onClick={startTimer}
        >
          Start
        </button>
        <button
          className={classNames(styles.button, styles.button_stop)}
          onClick={stopTimer}
        >
          Stop
        </button>
        <button
          className={classNames(styles.button, styles.button_reset)}
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
