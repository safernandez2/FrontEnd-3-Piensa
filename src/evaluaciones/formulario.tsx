import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const Formulario: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Fecha"
      name="fecha"
      rules={[{ required: true, message: 'Inserte la fecha porfavor' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Valido"
      name="valido"
      rules={[{ required: true, message: 'Inserte los datos porfavor' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Error"
      name="error"
      rules={[{ required: true, message: 'Inserte los datos porfavor' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Usuario_id"
      name="usuario_id"
      rules={[{ required: true, message: 'Inserte los datos porfavor' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Guardar Cambios
      </Button>
    </Form.Item>
  </Form>
);

export default Formulario;