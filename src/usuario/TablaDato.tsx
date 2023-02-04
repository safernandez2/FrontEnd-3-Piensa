/*
import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Moda from './Modal'
import Delet from './BotonDelete';
import Secondmodal from './Modal2';
import useSWR from 'swr';


type DataType= {
  nombre: string,
  apellido: string,
  edad: number
}


const columns: ColumnsType<DataType> = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
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
    edad: 11,
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
    edad: 9,
  },
];

const App: React.FC = () => 
<>
<Secondmodal/>

<Table columns={columns} dataSource={data} />;
</>


export default App;*/