import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express()



//Middlwares
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())


//Server
app.get('/', (req, res))
app.listen(process.env.PORT, (req, res)=>{
    console.log(`Server is up on port ${process.env.PORT}`)
})