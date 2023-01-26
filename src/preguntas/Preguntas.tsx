import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Modals from "./Modal"
import Delete from "./Botondelete"

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'id',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Descripcion',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Opcion uno',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Opcion dos',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Opcion tres',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Respuesta',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tipo',
    key: 'tags',
    dataIndex: 'tags',
   
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>
          <Modals/>
        </a>
        <a>
          <Delete/>
        </a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const App: React.FC = () => <Table columns={columns} dataSource={data} />;

export default App;