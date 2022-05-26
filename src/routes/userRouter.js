import { 
    addUser,
    getAllUser,
    getUserById,
} from "../handler/userControl.js";
import express from "express";

const userRoute = express.Router();

userRoute.post("/",addUser);
userRoute.get("/", getAllUser);
userRoute.get("/user/:id", getUserById);

export default userRoute;