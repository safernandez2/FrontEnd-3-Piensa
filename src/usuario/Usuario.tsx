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
// TODO: Aca se entroba result porque el endpoint anterior tenia el objeto dentro de un objeto llamado 'result' en su caso pude ser destinto
    id: number | string;
    nombre: string;
    apellido:string
    edad:number
}


const columns: ColumnsType<UsuarioData> = [
    {
    title: 'id',
    dataIndex:'id',
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


// const data: UsuarioData[] = [
//   {
//     id: '1',
//     nombre: 'John Brown',
//     edad: 32,
//     apellido: 'New York No. 1 Lake Park',
//   },
//   {
//     id: '2',
//     nombre: 'John Brown',
//     edad: 32,
//     apellido: 'New York No. 1 Lake Park',
//   },
//   {
//     id: '3',
//     nombre: 'John Brown',
//     edad: 32,
//     apellido: 'New York No. 1 Lake Park',
//   },
//   {
//     id: '4',
//     nombre: 'John Brown',
//     edad: 32,
//     apellido: 'New York No. 1 Lake Park',
//   },
//
// ];



const Usuario: React.FC = () => {



  const { data, error } = useSWR<UsuarioData[]>(tableUsuario, fetchApiPiensa, {
    suspense: false,
});


   return(
  <>
   <Secondmodal/>
{/*TODO: El componente Table no necesta de map para mostrar los datos*/}
  <Table columns={columns} dataSource={data} ></Table>

  </>

 );
};

export default Usuario;
