import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


import * as authService from "../services/authService"
import usePersistedStorage from "../hooks/usePersistedStorage";

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {

    const [auth, setAuth] = usePersistedStorage('Auth', {})
    const navigate = useNavigate();

    const [errorFlag, setErrorFlag] = useState("");

    const statusToggler = () => {
        if (errorFlag !== "") {
            setErrorFlag("");
        }
    };

    const registerSubmitHanler = async (values) => {
        try {
            const response = await authService.register(values)

            const authInformation = {
                accessToken: response.accessToken,
                email: response.email,
                firstName: response.firstName,
                lastName: response.lastName,
                _id: response._id
            }
            setAuth(authInformation)
            navigate('/')
        } catch (error) {
            setErrorFlag(error.message)
        }

    }

    const loginSubmitHandler = async (values) => {
        try {
            const response = await authService.login(values)
            const authInformation = {
                accessToken: response.accessToken,
                email: response.email,
                firstName: response.firstName,
                lastName: response.lastName,
                _id: response._id
            }
            setAuth(authInformation)
            navigate('/')
        } catch (error) {
            setErrorFlag(error.message);
        }
    }

    const logoutSubmitHandler = async () => {
        try {
            await authService.logout()
            setAuth({})
            navigate('/')
        } catch (error) {
            setErrorFlag(error.message);

            setAuth({})
            navigate('/')
        }
    }

    const values = {
        registerSubmitHanler,
        loginSubmitHandler,
        logoutSubmitHandler,
        firstName: auth.firstName,
        lastName: auth.lastName,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
        errorFlag,
        statusToggler,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext