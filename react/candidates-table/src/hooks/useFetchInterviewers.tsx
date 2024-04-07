import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchInterviewersThunk } from '../store/thunks/interviewers.thunk';

export const useFetchInterviewers = () => {
  const dispatch = useAppDispatch();
  const { interviewers } = useAppSelector((store) => store.interviewers);

  useEffect(() => {
    dispatch(fetchInterviewersThunk());
  }, []);

  return { interviewers };
};
