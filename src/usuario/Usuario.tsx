import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Moda from './Modal'
import Delet from './BotonDelete';
import Secondmodal from './Modal2';

interface DataType {
  key: string;
  id: string;
  nombre: string;
  apellido: string;
  edad: number;
}


const columns: ColumnsType<DataType> = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    key: 'nombre',
  },
  {
    title: 'Apellido',
    dataIndex: 'apellido',
    key: 'apellido',
  },
  {
    title: 'Edad',
    key: 'edad',
    dataIndex: 'edad',
    
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a> <Moda/> </a>
        <a>  <Delet/> </a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    id: '1',
    nombre: "Jose",
    apellido: 'Perez',
    edad: 12,
  },
  {
    key: '2',
    id: '2',
    nombre: "Juan",
    apellido: 'Calle',
    edad:8,
  },
  {
    key: '3',
    id: '3',
    nombre:  "Alex",
    apellido: 'Torres',
    edad: 10,
  },
  {
    key: '4',
    id: '4',
    nombre:  "Luisa",
    apellido: 'Quito',
    edad: 10,
  },
  {
    key: '5',
    id: '5',
    nombre:  "Tatiana",
    apellido: 'Farez',
    edad: 10,
  },
  {
    key: '6',
    id: '6',
    nombre:  "Antony",
    apellido: 'Ezpinoza',
    edad: 10,
  },
  {
    key: '7',
    id: '7',
    nombre:  "Camila",
    apellido: 'Torres',
    edad: 10,
  },
  {
    key: '8',
    id: '8',
    nombre:  "Lupe",
    apellido: 'Aguilar',
    edad: 10,
  },

];

const App: React.FC = () => 
<>
<Table columns={columns} dataSource={data} />;
<Secondmodal/>
</>


export default App;