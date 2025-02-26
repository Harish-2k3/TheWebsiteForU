import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../../Components/Main/Main'
import Home from '../../Components/Home/Home'
import Contactus from '../../Components/Contact/Contactus'

export default function AppRouter() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route element={<Main/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contactus/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
