import express from "express";  // change in the script
// const app = require("express")

import questionsRoutes from "./routes/questionsRoutes.js"

import {connectDB} from "./config/db.js"

//import dotenv from "dotenv"

//dotenv.config();

//console.log("PORT is",process.env.PORT);

const app = express();

//in order to excess the content of request body
app.use(express.json())

app.use("/api/questions",questionsRoutes)

connectDB().then(()=>{
app.listen(3000,()=>{
    console.log(`listening at port ${3000}`)
})
})

