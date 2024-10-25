const express = require("express");
const {
  claimPoints,
  getAllUser,
  getMonthlyData,
  getTodayHistory,
  getUserHistory,
  getUserWithHelpOfId,
  getUserWithHelpOfToken,
  getWeeklyData,
} = require("../controllers/user.controller"); 
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router.get("/get-users", getAllUser);
router.post("/get-users-info", verifyToken, getUserWithHelpOfToken);
router.post("/get-users-info", verifyToken, getUserWithHelpOfId); // This route will overwrite the previous one
router.patch("/claim-points", claimPoints);
router.get("/your-daily-history", getTodayHistory);
router.get("/your-weekly-history", getWeeklyData);
router.get("/your-monthly-history", getMonthlyData);
router.post("/your-history", getUserHistory);

module.exports = router;
