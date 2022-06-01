import express from "express";
import { addShop } from "../handler/shopControl.js";

const shopRouter = express.Router();

shopRouter.post("/", addShop);

export default shopRouter;