import React, {useRef, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getComidasID } from "../../service/getComidasID"
import { UpdateComida } from '../../service/updateComida';

export const FormUpdate = () => {

  const formulario = useRef();
  const { id } = useParams()

  const [error, setError] = useState('');
  const [comida, setComida] = useState([])

  useEffect(() => {
    getComidasID(id).then(res => {setComida(res)})
  }, [id])

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(formulario.current)

    const formData = Object.fromEntries(
      Array.from(data.entries()).map(([name, value]) => [name, value])
    );

    if(
      formData.nombre !== '' &&
      formData.precio !== '' &&
      formData.descripcion !== ''
    ){
      UpdateComida(id, formData).then(window.location.reload(true))
    }else {
      setError('Por favor, complete todos los campos')
    }
  }
  return (
    <form ref={formulario} onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Nombre:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="nombre"
          type="text"
          name='nombre'
          defaultValue={comida.nombre}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="precio"
        >
          Precio:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="precio"
          name='precio'
          type="number"
          defaultValue={comida.precio}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Descripción:
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="descripcion"
          name='descripcion'
          defaultValue={comida.descripcion}
        ></textarea>
      </div>
      <div className="flex items-center justify-center">
      {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};
