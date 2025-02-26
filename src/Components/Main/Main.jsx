import React from 'react'
import Header from '../../Core/Header/Header'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
    </div>
  )
}
