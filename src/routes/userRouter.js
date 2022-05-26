import { 
    addUser,
    getAllUser,
    getUserById,
    removeUser,
    updateUser,
} from "../handler/userControl.js";
import express from "express";

const userRoute = express.Router();

userRoute.post("/user/",addUser);
userRoute.get("/user/", getAllUser);
userRoute.get("/user/:id", getUserById);
userRoute.delete("/user/:id", removeUser),
userRoute.put("/user/:id", updateUser)

export default userRoute;