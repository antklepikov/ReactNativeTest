import { createSelector } from "reselect";

const todoList = state => state.todos.todoList

export const getTodos = createSelector(
  [todoList],
  (list) => {
    return list
  }
)
