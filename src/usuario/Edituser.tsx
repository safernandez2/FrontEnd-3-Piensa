import React, { useState } from 'react';
import axios from 'axios';

interface Props {
  id: string;
  data: {
    [key: string]: any;
  };
}

const DataRow: React.FC<Props> = ({ id, data }) => {
  const [editMode, setEditMode] = useState(false);
  const [newData, setNewData] = useState(data);

  const handleEdit = async () => {
    try {
      await axios.patch(`localhost:8081/usuario/${id}`, newData);
      alert('Los datos se han editado correctamente');
      setEditMode(false);
    } catch (error) {
      console.error(error);
      alert('Ha ocurrido un error al intentar editar los datos');
    }
  };

  return (
    <tr>
      {Object.keys(data).map(key => (
        <td key={key}>
          {editMode ? (
            <input
              type="text"
              value={newData[key]}
              onChange={e =>
                setNewData({
                  ...newData,
                  [key]: e.target.value,
                })
              }
            />
          ) : (
            data[key]
          )}
        </td>
      ))}
      <td>
        {editMode ? (
          <button onClick={handleEdit}>Guardar</button>
        ) : (
          <button onClick={() => setEditMode(true)}>Editar</button>
        )}
      </td>
    </tr>
  );
};

export default DataRow;