import { createContext, useState } from "react"; 

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
    const [aToken, setAtoken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):null); 

    const backEndUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

    const value = {
        aToken,
        setAtoken,
        backEndUrl
    };

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;
