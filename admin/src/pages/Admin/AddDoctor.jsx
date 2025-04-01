import React, { useContext, useState } from 'react'
import assets from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const AddDoctor = () => {

    const [docImg, setDocImg] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [experience, setExperience] = useState('1 year')
    const [fees, setFees] = useState('')
    const [about, setAbout] = useState('')
    const [specialty, setSpecialty] = useState('General physician')
    const [degree, setDegree] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [phone, setPhone] = useState('')

    const {backEndUrl, aToken} = useContext(AdminContext)

    const OnSubmitHandler = async (event) => {
        event.preventDefault();
    
        try {
            if (!docImg) {
                return toast.error('Не успяхте да изберете снимка');
            }
    
            const formData = new FormData();
    
            formData.append('image', docImg);
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('experience', experience);
            formData.append('fees', fees);
            formData.append('about', about);
            formData.append('specialty', specialty);
            formData.append('degree', degree);
            formData.append('address', JSON.stringify({ line1: address1, line2: address2 }));
            formData.append('phone', phone);
    
            // Отпечатване на стойностите за дебъгване
            formData.forEach((value, key) => console.log(`${key}: ${value}`));
    
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${aToken}`, // Добавяне на токен за автентикация
                },
            };
    
            const { data } = await axios.post(`${backEndUrl}/api/admin/add-doctor`, formData, config);
    
            toast.success('Докторът е добавен успешно!');
        } catch (error) {
            console.error('Грешка при добавянето:', error);
            toast.error(error.response?.data?.message || 'Възникна грешка, опитайте отново!');
        }
    };
    
    


    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto w-full">
                <form onSubmit={OnSubmitHandler} className="bg-white shadow-xl rounded-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-blue-600 px-8 py-4">
                        <h2 className="text-2xl font-bold text-white">Добавяне на нов доктор</h2>
                    </div>

                    {/* Form Content */}
                    <div className="p-8 w-full">
                        {/* Image Upload */}
                        <div className="flex items-center gap-6 mb-8">
                            <label htmlFor="doc-img" className="cursor-pointer group">
                                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-2 border-dashed border-gray-300 group-hover:border-blue-500 transition-colors">
                                    <img className="w-full h-full object-cover" src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="Doctor profile" />
                                </div>
                                <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" className="hidden" accept="image/*" />
                            </label>
                            <div>
                                <p className="text-gray-600 font-medium">Профилна снимка</p>
                                <p className="text-gray-500 text-sm mt-1">Препоръчително: 300x300 пиксела</p>
                            </div>
                        </div>

                        {/* Form Grid - Full Width */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                            {/* Left Column */}
                            <div className="space-y-6">
                                {/* Doctor's Name */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1" htmlFor="doctor-name">
                                        Име на доктора <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        onChange={(e) => setName(e.target.value)} value= {name}
                                        id="name"
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                        placeholder="Пълно име на доктора"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1" htmlFor="doctor-email">
                                        Имейл <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                    onChange={(e) => setEmail(e.target.value)} value= {email}
                                        id="email"
                                        type="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                        placeholder="example@clinic.com"
                                        required
                                    />
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1" htmlFor="doctor-password">
                                        Парола <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                    onChange={(e) => setPassword(e.target.value)} value= {password}
                                        id="password"
                                        type="password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                        placeholder="Минимум 8 символа"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Middle Column */}
                            <div className="space-y-6">
                                {/* Specialty */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1" htmlFor="doctor-specialty">
                                        Специалност <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                    onChange={(e) => setSpecialty(e.target.value)} value= {specialty}
                                        id="specialty"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                        required
                                    >
                                        <option value="">Изберете специалност</option>
                                        <option value="General physician">Общупрактикуващ лекар</option>
                                        <option value="Gynecologist">Гинеколог</option>
                                        <option value="Dermatologist">Дерматолог</option>
                                        <option value="Pediatrician">Педиатър</option>
                                        <option value="Neurologist">Невролог</option>
                                        <option value="Gastroenterologist">Гастроентеролог</option>
                                    </select>
                                </div>

                                {/* Experience */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1" htmlFor="doctor-experience">
                                        Опит <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                    onChange={(e) => setExperience(e.target.value)} value= {experience}
                                        id="doctor-experience"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                        required
                                    >
                                        <option value="">Изберете опит</option>
                                        <option value="1 Year">1 Годинa</option>
                                        <option value="2 Year">2 Години</option>
                                        <option value="3 Year">3 Години</option>
                                        <option value="4 Year">4 Години</option>
                                        <option value="5 Year">5+ Години</option>
                                    </select>
                                </div>

                                {/* Fee */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1" htmlFor="doctor-fee">
                                        Такса за преглед <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500">лв.</span>
                                        </div>
                                        <input
                                        onChange={(e) => setFees(e.target.value)} value= {fees}
                                            id="doctor-fee"
                                            type="number"
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                            placeholder="0.00"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-6">
                                {/* Education */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1" htmlFor="doctor-education">
                                        Образование <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        onChange={(e) => setDegree(e.target.value)} value= {degree}
                                        id="doctor-education"
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                        placeholder="Учебно заведение, година"
                                        required
                                    />
                                </div>

                                {/* Address */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1" htmlFor="doctor-address">
                                        Адрес <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        onChange={(e) => setAddress1(e.target.value)} value= {address1}
                                        id="doctor-address"
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition mb-2"
                                        placeholder="Основен адрес"
                                        required
                                    />
                                    <input
                                    onChange={(e) => setAddress2(e.target.value)} value= {address2}
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                        placeholder="Допълнителен адрес (по желание)"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1" htmlFor="doctor-education">
                                        Телефонен номер <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        onChange={(e) => setPhone(e.target.value)} value= {phone}
                                        id="phone"
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                        placeholder="Телефонен номер на доктора"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* About Doctor - Full Width */}
                        <div className="mt-8 w-full">
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="doctor-about">
                                За доктора <span className="text-red-500">*</span>
                            </label>
                            <textarea
                            onChange={(e) => setAbout(e.target.value)} value= {about}
                                id="doctor-about"
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="Описание на специализацията, интереси, награди и т.н."
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="mt-10 flex justify-end">
                            <button
                                onSubmit={OnSubmitHandler}
                                type="submit"
                                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-md"
                            >
                                Добави доктора
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddDoctor