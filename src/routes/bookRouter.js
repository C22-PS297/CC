import { addBook } from "../handler/bookControl.js";
import express from "express";

const bookRoute = express.Router();

bookRoute.post("/", addBook);

export default bookRoute;