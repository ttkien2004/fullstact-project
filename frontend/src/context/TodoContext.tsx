import React from "react";
import { todoAction, todoType } from "../types/todoType";
import { todoReducer } from "../reducers/TodoReducer";

interface Props {
  children: React.ReactNode;
}

export const todoContext = React.createContext<{
  todos: todoType[];
  dispatch: React.Dispatch<todoAction>;
} | null>(null);

const TodoContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, dispatch] = React.useReducer(todoReducer, []);
  return (
    <todoContext.Provider value={{ todos, dispatch }}>
      {children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
