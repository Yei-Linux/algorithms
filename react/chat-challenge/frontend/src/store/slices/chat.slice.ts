import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getMessagesThunk } from '../thunks/chat.thunk';

export type Message = {
  text: string;
  id: string;
  userId: string;
};

export type ChatInitialState = {
  chatId: string;
  userId?: string;
  messages: Array<Message>;
};

const CHATID = 'ccb36475-155e-4bc5-a79d-2a46d34dd28b';

const initialState: ChatInitialState = {
  chatId: CHATID,
  messages: [],
};

const chatSlice = createSlice({
  name: 'chatSlice',
  initialState,
  reducers: {
    setInitialMessages: (
      state,
      action: PayloadAction<ChatInitialState['messages']>
    ) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getMessagesThunk.fulfilled,
      (state, action: PayloadAction<Message[]>) => {
        state.messages = action.payload;
      }
    );
  },
});

export const { setInitialMessages, addMessage, setUserId, } = chatSlice.actions;

export default chatSlice.reducer;
