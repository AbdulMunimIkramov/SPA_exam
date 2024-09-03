import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, text: 'Первая задача', completed: false },
  { id: 2, text: 'Вторая задача', completed: true },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    removeTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, removeTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
