const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

router.post("/add-todo", adminController.addTodo);
router.get("/deleted/:id", adminController.deletedTodo);
router.get("/completed/:id", adminController.completedTodo);
module.exports = router;
