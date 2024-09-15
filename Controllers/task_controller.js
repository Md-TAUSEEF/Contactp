const Task = require("../Modules/task_module");

//get all task
const GetAlltask = async(req,res)=>{
    try{
     const tasks=await Task.find({user:req.userId});
     res.json(tasks);

    }catch(error){
        console.log(`this error is coming get all task time ${error}`);
    }
}

//create taskmanagement

const createtask = async(req,res)=>{
    try{
    const{title,description}=req.body;
    const createtasks=await Task.create({title,description});
    res.status(200).json({
        msg:"task create sucess full"
        
    });

 }catch(error){
    console.log(`this error is coming when task is reated ${error}`);
 }
}

//update task 

const Updatetask = async(req,res)=>{
    try{
        const {id}=req.params;
        const{title,description,completed}=req.body;
        await Task.findByIdAndUpdate(id, { title, description, completed });
        res.json({ message: 'Task updated successfully' });

    }catch(error){
        console.log(`this error is coming when task is upadte ${error}`);
    }
}

//delet the task

const delettask =async (req,res)=>{
    try{
    const {id} = req.params;
    await Task.findByIdAndDelete(id);
    res.json({ message: 'Task deleted successfully' });
    }catch(error){
        console.log(`this error is coming when user is deleted ${error}`);
    }
}

module.exports={GetAlltask,createtask,Updatetask,delettask}