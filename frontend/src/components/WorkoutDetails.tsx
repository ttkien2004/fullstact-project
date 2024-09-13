import React from "react";
import { workoutType } from "../types/workoutType";
import { workoutContext } from "../context/WorkoutContext";
import workoutAPI from "../services/workoutAPI";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

interface WorkoutDetails {
  workout: workoutType;
}
export default function WorkoutDetails({ workout }: WorkoutDetails) {
  const { dispatch } = useWorkoutContext();
  const handleDelete = async () => {
    try {
      const response = await workoutAPI.delete(workout);
      if (response) {
        dispatch({
          type: "DELETE_WORKOUT",
          payload: response.data as workoutType,
        });
      }
    } catch {
      console.log("can not delete");
    }
  };
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleDelete}>delete</span>
    </div>
  );
}
