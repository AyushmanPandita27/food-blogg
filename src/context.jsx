import { createContext, useState, useContext } from "react";
import USERS from './db.json';
const UserContext = createContext({
    users:[]
})

export const UserProvider = ({children})=>{
const [users]= useState(USERS);
const val = {users}
    return <UserContext.Provider value={val}>{children}</UserContext.Provider>
}

export const Using =()=>useContext(UserContext);