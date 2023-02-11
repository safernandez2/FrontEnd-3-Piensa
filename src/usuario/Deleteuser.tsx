import React, { useState } from 'react';
import axios from 'axios';

interface Props {
  id: string;
}

const DataRow: React.FC<Props> = ({ id }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`localhost:8081/usuario/delete/${id}`);
      alert('Los datos se han eliminado correctamente');
    } catch (error) {
      console.error(error);
      alert('Ha ocurrido un error al intentar eliminar los datos');
    }
  };

  return (
    <tr>
      <td>{id}</td>
      <td>...</td>
      <td>
        <button onClick={handleDelete}>Eliminar</button>
      </td>
    </tr>
  );
};

export default DataRow;