import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useEffect, useState } from 'react';
import Categoria from '../../../../models/Categoria';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../../store/tokens/tokenReducer';
import './DropMenu.css'
import { Typography } from '@material-ui/core';

export default function FadeMenu() {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();

    useEffect(() => {
        getCategoria()
    }, [token])

    async function getCategoria() {
        await busca("/categoria/all", setCategorias)
    }

    useEffect(() => {
        getCategoria();
    }, [categorias.length]);

    return (
        <div>
            <Button 
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Typography className='bar-button'>categorias</Typography>
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                {categorias.map((categoria) => (
                    <MenuItem onClick={handleClose}>{categoria.modelo}</MenuItem>
                ))}
            </Menu>
        </div>
    );
}