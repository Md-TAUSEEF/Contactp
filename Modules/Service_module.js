const mongoose = require("mongoose");

const ServerSchema = new mongoose.Schema({
    service: { type: String, required: true },
    description: { type: String, required: true },  
    price: { type: String, required: true }, 
    provider: { type: String, required: true }, 
});

const Service = mongoose.model("Service", ServerSchema);
module.exports = Service;
