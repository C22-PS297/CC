import { addBook, getAllBook, getBookbyuserID, updateBook } from "../handler/bookControl.js";
import express from "express";

const bookRoute = express.Router();

bookRoute.post("/", addBook);
bookRoute.get("/", getAllBook);
bookRoute.get("/:id", getBookbyuserID);
bookRoute.put("/:id", updateBook);

export default bookRoute;