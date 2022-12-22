import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Home.css'
import { countries } from '../../components/carrossel/Data';
import Carousel from '../../components/carrossel/Carousel';
import { Box } from '@mui/material';
import ListaProduto from '../../components/produtos/listaproduto/ListaProduto';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import ModalSobre from './HomeModal';

export const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
  },
  media: {
    height: 230,
  },
});

export default function Home() {
  const classes = useStyles();

  return (

    <>
      <Box className='carrossel'>
        <Carousel images={countries} />
      </Box>

      <Box className='fundo'>
        <div className='alinhar'>
          <h3 className='produtos'>Sobre Nós</h3>
        </div>
      </Box>

      <Box className='sobre'>
          <Card className={`${classes.root} sombra`} >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://dq9vwod1pbut.cloudfront.net/wp-content/uploads/2019/01/28142206/266613-imagem-da-marca-por-que-ela-deve-ser-percebida-por-toda-a-equipe-e1549645937151-2.jpg"
                title="Conheça nosso trabalho"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Sobre nós
                  
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Somos uma startup que  busca viabilizar o cuidado e bem-estar daqules que mais necessitam. 
                </Typography>

              </CardContent>
            </CardActionArea>
            <CardActions>
              <ModalSobre />
            </CardActions>
          </Card>
      </Box>

      <Box className='fundo'>
        <div className='alinhar'>
          <h3 className='produtos'>Produtos</h3>
        </div>
      </Box>

    <ListaProduto />
    </>
  );
}
 