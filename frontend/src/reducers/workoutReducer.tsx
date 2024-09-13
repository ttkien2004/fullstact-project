import { workoutType, workoutAction } from "../types/workoutType";

export const workoutReducer = (
  state: workoutType[],
  action: workoutAction
): workoutType[] => {
  switch (action.type) {
    case "SET_WORKOUT":
      return action.payload;
    case "ADD_WORKOUT":
      return [action.payload, ...state];
    case "DELETE_WORKOUT":
      return state.filter(
        (workout: workoutType) => workout.title !== action.payload.title
      );

    default:
      return state;
  }
};
