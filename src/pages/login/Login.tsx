import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/userLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/action';
import ModalLogin from './ModalLogin';
import { toast } from 'react-toastify';


function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            email: '',
            senha: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token])


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login('/auth/logar', userLogin, setToken)

            toast.success('Usuário Logado com Sucesso', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        } catch (error) {
            toast.error('Dados Inválidos. Tente novamente!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });;
        }
    }


    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' >
            <Grid alignItems='center' xs={6}>
                <Box paddingX={5} >
                    <form onSubmit={onSubmit}  >
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='negrito' >Entrar</Typography>
                        <TextField value={userLogin.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Email' variant='outlined' name='email' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center' onClick={ModalLogin}>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro' className='text-link' onClick={ModalLogin}>
                            <Typography variant='subtitle1' gutterBottom align='center' className='negrito'>Cadastre-se!</Typography>
                        </Link>

                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}


export default Login;