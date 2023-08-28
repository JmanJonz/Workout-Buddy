// imports
    // npm modules
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
    workoutRouter.post('/', async (req, res) =>{
        const {title, load, reps} = req.body
        try{
            // console.log(req.body);
            console.log(title, load, reps)
            const workout = await workoutModel.create({title, load, reps})
            res.status(200).json({workout})
        } catch(error){
            res.status(400).json({error: error.message})
        }
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