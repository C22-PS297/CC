import express from "express";
import { addShop, getAllShop, getShopById } from "../handler/shopControl.js";

const shopRouter = express.Router();

shopRouter.post("/", addShop);
shopRouter.get("/", getAllShop);
shopRouter.get("/:id", getShopById);

export default shopRouter;