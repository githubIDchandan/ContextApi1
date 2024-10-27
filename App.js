import React from "react";
import ReacDOM from "react-dom/client"
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

/***
 * 
 * handle with context APi (global thing) 
 * 
 * we cant make directly globalvarible.js file fetch value from here because state mismatch (any variable can update without need);
 *   
 * 
 * ***/ 

const AppLayout=()=>{
    return(
        <UserContextProvider>
            <Login/>
            <Profile/>
        </UserContextProvider>
    )
}


const root=ReacDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)