import { createContext,useState  } from "react";

export const AuthContext=createContext();
export const AuthProvider=({children})=>{
    const [user, setUser]=useState();
    const login=(name,role,tenant)=>{
        setUser({name,role,tenant});
    }
    const logout=()=>{
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{user,setUser,logout,login}}>
            {children}
        </AuthContext.Provider>
    )
}
