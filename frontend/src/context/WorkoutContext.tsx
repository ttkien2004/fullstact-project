import React, { useState } from "react";
import {
  workoutType,
  workoutContextType,
  workoutAction,
} from "../types/workoutType";
import { workoutReducer } from "../reducers/workoutReducer";

interface Props {
  children: React.ReactNode;
}
export const workoutContext = React.createContext<{
  workouts: workoutType[];
  dispatch: React.Dispatch<workoutAction>;
} | null>(null);

const WorkoutContextProvider: React.FC<Props> = ({ children }) => {
  const [workouts, dispatch] = React.useReducer(workoutReducer, []);
  return (
    <workoutContext.Provider value={{ workouts, dispatch }}>
      {children}
    </workoutContext.Provider>
  );
};

export default WorkoutContextProvider;
