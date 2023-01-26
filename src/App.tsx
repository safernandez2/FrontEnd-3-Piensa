import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Preguntas from "./preguntas/Preguntas";
import Guia from "./guia/Guia";
import Inicio from "./inicio/Inicio";
import Contactos from "./contactos/Contactos";
import Evaluacion from "./evaluaciones/Evaluacion";



function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path="/inicio" element={<Inicio />} />   
      <Route path="/guia" element={<Guia />} />   
        <Route path="/preguntas" element={<Preguntas />} /> 
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/evaluacion" element={<Evaluacion/>} />      
      </Routes>
    </BrowserRouter>   
  );
}




export default App;