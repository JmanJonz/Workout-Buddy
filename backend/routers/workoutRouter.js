// imports
    // npm modules
        import express from "express";
    // controller functions
        import { createWorkout } from "../controllers/workoutController";

// configurations
    const workoutRouter = express.Router();

// get all workouts
    workoutRouter.get("/", (req, res)=>{
        res.json({mssg: "Get all workouts."})
    })

// get a single workout
    workoutRouter.get("/:id", (req, res)=>{
        res.json({mssg: "Get a single workout"})
    })

// post a new workout
    workoutRouter.post('/', createWorkout)

// delete a workout
    workoutRouter.delete('/:id', (req, res) =>{
        res.json({mssg: "Delete a workout"})
    }) 

// update a workout
    workoutRouter.patch('/:id', (req, res) =>{
        res.json({mssg: "Update a workout"})
    })
// exports
    export default workoutRouter;