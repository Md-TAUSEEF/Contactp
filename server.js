// server.js
const dotenv = require("dotenv");
dotenv.config({ path: "./Config/config.env" });
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./Router/auth_router");
const contactrouter = require("./Router/contact_router");
const servicerouter=require("./Router/service_router");
const adminrouter=require("./Router/admin_router");
const connectdb = require("./Databaseconnection/Database");
const taskrouter = require("./Router/task_router");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());



app.use("/api/auth", router);
app.use("/api/form", contactrouter);
app.use("/api/group",servicerouter);
app.use("/app/get",taskrouter);

//admin route
app.use("/api/admin",adminrouter)
const PORT = 5000;

connectdb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error starting the server:", error);
    process.exit(1);
  });
