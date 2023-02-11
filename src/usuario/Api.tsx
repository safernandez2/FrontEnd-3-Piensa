import React, { useState } from "react";
import "./User.css"


const Api = () => {
  const [data, setData] = useState({});

  const handleSubmit = (event:any) => {
    event.preventDefault();
    fetch("http://localhost:8081/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Data sent successfully:", result);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  const handleChange = (event:any) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className="datauser"
        type="nombre"
        name="nombre"
        placeholder="Nombre...."
        onChange={handleChange}
      />
      <input
        className="datauser"
        type="apellido"
        name="apellido"
        placeholder="Apellido...."
        onChange={handleChange}
        
      />
      <input
        className="datauser"
        type="edad"
        name="edad"
        placeholder="Edad...."
        onChange={handleChange}
      />
      
      <button className="botsave" type="submit">Guardar</button>
    </form>
  );
};

export default Api;
