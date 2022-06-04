import { 
    addUser,
    getAllUser,
    getUserById,
    loginControl,
    removeUser,
    updateUser,
} from "../handler/userControl.js";
import express from "express";

const userRoute = express.Router();

userRoute.post("/",addUser);
userRoute.get("/", getAllUser);
userRoute.get("/:id", getUserById);
userRoute.delete("/:id", removeUser);
userRoute.put("/:id", updateUser);
userRoute.post("/login", loginControl);

export default userRoute;