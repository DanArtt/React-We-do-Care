import { Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import './Sobre.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';


function Sobre() {

    return (
        <>
            <Typography>
                <h2 className='fundoSobre' >
                    We Do Care
                </h2>
                <span className='quebralinha'>
                A WeDoCare é uma empresa que se importa com todos e todas e todes. Aqui, você está seguro de que sua necessidade será atendida. Nós, os desenvolvedores, estamos em pronta mão para auxiliar com todo respeito, prontidade e dedicação. Nossa startup foi desenvolvida com métodos agéis, vulgo Scrum, que foi uma das grandes descobertas para tal grandiosidade.
                A WeDoCare se especializa em criação de aparelhos de acessibilidade com itens recicláveis, mantendo a sustentabilidade do nosso planeta.
                </span>
                <div className='fundoSobre'>
                <h3>
                    Nossos funcionarios são
                </h3>
                </div>
            </Typography>
        
        <Box className='sobrecss'>
        <Box className='boxCard '>
                <div className="flip-card " >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="https://media.discordapp.net/attachments/1011750581146239077/1055112239809577040/IMG_20221123_220333_395.jpg?width=645&height=671" alt="Membro da Equipe" className='avatarEmpresa' />
                        </div>
                        <div className="flip-card-back">

                            <h1>Igor Pereira</h1>
                            <p className='quebralinha'>Responsável pelo logotipo da empresa  auxlio geral no código.</p>
                            <Box display='flex' alignItems='center' justifyContent='center' flexWrap='wrap' flexDirection='column'>
                                <Box display='flex' alignItems='center'>
                                    <LinkedInIcon />
                                    <a href='https://www.linkedin.com/in/igornaspereira'>Linkedin</a>
                                </Box>
                                <Box display='flex' alignItems='center' className='mt1'>
                                    <InstagramIcon />
                                    <a href='https://instagram.com/igornaspereira?igshid=YmMyMTA2M2Y='>Instagram</a>
                                </Box>
                                <Box display='flex' alignItems='center' className='mt1 mb'>
                                    <GitHubIcon />
                                    <a href='https://github.com/Gudangzinho'>Gitbub</a>
                                </Box>
                                <Box>
                                    <img src="https://media.discordapp.net/attachments/1011750581146239077/1055143493632282704/loguinhu.png" alt="ImagemEmpresa" />
                                </Box>

                            </Box>
                        </div>
                    </div>
                </div>
            </Box>

            <Box className='boxCard '>
                <div className="flip-card " >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="https://cdn.discordapp.com/attachments/1027967124020396132/1054407861385568306/Picsart_22-12-19_11-39-31-109.jpg" alt="Membro da Equipe" className='avatarEmpresa' />
                        </div>
                        <div className="flip-card-back">

                            <h1>Davy Andrade</h1>
                            <p className='quebralinha'>Responsável pelo Front-End e Back-End.</p>
                            <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                                <Box display='flex' alignItems='center'>
                                    <LinkedInIcon />
                                    <a href='https://www.linkedin.com/in/davy-andrade'>Linkedin</a>
                                </Box>

                                <Box display='flex' alignItems='center' className='mt1'>
                                    <InstagramIcon />
                                    <a href=' https://instagram.com/davy.damx?igshid=YmMyMTA2M2Y='>Instagram</a>

                                </Box>
                                <Box display='flex' alignItems='center' className='mt1 mb'>
                                    <GitHubIcon />
                                    <a href='https://github.com/DavyAndrade'>Gitbub</a>
                                </Box>
                                <Box>
                                    <img src="https://media.discordapp.net/attachments/1011750581146239077/1055143493632282704/loguinhu.png" alt="ImagemEmpresa" />
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
                            <img src="https://media.discordapp.net/attachments/1027967124020396132/1055092675407253514/B9FD9663-1E24-4207-ADEE-A0777F5879BC.jpg?width=654&height=671" alt="Membro da Equipe" className='avatarEmpresa' />
                        </div>
                        <div className="flip-card-back">

                            <h1>Douglas Alonso</h1>
                            <p className='quebralinha'>Responsável pelo Front-End, Back-End e colaboração na divisão de tarefas.</p>
                            <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                                <Box display='flex' alignItems='center'>
                                    <LinkedInIcon />
                                    <a href='https://www.linkedin.com/in/douglas-alonso/'>Linkedin</a>
                                </Box>
                                <Box display='flex' alignItems='center' className='mt1'>
                                    <InstagramIcon />
                                    <a href='#'>Instagram</a>
                                </Box>
                                <Box display='flex' alignItems='center' className='mt1 mb'>
                                    <GitHubIcon />
                                    <a href='https://github.com/TioDido'>Gitbub</a>
                                </Box>
                                <Box>
                                    <img src="https://media.discordapp.net/attachments/1011750581146239077/1055143493632282704/loguinhu.png" alt="ImagemEmpresa" />
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
                            <img src="https://media.discordapp.net/attachments/1011750581146239077/1055096334446772284/IMG_20220901_165303_6792.jpg?width=668&height=671" alt="Membro da Equipe" className='avatarEmpresa' />
                        </div>
                        <div className="flip-card-back">
                            <h1>Daniel Andrade</h1>
                            <p>Responsável pelo Front-End e colaboração de idéias.</p>
                            <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                                <Box display='flex' alignItems='center'>
                                    <LinkedInIcon />
                                    <a href='https://www.linkedin.com/in/daniel-andrade21/'>Linkedin</a>
                                </Box>
                                <Box display='flex' alignItems='center' className='mt1'>
                                    <InstagramIcon />
                                    <a href='https://instagram.com/idansllv?igshid=OGQ2MjdiOTE='>Instagram</a>
                                </Box>
                                <Box display='flex' alignItems='center' className='mt1 mb'>
                                    <GitHubIcon />
                                    <a href='https://github.com/DanArtt'>Gitbub</a>
                                </Box>
                                <Box>
                                    <img src="https://media.discordapp.net/attachments/1011750581146239077/1055143493632282704/loguinhu.png" alt="ImagemEmpresa" />
                                </Box>
                            </Box>
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
            




        <Box className='sobrecss2'>
            <Box className='boxCard'>
                <div className="flip-card " >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="https://media.discordapp.net/attachments/1011750581146239077/1055090508457836604/fotocurriculo.png?width=616&height=671" className='avatarEmpresa' />
                        </div>
                        <div className="flip-card-back">

                            <h1 className='quebralinha'>Erick Bellot</h1>
                            <p className='quebralinha'>Responsável auxiliar no desenvolvimento do código.</p>
                            <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                                <Box display='flex' alignItems='center'>
                                    <LinkedInIcon />
                                    <a href='https://www.linkedin.com/in/erick-bellot/'>Linkedin</a>
                                </Box>
                                <Box display='flex' alignItems='center' className='mt1'>
                                    <InstagramIcon />
                                    <a href='https://instagram.com/erick_bellot?igshid=OGQ2MjdiOTE='>Instagram</a>
                                </Box>
                                <Box display='flex' alignItems='center' className='mt1 mb'>
                                    <GitHubIcon />
                                    <a href='https://github.com/Erickbellot12'>Gitbub</a>
                                </Box>
                                <Box>
                                    <img src="https://media.discordapp.net/attachments/1011750581146239077/1055143493632282704/loguinhu.png" alt="ImagemEmpresa" />
                                </Box>
                            </Box>
                        </div>
                    </div>
                </div>
            </Box>

            <Box className='boxCard sobrecss2'>
                <div className="flip-card " >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="https://media.discordapp.net/attachments/1011750581146239077/1054407654417629224/IMG_20221219_113837_746.jpg?width=653&height=671" className='avatarEmpresa' />
                        </div>
                        <div className="flip-card-back">

                            <h1>Bernardo Silva</h1>
                            <p className='quebralinha'>Responsável por pesquisar componentes.</p>
                            <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                                <Box display='flex' alignItems='center'>
                                    <LinkedInIcon />
                                    <a href='https://www.linkedin.com/in/bernardo-bezerra/'>Linkedin</a>
                                </Box>
                                <Box display='flex' alignItems='center' className='mt1'>
                                    <InstagramIcon />
                                    <a href='https://instagram.com/bernardobezerra5?igshid=NTA5ZTk1NTc='>Instagram</a>
                                </Box>
                                <Box display='flex' alignItems='center' className='mt1 mb'>
                                    <GitHubIcon />
                                    <a href='https://github.com/Zerra86'>Gitbub</a>
                                </Box>
                                <Box>
                                    <img src="https://media.discordapp.net/attachments/1011750581146239077/1055143493632282704/loguinhu.png" alt="ImagemEmpresa" />
                                </Box>
                            </Box>
                        </div>
                    </div>
                </div>
            </Box>



            <Box className='boxCard sobrecss2'>
                <div className="flip-card " >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="https://media.discordapp.net/attachments/1011750581146239077/1055457062416568350/AirBrush_202104160710482.jpg?width=600&height=671" className='avatarEmpresa' />
                        </div>
                        <div className="flip-card-back">

                            <h1>Raphael Santos</h1>
                            <p>Auxilio geral no desempenho do grupo.</p>
                            <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                                <Box display='flex' alignItems='center'>
                                    <LinkedInIcon />
                                    <a href='https://www.linkedin.com/in/raphael-santoss/'>Linkedin</a>
                                </Box>
                                <Box display='flex' alignItems='center' className='mt1'>
                                    <InstagramIcon />
                                    <a href='https://instagram.com/rapha.santosbjj?igshid=YmMyMTA2M2Y='>Instagram</a>
                                </Box>
                                <Box display='flex' alignItems='center' className='mt1 mb'>
                                    <GitHubIcon />
                                    <a href='https://github.com/Raphaelsants'>Gitbub</a>
                                </Box>
                                <Box>
                                    <img src="https://media.discordapp.net/attachments/1011750581146239077/1055143493632282704/loguinhu.png" alt="ImagemEmpresa" />
                                </Box>
                            </Box>
                        </div>
                    </div>
                </div>
            </Box>


        </Box>
        <div className='fundoSobre'>

        </div>
    </>
    )

}

export default Sobre