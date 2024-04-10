import { useState } from 'react';
import { useAppSelector } from '../store/hook';
import { socket } from '../App';

export const Typing = () => {
  const { userId } = useAppSelector((state) => state.chatReducer);

  const [newMessage, setNewMessage] = useState('');

  const reset = () => setNewMessage('');

  const handleUpdateMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewMessage(value);
  };

  const handleAddMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userId) return;

    socket.emit('global chat', {
      text: newMessage,
      userId,
    });

    reset();
  };

  return (
    <form
      className="flex items-center gap-3 w-full max-w-[400px]"
      onSubmit={handleAddMessage}
    >
      <input
        type="text"
        value={newMessage}
        onChange={handleUpdateMessage}
        className="outline-none border-3 bg-black rounded-lg shadow-lg w-full p-3 text-white"
      />

      <button type="submit" className="w-fit bg-primary rounded-lg p-3">
        Send
      </button>
    </form>
  );
};
