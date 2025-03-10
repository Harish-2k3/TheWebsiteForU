import React from 'react'
import Header from '../../Core/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../Core/Footer/Footer'

export default function Main() {
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
