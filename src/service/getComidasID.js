import axios from 'axios'

export const getComidasID = (id) => {
    const res = axios.get(`http://localhost:3000/comidas/${id}`)

    return res.then((response) => response.data)
}