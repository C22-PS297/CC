import { 
    addUser,
    addUsertoAuth,
    getAllUser,
    getUserById,
    loginControl,
    removeUser,
    updateUser,
} from "../handler/userControl.js";
import express from "express";
import user from "../model/user.js";

const userRoute = express.Router();

userRoute.post("/",addUser);
userRoute.get("/", getAllUser);
userRoute.get("/:id", getUserById);
userRoute.delete("/:id", removeUser);
userRoute.put("/:id", updateUser);
userRoute.post("/login", loginControl);
userRoute.post("/auth", addUsertoAuth);

export default userRoute;