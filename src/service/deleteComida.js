import axios from 'axios'

export const DeleteComida = (id) => {
    const res = axios.delete(`http://localhost:3000/delete/${id}`)

    return res.then((response) => response.data)
}