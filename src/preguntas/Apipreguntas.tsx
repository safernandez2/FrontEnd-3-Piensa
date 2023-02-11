import React, { useState } from "react";
import "./Pre.css"


const Apipre = () => {
  const [data, setData] = useState({});

  const handleSubmit = (event:any) => {
    event.preventDefault();
    fetch("http://localhost:8081/preguntas", {
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
        type="descripcion"
        name="descripcion"
        placeholder="Descripcion...."
        onChange={handleChange}
      />
      <input
        className="datapre"
        type="opcionone"
        name="opcionone"
        placeholder="Opcion Uno...."
        onChange={handleChange}
      />
      <input
        className="datapre"
        type="opciontwo"
        name="opciontwo"
        placeholder="Opcion Dos...."
        onChange={handleChange}
      />
       <input
        className="datapre"
        type="opcionthree"
        name="opcionthree"
        placeholder="Opcion Tres...."
        onChange={handleChange}
      />
       <input
        className="datapre"
        type="respuesta"
        name="respuesta"
        placeholder="Respuesta...."
        onChange={handleChange}
      />
       <input
        className="datapre"
        type="tipo"
        name="tipo"
        placeholder="Tipo...."
        onChange={handleChange}
      />
      <button className="botsave" type="submit">Guardar</button>
    </form>
  );
};

export default Apipre;
