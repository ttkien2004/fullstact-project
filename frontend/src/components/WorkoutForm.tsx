import React, { SetStateAction, useState } from "react";
import { workoutType } from "../types/workoutType";
import workoutAPI from "../services/workoutAPI";
import { workoutContext } from "../context/WorkoutContext";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";

export default function WorkoutForm() {
  let emptyWorkout: workoutType = {
    _id: "",
    title: "",
    load: 0,
    reps: 0,
    createdAt: "",
  };
  const { dispatch } = useWorkoutContext();
  const { auth } = useAuthContext();
  const [workout, setWorkout] = useState<workoutType>(emptyWorkout);
  const [error, setError] = useState<boolean>(false);
  const inputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const value = e.target.value;
    let _workout = { ...workout };
    _workout[`${type}`] = value;
    setWorkout(_workout);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!auth.token) {
      setError(true);
      return;
    }
    try {
      const response = await workoutAPI.create(workout);
      if (response) {
        setError(false);
        dispatch({ type: "ADD_WORKOUT", payload: workout });
        setWorkout(emptyWorkout);
        console.log("Create new workout successfully");
      }
    } catch {
      console.log("Can not create new workout");
      setError(true);
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Exercise Title:</label>
      <input
        type="text"
        onChange={(e) => {
          inputChange(e, "title"), setError(false);
        }}
        value={workout.title}
      />

      <label>Load (in kg):</label>
      <input
        type="number"
        onChange={(e) => {
          inputChange(e, "load"), setError(false);
        }}
        value={workout.load}
      />

      <label>Number of Reps:</label>
      <input
        type="number"
        onChange={(e) => {
          inputChange(e, "reps"), setError(false);
        }}
        value={workout.reps}
      />

      <button>Add Workout</button>
      {error && <div className="error">{"Can not add new workout"}</div>}
    </form>
  );
}
