import React from 'react';
import { Descriptions } from 'antd';
import './Contactos.css';

const Desc: React.FC = () => (
    <div className='descrip'>
  <Descriptions title="Pedro Pulgarin">
    <Descriptions.Item label="Nombre">Pedro Pulgarin</Descriptions.Item>
    <Descriptions.Item label="Telefono">0998598444</Descriptions.Item>
    <Descriptions.Item label="Direccion">Sayausi-Buenos Aires</Descriptions.Item>
    <Descriptions.Item label="Email">
      pjpulgarin@sudamericano.edu.ec
    </Descriptions.Item>
  </Descriptions>
  <Descriptions title="Steven Fernandez ">
  <Descriptions.Item label="Nombre">Steven Fernandez</Descriptions.Item>
    <Descriptions.Item label="Telefono">0963313492</Descriptions.Item>
    <Descriptions.Item label="Direccion">Misicata</Descriptions.Item>
    <Descriptions.Item label="Email">
      safernandez.2@sudamericano.edu.ec
    </Descriptions.Item>
</Descriptions>
<Descriptions title="Francisco Heredia">
<Descriptions.Item label="Nombre">Francisco Heredia</Descriptions.Item>
    <Descriptions.Item label="Telefono">0985996462</Descriptions.Item>
    <Descriptions.Item label="Direccion">Parque Industrial</Descriptions.Item>
    <Descriptions.Item label="Email">
      fjheredia@sudamericano.edu.ec
    </Descriptions.Item>
  </Descriptions>
  </div>
);
export default Desc;