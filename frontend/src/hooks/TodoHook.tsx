import { useContext } from "react";
import { todoContext } from "../context/TodoContext";

export const useTodoContext = () => {
  const context = useContext(todoContext);
  if (!context) {
    throw Error("error to use context");
  }
  return context;
};
