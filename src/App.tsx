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



function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path="/inicio" element={<Inicio />} />   
      <Route path="/guia" element={<Guia />} />   
        <Route path="/preguntas" element={<Preguntas />} /> 
        <Route path="/contactos" element={<Contactos />} />     
      </Routes>
    </BrowserRouter>   
  );
}




export default App;