import React, { useState } from "react";
import "./Eva.css"


const Apieva = () => {
  const [data, setData] = useState({});

  const handleSubmit = (event:any) => {
    event.preventDefault();
    fetch("http://localhost:8081/evaluacion", {
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
        className="datapre"
        type="fecha"
        name="fecha"
        placeholder="Fecha...."
        onChange={handleChange}
      />
      <input
        className="datapre"
        type="valido"
        name="valido"
        placeholder="Num. preguntas validas...."
        onChange={handleChange}
      />
      <input
        className="datapre"
        type="error"
        name="error"
        placeholder="Num. preguntas error...."
        onChange={handleChange}
      />
       <input
        className="datapre"
        type="usuarioId"
        name="usuarioId"
        placeholder="Usuario...."
        onChange={handleChange}
      />
    
      <button className="botsave" type="submit">Guardar</button>
    </form>
  );
};

export default Apieva;
