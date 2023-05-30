import { useEffect, useState } from "react"
import { getComidas } from "../../../service/getComidas"
import { Product } from "../Product/Product.jsx"

export const ComidasList = () => {

    const [comidas, setComidas] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        getComidas()
        .then((response) =>{
            setComidas(response)
            setLoading(true)
        })
    }, [])


  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl py-8">
      {loading ? (
        comidas.map((food) => <Product key={food.id} product={food} />)
      ) : (
        <p>cargando</p>
      )}
    </div>
  )
}
