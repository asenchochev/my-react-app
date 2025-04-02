import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('1 Year');
  const [fees, setFees] = useState('');
  const [about, setAbout] = useState('');
  const [speciality, setSpeciality] = useState('General physician');
  const [degree, setDegree] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  const { backendUrl, adminToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!docImg) {
        return toast.error('Моля, избери профилна снимка на доктора');
      }

      const formData = new FormData();
      formData.append('image', docImg);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('experience', experience);
      formData.append('fees', Number(fees));
      formData.append('about', about);
      formData.append('speciality', speciality);
      formData.append('degree', degree);
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }));

      const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, {
        headers: { 'Content-Type': 'multipart/form-data', atoken: adminToken },
      });

      if (data.success) {
        toast.success(data.message);
        setDocImg(null);
        setName('');
        setEmail('');
        setPassword('');
        setAddress1('');
        setAddress2('');
        setDegree('');
        setAbout('');
        setFees('');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='p-6 w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg'>
      <p className='text-2xl font-semibold text-gray-800 mb-6'>Добави Доктор</p>
      <div className='bg-white px-8 py-6 rounded-lg shadow-md'>
        <div className='flex items-center gap-4 mb-8 text-gray-500'>
          <label htmlFor="docImg">
            <img
              className='w-20 h-20 object-cover rounded-full bg-gray-200 cursor-pointer hover:opacity-80 transition-opacity'
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt="Doctor Image"
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="docImg"
            hidden
          />
          <p className='text-sm'>Качете профилна снимка</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='flex flex-col gap-4'>
            <div>
              <label className='text-sm font-medium text-gray-700'>Име На Доктора</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className='w-full px-4 py-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                type="text"
                placeholder="Пълно наименование на доктора"
                required
              />
            </div>

            <div>
              <label className='text-sm font-medium text-gray-700'>Имейл На Доктора</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className='w-full px-4 py-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                type="email"
                placeholder="Имейл"
                required
              />
            </div>

            <div>
              <label className='text-sm font-medium text-gray-700'>Парола На Доктора</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className='w-full px-4 py-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                type="password"
                placeholder="Парола"
                required
              />
            </div>

            <div>
              <label className='text-sm font-medium text-gray-700'>Опит</label>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className='w-full px-4 py-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
              >
                {[...Array(10)].map((_, index) => {
                  const year = index + 1;
                  return <option key={year} value={`${year} Year`}>{`${year} Година`}</option>;
                })}
              </select>
            </div>

            <div>
              <label className='text-sm font-medium text-gray-700'>Такса За Преглед</label>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className='w-full px-4 py-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                type="number"
                placeholder="Такса"
                required
              />
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <div>
              <label className='text-sm font-medium text-gray-700'>Специалност</label>
              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                className='w-full px-4 py-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
              >
                <option value="General physician">Общопрактикуващ лекар</option>
                <option value="Gynaecologist">Гинеколог</option>
                <option value="Dermatologist">Дерматолог</option>
                <option value="Pediatricians">Педиатър</option>
                <option value="Neurologist">Невролог</option>
                <option value="Gastroenterologist">Гастроентролог</option>
              </select>
            </div>

            <div>
              <label className='text-sm font-medium text-gray-700'>Обраозование</label>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className='w-full px-4 py-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                type="text"
                placeholder="Образование"
                required
              />
            </div>

            <div>
              <label className='text-sm font-medium text-gray-700'>Адрес</label>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                className='w-full px-4 py-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                type="text"
                placeholder="Основен адрес"
                required
              />
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                className='w-full px-4 py-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                type="text"
                placeholder="ул, блок"
                required
              />
            </div>
          </div>
        </div>

        <div className='mt-6'>
          <label className='text-sm font-medium text-gray-700'>За Доктора</label>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className='w-full px-4 py-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
            rows={5}
            placeholder="Неговите интереси, хобита и т.н"
            required
          />
        </div>

        <button
  type='submit'
  className='w-full mt-6 py-4 bg-blue-600 text-white font-semibold text-lg rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:outline-none transition-all transform hover:scale-105'
>
  Добави Доктора
</button>

      </div>
    </form>
  );
};

export default AddDoctor;
