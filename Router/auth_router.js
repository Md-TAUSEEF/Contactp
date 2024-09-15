const express = require("express");
const router = express.Router();
const signupSchema = require("../Validator/validator");
const validate = require("../Middleware/auth_validator");
const authmiddleweare = require("../Middleware/auth_middleware")

const authController = require("../Controllers/auth_controller")

router.get("/", authController.home);
router.post("/login",authController.loginUser);

router.post("/registor", validate(signupSchema),authController.register)
router.get("/user",authmiddleweare,authController.user)
module.exports = router