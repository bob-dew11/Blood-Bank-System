const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

//register route
router.post("/register", registerController);

//login route
router.post("/login", loginController);

//get current user
router.get("/current-user", authMiddleware, currentUserController);

module.exports = router;
