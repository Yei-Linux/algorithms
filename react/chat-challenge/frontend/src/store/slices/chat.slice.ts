import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
  messages: [
    {
      text: 'Hi',
      userId: '1',
      id: '1',
    },
    {
      text: 'How r u?',
      userId: '1',
      id: '2',
    },
    {
      text: 'Hey Bro!',
      userId: '1aaaab75-7484-4c04-8ef8-4d310c30873a',
      id: '3',
    },
  ],
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
});

export const { setInitialMessages, addMessage, setUserId } = chatSlice.actions;

export default chatSlice.reducer;
