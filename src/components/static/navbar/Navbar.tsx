import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, alpha, Theme, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import './Navbar.css'
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ModalLogin from '../../../pages/login/ModalLogin';
import { Box } from "@mui/material";
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1

    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 0.1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 2, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={`${classes.root} `}>
      <AppBar position="static">
        <Toolbar className='bg2'>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"

          >
            <MenuIcon />
          </IconButton>
          <Typography className={`logo ${classes.title}`} variant="h6" noWrap>
            WeDoCare
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Box marginRight={1} className='modal'>
            <ModalLogin />
          </Box>
        </Toolbar>
      </AppBar>
      
    </div>



  );
}


export function NavBar2() {
  const classes = useStyles();

  return (
    <div className={`${classes.root} mb`}>
      <AppBar position="static">
        <Toolbar className='bg'>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
          </IconButton>


          <Container maxWidth="lg">
            <Grid container spacing={8}>
              <Grid item xs={12} sm={3}>
                <Box>
                  <Link to='/home' className='text-none cursor spacing'>
                    <Typography className={classes.title} variant="h6" noWrap>
                      Home
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <Link to='/categorias' className='text-none cursor spacing'>
                    <Typography className={classes.title} variant="h6" noWrap>
                      Categorias
                    </Typography>
                  </Link>
                </Box>
              </Grid>

              <Grid item xs={12} sm={3}>
                <Box>
                  <Link to='/categoriasform' className='text-none cursor spacing'>
                    <Typography className={classes.title} variant="h6" noWrap>
                      Criar Categoria
                    </Typography>
                  </Link>
                </Box>
              </Grid>

              <Grid item xs={12} sm={3}>
                <Box>
                  <Link to='/produtosform' className='text-none cursor spacing'>
                    <Typography className={classes.title} variant="h6" noWrap>
                      Criar Produto
                    </Typography>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Container>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
            </div>


          </div>
        </Toolbar>
      </AppBar>
    </div>



  );
}