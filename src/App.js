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
import{Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className ="App">
    <GlobalStyle/>

    <Nav/> 

      <Routes>

        <Route path="/mywebsite" element={<AboutUs/>} />

        <Route path="/work" element={<OurWork/>} />

        <Route path="/work/:id" element= {<MovieDetail/>} />

        <Route path="/contact" element ={<ContactUs/>} />
        
        </Routes>
      
    </div>
  );
}

export default App;
