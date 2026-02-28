import { startups } from "../data/data.js";

export const getAllData = (req,res)=>{
   // console.log(req.query)
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
}