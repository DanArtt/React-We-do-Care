import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Produto from "../../../models/Produto";
import { buscaId } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokenReducer";
import './ExibirProduto.css';

function ExibirProduto() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        descricao: '',
        preco: 0,
        detalhe_produto: '',
        quantidade: 0,
        foto: '',
        categoria: null
    })

    async function findById(id: string) {
        buscaId(`/produtos/${id}`, setProduto)
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    return (
        <>
            <Box m={2} >

                            <Typography variant="h5" component="h2">
                                {produto.nome}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {produto.preco}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {produto.quantidade}
                            </Typography>
                            <img src={produto.foto}></img>
            </Box>
        </>
    )
}

export default ExibirProduto;