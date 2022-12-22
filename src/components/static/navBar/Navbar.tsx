import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import FadeMenu from "./dropmenu/DropMenu";
import { useDispatch } from "react-redux";
import { addToken } from "../../../store/tokens/action";
import './Navbar.css'
import { ClassNames } from "@emotion/react";
import Carrinho from "./carrinho/Carrinho";
import Logo from '../../assets/Logo.png'
import ModalLogin from "../../../pages/login/ModalLogin";
import DropBar from "./dropbar/DropBar";

function Navbar() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const dispatch = useDispatch();

  function goLogout() {
    setToken("");
    dispatch(addToken(token));
    navigate("/login");
  }

  return (
    <>
      <AppBar position="static" className="appbar">
        <Toolbar variant="dense" className="bar">
        <DropBar />

          <Box className="logo">
              <img className="text-logo" src={Logo} alt="" />
          </Box>

          <Box className="menu-right" display="flex">
            <Box className="pesquisa">
              <FormControl variant="standard" color="success">
                <Input
                  placeholder="Buscar Produtos"
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon className="lupa" />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>

            <Box>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button
                      className="perfil"
                      variant="contained"
                      {...bindTrigger(popupState)}
                    >
                      Minha Conta
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close}><Link to='/login' className="decoration-none">
                      Logar
                      </Link></MenuItem>
                      <MenuItem onClick={popupState.close}> Ver Perfil </MenuItem>
                      <MenuItem onClick={popupState.close}> Meus Pedidos </MenuItem>
                      <Box onClick={goLogout}>
                        <MenuItem onClick={popupState.close}> Logout </MenuItem>
                      </Box>
                    </Menu>

                    <Carrinho />
                  </React.Fragment>
                )}
              </PopupState>
            </Box>

          </Box>
        </Toolbar>
        <Toolbar className="bar2">
          <Link to="/home">
           <Typography className="typo"> Home </Typography>
           </Link>

          <Link to="/produtos">
            <Typography className="typo"> Produtos </Typography>
            </Link>

          <Link to= "/produtosform">
            <Typography className="typo"> Criar Produtos </Typography>
            </Link>

          < FadeMenu />

          <Link to= "/categoriasform">
            <Typography className="typo"> Criar Categoria </Typography>
            </Link>

        </Toolbar>
      </AppBar>

      <div className="marginBar"></div>
    </>
  );
}
export default Navbar;