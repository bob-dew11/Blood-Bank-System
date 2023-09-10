const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarController,
  getHospitalController,
  getOrganisationController,
  getOrganisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

// Add inventory || post
router.post("/create-inventory", authMiddleware, createInventoryController);

// get all blood record
router.get("/get-inventory", authMiddleware, getInventoryController);

// get blood record 3
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);

// get hospital blood record
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

// get blood donar record
router.get("/get-donars", authMiddleware, getDonarController);

// get hospital record
router.get("/get-hospitals", authMiddleware, getHospitalController);

// get organisation record
router.get("/get-organisation", authMiddleware, getOrganisationController);

// get organisation record
router.get(
  "/get-organisation-for-hospital",
  authMiddleware,
  getOrganisationForHospitalController
);

module.exports = router;
