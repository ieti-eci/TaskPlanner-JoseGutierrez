import * as React from 'react';
import {
  Link,
  useHistory
} from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Login.css'


function Login(){
  let history = useHistory();
  const [ users, setUsers ] = useState([
    {
      userName: 'JoseGum',
      password: 'jose123'
    }
  ]);

    function Copyright(props) {
        return (
          <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = sessionStorage.getItem( 'user' );
        let nuevo;

        if( newUser != null ){ 

          const arr = [...users];
          nuevo = JSON.parse(newUser);
          arr.push({ userName: nuevo.userName, password: nuevo.password });
          setUsers(arr);
        }
        const data = new FormData(event.currentTarget);
        for (const user of users) {
          if( user.userName === data.get('email') && user.password === data.get('password') ){
            sessionStorage.setItem('cu', data.get('email'));
            history.push('/home');
          }
        }
        if( nuevo && nuevo.userName === data.get('email') && nuevo.password === data.get('password') ){
            sessionStorage.setItem('cu', data.get('email'));
            history.push('/home');
        }
      }
        
        
    
        
      

    const theme = createTheme();
    
    return (
        <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://miriadax-wp-uploads-pro.s3.eu-west-1.amazonaws.com/wp-content/uploads/2020/11/15080706/AdobeStock_214879686-600x400.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="User name"
                  name="email"
                  autoComplete="email"
                  autoFocus
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
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                
                <Grid item>
                  <Link to="/SignUp">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
                <img  src="https://lh3.ggpht.com/-_QHIRvORdVo/UFjV7NHyY4I/AAAAAAAADzQ/QJLs7a8lHBI/beca%252520escuela%252520colombiana%252520de%252520ingenieria%25255B3%25255D.jpg?imgmax=800" class="img"/>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
  );
}
export default Login;