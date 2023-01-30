import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Input, Radio, Space } from 'antd';
import Preguntaspiensa from "../preguntas/Preguntas"

const Opciones3: React.FC = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={1}>Para avisar cuando se acerca el tranvia</Radio>
        <Radio value={2}>Para que los autos pasen a toda velocidad</Radio>
        <Radio value={3}>Para que pasen los peatones</Radio>
      </Space>
    </Radio.Group>
  );
};

export default Opciones3;