import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [userIsLogged, setUserIsLogged] = useState(false);

   // console.log(setAuth);

    if (auth?.login) {
        localStorage.setItem("accessToken", auth.accessToken);
        localStorage.setItem("roles", auth.roles);
        localStorage.setItem("user", auth.user);
    } else {
        auth.accessToken = localStorage.getItem("accessToken");
        auth.user = localStorage.getItem("user");
        if (!!auth.user) {
            //setUserIsLogged(true);
            auth.roles = localStorage.getItem("roles").split(",").map(str => {
                return Number(str);
            });
        }
    }

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;