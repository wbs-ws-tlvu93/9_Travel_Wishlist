import { Router } from "express"

import connectDB from "@repos/mongo-client"

import countryRouter from "./country-router"
import userRouter from "./user-router"

// Connect to DB
connectDB();

// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter);
baseRouter.use('/countries', countryRouter);

// Export default.
export default baseRouter;
