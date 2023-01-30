import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Input, Radio, Space } from 'antd';
import Preguntaspiensa from "../preguntas/Preguntas"

const Opciones: React.FC = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={1}>Es un cable aereo que permanece enegizado</Radio>
        <Radio value={2}>Es un cable subterraneo</Radio>
        <Radio value={3}>Es una señal</Radio>
      </Space>
    </Radio.Group>
  );
};

export default Opciones;