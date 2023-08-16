import express from "express";

const workoutRouter = express.Router();

workoutRouter.get("/", (req, res)=>{
    res.json({mssg: "Get all workouts."})
})

export default workoutRouter;