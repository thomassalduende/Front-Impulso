import axios from 'axios'

export const getComidas = () => {
    const res = axios.get('http://localhost:3000/comidas')

    return res.then((response) => response.data)
}