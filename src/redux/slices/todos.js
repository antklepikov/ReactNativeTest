import { createSlice } from '@reduxjs/toolkit'
import without from 'lodash/without'

const initialState = {
  todoList: [],
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createTodo: (state, action) => {
      state.todoList = state.todoList.concat(action.payload.data)
    },
    deleteTodo: (state, action) => {
      state.todoList = without(state.todoList, action.payload)
    }
  }
});

export const {
  createTodo,
  deleteTodo
} = slice.actions

export default slice.reducer
