const express= require("express");
const router = express.Router();
const services = require("../Controllers/service_controller");
router.get("/service",services);
module.exports=router;