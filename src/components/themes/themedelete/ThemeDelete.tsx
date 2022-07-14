import React, { useEffect, useState } from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ThemeDelete.css';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';
import { buscaId, deleteId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';

function DeletarTema() {
  
  let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
    const [tema, setTema] = useState<Tema>()

    useEffect(() => {
      if (token == "") {
        toast.error('É Necessário Estar Logado!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        });
          navigate("/login")
  
      }
  }, [token])

    useEffect(() => {
        if(id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`,setTema, {
            headers: {
                'Authorization': token
            }
        })
    }
    
    function sim() {
      navigate('/temas')
      deleteId(`/tema/${id}`, {
        headers: {
          'Authorization': token
        }
      });
      toast.success('Tema Deletado com Sucesso!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    });
    }
  
    function nao() {
      navigate('/themes')
    }

  return(
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Are You Sure About Deleting This Theme?
              </Typography>
              <Typography color="textSecondary">
                {tema?.descricao}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
              <Box mx={2}>
                <Button variant="contained" className="marginLeft" size='large' color="primary" onClick={sim}>
                  Yay
                </Button>
              </Box>
              <Box mx={2}>
              <Button variant="contained" size='large' color="secondary" onClick={nao}>
                  Nay
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

export default DeletarTema;
