import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import StoreIcon from '@material-ui/icons/Store';
import WorkIcon from '@material-ui/icons/Work';
import PersonIcon from '@material-ui/icons/Person';
import ReceiptIcon from '@material-ui/icons/Receipt';
import './DropBar.css'
import { Box } from '@material-ui/core';
import DropMenu from '../dropmenu/DropMenu';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
);

export default function DropBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Toolbar>
        <div className="menuicons"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
        >
          <div className="menuicon"></div>
          <div className="menuicon"></div>
          <div className="menuicon"></div>
        </div>
      </Toolbar>
      <Drawer
        className={`${classes.drawer} `}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >

        <div className={`${classes.drawerHeader} `}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

        <Typography className='termos'>Página Inicial</Typography>

        <Divider />

        <Box className='background'>
          <Box className='page-box' >
            <HomeIcon className='icon'></HomeIcon>
            <Link className='paginas' to='/home'>Home</Link>
          </Box>
        </Box>

        <Box className='background'>
          <Box className='page-box'>
            <StoreIcon className='icon'></StoreIcon>
            <Link className='paginas' to='/produtos'>Produtos</Link>
          </Box>
        </Box>

        <Box className='background'>
        <Box className='page-box'>
          <WorkIcon className='icon'></WorkIcon>
          <Link className='paginas' to='/categorias'>Categorias</Link>
        </Box>
        </Box>

        <Divider />

        <Typography className='termos'>Minha Conta</Typography>

        <Box className='background'>
        <Box className='page-box'>
          <PersonIcon className='icon'></PersonIcon>
          <Link className='paginas' to='/home'>Perfil</Link>
        </Box>
        </Box>

        <Box className='background'>
        <Box className='page-box'>
          <ReceiptIcon className='icon'></ReceiptIcon>
          <Link className='paginas' to='/home'>Meus Pedidos</Link>
        </Box>
        </Box>

      </Drawer>
      <main
        className={`${clsx(classes.content, {
          [classes.contentShift]: open,
        })} `}
      >
        <div className={`${classes.drawerHeader}`} />
      </main>
    </div>

  )
}