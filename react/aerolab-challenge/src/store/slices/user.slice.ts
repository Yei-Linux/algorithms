import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/user.type';
import { fetchUserInfoThunk } from '../thunks/user.thunk';

const initialState: User = {
  id: '',
  name: '',
  points: 0,
  redeemHistory: [],
  createDate: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUserInfoThunk.fulfilled,
      (state, action: PayloadAction<User | null | undefined>) => {
        if (!action.payload) return;
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.points = action.payload.points;
        state.redeemHistory = action.payload.redeemHistory;
        state.createDate = action.payload.createDate;
      }
    );
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
