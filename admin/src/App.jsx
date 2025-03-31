import React, { useContext } from 'react'
import Login from './pages/Login'
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import { ToastContainer } from 'react-toastify';

const App = () => {

  const { aToken } = useContext(AdminContext);

  return aToken ? (
    <div>
      <ToastContainer />
    </div>
  )
    : (
      <>
        <Login />
        <ToastContainer />
      </>
    )
}

export default App
