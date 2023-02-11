import React, { useState, useEffect } from 'react';
/*import {  RadioChangeEvent, Typography } from 'antd';
import Botonsave from "./Botonguardar"
import Selectedusuario from "./Cardusers"
import { Space } from 'antd';
import useSWR from 'swr';
import {fetchApiPiensa, tablePreguntas} from "../service/apiPiensa"
import { Input, Radio } from 'antd';
import { Card } from 'antd';
*/
import preguntas from './Preguntas';
import "./preguntas.css";




function App() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuación, setPuntuación] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(100);
  const [areDisabled, setAreDisabled] = useState(false);
  const [answersShown, setAnswersShown] = useState(false);


  function handleAnswerSubmit(isCorrect:boolean, e:any) {
    // añadir puntuación
    if (isCorrect) setPuntuación(puntuación + 1);
    // añadir estilos de pregunta
    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    // cambiar a la siguiente pregunta

    setTimeout(() => {
      if (preguntaActual === preguntas.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setTiempoRestante(100);
      }
    }, 1500);
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) setAreDisabled(true);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tiempoRestante]);

  if (isFinished)
    return (
      <main className="app">
        <div className="juego-terminado">
          <span>
            {" "}
            Obtuviste {puntuación} de {preguntas.length}{" "}
          </span>
          <button onClick={() => (window.location.href = "/cuestionario")}>
            {" "}
            Volver a jugar
          </button>
          <button
            onClick={() => {
              setIsFinished(false);
              setAnswersShown(true);
              setPreguntaActual(0);
            }}
          >
            Ver respuestas
          </button>
        </div>
      </main>
    );

  if (answersShown)
    return (
      <main className="app">
        <div className="lado-izquierdo">
          <div className="numero-pregunta">
            <span> Pregunta {preguntaActual + 1} de</span> {preguntas.length}
          </div>
          <div className="titulo-pregunta">
            {preguntas[preguntaActual].titulo}
          </div>
          <div>
            {
              preguntas[preguntaActual].opciones.filter(
                (opcion) => opcion.isCorrect
              )[0].textoRespuesta
            }
          </div>
          <button
            onClick={() => {
              if (preguntaActual === preguntas.length - 1) {
                window.location.href = "/";
              } else {
                setPreguntaActual(preguntaActual + 1);
              }
            }}
          >
            {preguntaActual === preguntas.length - 1
              ? "Volver a jugar"
              : "Siguiente"}
          </button>
        </div>
      </main>
    );

  return (
    <main className="app">
      <div className="lado-izquierdo">
        <div className="numero-pregunta">
          <span> Pregunta {preguntaActual + 1} de</span> {preguntas.length}
        </div>
        <div className="titulo-pregunta">
          {preguntas[preguntaActual].titulo}
        </div>
        <div>
          {!areDisabled ? (
            <span className="tiempo-restante">
              Tiempo restante: {tiempoRestante}{" "}
            </span>
          ) : (
            <button
              onClick={() => {
                setTiempoRestante(100);
                setAreDisabled(false);
                if (preguntaActual === preguntas.length - 1) {
                  setIsFinished(true);
                } else {
                  setPreguntaActual(preguntaActual + 1);
                }
              }}
            >
              Continuar
            </button>
          )}
        </div>
      </div>
      <div className="lado-derecho">
        {preguntas[preguntaActual].opciones.map((respuesta) => (
          <button
            disabled={areDisabled}
            key={respuesta.textoRespuesta}
            onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
          >
            {respuesta.textoRespuesta}
          </button>
        ))}
      </div>
    </main>
  );
}

export default App;



































































/*const { Title } = Typography;

interface PreguntasData {
  id: string | number;
  descripcion: string;
  opcionone: string;
  opciontwo: string;
  opcionthree: string;
  respuesta: string;
  tipo: string;

}
const columns: ColumnsType<PreguntasData> = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Descripcion',
    dataIndex: 'descripcion',
    key: 'descripcion',
  },
  {
    title: 'Opcion uno',
    dataIndex: 'opcionone',
    key: 'opcionone',
  },
  {
    title: 'Opcion dos',
    dataIndex: 'opciontwo',
    key: 'opciontwo',
  },
  {
    title: 'Opcion tres',
    dataIndex: 'opcionthree',
    key: 'opcionthree',
  },
  {
    title: 'Respuesta',
    dataIndex: 'respuesta',
    key: 'respuesta',
  },
  { 
    title: 'Tipo',
    key: 'tipo',
    dataIndex: 'tipo',
   
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>
          <Modals/>
        </a>
        <a>
          <Delete/>
        </a>
      </Space>
    ),
  },
];




const App: React.FC = () => {
  const [value, setValue] = useState();

  const { data, error } = useSWR<PreguntasData[]>(tablePreguntas, fetchApiPiensa, {
    suspense: false,
});

const onChange = (e: RadioChangeEvent) => {
  console.log('radio checked', e.target.value);
  setValue(e.target.value);
};



return(
  <>
  <Selectedusuario/>
  {/*<Table columns={columns} dataSource={data} />;
  data?.map(item => 
    <Radio.Group onChange={onChange} value={value}>
    <Space direction="vertical">
    <Title level={4}>{item.descripcion}</Title>
      <Radio value={1}>{item.opcionone}</Radio>
      <Radio value={2}>{item.opciontwo}</Radio>
      <Radio value={3}>{item.opcionthree}</Radio>
    </Space>
  </Radio.Group>
  )}
  <br></br>
  <hr></hr>
  <Botonsave/>
  </>
);
}

export default App;

*/