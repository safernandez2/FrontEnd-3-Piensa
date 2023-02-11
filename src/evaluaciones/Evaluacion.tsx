import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Evaluacion2 from './Modal';
import Evaluacion3 from './Delate';
import Modal2 from  "./Modal2";
import useSWR from 'swr';
import {fetchApiPiensa, tableEvaluacion} from "../service/apiPiensa";


interface EvaluacionData {
  id: number|string ;
  fecha: string;
  valido: string;
  error: string;
  usuario_id: string;
}

const columns: ColumnsType<EvaluacionData> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Fecha',
    dataIndex: 'fecha',
    key: 'fecha',
  },
  {
    title: 'Valido',
    dataIndex: 'valido',
    key: 'valido',
  },
  {
    title: 'Error',
    key: 'error',
    dataIndex: 'error',
  },
  {
    title: 'Usuario_id',
    key: 'usuario',
    dataIndex: 'usuario',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a><Evaluacion3/></a>
      </Space>
    ),
  },
];

/*const data: DataType[] = [
  {
    key: '1',
    id: '1',
    fecha: "27/01/2023",
    valido: '6',
    error: "4",
    usuario_id: "Juan Calle",
  },
  {
    key: '2',
    id: '2',
    fecha: "28/01/2023",
    valido: '7',
    error: "3",
    usuario_id: "Camila Torres",
  },
  {
    key: '3',
    id: '3',
    fecha: "29/01/2023",
    valido: '4',
    error: "6",
    usuario_id: "Lupe Aguilar",
  },
  {
    key: '4',
    id: '4',
    fecha: "29/01/2023",
    valido: '5',
    error: "5",
    usuario_id: "Jose Perez"
  },
  {
    key: '5',
    id: '5',
    fecha: "30/01/2023",
    valido: '7',
    error: "3",
    usuario_id: "Alex Torres"
  },
];
*/
const App: React.FC = () =>{

const { data, error } = useSWR<EvaluacionData[]>(tableEvaluacion, fetchApiPiensa, {
  suspense: false,
});

return(
<>
<Modal2/>
<Table columns={columns} dataSource={data} />; 
</>
)
}

export default App;