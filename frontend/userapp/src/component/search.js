import axios from "axios";
const Search=()=>{
    const user={
        username:"",
    }
    const serUser=()=>{
        axios.post("/api/search",user).then(res => {
            if((res.data.data).length===1)
            {
                console.log(res.data);  
            }
            else{
                console.log("wrong");
            }
        });
    };
    return(
        <div>
        <br/>
        <input placeholder="Enter UserName" onChange={(e) =>(user.username=e.target.value)}/>
        <button onClick={serUser}>Serch User</button>
        </div>
    )
}
export default Search;