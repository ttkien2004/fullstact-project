import React, { useContext, useEffect, useState } from "react";
import workoutAPI from "../services/workoutAPI";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Home() {
  const { workouts, dispatch } = useWorkoutContext();
  const { auth } = useAuthContext();
  useEffect(() => {
    if (auth.token) {
      workoutAPI
        .getAll()
        .then((res) => {
          dispatch({ type: "SET_WORKOUT", payload: res.data ?? [] });
        })
        .catch(() => {
          console.log("Can not fetch data");
        });
    }
  }, [auth]);
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout, index) => (
            <WorkoutDetails key={index} workout={workout}></WorkoutDetails>
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
}
