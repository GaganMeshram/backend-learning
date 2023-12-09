import dotenv from "dotenv"
import express from 'express'
import connectDB from "./db/db.js";

const app = express()

dotenv.config(
    {
        path: "./env"
    }
)

/*
( async()=>{
    try {
        mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("Error: ",error)
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`application is running on port ${process.env.PORT}` )
        })
    } 
    
    
catch (error) {
    console.error("ERROR: ", error)        
    }
})()
*/

connectDB()