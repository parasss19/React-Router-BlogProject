import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import { Outlet } from 'react-router-dom'   //we import outlet component as it is used to render different components dymaically (here we want to render home/about/contact/github etc page b/w header and footer)


export default function Route() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>  
    </>
  )
}
