import { Chat } from './components/Chat';
import { useGenerateSession } from './hooks/useGenerateSession';

function App() {
  useGenerateSession();

  return (
    <div className="p-4 rounded-md shadow-md h-full flex justify-center items-center">
      <Chat />
    </div>
  );
}

export default App;
