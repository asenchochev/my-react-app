import React, { useState } from 'react';

const Login = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-900">
      <div className="flex bg-white rounded-2xl shadow-2xl overflow-hidden w-[950px]">
        <form className="w-1/2 p-10 border-r border-gray-300">
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">
            {isRegister ? 'MediCenter Portal - Регистрация' : 'MediCenter Portal - Вход'}
          </h1>
          {isRegister && (
            <input
              type="text"
              placeholder="Име"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-4 mb-5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
            />
          )}
          <input
            type="email"
            placeholder="Имейл"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-4 mb-5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
          />
          <input
            type="password"
            placeholder="Парола"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-4 mb-6 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all shadow-lg"
          >
            {isRegister ? 'Регистрация' : 'Вход'}
          </button>
          <p className="text-center mt-6 text-gray-600 text-sm">
            {isRegister ? 'Вече имате профил?' : 'Нямате профил?'}
            <span
              className="text-blue-700 cursor-pointer ml-1 hover:underline font-semibold"
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister ? ' Вход' : ' Регистрация'}
            </span>
          </p>
        </form>
        <div className="w-1/2 flex items-center justify-center bg-blue-50 p-5">
  <img 
    src="https://t4.ftcdn.net/jpg/06/32/90/79/360_F_632907942_M6CVHD1ivhUrWK1X49PkBlSH3ooNPsog.jpg" 
    alt="MediCenter Portal Login" 
    className="w-full h-full object-cover rounded-lg shadow-md"
  />
</div>

      </div>
    </div>
  );
};

export default Login;
