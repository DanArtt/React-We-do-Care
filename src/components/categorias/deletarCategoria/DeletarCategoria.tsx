import React, { useEffect, useState } from 'react'
import { Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import { Box } from '@mui/material';
import './DeletarCategoria.css';
import { useNavigate, useParams } from 'react-router-dom'
import { buscaId, deleteId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';
import Categoria from '../../../models/Categoria';
import { toast } from 'react-toastify';

function DeletarCategoria() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
)
  const [categoria, setCategoria] = useState<Categoria>()

  useEffect(() => {
    if (token == "") {
      toast.success('Você precisa estar logado!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      navigate("/login")

    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/categoria/id/${id}`, setCategoria)
  }

  function sim() {
    navigate('/home')
    deleteId(`/categoria/deletar/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    toast.success('Categoria deletada com sucesso!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  function nao() {
    navigate('/categorias')
  }
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja Deletar a Categoria:

              </Typography>
              <Typography color="textSecondary" >
                {categoria?.modelo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box>
                <Button onClick={nao} variant="contained" size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarCategoria;