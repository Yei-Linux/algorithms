import './App.css';
import { HangmanBoard } from './components/HangmanBoard';
import { LettersBoard } from './components/LettersBoard';
import { Message } from './components/Message';
import { LettersProvider } from './context/letters/provider';

function App() {
  return (
    <LettersProvider>
      <div className="flex flex-col gap-10 justify-center items-center">
        <HangmanBoard />
        <LettersBoard />
        <Message />
      </div>
    </LettersProvider>
  );
}

export default App;
