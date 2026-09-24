import express from "express";
import { addProduct, deleteProduct, getAllProduct } from "../controller/productController.js";

const routes = express.Router();
routes.post("/", addProduct);
routes.get("/find", getAllProduct);
routes.delete("/del/:id", deleteProduct);

export default routes;
