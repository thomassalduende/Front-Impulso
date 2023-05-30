import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { getUsuario } from '../../service/getUsuarios'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';


export const Login = () => {
    const { activateAuth } = useContext(AppContext);
    const navigate = useNavigate()
    const [user, setUser] = useState([]);
    const[error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };
  
    const formRef = useRef();

    useEffect(() => {
        getUsuario()
        .then(res => {
          setUser(res)
      })
    },[])


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current)
    const formData = Object.fromEntries(Array.from(data.entries()).map(([name, value]) => [name, value]));

    if(formData.nombre !== '' && formData.password !== ''){
      console.log(user[0])
      console.log(formData)
        if(user[0].nombre === formData.nombre && user[0].password === formData.password){
            activateAuth()
            window.sessionStorage.setItem('token', 'active')
            navigate('/iniciar-sesion')
        }else {
            setError('Usuario o contraseña son incorrectas')
        }
    }else {
        setError('Por favor, complete los campos')
    }
  };

  return (
    <form ref={formRef} className="max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Nombre de usuario:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="nombre"
          type="text"
          name="nombre"
          placeholder="Ingrese su nombre de usuario"
        />
      </div>
      <div className="mb-4 relative">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Contraseña:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
          id="password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Ingrese su contraseña"
        />
        <button
          className="absolute top-[14px] right-0 h-full flex items-center px-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={handleTogglePassword}
        >
          {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
        </button>
      </div>
      <div className="flex items-center justify-center">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Iniciar sesión
        </button>
      </div>
    </form>
  );
};



