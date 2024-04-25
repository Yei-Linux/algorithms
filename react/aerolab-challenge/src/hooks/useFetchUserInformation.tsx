import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchUserInfoThunk } from '../store/thunks/user.thunk';

export const useFetchUserInformation = () => {
  const dispatch = useAppDispatch();
  const { id, name, points } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserInfoThunk());
  }, []);

  return { id, name, points };
};
