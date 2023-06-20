import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomerService from './wrap/cs/CustomerService'

// Component List
import FooterComponent from './wrap/FooterComponent'
import HeaderComponent from './wrap/HeaderComponent'
import HomeComponent from './wrap/HomeComponent'
import OnTopComponent from './wrap/OnTopComponent'
// import SidebarComponent from './wrap/SidebarComponent'

export default function WrapComponent() {
  return (
    <div id="wrap">
      <OnTopComponent />
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HeaderComponent />} >
            <Route index element={<HomeComponent />} />
            <Route path='/home' element={<HomeComponent />} />
            <Route path='/cs' element={<CustomerService />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <FooterComponent />
    </div>
  )
}
