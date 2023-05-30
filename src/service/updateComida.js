import axios from 'axios'

export const UpdateComida = (id, comida) => {
    const res = axios.put(`http://localhost:3000/edit/${id}`, comida);

    return res.then((response) => response.data)
}