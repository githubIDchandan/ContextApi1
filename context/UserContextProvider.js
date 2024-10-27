import {useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider=({children})=>{

    const [user,setuser]=useState(null)

    /* jo bhi api call yaha kr lo*/ 

    return(
        <div>
            
          <UserContext.Provider value={{user,setuser}}>
              {children}
          </UserContext.Provider>
        
        </div>
    )
}

export default UserContextProvider;