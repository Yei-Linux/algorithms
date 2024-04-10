import { useEffect, useRef } from 'react';
import { useAppSelector } from '../store/hook';
import { Message as MessageComponent } from './Message';

export const Chat = () => {
  const chatRef = useRef<HTMLUListElement>(null);
  const { messages, userId } = useAppSelector((store) => store.chatReducer);

  useEffect(() => {
    const scrollHeight = chatRef.current?.scrollHeight;

    chatRef.current?.scroll({
      top: scrollHeight,
      behavior: 'smooth',
    });
  }, [messages.length]);

  return (
    <ul
      ref={chatRef}
      className="p-4 w-full max-w-[400px] h-[400px] overflow-x-auto bg-black flex flex-col gap-3 rounded-xl shadow-lg"
    >
      {messages.map(({ id, text, userId: userIdMessage }) => (
        <MessageComponent
          key={id}
          text={text}
          variant={userId === userIdMessage ? 'primary' : 'secondary'}
        />
      ))}
    </ul>
  );
};
