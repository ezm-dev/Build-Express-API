
import express from "express"
import { getAllData } from "../controllers/getAllData.js"
import { getDataByPathParams } from "../controllers/getDataByPathParams.js"

export const apiRoutes = express.Router()

apiRoutes.get("/", getAllData)
apiRoutes.get("/:field/:term",getDataByPathParams)

