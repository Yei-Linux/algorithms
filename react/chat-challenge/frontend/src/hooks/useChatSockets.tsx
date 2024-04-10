import { useEffect, useRef } from 'react';
import { useAppDispatch } from '../store/hook';
import { socket } from '../App';
import { Message, addMessage } from '../store/slices/chat.slice';

export const useChatSockets = () => {
  const isMounted = useRef(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isMounted.current) return;

    isMounted.current = true;
    socket?.on('global chat', (message: Message) => {
      dispatch(addMessage(message));
    });
  }, []);

  return {};
};
