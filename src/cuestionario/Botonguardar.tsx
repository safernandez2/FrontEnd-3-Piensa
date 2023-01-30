import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';

const Botonsave: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Notificación',
      description:
        'El respectivo cuestionario se a guardado exitosamente.',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Guardar cuestionario
      </Button>
    </>
  );
};

export default Botonsave;