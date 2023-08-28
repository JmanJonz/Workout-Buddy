// imports
    // model so the controller can interact with it and indirectly interact with the database
        import workoutModel from "../models/workoutModel";

// get all workouts


// get a single workout


// create a new workout
    const createWorkout = async (req, res)=>{
        const {title, load, reps} = req.body
        // add doc to db
            try{
                // console.log(req.body);
                console.log(title, load, reps)
                const workout = await workoutModel.create({title, load, reps})
                res.status(200).json({workout})
            } catch(error){
                res.status(400).json({error: error.message})
            }
    }

// delete a workout


// update a workout


// exports
export {createWorkout};

