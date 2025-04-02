import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  const handleDoctorClick = (doctorId) => {
    navigate(`/appointment/${doctorId}`);
  };

  const handleViewAllDoctors = () => {
    navigate("/allDoctors");
  };

  // Обект за съпоставяне на специалностите на английски и български
  const specialityTranslation = {
    'General physician': 'Общопрактикуващ лекар',
    'Gynaecologist': 'Гинеколог',
    'Dermatologist': 'Дерматолог',
    'Pediatricians': 'Педиатър',
    'Neurologist': 'Невролог',
    'Gastroenterologist': 'Гастроентеролог',
  };

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          ТОП ЛЕКАРИ ЗА ЗАПИСВАНЕ
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Открийте най-добрите специалисти и запазете час бързо и лесно при
          ТОП лекарите, на които можете да се доверите.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {doctors.slice(0, 10).map((doctor) => (
          <div
            key={doctor._id}
            className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => handleDoctorClick(doctor._id)}
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-48 h-48 object-cover rounded-full cursor-pointer"
            />

            <div className="mt-5 text-center">
              <p className="text-xl font-semibold text-gray-900">{doctor.name}</p>
              {/* Преобразуваме специалността на български */}
              <p className="text-md text-gray-500">
                {specialityTranslation[doctor.speciality] || doctor.speciality}
              </p>
              <span
                className={`mt-3 inline-block px-4 py-1 text-sm font-medium rounded-full ${
                  doctor.available ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                }`}
              >
                {doctor.available ? "Наличен" : "Зает"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Бутон "Още" */}
      <div className="text-center mt-10">
        <button
          onClick={handleViewAllDoctors}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          Още
        </button>
      </div>
    </section>
  );
};

export default TopDoctors;
