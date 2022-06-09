import { addBook, getBookbyuserID, getImageBookByUserId } from "../handler/bookControl.js";
import express from "express";

const bookRoute = express.Router();

bookRoute.post("/", addBook);
bookRoute.get("/:id", getBookbyuserID);
bookRoute.get("/url", getImageBookByUserId);

export default bookRoute;