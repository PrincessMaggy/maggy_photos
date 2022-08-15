import React from "react";

//Pages and components
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
//styles
import GlobalStyle from "./components/GlobalStyle";
//router
import{Routes, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'


function App() {
  const location = useLocation()
  return (
    <div className ="App">
    <GlobalStyle/>
    <Nav/> 
    <AnimatePresence exitBeforeEnter>

        <Routes  location={location} key={location.pathname}>

          <Route path="/maggy_photos" element={<AboutUs/>} />

          <Route path="/work" element={<OurWork/>} />

          <Route path="/work/:id" element= {<MovieDetail/>} />

          <Route path="/contact" element ={<ContactUs/>} />
          
          </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
