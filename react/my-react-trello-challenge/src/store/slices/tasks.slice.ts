import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet(
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  10
);

export type Task = {
  id: string;
  text: string;
  state: 'pending' | 'done';
};

export type TodoState = {
  tasks: Array<Task>;
};

const initialState: TodoState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<Pick<Task, 'text'>>) => {
      const id = nanoid();
      state.tasks = [
        ...state.tasks,
        { ...action.payload, id, state: 'pending' },
      ];
    },
    updateTask: (state, action: PayloadAction<Partial<Task>>) => {
      state.tasks.forEach((task) => {
        if (task.id !== action.payload.id) return;

        if (action.payload.state) task.state = action.payload.state;
        if (action.payload.text) task.text = action.payload.text;
      });
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { createTask, updateTask, removeTask } = tasksSlice.actions;

export default tasksSlice.reducer;
