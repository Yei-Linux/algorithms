import { useAppSelector } from '../store/hook';
import { Message } from './Message';

export const Chat = () => {
  const { messages, userId } = useAppSelector((store) => store.chatReducer);

  return (
    <div className="p-4 w-full max-w-[400px] max-h-[400px] overflow-x-auto bg-black flex flex-col gap-3 rounded-xl shadow-lg">
      {messages.map(({ id, text, userId: userIdMessage }) => (
        <Message
          key={id}
          text={text}
          variant={userId === userIdMessage ? 'primary' : 'secondary'}
        />
      ))}
    </div>
  );
};
