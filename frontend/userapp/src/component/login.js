import React from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
const Login=()=>{

    const user={
        username:"",
        password:"",
      };
    let r=useNavigate();
    const loginUsers=()=>{
        axios.post("/api/login",user).then((res)=>
            {
                //console.log(res.data.data);
                if((res.data.data).length===1)
                {
                    r("/home",{replace:true})
                    
                }
                else{
                    console.log("wrong");
                }
            }
        );
            
               
            
    }
    return(
        <center>
             <h2>Login Page</h2>
             <br/>
             <input placeholder="Enter UserName" onChange={(e) =>(user.username=e.target.value)}/>
             <br/>
             <input placeholder="Enter Password" onChange={(e) =>(user.password= e.target.value)}/>
             <br/><br/>
            <button onClick={loginUsers}>Login</button>
            <br/>
            <h4>Not Registred ?<a href="/">Register Here</a></h4>
        </center>
    )
};
export default Login;