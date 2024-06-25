const express = require("express");
const router = express.Router();

const controllers = require("../controllers/categoryController");

router.post("/create-category", controllers.createCategory)
router.post("/category-list", controllers.categoryList)
router.post("/category-edit", controllers.updateCategory)
router.post("/category-delete", controllers.deleteCategory)
router.post("/category-status", controllers.statusCategory)
router.post("/category-recover", controllers.recoverCategory)
router.post("/visitor-count", controllers.visitorCount)

module.exports = router;