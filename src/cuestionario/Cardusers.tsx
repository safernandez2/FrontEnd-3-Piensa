import React from 'react';
import { Card } from 'antd';
import { Select, Space } from 'antd';
import {fetchApiPiensa, tableUsuario} from "../service/apiPiensa";

interface UsuarioData {
  id: number | string;
  nombre: string;
  apellido:string
  edad:number
}


const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

const Selectedusuario: React.FC = () => ( 
  <div className="site-card-border-less-wrapper">
    <Card title="Selecciona tu nombre" bordered={false} style={{ width: 351 , height:120}}>
    <Space wrap>
    <Select
      defaultValue="Selecciona tu nombre"
      style={{ width: 200 }}
      onChange={handleChange}
      options={[
        { value: 'Jose Perez', label: 'Jose Perez' },
        { value: 'Juan Calle', label: 'Juan Calle' },
        { value: 'Alex Torres', label: 'Alex Torres' },
        { value: 'Luisa Quito', label: 'Luisa Quito' },
        { value: 'Tatiana Farez', label: 'Tatiana Farez' },
      ]}
    />
  </Space>
    </Card>
  </div>
);

export default Selectedusuario;