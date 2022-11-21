import React from "react";
import {  Routes, Route } from "react-router-dom";
import About from "../components/About/About";
import Values from "../components/Services/Services.jsx";
import Contact from "../components/Contact/Contact.jsx";
import Merchandising  from "../components/Merchandising/Merchandising";
import Home from "../pages/Home/Home";
import NotFound from "../pages/Home/404";

const RoutesDinamic = () => {
  return (
      <>
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/acerca-de" element={ <About />} />
          <Route path="/servicios" element={ <Values />} />
          <Route path="/contacto" element={ <Contact />} />
          <Route path="/merchandising" element={ <Merchandising/>} />
          <Route path="*" element={<NotFound />}/>
      </Routes>
      </>
  );
};

export default RoutesDinamic;

