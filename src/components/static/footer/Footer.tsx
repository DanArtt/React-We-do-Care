import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Box } from "@mui/material";
import Link from "@material-ui/core/Link";
import './Footer.css'

export default function Footer() {
    return <footer>
        <Box px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
            style={{ background: "#4c5c0c" }}>

            <Container maxWidth="lg" >
                <Grid container className=" textoFooter">
                    <Grid item xs={12} sm={3} >
                        <Box >
                            <Box borderBottom={1}  > Categorias </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Cadeira de Rodas
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Muleta
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">

                                </Link>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <Box borderBottom={1} > Minha Conta </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Entrar
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Cadastrar
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <Box borderBottom={1} > Messeges </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Backup
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                History
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Roll
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <Box borderBottom={1} > Redes Sociais </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Backup
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                History
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Roll
                            </Link>
                        </Box>
                    </Grid>
                </Grid>

                <Box textAlign="center" pt={5} className="textoFooter" >
                    We Do Care &reg; {new Date().getFullYear()}
                </Box>

            </Container>
        </Box>
    </footer>
}