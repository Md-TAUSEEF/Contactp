const express = require("express");
const router = express.Router();
const authmiddleware = require("../Middleware/auth_middleware")
const Authadminrouter = require("../Controllers/admin_controller")
const getAdmin = require("../Middleware/Admin_middleware");


router.get("/users",authmiddleware,getAdmin,Authadminrouter.getuserAdmin);
router.get("/users/:id",authmiddleware,getAdmin,Authadminrouter.gerUserDataId);
router.patch("/users/update/:id",authmiddleware,getAdmin,Authadminrouter.UpdateUserDetails)
router.get("/contact",authmiddleware,Authadminrouter.getcontactAdmin);
router.delete("/user/delet/:id",authmiddleware,getAdmin,Authadminrouter.DeletUsetId);
router.delete("/contact/delet/:id",authmiddleware,getAdmin,Authadminrouter. DeletContactId);

module.exports = router;