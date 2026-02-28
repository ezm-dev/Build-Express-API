import express from "express"
import { apiRoutes } from "./routes/apiRoutes.js"


//app hold instance of express server to handel requests and responses
const app = express()
const PORT = 3000

//middleware to enable CORS (Cross-Origin Resource Sharing) for the server, allowing it to handle requests from different origins.


//route handler for GET request to the URL "/api" with optional query parameters for filtering startups based on industry, country, continent, funding status, and MVP status. The filtered results are returned as a JSON response.
app.use("/api",apiRoutes)

app.use((req,res)=>{
    res.status(404).json({ message: "Endpoint not found. Please check the API documentation." })
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
