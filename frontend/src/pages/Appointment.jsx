import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Appointment = () => {
    const { doctorId } = useParams();
    const { doctors } = useContext(AppContext);
    const [doctorInfo, setDoctorInfo] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [availableSlots, setAvailableSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [message, setMessage] = useState('');

    const fetchInfo = () => {
        const doctor = doctors.find((doctor) => doctor._id === doctorId);
        setDoctorInfo(doctor);
    };

    useEffect(() => {
        fetchInfo();
    }, [doctors, doctorId]);

    // Генериране на слотове от 8:00 до 17:00
    const generateSlots = () => {
        const slots = [];
        for (let hour = 8; hour <= 17; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const time = `${hour}:${minute < 10 ? '0' + minute : minute}`;
                slots.push({ time, available: true });
            }
        }
        return slots;
    };

    useEffect(() => {
        if (selectedDate) {
            setAvailableSlots(generateSlots());
        }
    }, [selectedDate]);

    const handleSlotSelect = (slot) => {
        setSelectedSlot(slot);
        setMessage('');
    };

    const handleBooking = () => {
        if (!selectedSlot) {
            setMessage('Моля, изберете свободен час.');
        } else {
            // Тук ще добавиш функционалност за запазване на часа в бекенд сървъра.
            setMessage(`Часът за ${selectedSlot.time} на ${selectedDate} беше успешно запазен!`);
        }
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        setSelectedSlot(null);
        setMessage('');
    };

    const daysOfWeek = ['Неделя', 'Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота'];

    if (!doctorInfo) return (
        <div className="text-center text-lg text-gray-500">
            Зареждам информация за доктора...
        </div>
    );

    return doctorInfo && (
        <div className="container mx-auto px-6 py-12 bg-white">
            <div className="doctor-details grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-lg rounded-lg p-8 border border-gray-200">
                {/* Лявата част - Снимка на доктора */}
                <div className="doctor-photo flex justify-center items-center mb-8 md:mb-0">
                    <div className="rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
                        <img 
                            src={doctorInfo.image} 
                            alt={doctorInfo.name} 
                            className="w-80 h-80 object-cover"
                        />
                    </div>
                </div>

                {/* Дясната част - Информация за доктора */}
                <div className="doctor-info flex flex-col justify-between">
                    {/* Име и специализация */}
                    <div className="doctor-name-and-degree mb-6">
                        <h2 className="text-3xl font-semibold text-gray-900">{doctorInfo.name}</h2>
                        <p className="text-lg text-gray-600 mt-2">{doctorInfo.degree} - {doctorInfo.speciality}</p>
                    </div>

                    {/* Бутон за опит */}
                    <div className="doctor-experience mb-6">
                        <button 
                            className="py-2 px-8 text-sm text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition duration-300 transform hover:scale-105"
                        >
                            {doctorInfo.experience}
                        </button>
                    </div>

                    {/* Лична информация */}
                    <div className="doctor-about text-gray-700 mb-6">
                        <h3 className="text-xl font-semibold mb-2">Лична информация</h3>
                        <p className="text-sm">{doctorInfo.about}</p>
                    </div>

                    {/* Избор на дата и час */}
                    <div className="appointment-info">
                        <div className="appointment-date mb-6">
                            <label htmlFor="appointment-date" className="block text-gray-700 font-semibold mb-2">Изберете дата</label>
                            <input 
                                type="date" 
                                id="appointment-date" 
                                className="w-full px-4 py-3 rounded-md border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleDateChange}
                            />
                        </div>

                        {selectedDate && (
                            <div className="appointment-slots bg-blue-50 p-6 rounded-lg shadow-md mb-6">
                                <h3 className="text-xl font-semibold text-blue-700 mb-4">Изберете час ({daysOfWeek[new Date(selectedDate).getDay()]}, {selectedDate})</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {availableSlots.map((slot) => (
                                        <button
                                            key={slot.time}
                                            onClick={() => handleSlotSelect(slot)}
                                            className={`w-full py-3 text-sm font-semibold ${selectedSlot?.time === slot.time ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} rounded-md hover:bg-blue-700 hover:text-white transition duration-300`}
                                        >
                                            {slot.time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="flex justify-center">
                            <button
                                onClick={handleBooking}
                                className="py-3 px-12 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition duration-300"
                            >
                                Запази час
                            </button>
                        </div>
                    </div>

                    {/* Съобщение */}
                    {message && (
                        <div className="mt-4 text-center text-lg text-green-600">{message}</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Appointment;
