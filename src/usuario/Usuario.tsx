import React, {useState, useEffect} from 'react';
import { Space, Table, Tag, Typography, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Moda from './Modal'
import Delet from './BotonDelete';
import Secondmodal from './Modal2';
import useSWR from 'swr';
import {fetchApiPiensa, tableUsuario} from "../service/apiPiensa";
import DataTable from 'react-data-table-component';
import { PlusOutlined } from '@ant-design/icons';
import Api from './Api';


export interface UsuarioData {
    id: number | string;
    nombre: string;
    apellido:string
    edad:number
}

export const Usuario: React.FC = () => {

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
        <a>
          <Moda/>
        </a>
        <a>
          <Delet data={record}/>
        </a>
      </Space>
    ),
  },
];

const [editingData, setEditingData] = useState<UsuarioData | undefined>(undefined);
const [open, setOpen] = useState(false);
const fieldsEdit = (field: UsuarioData) => {
    setEditingData(field)
    setOpen(true);
}

const showDrawer = () => {
  setEditingData(undefined)
  setOpen(true);
};

  const { data, error } = useSWR<UsuarioData[]>(tableUsuario, fetchApiPiensa, {
    suspense: false,
});


   return(
  <>
  <Secondmodal/>
  {/*<AntDrawer open={open} setOpen={setOpen} fields={editingData}></AntDrawer>
  <Button type="primary" icon={<PlusOutlined />}  onClick={showDrawer} >
                    Agregar usuario
                </Button>*/}
  <Table columns={columns} dataSource={data}></Table>
  </>

 );
};



