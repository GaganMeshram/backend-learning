import dotenv from "dotenv"
import express from 'express'
import connectDB from "./db/db.js";

const app = express()
const PORT = process.env.PORT

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
.then(()=>{
    app.listen(PORT || 8000, ()=>{
        console.log(`Server is up and running on ${PORT}`)
    })
})
.catch((err)=>{
    console.log(`Database connection FAILED !!! `, err)
})