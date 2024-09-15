//admin check karne ka code hai

const getAdmin = async(req,res,next)=>{
    try{
    const isadmin = req.user.isAdmin //req.user ham auth middleware se lenege aur check karenege ye login h ya nagi aur ham isAdmin user module se lenege ye true h ya nahi agar true h to sara user ka data de do nahi to nahi

    if(!isadmin){
        return res.status(404).json({message:"this is not admin "});
    }
    next();
    }catch(error){
        console.log("this error is coming in is admin component ${error}");
    }
}

module.exports = getAdmin;