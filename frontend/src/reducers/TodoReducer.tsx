import { todoAction, todoType } from "../types/todoType";

export const todoReducer = (
  state: todoType[],
  action: todoAction
): todoType[] => {
  switch (action.type) {
    case "SET_TODO":
      return action.payload;
    case "ADD_TODO":
      return [action.payload, ...state];
    case "DELETE_TODO":
      return state.filter((todo) => todo.title !== action.payload.title);

    default:
      return [];
  }
};
