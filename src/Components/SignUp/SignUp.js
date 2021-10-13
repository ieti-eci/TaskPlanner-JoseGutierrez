import * as React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './SignUp.css';




function SignUp(){

    const [values, setValues] = useState({
        userName: '',
        password: '',
        showPassword: false
     });
    const list = {list: []};
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Usuario: '+ values.userName);
      console.log('Contraseña: '+ values.password);
      sessionStorage.setItem("user", JSON.stringify(values));
     // let x = sessionStorage.getItem("list");
      //console.log('x antes del split: '+x)
      //console.log('x despues del split: '+x.split(','));


    }
    return(
        <div class="form">
          <form onSubmit={handleSubmit}>

          
              <div class='space'>
                <TextField id="outlined-basic" label="User Name" onChange={ handleChange('userName') } variant="outlined" color="warning" focused/>
              </div>
                
                
                
              <div class='space'>
                <FormControl sx={{ m: 1, width: '26ch' }} variant="outlined"  color="warning" focused>
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    color = "warning"
                    focused
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end" color="white">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"

                  />
                </FormControl>
              </div>
                
              <button>Sign Up</button>
            </form>      
        </div>
    )
    
}
export default SignUp;