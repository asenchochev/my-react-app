import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Doctor from './pages/Doctor';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile';
import MyAppointment from './pages/MyAppointment';
import Appointment from './pages/Appointment';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/allDoctors' element={<Doctor />} />
      <Route path='/allDoctors/:speciality' element={<Doctor />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/myProfile' element={<MyProfile />} />
      <Route path='/myAppointment' element={<MyAppointment />} />
      <Route path='/appointment/:doctorId' element={<Appointment />} />
    </Routes>
      
    </div>
  );
};

export default App;