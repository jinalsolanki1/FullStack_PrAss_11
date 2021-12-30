import React from "react";
import axios from "axios";


const Reg=()=>{
            
  const user={
  username:"",
  password:"",
  name:"",
  age:0,
};

//reguser post method
const regUsers= () =>{
  axios.post("/api/reg",user).then(res => console.log(res.data));
};

  return (
    <div className="App">
        <br/><br/>
       <h1>Register User</h1>
       <br/><br/>
       <input 
        placeholder="Enter UserName" 
        onChange={(e) =>(user.username=e.target.value)}/>
        <br/>
       <input 
           placeholder="Enter Password"
           onChange={(e) =>(user.password= e.target.value)}
        />
        <br/>
        <input 
          placeholder="Enter Name" 
          onChange={(e) =>(user.name= e.target.value)}
        />
        <br/>
        <input 
          placeholder="Enter Age" 
          onChange={(e) =>(user.age= Number(e.target.value))}
        />
        <br/><br/>
        <button onClick={regUsers}>Register User</button>
        <br/>
        <h4>Already Registred ?<a href="/login">Login Here</a></h4>
    </div>
  );
}
export default Reg;