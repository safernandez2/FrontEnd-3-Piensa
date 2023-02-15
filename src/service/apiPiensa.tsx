import axios from "axios";

export const tableUsuario = 'http://localhost:8081/usuario'
export const tablePreguntas = 'http://localhost:8081/preguntas'
export const tableEvaluacion = 'http://localhost:8081/evaluacion/with/usuario'

export const fetchApiPiensa = async (url:string) => {

    return fetch(url).then(res=> res.json())
}

export const createPIENSA = async (url: string, { arg }: any) => {
    const response = await axios.post(url, arg);
    return response.data;
};

export const updatePIENSA = async (url: string, { arg }: any) => {
    const response = await axios.patch(url, arg);
    return response.data;
};

export const deletePIENSA = async (url: string) => {
    const response = await axios.delete(url);
    return response.data;
};
