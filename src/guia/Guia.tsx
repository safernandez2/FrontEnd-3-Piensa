import React from 'react';
import { Divider, Typography } from 'antd';
import ZonaR from './Imagen1';
import Catenaria from './Imagen2';
import Cruce from './Imagen3';

const { Title, Paragraph, Text, Link } = Typography;


const App: React.FC = () => (
<>
<Typography>
    <Title>Conozca las señales del tranvia para evitar accidentes</Title>
    <Paragraph>
    </Paragraph>
    <hr></hr>
    <Title level={2}>  </Title>
    <Paragraph>
    </Paragraph>
    <Divider />
    <Title></Title>
    <Paragraph>
    </Paragraph>
  </Typography>

  <ZonaR/>
  <Catenaria/>
  <Cruce/>

  </>
);

export default App;