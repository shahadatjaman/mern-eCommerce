const router = require("express").Router();

const { createProduct, products } = require("../controller/product");
//const checkAuth = require("../authChecker");

// Create New Product
router.post("/product", createProduct);

// Get Products
router.get("/products", products);

module.exports = router;
