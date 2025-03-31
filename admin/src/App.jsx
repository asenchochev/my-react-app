import React, { useContext } from 'react'
import Login from './pages/Login'
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';

const App = () => {

  const { aToken } = useContext(AdminContext);

  return aToken ? (
    <div className='bg-[#f8f9fd]'>
      <ToastContainer />
      <Navbar />
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
