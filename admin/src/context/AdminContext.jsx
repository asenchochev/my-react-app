import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [adminToken, setAdminToken] = useState(localStorage.getItem("atoken") || "");
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [dashData, setDashData] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

  // Функция за изпращане на POST заявки
  const postRequest = async (url, data, headers = {}) => {
    try {
      const { data: responseData } = await axios.post(url, data, {
        headers: { ...headers, atoken: adminToken },
      });
      return responseData;
    } catch (error) {
      toast.error(error?.message || "Неуспешна заявка");
      return { success: false, message: error?.message };
    }
  };

  // Функция за изпращане на GET заявки
  const getRequest = async (url, headers = {}) => {
    try {
      const { data: responseData } = await axios.get(url, {
        headers: { ...headers, atoken: adminToken },
      });
      return responseData;
    } catch (error) {
      toast.error(error?.message || "Неуспешна заявка");
      return { success: false, message: error?.message };
    }
  };

  // Вземане на всички лекари
  const getAllDoctors = async () => {
    const responseData = await getRequest(`${backendUrl}/api/admin/all-doctors`);
    if (responseData.success) {
      setDoctors(responseData.doctors);
    } else {
      toast.error(responseData.message);
    }
  };

  // Промяна на наличността на лекар
  const changeAvailability = async (docId) => {
    const responseData = await postRequest(
      `${backendUrl}/api/admin/change-availability`,
      { docId }
    );
    if (responseData.success) {
      toast.success(responseData.message);
      getAllDoctors();
    } else {
      toast.error(responseData.message);
    }
  };

  // Вземане на всички срещи
  const getAllAppointments = async () => {
    const responseData = await getRequest(`${backendUrl}/api/admin/appointments`);
    if (responseData.success) {
      setAppointments(responseData.appointments);
    } else {
      toast.error(responseData.message);
    }
  };

  // Отказване на среща
  const cancelAppointment = async (appointmentId) => {
    const responseData = await postRequest(
      `${backendUrl}/api/admin/cancel-appointment`,
      { appointmentId }
    );
    if (responseData.success) {
      toast.success(responseData.message);
      getAllAppointments();
    } else {
      toast.error(responseData.message);
    }
  };

  // Вземане на данни за таблото за управление
  const getDashData = async () => {
    const responseData = await getRequest(`${backendUrl}/api/admin/dashboard`);
    if (responseData.success) {
      setDashData(responseData.dashData);
    } else {
      toast.error(responseData.message);
    }
  };

  const value = {
    adminToken,
    setAdminToken,
    backendUrl,
    doctors,
    getAllDoctors,
    changeAvailability,
    appointments,
    setAppointments,
    getAllAppointments,
    cancelAppointment,
    dashData,
    setDashData,
    getDashData,
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
