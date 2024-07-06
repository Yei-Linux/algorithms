import classNames from 'classnames';
import styles from './clock.module.css';
import { useEffect, useState } from 'react';

export const Clock = () => {
  const [secondsDeg, setSecondsDeg] = useState(0);
  const [minuteDeg, setMinuteDeg] = useState(0);
  const [hourDeg, setHourDeg] = useState(0);

  /**
   * 360deg - 12 hours
   * xdeg - 9 hours
   */
  const getDeg = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    setHourDeg((360 * hours) / 12);
    setMinuteDeg((360 * minutes) / 60);
    setSecondsDeg((360 * seconds) / 60);
  };

  useEffect(() => {
    const intervalId = setInterval(getDeg, 1000);
    return () => clearInterval(intervalId);
  }, [hourDeg, minuteDeg, secondsDeg]);

  return (
    <div className={styles.clock}>
      <div
        className={classNames(styles.clock_indicator, styles.clock_hours)}
        style={{ transform: `rotate(${hourDeg}deg)` }}
      />
      <div
        className={classNames(styles.clock_indicator, styles.clock_minutes)}
        style={{ transform: `rotate(${minuteDeg}deg)` }}
      />
      <div
        className={classNames(styles.clock_indicator, styles.clock_seconds)}
        style={{ transform: `rotate(${secondsDeg}deg)` }}
      />
    </div>
  );
};
