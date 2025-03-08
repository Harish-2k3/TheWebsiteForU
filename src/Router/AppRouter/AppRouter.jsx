import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../../Components/Main/Main'
import Home from '../../Components/Home/Home'
import Contactus from '../../Components/Contact/Contactus'
import AllServicesComponent from '../../Components/Services/Components/Services/AllServicesComponent'
import AboutCompany from '../../Components/Home/AboutCompany'

export default function AppRouter() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route element={<Main/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutCompany/>}/>
            <Route path="/contact" element={<Contactus/>}/>
            <Route path="/services" element={<AllServicesComponent/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
