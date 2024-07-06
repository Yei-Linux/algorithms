import { useEffect, useState } from 'react';

export const MaxCount = () => {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(10);

  const increment = () => setCounter((prev) => prev + 1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>No of Clicks until timer expires</p>

      <div>
        <span>{counter}</span>

        <p>Time Left: {timer} seconds</p>

        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};
