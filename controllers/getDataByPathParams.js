import { startups } from "../data/data.js"

export const getDataByPathParams = (req,res)=>{

//console.log(req.params)
const {field, term} = req.params
 const allowedFields = ['country', 'continent', 'industry']
 if(!allowedFields.includes(field)){
    //return to prevent further execution of the code.
   return res.status(400).json({message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" })
 }
const filteredStartups = startups.filter(startup => startup[field].toLowerCase() === term.toLowerCase())
res.json(filteredStartups)
}