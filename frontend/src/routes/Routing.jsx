import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Collection from '../pages/Collection'
import ContactUs from '../pages/ContactUs'

const Routing = () => {
  return (
    <Routes>
      <Route element={<Home/>} path={"/"} />
      <Route element={<Collection/>} path={"/collection"} />
      <Route element={<About/>} path={"/about"} />
      <Route element={<ContactUs/>} path={"/contact"} />



    </Routes>
  )
}

export default Routing