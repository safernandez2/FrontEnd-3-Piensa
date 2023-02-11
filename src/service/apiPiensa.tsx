export const tableUsuario = 'http://localhost:8081/usuario'
export const tablePreguntas = 'http://localhost:8081/preguntas'
export const tableEvaluacion = 'http://localhost:8081/evaluacion/with/usuario'

export const fetchApiPiensa = async (url:string) => {
   
    return fetch(url).then(res=> res.json())
}

export const createfetchApiPiensa = async (url:string, {arg }:any) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(arg)
    })
}

export const updatefetchApiPiensa = async (url:string, {arg }:any) => {
    return fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(arg)
    })
}
