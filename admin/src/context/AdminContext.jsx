import { createContext, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
    const [aToken, setAtoken] = useState(localStorage.getItem('aToken') || null);
    const [doctors, setDoctors] = useState([]);

    const backEndUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

    // Функция за взимане на всички доктори
    const getAllDoctors = async () => {
        if (!aToken) {
            toast.error("Authentication token is missing");
            return;
        }

        try {
            const { data } = await axios.post(`${backEndUrl}/api/admin/all-doctors`, {}, {
                headers: { Authorization: `Bearer ${aToken}` }
            });

            if (data.success && data.doctors) {
                setDoctors(data.doctors);
                console.log(data.doctors);
            } else {
                toast.error(data.message || "Неуспешно зареждане на доктори.");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        }
    };

    // Функция за промяна на наличността на доктор
    const changeAvailability = async (docId) => {
        try {
            const { data } = await axios.post(`${backEndUrl}/api/admin/change-availability`, { docId }, {
                headers: { Authorization: `Bearer ${aToken}` }
            });

            if (data.success) {
                toast.success(data.message);
                getAllDoctors();  // Обновяваме списъка след промяна на наличността
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        }
    };

    // Стойности за контекста
    const value = {
        aToken,
        setAtoken,
        backEndUrl,
        doctors,
        getAllDoctors,
        changeAvailability
    };

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;
