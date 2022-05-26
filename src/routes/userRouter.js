import { 
    addUser
} from "../handler/userControl.js";
import express from "express";

const userRoute = express.Router();

userRoute.post("/",addUser);

export default userRoute;