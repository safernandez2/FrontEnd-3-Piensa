import React from 'react';
import { Divider, Typography,  } from 'antd';
import Tranvia from "./Image"

const { Title, Paragraph, Text, Link } = Typography;


const App: React.FC = () => (
<>
<Typography>
    <Title>Aplicacion web para dar a conocer los tipos de señales tranviarias en niños, del Barrio Buenos Aires </Title>
    <Paragraph>
    Las señales de tránsito tranviarios son simbolos que se implemento en la vía pública para impartir seguridad a los peatones, ciclistas, vehículos 
    con el fin de la prevención de los accidentes. En la ciudad de Cuenca se ha presentado un número elevado de accidentes o percances ya sea por el simple 
    hecho de falta de información, o lo mas razonable, inrrespeto así las señales de transíto con enfoque al tranvía, Para el estudio adecuado o análisis que se 
    quiera emplear, se va a utilizar la metodología de SCRUM de los cuales está conformado por los siguientes enunciados: iniciación, planificación estimación, 
    implementación retrospectiva y lanzamiento, ya que este nos sirve para procesar a cabo un conjunto de tareas de forma regular con el objetivo principal de 
    trabajar de manera colaborativa, es decir, para fomentar el trabajo en equipo.
    </Paragraph>
    <Paragraph>
    Con este método de trabajo lo que se pretende es alcanzar el mejor resultado de un proyecto determinado. Por este medio lo que se plantea es de poder llegar o 
    implementar un tipo de enseñanza, lo cual a las personas que van dirigidos a este proyecto puedan comprender y memorizar de una manera lo cual se puede tomar
     evaluación de lo ya aprendido, esto conlleva a que ellos aprendan de cada una de estas señales, de como deben afrontar en esos tipos de situaciones, con respecto 
     a este medio de transporte público. 
    </Paragraph>
  </Typography>

  <Tranvia/>
  </>
  
);

export default App;