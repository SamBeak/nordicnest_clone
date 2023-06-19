import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
      <HeaderComponent />
      {/* <SidebarComponent /> */}
      <HomeComponent />
      <FooterComponent />
    </div>
  )
}
