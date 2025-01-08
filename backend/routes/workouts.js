const express = require("express");
const {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const { requireAuth } = require("../middleware/requireAuth");

const router = express.Router();

// require auth  for all workout routes
router.use(requireAuth);

// GET ALL WORKOUTS
router.get("/", getAllWorkouts);
// GET A SINGLE WORKOUT
router.get("/:id", getWorkout);
// POST NEW WORKOUT
router.post("/", createWorkout);
// DELETE WORKOUT
router.delete("/delete", deleteWorkout);
// UPDATE A WORKOUT
router.patch("/:id", updateWorkout);

module.exports = router;
