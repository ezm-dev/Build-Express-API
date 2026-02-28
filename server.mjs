import express from "express";
import { startups } from "./data/data.js"

//app hold instance of express server to handel requests and responses
const app = express()
const PORT = 3000



//route handler for GET request to the root URL
app.get("/api",(req,res)=>{
    let filteredStartups = startups; // Initialize with all startups
     const {industry, country, continent, is_seeking_funding, has_mvp} = req.query
    if(industry){
        filteredStartups = filteredStartups.filter(startup => startup.industry.toLowerCase() === industry.toLowerCase())
    }
    if(country){
        filteredStartups = filteredStartups.filter(startup => startup.country.toLowerCase() === country.toLowerCase())
    }
    if(continent){
        filteredStartups = filteredStartups.filter(startup => startup.continent.toLowerCase() === continent.toLowerCase())
    }
    if(is_seeking_funding !== undefined){
       // filteredStartups = filteredStartups.filter(startup => startup.is_seeking_funding === (is_seeking_funding === "true"))
       filteredStartups = filteredStartups.filter(startup => startup.is_seeking_funding === JSON.parse(is_seeking_funding.toLowerCase()))// The JSON.parse method converts the string "true" or "false" to a boolean value
    }
    if(has_mvp !== undefined){
       // filteredStartups = filteredStartups.filter(startup => startup.has_mvp === (has_mvp === "true"))
       filteredStartups = filteredStartups.filter(startup => startup.has_mvp === JSON.parse(has_mvp.toLowerCase()))
   
    }
    res.json(filteredStartups)
    //console.log(req.query)
   // res.json(startups) //all data without filtering
    //res.send("Hello World");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
