const router = require("express").Router();

const { createProduct, products, product } = require("../controller/product");
//const checkAuth = require("../authChecker");

// Create New Product
router.post("/product", createProduct);

// Get Products
router.get("/products", products);

// Get product by ID vaia params
router.get("/product/:id", product);

module.exports = router;
