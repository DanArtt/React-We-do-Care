import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import './Cadastro.css';
import User from '../../models/User';
import { cadastro } from '../../services/Service';
import './Cadastro.css';
import { toast } from 'react-toastify';

function Cadastro() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id_usuario: 0,
            nome_usuario: '',
            genero_usuario: '',
            estado_civil: '',
            profissao_usuario: '',
            renda_usuario: '',
            etnia_usuario: '',
            data_usuario: '',
            cpf_usuario: '',
            rg_usuario: '',
            cep_usuario: '',
            endereco_usuario: '',
            telefone_usuario: '',
            email_usuario: '',
            senha_usuario: '',
            descricao_usuario: ''
        })


    const [userResult, setUserResult] = useState<User>(
        {
            id_usuario: 0,
            nome_usuario: '',
            genero_usuario: '',
            estado_civil: '',
            profissao_usuario: '',
            renda_usuario: '',
            etnia_usuario: '',
            data_usuario: '',
            cpf_usuario: '',
            rg_usuario: '',
            cep_usuario: '',
            endereco_usuario: '',
            telefone_usuario: '',
            email_usuario: '',
            senha_usuario: '',
            descricao_usuario: ''
        })


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    // Captura O Elemeto name de Cada Input e Retorna o valor
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        console.log(Object.values(user))

        if (confirmarSenha == user.senha_usuario) {
            try{
                await cadastro(`/usuario/cadastrar`, user, setUserResult)
                toast.success('Usuário Cadastrado com Sucesso', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                    navigate('/home')
            }catch(error){
                toast.error('Preencha os campos corretamente!', {
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
        } 
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={1} paddingY={1}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='negrito'>Cadastrar</Typography>
                        <TextField value={user.nome_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nomeCompleto' label='Nome Completo' variant='outlined' name='nome_usuario' margin='normal' fullWidth />

                        <Grid className='container'>
                            <TextField value={user.genero_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='genero' label='Gênero' variant='outlined' name='genero_usuario' margin='normal' fullWidth />
                            <TextField value={user.estado_civil} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='estadoCivil' label='Estado Civil' variant='outlined' name='estado_civil' margin='normal' fullWidth className='ml mr' />
                            <TextField value={user.etnia_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='etnia' label='Etnia' variant='outlined' name='etnia_usuario' margin='normal' fullWidth />
                        </Grid>

                            <TextField value={user.profissao_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='profissao' label='Profissão' variant='outlined' name='profissao_usuario' margin='normal' fullWidth />
                            <TextField value={user.renda_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='rendaMensal' label='Renda Mensal' variant='outlined' name='renda_usuario' margin='normal' fullWidth />

                        <Grid className='container'>
                            <TextField value={user.data_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nascimento' label='Data de Nascimento' variant='outlined' name='data_usuario' margin='normal' fullWidth />
                            <TextField value={user.cpf_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='cpf' label='CPF' variant='outlined' name='cpf_usuario' margin='normal' fullWidth className='mr ml' />
                            <TextField value={user.rg_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='rg' label='RG' variant='outlined' name='rg_usuario' margin='normal' fullWidth />
                        </Grid>

                        <TextField value={user.cep_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='cep' label='CEP' variant='outlined' name='cep_usuario' margin='normal' fullWidth />
                        <TextField value={user.endereco_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='endereco' label='Endereço' variant='outlined' name='endereco_usuario' margin='normal' fullWidth />

                        <Grid className='container'>
                            <TextField value={user.email_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='Email' variant='outlined' name='email_usuario' margin='normal' fullWidth className='mr' />
                            <TextField value={user.telefone_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='telefone' label='Telefone/Celular' variant='outlined' name='telefone_usuario' margin='normal' fullWidth />
                        </Grid>

                        <Grid className='container'>
                            <TextField value={user.senha_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha_usuario' margin='normal' type='password' fullWidth className='mr' />
                            <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        </Grid>

                        <TextField value={user.descricao_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='necessidade' label='Informe Sua Necessidade' variant='outlined' name='descricao_usuario' margin='normal' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-link'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Cadastro;