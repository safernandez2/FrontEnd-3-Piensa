import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const pedro = 
`
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;

const steven = 
`
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;
const francisco = 
`
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;
const Descripcion: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse onChange={onChange}>
      <Panel header="Pedro  Pulgarin" key="1">
      <p>{pedro}</p>
      </Panel>
      <Panel header="Steven Fernandez" key="2">
        <p>{steven}</p>
      </Panel>
      <Panel header="Francisco Heredia" key="3">
        <p>{francisco}</p>
      </Panel>
    </Collapse>
  );
};

export default Descripcion;