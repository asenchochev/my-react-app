import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    image: assets.profile_pic,
    phone: '0893934322',
    gender: 'Male',
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData({ ...userData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-cyan-700 p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-10 rounded-xl shadow-xl max-w-4xl w-full flex"
      >
        {/* Left Side - Profile Image */}
        <div className="w-1/3 flex flex-col items-center border-r-2 border-blue-300 pr-6">
          <div className="relative w-40 h-40">
            <img
              src={userData.image}
              alt="Patient Profile"
              className="w-full h-full rounded-lg border-4 border-blue-600 shadow-md object-cover"
            />
            {isEdit && (
              <div className="mt-3 w-full text-center">
                <label htmlFor="file-input" className="inline-block w-full bg-blue-600 text-white py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition duration-300">
                  Избери нова снимка
                </label>
                <input
                  type="file"
                  id="file-input"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Profile Info */}
        <div className="w-2/3 pl-6 space-y-4">
          <h1 className="text-2xl font-bold text-blue-700">{userData.name}</h1>
          <p className="text-gray-500 text-sm">Профил на пациент</p>

          {['email', 'phone'].map((field) => (
            <motion.div 
              key={field}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (Object.keys(userData).indexOf(field) + 1) }}
            >
              <label className="block text-gray-700 font-semibold">{field === 'email' ? 'Имейл' : 'Телефон'}</label>
              {isEdit ? (
                <input
                  type="text"
                  name={field}
                  value={userData[field]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-800 bg-gray-100 p-2 rounded-lg">{userData[field]}</p>
              )}
            </motion.div>
          ))}

          {/* Gender Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <label className="block text-gray-700 font-semibold">Пол</label>
            {isEdit ? (
              <select
                name="gender"
                value={userData.gender}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Male">Мъж</option>
                <option value="Female">Жена</option>
                <option value="Other">Друг</option>
              </select>
            ) : (
              <p className="text-gray-800 bg-gray-100 p-2 rounded-lg">{userData.gender === 'Male' ? 'Мъж' : userData.gender === 'Female' ? 'Жена' : 'Друг'}</p>
            )}
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsEdit(!isEdit)}
            className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300 w-full"
          >
            {isEdit ? 'Запази промените' : 'Редактирай профила'}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default MyProfile;
