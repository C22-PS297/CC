import { 
    addUser,
    getAllUser,
    getUserById,
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

export default userRoute;