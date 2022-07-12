import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import './Footer.css';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if(token != "") {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid justifyContent="center" alignItems="center" item xs={12}>
            <Box className='box1'>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom className='textos'>Acompanhe nas Redes Sociais</Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://www.facebook.com/generationbrasil" target="_blank">
                        <FacebookIcon className='redes'/>
                    </a>
                    <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                        <InstagramIcon className='redes'/>
                    </a>
                    <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                        <LinkedInIcon className='redes'/>
                    </a>
                </Box>
            </Box>
            <Box className='box2' justifyContent="center" alignItems="center">
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" gutterBottom className='textos'>© 2022 Copyright</Typography>
                </Box>
                <Box>
                    <a target="_blank" href="https://brasil.generation.org" className='textos'>
                        <Typography variant="subtitle2" gutterBottom>brasil.generation.org</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }

    return(
        <>
            {footerComponent}
        </>
    );
}

export default Footer;
