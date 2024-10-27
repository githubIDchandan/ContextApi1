import { useContext, useState } from "react";
import UserContext from "../context/UserContext";


const Login=()=>{

   const [name,setName]=useState();
   const [password,setPasswoed]=useState();
   const {setuser}=useContext(UserContext)
   const clickHandler=()=>{
       console.log(name,password)
       setuser({name,password})
   }

    return(
        <div>
            <h1>Name</h1>
            <input type="text" placeholder="Name..." value={name} onChange={(e)=>{
                setName(e.target.value)
            }}></input>
            <h1>Password</h1>
            <input  placeholder="Password..." value={password} onChange={(e)=>{
                  setPasswoed(e.target.value)
            }}></input>
            <button onClick={clickHandler}>Submit</button>
        </div>
    )
}

export default Login;