import { getComidas } from "../../service/getComidas"
import { useState, useEffect } from 'react'
import { UpdateComida } from "../UpdateComida/UpdateComida"
import { EliminarComida } from "../EliminarComida/EliminarComida"
import { Link } from 'react-router-dom';

export const ProductUser = () => {
    const [comidas, setComidas] = useState([])
    const [loading, setLoading] = useState(false)
    const [eliminar, setEliminar] = useState(false)
    const [modificar, setModificar] = useState(false)
    

    const handleOpenEliminar = () => setEliminar(true);
    const handleCloseEliminar = () => setEliminar(false);

    const handleOpenModificar = () => setModificar(true);
    const handleCloseModificar = () => setModificar(false);



    useEffect(() =>{
        getComidas()
        .then((response) =>{
            setComidas(response)
            setLoading(true)
        })
    }, [])
    console.log(comidas)


  return (
    <>   
    <table className="min-w-full bg-white">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4">Imagen</th>
          <th className="py-2 px-4">Nombre</th>
          <th className="py-2 px-4">Precio</th>
          <th className="py-2 px-4">Descripción</th>
          <th className="py-2 px-4">Acciones</th>
        </tr>
      </thead>
      <tbody>
        { loading ? comidas.map((product) => (
          <tr key={product.id} className="border-b border-gray-200">
            <td className="py-2 px-4">
              <img src={product.images} alt={product.nombre} className="h-20 w-20 object-cover" />
            </td>
            <td className="py-2 px-4">{product.nombre}</td>
            <td className="py-2 px-4">${product.precio}</td>
            <td className="py-2 px-4">{product.descripcion}</td>
            <td className="py-2 px-4">
              <Link to={`/${product.id}`}>
                <button className="text-blue-500 hover:text-blue-700 mr-2" onClick={handleOpenModificar}>Modificar</button>
              </Link>
              <Link to={`/${product.id}`}>
                <button className="text-red-500 hover:text-red-700" onClick={handleOpenEliminar}>Eliminar</button>
              </Link>
            </td>
          </tr>
        )):  <p>cargando</p>}
      </tbody>
    </table>
    {
      modificar ? <UpdateComida openUpdate={modificar} handleCloseUpdate={handleCloseModificar}/> : null
    }
    {
      eliminar ? <EliminarComida eliminar={eliminar} handleClose={handleCloseEliminar}/> : null
    }
    </>
  );
};

