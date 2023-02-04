import React, {useState, useEffect} from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Moda from './Modal'
import Delet from './BotonDelete';
import Secondmodal from './Modal2';
import useSWR from 'swr';
import {fetchApiPiensa, tableUsuario} from "../service/apiPiensa";
import DataTable from 'react-data-table-component';



interface UsuarioData {
  results: Array<{
    id: number;
    nombre: string;
    apellido:string
    edad:number
}>;
}


const columns: ColumnsType<UsuarioData> = [ 
  
  
  {
    title: 'id',
    dataIndex:,
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


/*const data: UsuarioData[] = [
  
  {
    id: 1,
    nombre: "Jose",
  },
  {
    id: 2,
    apellido: 'Calle',
  },
  {
    id: 3,
    nombre:  "Alex",
    apellido: 'Torres',
    edad: 10,
  },
  {
    id: 4,
    nombre:  "Luisa",
    apellido: 'Quito',
    edad: 11,
  },
 
];


*/
const Usuario: React.FC = () => {
  const { data, error } = useSWR<UsuarioData>(tableUsuario, fetchApiPiensa, {
    suspense: false,
});
  

   return(  
  <>
   <Secondmodal/>
   {data?.results.map((usuario) => (
  <Table columns={columns}    key={usuario.id} key={usuario.nombre} key={usuario.apellido}  key={usuario.edad}></Table>/>
  ))}

  </>

 );
};

export default Usuario;