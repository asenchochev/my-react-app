import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { FaUserMd } from "react-icons/fa";

const Doctor = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [filterDoctor, setFilterDoctor] = useState([]);

  useEffect(() => {
    if (doctors) {
      setFilterDoctor(
        speciality
          ? doctors.filter((doctor) =>
              doctor.speciality.toLowerCase() === speciality.toLowerCase()
            )
          : doctors
      );
    }
  }, [doctors, speciality]);

  const specialities = [
    "Общопрактикуващ лекар",
    "Гинеколог",
    "Дерматолог",
    "Педиатър",
    "Невролог",
    "Гастроентеролог",
  ];

  return (
    <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
      
      <div className="col-span-1 bg-white p-6 shadow-md rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Филтрирай по специалност</h2>
        <ul className="space-y-3">
          {specialities.map((spec, index) => (
            <li
              key={index}
              onClick={() => navigate(`/allDoctors/${spec.toLowerCase()}`)}
              className={`cursor-pointer flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                speciality === spec.toLowerCase()
                  ? "bg-blue-600 text-white shadow-md"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <FaUserMd className="text-lg" /> {spec}
            </li>
          ))}
        </ul>
      </div>

     
      <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filterDoctor.map((doctor) => (
          <div
            key={doctor._id}
            className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            onClick={() => navigate(`/appointment/${doctor._id}`)} 
          >
            <img
              src={doctor.image || "https://via.placeholder.com/150"}
              alt={doctor.name}
              className="w-48 h-48 object-cover rounded-full cursor-pointer border-4 border-blue-500"
            />
            <div className="mt-5 text-center">
              <p className="text-xl font-semibold text-gray-900">{doctor.name}</p>
              <p className="text-md text-gray-500">{doctor.speciality}</p>
              <span
                className={`mt-3 inline-block px-4 py-1 text-sm font-medium rounded-full ${
                  doctor.available
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {doctor.available ? "Наличен" : "Зает"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctor;
