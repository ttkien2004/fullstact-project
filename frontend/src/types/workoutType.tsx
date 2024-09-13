export interface workoutType {
  [x: string]: string | number | undefined;
  _id: string;
  title: string;
  load: number;
  reps: number;
  createdAt: string;
}

export interface workoutContextType {
  workoutList: workoutType[];
  setWorkoutList: React.Dispatch<React.SetStateAction<workoutType[]>>;
  saveWorkout: (workout: workoutType) => void;
}

export type workoutAction =
  | { type: "SET_WORKOUT"; payload: workoutType[] }
  | { type: "ADD_WORKOUT"; payload: workoutType }
  | { type: "DELETE_WORKOUT"; payload: workoutType };
