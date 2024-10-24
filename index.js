import express from "express";
import cors from 'cors';
import dotenv from 'dotenv'
import connectDB from "./Database/dbConfig.js";
import RecipeRouter from './Routers/recipesRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to server")
})

//custom routes in recepies
app.use('/api/recipes',RecipeRouter)

const port = process.env.PORT ||5000

app.listen(port,()=>{
    console.log("Server is statred in susccsfully");
    
})