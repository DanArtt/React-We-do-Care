import React, { useEffect, useState } from 'react'
import { Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import { Box } from '@mui/material';
import './DeletarProduto.css';
import { useNavigate, useParams } from 'react-router-dom'
import { buscaId, deleteId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import Produto from '../../../models/Produto';
import { TokenState } from '../../../store/tokens/tokenReducer';

function DeletarProduto() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
)
  const [produto, setProduto] = useState<Produto>()

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      navigate("/login")

    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/produtos/${id}`, setProduto)
  }

  function sim() {
    navigate('/home')
    deleteId(`/produtos/deletar/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    alert('Produto deletada com sucesso');
  }

  function nao() {
    navigate('/produtos')
  }
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja Deletar o Produto:
              </Typography>
              <Typography color="textSecondary" >
                {produto?.nome}
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
export default DeletarProduto;