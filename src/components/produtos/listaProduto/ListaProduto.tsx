import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokenReducer';
import './ListaProduto.css'

function ListaProduto() {

    const [produtos, setCategorias] = useState<Produto[]>([])
    const navigate = useNavigate()
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")
    
        }
    }, [token])

    async function getCategorias() {
        await busca("/produtos/all", setCategorias)
    }

    useEffect(() => {
        getCategorias()
    }, [produtos.length])

    return (
        <>
            {
                produtos.map(produto => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Produto
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {produto.nome}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {produto.preco}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5} >

                                    <Link to={`/categoriasform/${produto.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarTema/${produto.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    );
}


export default ListaProduto;
