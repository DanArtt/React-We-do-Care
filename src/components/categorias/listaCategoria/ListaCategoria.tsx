import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { busca } from '../../../services/Service';
import './ListaCategoria.css'

function ListaCategoria() {

    const [categorias, setCategorias] = useState<Categoria[]>([])
    const navigate = useNavigate()

    async function getCategorias() {
        await busca("/categoria/all", setCategorias)
    }

    useEffect(() => {
        getCategorias()
    }, [categorias.length])

    return (
        <>
            {
                categorias.map(categoria => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Categoria
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {categoria.fornecedor}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {categoria.modelo}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {categoria.material}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5} >

                                    <Link to={`/categoriasform/${categoria.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
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


export default ListaCategoria;
