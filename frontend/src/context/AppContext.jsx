import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);  // Състояние за зареждане
  const [error, setError] = useState(null);  // Състояние за грешка

  // Обект за съпоставяне на специалностите на английски и български
  const specialityTranslation = {
    'General physician': 'Общопрактикуващ лекар',
    'Gynaecologist': 'Гинеколог',
    'Dermatologist': 'Дерматолог',
    'Pediatricians': 'Педиатър',
    'Neurologist': 'Невролог',
    'Gastroenterologist': 'Гастроентеролог',
  };

  const value = {
    doctors,
    loading,
    error,
  };

  const getDoctorsData = async () => {
    setLoading(true);  // Започваме да зареждаме
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/list`);

      if (data.success) {
        // Преобразуваме специалностите на докторите на български
        const translatedDoctors = data.doctors.map(doctor => ({
          ...doctor,
          speciality: specialityTranslation[doctor.speciality] || doctor.speciality, // Преобразуване на специалността
        }));

        setDoctors(translatedDoctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      setError(error.message || "Нещо се обърка");
      toast.error(error.message || "Нещо се обърка");
    } finally {
      setLoading(false);  // Приключваме с зареждането
    }
  };

  useEffect(() => {
    getDoctorsData();
  }, []);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
