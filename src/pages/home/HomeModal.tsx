import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from "@material-ui/core"
import { Box, Typography } from '@mui/material';
import CloseIcon from '@material-ui/icons/Close';
import Sobre from '../sobre/Sobre';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            overflowY: 'auto',
            height: '100%',
            width: '90%',
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #A0AA60',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

function ModalSobre() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <Box display="flex" justifyContent="flex-end" className="cursor">
                <CloseIcon onClick={handleClose} />
            </Box>
            <Sobre />
        </div>
    );

    return (
        <div>
            <Button
                variant="outlined"
                className="btnSobre"
                onClick={handleOpen}
            >Clique para saber mais</Button>
            <Modal
                className='modal-body'
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}

            </Modal>
        </div>
    );
}
export default ModalSobre;