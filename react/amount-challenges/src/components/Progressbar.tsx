import { useState } from 'react';
import './styles.module.css';

export default function Progressbar() {
  const [percent, setPercent] = useState(0);

  const setValuer = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPercent(Math.max(0, Math.min(+e.target.value, 100)));

  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>

        <progress max={100} value={percent}></progress>

        <form>
          <label htmlFor="percentChanger">Input Percentage:</label>
          <input id="percentChanger" type="number" onChange={setValuer} />
        </form>
      </div>
    </>
  );
}
