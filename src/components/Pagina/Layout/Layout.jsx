import React from 'react'
import { NavBar } from '../NavBar/NavBar'
import { Footer } from '../Footer/Footer'
import { NavBarUser } from '../../../Admin/NavBar/NavBarUser'

export const Layout = ({children}) => {
  return (
    <>
        <NavBarUser/>
            <div className='min-h-[100vh]'>
                {children}
            </div>
        <Footer/>
    </>
  )
}
