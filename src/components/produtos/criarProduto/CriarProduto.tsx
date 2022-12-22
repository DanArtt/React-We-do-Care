import { Button, Container, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { findByDisplayValue } from '@testing-library/react';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokenReducer';
import './CriarProduto.css';
import { toast } from 'react-toastify';

function CriarProduto() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([]);
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
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        fornecedor: '',
        modelo: '',
        material: '',
        produto: null
    })

    async function findById(id: string) {
        buscaId(`/produtos/${id}`, setProduto)
    }

    async function getCategorias() {
        await busca("/categoria/all", setCategorias)
    }

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])


    useEffect(() => {
        getCategorias()
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
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        console.log(Object.values(produto))

        if (id !== undefined) {
            put(`/produtos/atualizar`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Produto Atualizado com Sucesso!', {
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
            post('/produtos/criar', produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Produto Criado com Sucesso!', {
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
            <Container maxWidth="sm" className="topo ">
                <form onSubmit={onSubmit}>
                    <Typography variant="h3" color="textSecondary" component="h1" align="center" >Administração de Produto - ID {produto.id}</Typography>
                    <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="fornecedor" label="Nome do Produto" variant="outlined" name="nome" margin="normal" fullWidth />
                    <TextField value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="modelo" label="Preço" variant="outlined" name="preco" margin="normal" fullWidth />
                    <TextField value={produto.quantidade} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="material" label="Quantidade" variant="outlined" name="quantidade" margin="normal" fullWidth />
                    <TextField value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="material" label="Descrição" variant="outlined" name="descricao" margin="normal" fullWidth />
                    <TextField value={produto.detalhe_produto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="detalhe" label="Detalhes do Produto" variant="outlined" name="detalhe_produto" margin="normal" fullWidth />
                    <TextField value={produto.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="foto" label="Foto" variant="outlined" name="foto" margin="normal" fullWidth />

                    <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/categoria/id/${e.target.value}`, setCategoria )}>
                        {
                            categorias.map(categoria => (
                                <MenuItem value={categoria.id}>{categoria.modelo}</MenuItem>
                            ))
                        }
                    </Select>

                    <FormHelperText>Escolha uma Categoria para o Produto</FormHelperText>

                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </form>
            </Container>
        </>
    )
}

export default CriarProduto;