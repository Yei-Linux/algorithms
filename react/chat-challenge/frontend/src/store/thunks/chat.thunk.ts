import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMessages } from '../../services/chat.service';

export const getMessagesThunk = createAsyncThunk(
  'chat/fetchMessages',
  async () => {
    const data = fetchMessages();
    return data;
  }
);
