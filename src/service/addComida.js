import axios from 'axios'

export const AddComida = (comida) => {
    const res = axios.post('http://localhost:3000/add', comida)

    return res.then((response) => response.data)
}