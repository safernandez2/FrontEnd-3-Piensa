export const tableUsuario = 'http://localhost:8081/usuario'
export const tablePreguntas = 'http://localhost:8081/preguntas'
export const tableEvaluacion = 'http://localhost:8081/evaluacion'

export const fetchApiPiensa = async (url:string) => {
    return fetch(url).then(res=> res.json())
}
