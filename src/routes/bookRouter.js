import { addBook, getBookbyuserID } from "../handler/bookControl.js";
import {
    getUserById,
} from "../handler/userControl.js";
import express from "express";

const userRoute = express.Router();
const bookRoute = express.Router();


// userRoute.get("/:id", getUserById);

bookRoute.post("/", addBook);
bookRoute.get("/:id", getBookbyuserID);

export default bookRoute;