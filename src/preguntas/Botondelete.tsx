import React from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';

const { confirm } = Modal;





const showDeleteConfirm = () => {
  confirm({
    title: 'Estas seguro de eliminar?',
    icon: <ExclamationCircleFilled />,
    content: 'Recuerde que no podra recuperar esta informacion',
    okText: 'Si',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};



const Delete: React.FC = () => (
  <Space wrap>
    <Button onClick={showDeleteConfirm} type="dashed">
      Eliminar
    </Button>

  </Space>
);

export default Delete;