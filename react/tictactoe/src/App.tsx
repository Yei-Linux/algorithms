import { useState } from 'react';
import './App.css';
import { Board } from './Board';
import { Token } from './Tokens';

type PlayerTurn = 'A' | 'B';

function App() {
  const [playerTurn, setPlayerTurn] = useState<PlayerTurn>('A');
  const [tokens, setToken] = useState<Record<string, Token> | null>(null);

  const isValidMove = (position: number) => {
    return !tokens?.[position];
  };

  const makeToken = () => ({ type: playerTurn });

  const handleMakeAMove = (position: number) => {
    const isValid = isValidMove(position);
    if (!isValid) return;

    const tokenResult = makeToken();
    setToken((prev) => ({ ...prev, [position]: tokenResult }));
    setPlayerTurn((prev) => (prev === 'A' ? 'B' : 'A'));
  };

  return (
    <div>
      <Board size={3} onClickCell={handleMakeAMove} tokens={tokens} />
    </div>
  );
}

export default App;
