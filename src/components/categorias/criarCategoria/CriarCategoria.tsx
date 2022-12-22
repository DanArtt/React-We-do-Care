import { Button, Container, TextField, Typography } from '@material-ui/core';
import { findByDisplayValue } from '@testing-library/react';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { buscaId, post, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokenReducer';
import './CriarCategoria.css';
import { toast } from 'react-toastify';

function CriarCategoria() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        fornecedor: '',
        modelo: '',
        material: '',
        produto: null
    })

    async function findById(id: string) {
        buscaId(`/categoria/id/${id}`, setCategoria)
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            navigate("/login")
    
        }
    }, [token])

    function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/categoria/atualizar`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria atualizada com sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        } else {
            post('/categoria/criar', categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria criada com sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        back()
    }

    function back() {
        navigate('/home')
    }

    return (
        <>
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Administração de Categoria - {categoria.modelo}</Typography>
                <TextField value={categoria.fornecedor} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="fornecedor" label="Fornecedor" variant="outlined" name="fornecedor" margin="normal" fullWidth />
                <TextField value={categoria.modelo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="modelo" label="Modelo" variant="outlined" name="modelo" margin="normal" fullWidth />
                <TextField value={categoria.material} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="material" label="Material" variant="outlined" name="material" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
        </>
    )
}

export default CriarCategoria;