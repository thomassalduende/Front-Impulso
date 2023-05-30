import React, {useRef, useState} from 'react';
import { AddComida } from "../../service/addComida" 

export const Formulario = () => {

  const formulario = useRef();
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formulario.current)

    const data = new FormData(formulario.current)
    console.log(data)

    const formData = Object.fromEntries(
      Array.from(data.entries()).map(([name, value]) => [name, value])
    );

    if(
      formData.nombre !== '' &&
      formData.precio !== '' &&
      formData.descripcion !== ''
    ){
      AddComida(formData)
      .then(() => window.location.reload(true))
    }else {
      setError('Por favor, complete todos los campos')
    }
  }

  return (
    <form ref={formulario} onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="images" className="block text-gray-700 text-sm font-bold mb-2">
          Imagen:
        </label>
        <input
          type="text"
          id="images"
          name='images'
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="URL de la imagen"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">
          Nombre:
        </label>
        <input
          type="text"
          name='nombre'
          id="nombre"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Nombre de la comida"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="precio" className="block text-gray-700 text-sm font-bold mb-2">
          Precio:
        </label>
        <input
          type="text"
          id="precio"
          name='precio'
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Precio de la comida"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="descripcion" className="block text-gray-700 text-sm font-bold mb-2">
          Descripción:
        </label>
        <textarea
          id="descripcion"
          name='descripcion'
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Descripción de la comida"
          rows="4"
        ></textarea>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        Agregar Comida
      </button>
    </form>
  );
};
