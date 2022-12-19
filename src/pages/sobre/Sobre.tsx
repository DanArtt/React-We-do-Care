import { Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import './Sobre.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';


function Sobre() {

    return (
        <>
            <Typography>
                A WeDoCare é uma empresa que se importa com todos e todas e todes. Aqui, você está seguro de que sua necessidade será atendida. Nós, os desenvolvedores, estamos em pronta mão para auxiliar com todo respeito, prontidade e dedicação.
                <h3>
                    Nossos funcionarios são
                </h3>
            </Typography>

            <Box className='boxCard'>
                <div className="flip-card " >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="https://media.discordapp.net/attachments/1011750581146239077/1054399048729235509/IMG_20221115_193010_500.jpg?width=663&height=663" alt="Membro da Equipe" className='avatarEmpresa' />
                        </div>
                        <div className="flip-card-back">

                            <h1>Igor Nascimento</h1>
                            <p>Responsável pelo logo e auxlio geral no código.</p>
                            <Box display='flex' alignItems='center' justifyContent='center' flexWrap='wrap' flexDirection='column'>
                                <Box display='flex' alignItems='center'>
                                    <LinkedInIcon />
                                    <a href='https://www.linkedin.com/in/igornaspereira'>Linkedin</a>
                                </Box>
                                <Box display='flex' alignItems='center' className='mt1'>
                                    <InstagramIcon />
                                    <a href='https://instagram.com/igornaspereira?igshid=YmMyMTA2M2Y='>Instagram</a>
                                </Box>
                            </Box>
                        </div>
                    </div>
                </div>
            </Box>

            <Box className='boxCard'>
                <div className="flip-card " >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="https://cdn.discordapp.com/attachments/1027967124020396132/1054407861385568306/Picsart_22-12-19_11-39-31-109.jpg" alt="Membro da Equipe" className='avatarEmpresa' />
                        </div>
                        <div className="flip-card-back">

                            <h1>Davy Andrade</h1>
                            <p>Responsável pelo Front-End e Back-End.</p>
                            <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                                <Box display='flex' alignItems='center'>
                                    <LinkedInIcon />
                                    <a href='https://www.linkedin.com/in/davy-andrade'>Linkedin</a>
                                </Box>

                                <Box display='flex' alignItems='center' className='mt1'>
                                    <InstagramIcon />
                                    <a href=' https://instagram.com/davy.damx?igshid=YmMyMTA2M2Y='>Instagram</a>

                                </Box>
                                <Box display='flex' alignItems='center' className='mt1'>
                                    <GitHubIcon />
                                    <a href='https://github.com/DavyAndrade'>Gitbub</a>
                                </Box>

                            </Box>
                        </div>
                    </div>
                </div>

            </Box>

        </>
    )

}

export default Sobre