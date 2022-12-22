import Produto from "./Produto"


interface Categoria {
    id: number
    fornecedor: string
    modelo: string
    material: string
    produto?: Produto | null
}

export default Categoria;