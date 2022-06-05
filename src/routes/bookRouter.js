import { addBook, getBookbyuserID } from "../handler/bookControl.js";
import express from "express";

const bookRoute = express.Router();

bookRoute.post("/", addBook);
bookRoute.get("/:id", getBookbyuserID);

export default bookRoute;