import React, { useEffect } from 'react';
import './Home.css';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import PostTab from '../../components/posts/posttab/PostTab';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/TokensReducer';
import { Link } from 'react-router-dom';

function Home() {
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    useEffect(() => {
        if(token == "") {
            alert("É Necessário Estar Logado!")
            navigate("/login")
        }
    }, [token])
                    //ATENÇÃO: Um Componente só irá poder retornar UM ELEMENTO! Se quiser mais
    return(         // de um, precisa colocar eles dentro de um Container!!!
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja Bem-Vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Expresse seus Pensamentos e Manifeste suas Opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Link to="/posts" className="text-decorator-none">
                            <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px"/>
                </Grid>
                <Grid xs={12} className='postagens'>
                    <PostTab/>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;

/*
<Grid container spacing={2}>
    <Grid item xs={12} sm={8}>
        <Paper style={{height: "100vh", background: "lightgrey"}}/>
    </Grid>
        <Grid item container direction="column" xs={12} sm={4} spacing={2}>
            <Grid item>
                <Paper style={{height: "49vh", background: "orange"}}/>
            </Grid>
            <Grid item>
                <Paper style={{height: "49vh", background: "green"}}/>
            </Grid>
        </Grid>
    </Grid>

    <Paper>
                <Box p={2}>
                    <Box display="flex" justifyContent="center">
                        <h1>Título</h1>
                    </Box>
                        <img src="https://storage.googleapis.com/atados-v3/user-uploaded/images/8010b1b6-32bc-4dd4-bc11-a4a607c9974c.png" alt="" style={{width: "100%", height: "100%"}}/>
                        <Box display="flex" justifyContent="center" p={2}>
                            <Button variant="contained" color="primary">Texto 1</Button>
                            <Button variant="contained" color="secondary">Texto 2</Button>
                        </Box>
                </Box>
            </Paper>
*/