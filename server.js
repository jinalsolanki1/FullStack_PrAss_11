const express=require("express");
const app=express();
app.use(express.json());
const port=4000;
const mongoose=require("mongoose");

const userModel=require("./backend-model/user");

mongoose
    .connect("mongodb://localhost:27017/dbuser")
    .then(() => console.log("MongoDB Connected."));

//Register User    
app.post("/api/reg",(req,res)=>{
    const newUser=req.body;
        userModel.create(newUser);
        return res.json({data:"Registred Successfully."});
});

//Login User
app.post("/api/login",async(req,res)=>{
    const user=req.body;
   // const pwd=req.body.password;
    const loginUser=await userModel.find(user);
    if(loginUser)
    {
        //return res.sendFile({data:""});
        return res.json({data:loginUser});
    }       
    else{
        return res.json({data:"UserName or Password Wrong."});
    }
});
//Search User
app.post("/api/search",async(req,res)=>{
    const user=req.body;
    const userSer=await userModel.find(user);
    {
        if(userSer.length===0)
        {
            return res.json({data:"No User in UserDb."})
        }
        else{
            return res.json({data:userSer});   
        }
    }
});

//get All User
app.get("/api/list",async (req,res)=>{
    const userList=await userModel.find({},{username:true});
    if(userList.length===0)
    {
        return res.json({data:"No User in UserDb."})
    }
    else{
        return res.json({data:userList});
    }
});
app.listen(port,()=>console.log('Server Running On Port 4000.'));