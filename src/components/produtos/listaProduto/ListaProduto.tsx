import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokenReducer';
import './ListaProduto.css'
import { useStyles } from '../../../pages/home/Home';

function ListaProduto() {
    const classes = useStyles();

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

                    <Box display='flex' justifyContent='center'>

                        <Card className={`${classes.root} sombra card`} >
                            <Box>
                                <Link to={`/produtos/${produto.id}`} className='text-link'>
                                    <CardContent>
                                        <img src={produto.foto} width='200px' height='auto' ></img>
                                        <Typography gutterBottom className='TypographyD'>
                                            {produto.categoria?.modelo}
                                        </Typography>
                                        <Typography variant="h5" component="h2" className='Typography'>
                                            {produto.nome}
                                        </Typography>
                                        <Typography variant="h5" component="h2" className='Typography'>
                                            R$ {produto.preco}
                                        </Typography>
                                    </CardContent>
                                </Link>
                                <Box alignItems='center' justifyContent='center' display='flex' className='espacer'>
                                    <CardActions>
                                        <Link to={`/produtosform/${produto.id}`} className="text-link">
                                                <Button variant="contained" className="btnColor btnPosition" size='small' >
                                                    editar
                                                </Button>
    
                                        </Link>
                                        
                                        <Link to={`/deletarProduto/${produto.id}`} className="text-link">
                                                <Button variant="contained" size='small' className='btnColor btnPosition'>
                                                    excluir
                                                </Button>
                                        </Link>
                                    </CardActions>
                                </Box>
                            </Box>
                        </Card>
                    </Box>
                ))
            }
        </>
    );
}


export default ListaProduto;
