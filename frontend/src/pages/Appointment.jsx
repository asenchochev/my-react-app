import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Appointment = () => {
    const { doctorId } = useParams();
    const { doctors } = useContext(AppContext);
    const [doctorInfo, setDoctorInfo] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [availableSlots, setAvailableSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchInfo = () => {
            const doctor = doctors.find((doctor) => doctor._id === doctorId);
            setDoctorInfo(doctor);
        };
        fetchInfo();
    }, [doctors, doctorId]);

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
            setMessage(`Часът за ${selectedSlot.time} на ${selectedDate} беше успешно запазен!`);
        }
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        setSelectedSlot(null);
        setMessage('');
    };

    const handleDoctorClick = (id) => {
        navigate(`/appointment/${id}`);
    };

    if (!doctorInfo) return <div className="text-center text-lg text-gray-500">Зареждам информация за доктора...</div>;

    return (
        <div className="container mx-auto px-6 py-12 bg-white">
            <div className="doctor-details grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-lg rounded-lg p-8 border border-gray-200">
                <div className="doctor-photo flex justify-center items-center mb-8 md:mb-0">
                    <div className="rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
                        <img src={doctorInfo.image} alt={doctorInfo.name} className="w-80 h-80 object-cover" />
                    </div>
                </div>
                <div className="doctor-info flex flex-col justify-between">
                    <h2 className="text-3xl font-semibold text-gray-900">{doctorInfo.name}</h2>
                    <p className="text-lg text-gray-600 mt-2">{doctorInfo.degree} - {doctorInfo.speciality}</p>
                    <p className="text-sm text-gray-700">{doctorInfo.about}</p>
                    <input type="date" className="w-full px-4 py-3 rounded-md border-gray-300 shadow-md" onChange={handleDateChange} />
                    {selectedDate && (
                        <div className="appointment-slots bg-blue-50 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-blue-700">Изберете час</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {availableSlots.map((slot) => (
                                    <button key={slot.time} onClick={() => handleSlotSelect(slot)} className={`w-full py-3 text-sm font-semibold ${selectedSlot?.time === slot.time ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} rounded-md hover:bg-blue-700 hover:text-white`}>{slot.time}</button>
                                ))}
                            </div>
                        </div>
                    )}
                    <button onClick={handleBooking} className="py-3 px-12 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-md">Запази час</button>
                    {message && <div className="mt-4 text-center text-lg text-green-600">{message}</div>}
                </div>
            </div>
            <div className="mt-12 px-6">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Препоръчани доктори</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {doctors.filter((doctor) => doctor.speciality === doctorInfo.speciality).slice(0, 4).map((doctor) => (
                        <div key={doctor._id} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center cursor-pointer hover:scale-105 hover:shadow-2xl border border-gray-200" onClick={() => handleDoctorClick(doctor._id)}>
                            <img src={doctor.image} alt={doctor.name} className="w-44 h-44 object-cover rounded-full border-4 border-blue-500 shadow-md" />
                            <p className="text-lg font-semibold text-gray-900 mt-4">{doctor.name}</p>
                            <p className="text-sm text-gray-500">{doctor.speciality}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Appointment;