import React, { useEffect, useState, ChangeEvent } from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Cadastro.css';
import User from '../../model/User';
import { cadastroUsuario } from '../../services/Service';


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
            renda_usuario: 0,
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
            renda_usuario: 0,
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

    useEffect(() => {
        if (userResult.id_usuario != 0) {
            navigate("/logar")
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha_usuario) {
            cadastroUsuario(`/usuario/cadastrar`, user, setUserResult)
            alert('Usuario cadastrado com Sucesso!')
        } else {
            alert('Dados incorretos, por favor, verifique se as senhas estão iguais.')
        }
    }



    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>



                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>



                        <TextField value={user.nome_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='nome' label='Nome Completo' variant='outlined' name='nome_usuario' margin='normal' fullWidth />

                        <TextField value={user.genero_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='genero' label='Gênego' variant='outlined' name='genero_usuario' margin='normal' fullWidth />

                        <TextField value={user.estado_civil} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='estadoCivil' label='Estado Civil' variant='outlined' name='estado_civil' margin='normal' fullWidth />

                        <TextField value={user.profissao_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='profissao' label='Profissão' variant='outlined' name='profissao_usuario' margin='normal' fullWidth />

                        <TextField value={user.renda_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='renda' label='Renda Mensal' variant='outlined' name='renda_usuario' margin='normal' fullWidth />

                        <TextField value={user.etnia_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='etnia' label='Etnia' variant='outlined' name='etnia_usuario' margin='normal' fullWidth />

                        <TextField value={user.data_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='data' label='Data de Nascimento' variant='outlined' name='data_usuario' margin='normal' fullWidth />

                        <TextField value={user.cpf_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='cpf' label='CPF' variant='outlined' name='cpf_usuario' margin='normal' fullWidth />

                        <TextField value={user.rg_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='rg' label='RG' variant='outlined' name='rg_usuario' margin='normal' fullWidth />

                        <TextField value={user.cep_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='cep' label='CEP' variant='outlined' name='cep_usuario' margin='normal' fullWidth />

                        <TextField value={user.endereco_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='endereco' label='Endereço' variant='outlined' name='endereco_usuario' margin='normal' fullWidth />

                        <TextField value={user.telefone_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='tel' label='Telefone' variant='outlined' name='telefone_usuario' margin='normal' fullWidth />

                        <TextField value={user.email_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='email' label='Email' variant='outlined' name='email_usuario' margin='normal' fullWidth />

                        <TextField value={user.senha_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='Senha' variant='outlined' name='senha_usuario' margin='normal' type='password' fullWidth />

                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />

                        <TextField value={user.descricao_usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='descricao' label='Informe sua Necessidade' variant='outlined' name='descricao_usuario' margin='normal' type='textarea' fullWidth />

                        <Box marginTop={2} textAlign='center'>
                            <Link to='/logar' className='text-decorator-none'>
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