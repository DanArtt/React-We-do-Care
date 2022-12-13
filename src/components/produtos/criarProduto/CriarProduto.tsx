import { Button, Container, TextField, Typography } from '@material-ui/core';
import { findByDisplayValue } from '@testing-library/react';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import Produto from '../../../models/Produto';
import { buscaId, post, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokenReducer';
import './CriarProduto.css';

function CriarProduto() {

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

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value
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
            alert('Produto atualizade com sucesse');

        } else {
            post('/produtos/criar', produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert("Produto criade com sucesse")
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
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </form>
            </Container>
        </>
    )
}

export default CriarProduto;