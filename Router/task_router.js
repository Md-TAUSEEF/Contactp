const express =require("express");
const router = express.Router();
const taskCountroller =require("../Controllers/task_controller");
const authmiddleware = require("../Middleware/auth_middleware")

router.get("/alltask",authmiddleware,taskCountroller.GetAlltask);
router.post("/createtsk",authmiddleware,taskCountroller.createtask);
router.patch("/updatetask/:id",authmiddleware,taskCountroller.Updatetask);
router.delete("/deletetask/:id",authmiddleware,taskCountroller.delettask);

module.exports=router;