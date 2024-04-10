import { Chat } from './components/Chat';
import { Typing } from './components/Typing';
import { SocketClient } from './helpers/socket';
import { useGenerateSession } from './hooks/useGenerateSession';
import { useChatSockets } from './hooks/useChatSockets';
import { useSetInitialMessages } from './hooks/useSetInitialMessages';

export const socket = new SocketClient();
socket.connect();

function App() {
  useChatSockets();
  useSetInitialMessages();
  useGenerateSession();

  return (
    <div className="p-4 rounded-md shadow-md h-full flex flex-col gap-7 justify-center items-center">
      <Chat />
      <Typing />
    </div>
  );
}

export default App;
