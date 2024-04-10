import { useEffect } from 'react';
import { useAppDispatch } from '../store/hook';
import { getMessagesThunk } from '../store/thunks/chat.thunk';

export const useSetInitialMessages = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMessagesThunk());
  }, []);
};
