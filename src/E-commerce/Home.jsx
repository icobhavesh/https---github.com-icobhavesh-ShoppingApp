import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Product from './Product'
import Navbar from './Navbar'

import Contact from './Contact'
import AddToCart from './AddToCart'
import HomeComponent from './HomeComponent'


const Home = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomeComponent />} />
                <Route path='/contact' element={<Contact />} />
                {/* <Route path='/product:id' element={<ProuductDetails />} /> */}
                <Route path='/addCart' element={<AddToCart />} />
            </Routes>
          
        </BrowserRouter>
    )
}

export default Home