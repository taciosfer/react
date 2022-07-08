import React, { useEffect, useState } from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ThemeDelete.css';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';
import { buscaId, deleteId } from '../../../services/Service';

function DeletarTema() {
  
  let history = useNavigate();
    const { id } = useParams<{id: string}>();
    const [token, setToken] = useLocalStorage('token');
    const [tema, setTema] = useState<Tema>()

    useEffect(() => {
      if (token == "") {
          alert("Necessário Login")
          history("/login")
  
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
      history('/temas')
      deleteId(`/tema/${id}`, {
        headers: {
          'Authorization': token
        }
      });
      alert('Tema deletado com sucesso');
    }
  
    function nao() {
      history('/themes')
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
                <Button variant="contained" className="marginLeft" size='large' color="primary" onCLick={sim}>
                  Yay
                </Button>
              </Box>
              <Box mx={2}>
              <Button variant="contained" size='large' color="secondary" onCLick={nao}>
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
