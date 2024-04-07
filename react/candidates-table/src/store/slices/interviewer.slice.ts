import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Interviewer } from '../../types/interviewers.type';
import { RootState } from '..';
import {
  fetchInterviewersThunk,
  patchInterviewerThunk,
} from '../thunks/interviewers.thunk';

type InterviewerStore = {
  interviewers: Interviewer[];
  search: string;
};

const initialState: InterviewerStore = {
  interviewers: [],
  search: '',
};

export const interviewersSlice = createSlice({
  name: 'Interviewers',
  initialState,
  reducers: {
    setInterviewers: (state, action: PayloadAction<Interviewer[]>) => {
      state.interviewers = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchInterviewersThunk.fulfilled,
      (state, action: PayloadAction<Interviewer[]>) => {
        state.interviewers = action.payload;
      }
    );
    builder.addCase(
      patchInterviewerThunk.fulfilled,
      (state, action: PayloadAction<Interviewer>) => {
        state.interviewers = state.interviewers.map((interviewer) => {
          if (interviewer.id !== action.payload.id) return interviewer;
          return action.payload;
        });
      }
    );
  },
});

export const { setInterviewers, setSearch } = interviewersSlice.actions;

export const selectInterviewers = (state: RootState) =>
  state.interviewers.interviewers;
export const selectSearch = (state: RootState) => state.interviewers.search;

export default interviewersSlice.reducer;
