import React, { useState, useEffect, ChangeEvent } from 'react';
import './Signup.css';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { signup } from '../../services/Service';
import { toast } from 'react-toastify';

function Signup() {
    let navigate = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user,setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult,setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id !== 0) {
            navigate("/login")
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmarSenha === user.senha) {
        signup(`/usuarios/cadastrar`,user,setUserResult)
        toast.success('Usuário Cadastrado com Sucesso!', {
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
        else {
            toast.error('Dados inconsistentes. Verifique informações de cadastro.', {
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
    }

    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'>
            </Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}  id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth/>
                        <TextField value={user.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}  id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth/>
                        <TextField value={user.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}  id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth/>
                        <TextField value={confirmarSenha} onChange={(e:ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}  id='confirma' label='Confirme a Senha' variant='outlined' name='confirma' margin='normal' type='password' fullWidth/>
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Signup;
