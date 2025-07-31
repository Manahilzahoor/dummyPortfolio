import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Header } from '../common/Header';
import { Home } from "../home/Home"
import { About } from "./About"
import { Blog } from "./Blog"
import { Contact } from "./Contact"
import { Portfolio } from "./Portfolio"
import { Services } from "./Services"
import { Testimonials } from "./Testimonials"
import Footer from '../common/Footer';
export const Pages = () => {
  return (
    <>
    <Router>
        <Header/>
        <Routes>
       <Route  path='/' element={<Home/>} />
       <Route  path='/about' element={<About/>} />
       <Route  path='/services' element={<Services/>} />
       <Route  path='/portfolio' element={<Portfolio/>} />
       <Route  path='/testimonials' element={<Testimonials/>} />
       <Route  path='/blog' element={<Blog/>} />
       <Route  path='/contact' element={<Contact/>} />
      
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}
