import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import Main from '../../Components/Main/Main'
import Home from '../../Components/Home/Home'
import Contactus from '../../Components/Contact/Contactus'
import DigitalMarketingService from '../../services/Components/ServicesComponents/OurServiceComponent/DigitalMarketingService'
import WebDevelopmentService from '../../services/Components/ServicesComponents/OurServiceComponent/WebDevelopmentService'
import MobileAppDevelopment from '../../services/Components/ServicesComponents/OurServiceComponent/MobileAppDevelopment'

export default function AppRouter() {
  return (
    <div>
        <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route element={<Main />}>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contactus />}/>
            <Route path="/digital-marketing" element={<DigitalMarketingService />}/>
            <Route path="/web-development" element={<WebDevelopmentService />}/>
            <Route path="/mobile-app-development" element={<MobileAppDevelopment />}/>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
