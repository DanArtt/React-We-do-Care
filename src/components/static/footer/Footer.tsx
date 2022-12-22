import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Box, Typography } from "@mui/material";
import Link from "@material-ui/core/Link";
import './Footer.css'
import ModalLogin from "../../../pages/login/ModalLogin";
import LogoFooter from '../../assets/LogoFooter.png';

export default function Footer() {
    return <footer>
        
        <Box px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
            style={{ background: "#4c5c0c" }}
            className='mt'>

            <Container maxWidth="lg" >
                <Grid container spacing={8} className=" textoFooter">
                    <Grid item xs={12} sm={3} >
                        <Box>

                            <Box borderBottom={1} className='textoBold'  > Categorias </Box>
                            <Box className="textoPadding" >
                                <Link href="/" color="inherit">
                                    Cadeira de Rodas
                                </Link>
                            </Box>

                            <Box className="textoPadding" >
                                <Link href="/" color="inherit">
                                    Muleta
                                </Link>
                            </Box>

                            <Box className="textoPadding" >
                                <Link href="/" color="inherit">
                                    
                                </Link>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={3} >
                        <Box borderBottom={1} className='textoBold' > Minha Conta </Box>
                        <Box className="textoPadding">
                            <ModalLogin />
                        </Box>

                        <Box className="textoPadding" >
                            <Link href="/cadastro" color="inherit">
                                Cadastrar
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={3} >
                        <Box borderBottom={1} className='textoBold' > Atendimento </Box>
                        <Box className="textoPadding" >
                            <Link href="/" color="inherit">
                                  Sobre Nós
                            </Link>
                        </Box>

                        <Box className="textoPadding" >
                            <Link href="/" color="inherit">
                                  (21) 96785-5751
                            </Link>
                        </Box>

                        <Box className="textoPadding" >
                            <Link target='_blank' href="https://www.google.com/search?client=opera-gx&hs=CuX&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsZ
                            rRGFh254LEmWop6R6G0DumSPYnQ:1669840624349&q=local+de+reciclagem&rflfq=1&num=10&sa=X&ved=2ahUKEwjyrfuJ4db7A
                            hVQq5UCHcxUBa8QjGp6BAgQEAE&biw=1325&bih=637&dpr=1#rlfi=hd:;si:2337052352862236241,a;mv:[[-22.8420302,-
                            w43.2460932],[-22.8913288,-43.284319599999996]]" color="inherit">
                            R. Castro Lopes, nº : 65
                            </Link>
                        </Box>

                        <Box>
                            <Link href="/" color="inherit">
                                
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={3} >
                        <Box borderBottom={1} className='textoBold' > Redes Sociais </Box>
                        <Box className="textoPadding">
                            <Link target='_blank' href="/" color="inherit">
                                Instagram
                            </Link>
                        </Box>
                        
                        <Box className="textoPadding">
                            <Link target='_blank' href="" color="inherit">
                                Facebook
                            </Link>
                        </Box>
                        
                        <Box className="textoPadding">
                            <Link target='_blank' href="/" color="inherit">
                                Linkedin
                            </Link>
                        </Box>
                    </Grid>
                </Grid>

                <Box className="textoFooter textoWedoCare" >
                    <Box className="logoFooter">
                    <img src={LogoFooter} className="imageFooter" alt="Logo Direitos autorais" />
                    <Typography className="textFooter">2022</Typography>
                    </Box>
                </Box>

            </Container>
        </Box>
    </footer>
}