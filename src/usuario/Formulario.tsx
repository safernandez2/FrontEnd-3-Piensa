import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const Formul: React.FC = () => (
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
      label="Nombre"
      name="Nombre"
      rules={[{ required: true, message: 'Ingresa el nombre' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Apellido"
      name="Apellido"
      rules={[{ required: true, message: 'Ingresa el apellido' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Edad"
      name="Edad"
      rules={[{ required: true, message: 'Ingresa tu edad' }]}
    >
      <Input />
    </Form.Item>

    

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Guardar
      </Button>
    </Form.Item>
  </Form>
);

export default Formul;