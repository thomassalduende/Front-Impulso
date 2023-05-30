import React from 'react'
import { NavBar } from "../components/Pagina/NavBar/NavBar"
import { ComidasList } from '../components/Pagina/List/ComidasList'
import { Footer } from '../components/Pagina/Footer/Footer'

export const Usuario = () => {
  return (
    <>
    <NavBar/>
    <ComidasList/>
    <Footer/>
    </>
  )
}
