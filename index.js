//external Import 
import express from "express"; //express package
import mongoose from "mongoose";
import 'dotenv/config'
//Internal import:routes
import { bookingRouter } from "./routes/all-routes.js";

//initialize app which holds express lib
const app = express();
//importing database
await mongoose.connect(process.env.MONGO_URI)
 
//use routes
app.use(express.json())
app.use(bookingRouter)

//listen for incoming requests
const PORT = 3057
app.listen(PORT, () =>
    console.log(`Server is listening on ${PORT}`))