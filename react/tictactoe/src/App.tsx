import { useState } from 'react';
import './App.css';
import { Board } from './Board';
import { Token } from './Tokens';
import { handleDecideWhoWins } from './helper';

type PlayerTurn = 'A' | 'B';
const SIZE = 3;

export type Tokens = Record<string, Token> | null;

function App() {
  const [winner, setWinner] = useState<PlayerTurn | null>(null);
  const [playerTurn, setPlayerTurn] = useState<PlayerTurn>('A');
  const [tokens, setToken] = useState<Tokens>(null);

  const isValidMove = (position: string) => {
    return !tokens?.[position];
  };

  const makeToken = () => ({ type: playerTurn });

  const handleMakeAMove = (position: string) => {
    const isValid = isValidMove(position);
    if (!isValid) return;

    const tokenResult = makeToken();
    const newTokens = { ...tokens, [position]: tokenResult };
    setToken(newTokens);
    handleDecideWhoWins(newTokens, SIZE, setWinner);
    setPlayerTurn((prev) => (prev === 'A' ? 'B' : 'A'));
  };

  return (
    <div>
      {winner ? (
        <p>The winner is the player {winner}</p>
      ) : (
        <Board size={SIZE} onClickCell={handleMakeAMove} tokens={tokens} />
      )}
    </div>
  );
}

export default App;
