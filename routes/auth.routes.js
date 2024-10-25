const express = require("express");
const { Login, Register } = require("../controllers/auth.controller.js");

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);


module.exports=router;