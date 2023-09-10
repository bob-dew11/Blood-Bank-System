const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
} = require("../controllers/adminController");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

//get || donar list
router.get(
  "/donar-list",
  authMiddleware,
  adminMiddleware,
  getDonarsListController
);

//get || hospital list
router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalListController
);

//get || organisation list
router.get("/org-list", authMiddleware, adminMiddleware, getOrgListController);

// delete donar || get
router.delete(
  "/delete-donar/:id",
  authMiddleware,
  adminMiddleware,
  deleteDonarController
);

module.exports = router;
