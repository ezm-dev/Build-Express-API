import express from "express";
import { startups } from "./data";

//app hold instance of express server to handel requests and responses
const app = express();
const PORT = 3000;

const person={
    name:"Eman",
    age: 25,
    city: "Cairo"
}


//route handler for GET request to the root URL
app.get("/",(req,res)=>{
    res.json(person)
    //res.send("Hello World");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
