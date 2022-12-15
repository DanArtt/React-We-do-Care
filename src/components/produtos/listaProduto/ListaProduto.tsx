import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokenReducer';
import './ListaProduto.css'

function ListaProduto() {

    const [produtos, setProduto] = useState<Produto[]>([])
    const navigate = useNavigate()
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    async function getProdutos() {
        await busca("/produtos/all", setProduto)
    }

    useEffect(() => {
        getProdutos()
    }, [produtos.length])

    return (
        <>
            {
                produtos.map(produto => (
                    <Box m={2} className='card' >
                        <Link to={`/produtos/${produto.id}`} className='text-link'>
                            <Card variant="outlined" className='card'>
                                <CardContent>
                                    <img src={produto.foto} width='200px' height='200px' ></img>
                                    <Typography gutterBottom>
                                        {produto.categoria?.modelo}
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

                                        <Link to={`/produtosform/${produto.id}`} className="text-decorator-none">
                                            <Box mx={1}>
                                                <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                    atualizar
                                                </Button>
                                            </Box>
                                        </Link>
                                        <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
                                            <Box mx={1}>
                                                <Button variant="contained" size='small' color="secondary">
                                                    Deletar
                                                </Button>
                                            </Box>
                                        </Link>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Link>
                    </Box>
                ))
            }
        </>
    );
}


export default ListaProduto;
