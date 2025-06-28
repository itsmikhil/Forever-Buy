import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Collection from '../pages/Collection'
import ContactUs from '../pages/ContactUs'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Product from '../pages/Product'
import Cart from '../pages/Cart'

const Routing = () => {
  return (
    <Routes>
      <Route element={<Home/>} path={"/"} />
      <Route element={<Collection />} path={"/collection"} />
      <Route element={<About/>} path={"/about"} />
      <Route element={<ContactUs/>} path={"/contact"} />
      <Route element={<Login/>} path={"/login"} />
      <Route element={<SignUp/>} path={"/signup"} />
      <Route element={<Product/>} path={"/product/:id"} />
      <Route element={<Cart/>} path={"/cart"} />
    </Routes>
  )
}

export default Routing