const express = require("express");
const router = express.Router();

const controller = require("../controllers/categoryController")


router.post("/add-category", controller.createCategory)
router.post("/category-list", controller.categoryList)
router.post("/delete-category", controller.deleteCategory)
router.post("/edit-category", controller.updateCategory)

module.exports = router;