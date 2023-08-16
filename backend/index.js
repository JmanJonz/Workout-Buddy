import express from "express";
import dotenv from "dotenv";

// Import routers to use
    import workoutRouter from "./routes/workouts.js";

// Set up the dotenv module
dotenv.config();

// Make express app.
const app = express();

// Server listening on port 3000 and localhost
app.listen(3000, () => {
    console.log("Server listening on Localhost and port 3000." );
});

// Start listening on port at my ip address and custom port...
app.listen(process.env.PORT, process.env.MYIPADDRESS, () => {
    console.log("Server listening at my ip address and custom port.");
});

// Middleware loging requests before response 
app.use((req, res, next)=>{ 
    console.log(req.path, req.method); 
    // Run next method but in this case not moving on to any more middleware... 
    next(); 
});

// Connect Imported Routes To This Live Server:
app.use("/api/workouts", workoutRouter);


