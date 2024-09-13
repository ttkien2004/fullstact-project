import { workoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
  const context = useContext(workoutContext);

  if (!context) {
    throw Error("error to use context");
  }
  return context;
};
