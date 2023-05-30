import axios from 'axios'

export const getUsuario = () => {
    const res = axios.get('http://localhost:3000/usuarios')

    return res.then((response) => response.data)
}



