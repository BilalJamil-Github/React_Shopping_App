import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Header/Header'
function Applayout() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default Applayout
