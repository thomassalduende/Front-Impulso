import React from 'react'
import { NavBarUser } from '../Admin/NavBar/NavBarUser'
import { Agregar } from '../Admin/AgregarComida/Agregar'
import { ProductUser } from '../Admin/ListProducts/Products'
import { Footer } from '../components/Pagina/Footer/Footer'

export const Admin = () => {
  return (
    <>
    <NavBarUser/>
    <Agregar/>
    <ProductUser className = "min-h-[100vh]"/>
    <Footer/>
    </>
  )
}
