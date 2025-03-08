import React from "react";
import { doctors } from "../assets/assets";

const TopDoctors = () => {
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

      {/* Карти с лекари */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {doctors.slice(0, 10).map((doctor, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* По-голяма снимка на лекаря */}
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-32 h-32 object-cover rounded-full border-4 border-gray-300 shadow-md"
            />

            <div className="mt-5 text-center">
              <p className="text-xl font-semibold text-gray-900">{doctor.name}</p>
              <p className="text-md text-gray-500">{doctor.speciality}</p>
              <span
                className={`mt-3 inline-block px-4 py-1 text-sm font-medium rounded-full ${
                  doctor.available ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                }`}
              >
                {doctor.available ? "Наличен" : "Зает"}
              </span>
            </div>

            {/* Бутон за записване */}
            <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg text-md font-medium hover:bg-blue-700 transition">
              Запази час
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopDoctors;
