const Service = require("../Modules/Service_module")
const services = async(req,res)=>{

    try{
    const response = await Service.find();
    if(!response){
        res.status(404).json({msg:"Not service is found"});
        return;
    }

   return res.status(200).json({data:response});
 }catch(error){
    console.log("error is coming in serverjs  ${error}");
 }
}

module.exports=services;