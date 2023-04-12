import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AnimateAndTitle from './AnimateAndTitle';
import Card from '../UI/Card';
import {Link}from 'react-router-dom'
import axios from "axios";

const theme = createTheme();

export default function Login() {

    const nav = useNavigate();


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


const handleSubmit = (event) => {
  event.preventDefault();
  const data = { 
    username: username, 
    password: password,
  };

  axios.post('/login', data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    localStorage.setItem('access_token', response.data.access_token);
    localStorage.setItem('refresh_token', response.data.refresh_token);
    // localStorage.setItem('public_key', keys.public_key); 
    localStorage.setItem('username', username);
    nav('/Dashboard');
    console.log(response.data);
  })
  .catch(error => {
    console.log(error.response.data);
  });

}

{
    }
    return (
        <ThemeProvider theme={theme}>
        
            <div style={{height:"100%",width:"100%",background:"",display:"flex",alignItems:"center", justifyContent:"center"}}>
            
                <AnimateAndTitle></AnimateAndTitle>
                <Card >


                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{

                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: '#807cd4' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, height: '55px' ,fontSize:"20px",background:"#807cd4"}}
                                >
                                    Sign In
                                </Button>
                                {/* <Grid container>

                                    <Grid item>New User?
                                        <Link to="/register"  style={{ textDecoration: 'none',color:"#ff1493", }} >
                                            {" Sign Up "}
                                        </Link> Here
                                    </Grid>
                                </Grid> */}
                            </Box>
                        </Box>

                    </Container>
                </Card>
            </div>
        </ThemeProvider>
    );
}