import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfoService } from '../../services/user.service';

export const fetchUserInfoThunk = createAsyncThunk('user/info', async () => {
  try {
    const response = await getUserInfoService();
    return response;
  } catch (error) {
    return null;
  }
});
