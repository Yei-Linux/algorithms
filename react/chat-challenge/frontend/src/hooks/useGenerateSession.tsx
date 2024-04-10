import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../store/hook';
import { setUserId } from '../store/slices/chat.slice';

const LSSession = '__chat_challenge_userId';

export const useGenerateSession = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    generateSession();
  }, []);

  const generateSession = () => {
    const sessionId = localStorage.getItem(LSSession);
    if (sessionId) {
      dispatch(setUserId(sessionId));
      return;
    }

    const userId = uuidv4();
    localStorage.setItem(LSSession, userId);
    dispatch(setUserId(userId));
  };
};
