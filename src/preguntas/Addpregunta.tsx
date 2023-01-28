import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const Addpregunta: React.FC = () => (
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
      label="Descipcion"
      name="descripcion"
      rules={[{ required: true, message: 'Ingresa la descripcion!' }]}
    >
    <Input />
    </Form.Item>

    <Form.Item
      label="Opcion uno"
      name="opcionone"
      rules={[{ required: true, message: 'Ingresa la opcion uno!' }]}
    >
    <Input />
    </Form.Item>

    <Form.Item
      label="Opcion dos"
      name="opciontwo"
      rules={[{ required: true, message: 'Ingresa la opcion dos!' }]}
    >
    <Input />
    </Form.Item>

    <Form.Item
      label="Opcion tres"
      name="opcionthree"
      rules={[{ required: true, message: 'Ingresa la opcion tres!' }]}
    >
    <Input />
    </Form.Item>

    <Form.Item
      label="Respuesta"
      name="respuesta"
      rules={[{ required: true, message: 'Ingresa la respuesta!' }]}
    >
    <Input />
    </Form.Item>
 
    <Form.Item
      label="Tipo"
      name="tipo"
      rules={[{ required: true, message: 'Ingresa el tipo!' }]}
    >
    <Input />
    </Form.Item>
    

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Guardar cambios
      </Button>
    </Form.Item>
  </Form>
);

export default Addpregunta;