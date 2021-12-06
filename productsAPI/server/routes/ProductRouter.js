const express = require("express");
const ProductController = require("../controllers/ProductController");
const ProductRouter = express.Router();

ProductRouter.get("/", ProductController.getProducts);
ProductRouter.get("/:id", ProductController.getProduct);
ProductRouter.post("/new", ProductController.createProduct);
ProductRouter.put("/:id", ProductController.updateProduct);
ProductRouter.delete("/remove/:id", ProductController.deleteProduct);

module.exports = ProductRouter;
