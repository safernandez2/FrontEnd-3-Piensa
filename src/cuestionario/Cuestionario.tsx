import React from 'react';
import { Divider, Typography } from 'antd';
import datapreguntas from "../preguntas/Preguntas"
import Opciones from "./Opciones"
import Opciones2 from "./Opciones2"
import Opciones3 from "./Opciones3"
import Botonsave from "./Botonguardar"


const { Title, Paragraph, Text, Link } = Typography;



const App: React.FC = () => (
  <>
  <Typography>
    <Title>Cuestionario</Title>
    <hr/>
    <Title level={2}>Pregunta 1</Title>
    <Paragraph>
    ¿Que es la catenaria activa?
    </Paragraph>

    <Paragraph>
      <Opciones/>
    </Paragraph>

    <hr/>
    
    <Title level={2}>Pregunta 2</Title>
    <Paragraph>
    ¿Que funcion cumple la prioridad tranviaria?
    </Paragraph>

    <Paragraph>
      <Opciones2/>
    </Paragraph>
    
    <hr/>

    <Title level={2}>Pregunta 3</Title>
    <Paragraph>
    ¿Para que sirven los semaforos?
    </Paragraph>

    <Paragraph>
      <Opciones3/>
    </Paragraph>
  </Typography>
  <Botonsave/>
  </>
);

export default App;