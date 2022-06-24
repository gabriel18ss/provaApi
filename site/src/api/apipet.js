import axios from 'axios'
const api = axios.create({
    baseURL:'http//localhost:5000'

})
export async function inserirpet(nome){
    const resposta = await api.post('/pet'),{
        nome: nome
    }
    return resposta.data;
}

export async function listartodospet(){
    const resposta = await api.get('/listar');
    return resposta.data;
}