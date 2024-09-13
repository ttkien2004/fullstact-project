const WorkoutModel = require('../models/WorkoutModel')
const mongoose = require('mongoose');
// get all workouts
const getAllWorkouts = async (req, res) => {    
    try {
        // sort in descending order
        const workouts = await WorkoutModel.find({}).sort({createdAt: -1});         
        res.status(200).json(workouts);
    }
    catch (err) {
        res.status(400).json({error: err.message});
    }
    
}
//get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Could not find workout"});
    }
    try {
        const workout = await WorkoutModel.findById(id);
        res.status(200).json(workout);
    }catch (err) {
        res.status(404).json({error: err.message});
    }   
}
// create new workout
const createWorkout = async (req, res) => {
    // const {title, load, reps} = req.body;

    try {
        const workout = await WorkoutModel.create({...req.body});
        res.status(200).json(workout);
    }
    catch (err) {
        res.status(400).json({error: err.message});
    }    
}
// delete a workout
const deleteWorkout = async (req, res) => {
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({error: "Could not find workout"});
    // }
    if (!req.body) {
        return res.status(404).json({error: "Could not find workout"});
    }
    try {                
        const workout = await WorkoutModel.findOneAndDelete({
            ...req.body
        })                      
        res.status(200).json(workout);
    }catch (err) {
        res.status(404).json({error: err.message});
    }
}
// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Could not find workout"});
    }

    try {
        const workout = await WorkoutModel.findOneAndUpdate({_id: id}, {            
            ...req.body
        });
        res.status(200).json({workout});
    }catch (err) {
        res.status(404).json({error: err.message});
    }
}

module.exports = {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}