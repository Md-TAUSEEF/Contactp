const User = require("../Modules/user_modules");
const Contact = require("../Modules/contact_module");
//<=========
const getuserAdmin = async(req,res)=>{
    try{
        const users = await User.find({},{password:0});//password:0 ish liye likha hun taki password show na ho
        if(!users){
            return res.status(404).json({message :"no user found"});
        }
        return res.status(200).json(users)

    }catch(error){
        console.log("this is admin error ${error}");
    }
}

//get all contact form data
const getcontactAdmin = async(req,res)=>{
    try{
        const contact = await Contact.find();
        console.log(contact);
        if(!contact){
            return res.status(404).json({message:"this message is cming in contactform"});
        }return res.status(200).json(contact);

    }catch(error){
        console.log("this is contact user error ${error}");
    }
}

//Update User Data
const UpdateUserDetails= async(req,res,next)=>{
    try{
        const id = req.params.id;
        const updateuserdate = req.body;
        
        const updateData = await User.updateOne({_id:id},{$set:updateuserdate});

        res.status(200).json(updateData);

    }catch(error){
        next(error);
    }
}

//get single user data

const gerUserDataId = async(req,res,next)=>{

    try{
    const id = req.params.id;
    const data = await User.findOne({_id:id},{password:0});
    res.status(200).json(data); 
    }catch(error){
        next(error);
    }
};


//Delet user data

const DeletUsetId = async(req,res,next)=>{

    try{
    const id = req.params.id;
    await User.deleteOne({_id:id});

    res.status(200).json({message:"User delet successfully"});
    }catch(error){
        next(error);
    }
  
};

//Delete Contact data

const DeletContactId = async(req,res,next)=>{
    try{
        const id = req.params.id;
       
        await Contact.deleteOne({_id:id});

        res.status(200).json({message:"Contact delet successfully"});

    }catch(error){
       next(error);
    }
}
module.exports = {getuserAdmin,getcontactAdmin,DeletUsetId,gerUserDataId,UpdateUserDetails, DeletContactId};