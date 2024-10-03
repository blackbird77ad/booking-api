//external Import 
import express from "express"; //express package
import mongoose from "mongoose";
import 'dotenv/config'
import cors from 'cors'

//Internal import:routes
import { bookingRouter } from "./routes/all-routes.js";

//initialize app which holds express lib
const app = express();
//importing database
await mongoose.connect(process.env.MONGO_URI)

 //adding cors
 app.use(cors())
//Fetch json 
app.use(express.json())
//use routes
app.use(bookingRouter)

//listen for incoming requests
const PORT = 3999
app.listen(PORT, () =>
    console.log(`Server is listening on ${PORT}`))