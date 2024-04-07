import { configureStore } from '@reduxjs/toolkit';
import interviewerReducer from './slices/interviewer.slice';

export const store = configureStore({
  reducer: {
    interviewers: interviewerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
