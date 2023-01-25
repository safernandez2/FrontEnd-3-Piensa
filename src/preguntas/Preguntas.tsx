import React from 'react';
import { Card } from 'antd';
import Botons from "./Boton"
const { Meta } = Card;

const App: React.FC = () => (
  <>
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
    <Botons/>
  </Card>
  
  </>
);

export default App;