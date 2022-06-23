import { createContext, useState, useEffect, useContext } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import AuthContext from "../context/AuthProvider";
const GET_USER_URL = '/users/me';

const UserDataContext = createContext({});

export const UserDataProvider = ({ children }) => {
    const axiosPrivate = useAxiosPrivate();
    const [userData, setUserData] = useState();
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getMyData = async () => {
            try {
                const response = await axiosPrivate.post(GET_USER_URL, {
                    signal: controller.signal
                });

                setUserData(response.data);
            } catch (err) {
                console.log(err);
            }
        }

        if (!!auth.user) {
            getMyData();
        }else{
            setUserData(false)
        }

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])
    return (
        <UserDataContext.Provider value={{ userData }}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserDataContext;