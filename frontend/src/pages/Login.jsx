import React, { useState } from 'react'

const Login = () => {

    const [state, setState] = useState('Sign Up');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [name, setName] = useState('');
  return (
    <form className='min-h-[80vh] flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold mb-5'>{state}</h1>
      <input
        type='text'
        placeholder='Име'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='border p-2 w-80 mb-5'
      />
      <input
        type='email'
        placeholder='Емайл'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='border p-2 w-80 mb-5'
      />
      <input
        type='password'
        placeholder='Парола'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='border p-2 w-80 mb-5'
      />
      <button
        type='submit'
        className='bg-blue-500 text-white p-2 w-80 mb-5'
      >
        {state}
      </button>
      <p>
        {state === 'Sign Up' ? 'Вече имате профил?' : 'Нямате профил?'}
        <span
          className='text-blue-500 cursor-pointer'
          onClick={() => setState(state === 'Sign Up' ? 'Log In' : 'Sign Up')}
        >
          {state === 'Sign Up' ? ' Log In' : ' Sign Up'}
        </span>
      </p>    
      </form>
  )
}

export default Login
