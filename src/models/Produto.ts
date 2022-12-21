import Categoria from "./Categoria"


interface Produto {
    id: number
    nome: string
    descricao: string
    preco: number
    detalhe_produto: string
    quantidade: number
    foto: string
    categoria?: Categoria | null
}

export default Produto;