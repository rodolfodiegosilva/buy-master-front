import { useContext, useDebugValue } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
    const { auth } = useContext(AuthContext);
   //console.log(auth);
    useDebugValue(auth, auth => auth?.user ? "Logged In" : "Logged Out")
    //console.log(useContext(AuthContext));
    return useContext(AuthContext);
}

export default useAuth;