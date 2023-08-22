// imports
    import express from "express";

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
    workoutRouter.post('/', (req, res) =>{
        res.json({mssg: "Post a new workout"})
    })

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