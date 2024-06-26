const express = require("express");
const router = express.Router();

const controllers = require("../controllers/productController");

router.post("/create-product", controllers.createProduct)
router.post("/product-list", controllers.productList)
router.post("/product-edit", controllers.updateProduct)
router.post("/product-delete", controllers.deleteProduct)
router.post("/product-status", controllers.statusProduct)
router.post("/product-recover", controllers.recoverProduct)

module.exports = router;