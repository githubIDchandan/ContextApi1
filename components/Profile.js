import { useContext } from "react"
import UserContext from "../context/UserContext"



const Profile=()=>{
    const {user}=useContext(UserContext)
    if(user===null){
        return<h1>Please Login</h1>
    }
    return(
        <div>
            <h1>Welcome {user.name}</h1>
        </div>
    )
}

export default Profile;