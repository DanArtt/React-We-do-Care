import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://ong.onrender.com/'
})

export const cadastro = async(url: any,dados: any,setDado: any) => { 
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

export const login = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}


// Método de Buscar
export const busca = async (url: any, setDado: any) => {
    const resposta = await api.get(url)
    setDado(resposta.data)
}

// Método de Buscar pelo ID
export const buscaId = async (url: any, setDado: any) => {
    const resposta = await api.get(url)
    setDado(resposta.data)
}

// Método de Cadastrar Produto/Categoria
export const post = async (url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.post(url, dados, header);
    setDado(resposta.data)
}

export const put = async (url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.put(url, dados, header)
    setDado(resposta.data)
}

export const deleteId = async (url: any, header: any) => {
    await api.delete(url, header)
}