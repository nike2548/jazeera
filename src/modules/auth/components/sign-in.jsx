import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useForm } from 'react-hook-form';
import { CustomInput } from '../../../Common/components';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import './sign-in.scss';
import hrmsLogo from '../../../assets/images/hrms-logo.png';
import { useHistory } from "react-router-dom";


export default function SignIn() {
  const [values, setValues] = React.useState({
    showPassword: false
  });

  const history = useHistory()

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = ({ email, password }) => {
     history.push('/layout/dashboard');
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <div className="login__MainContainer">
        <div className="login__inner-section">
          <div className="login__header_logo">
            <img src={hrmsLogo} alt={'logo'} />
          </div>
          <div className="login__form-section">
            <form
              className="login__form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <CustomInput
                id="email"
                label="Email Address"
                name="email"
                errors={errors}
                autoComplete="email"
                autoFocus
                inputRef={register({
                  required: { message: 'Email is required', value: true }
                })}
                InputProps={{
                  className: 'input'
                }}
              />
              <CustomInput
                name="password"
                label="Password"
                type={!values.showPassword ? 'password' : 'text'}
                id="password"
                errors={errors}
                autoComplete="current-password"
                inputRef={register({
                  required: {
                    message: 'Password is required',
                    value: true
                  }
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        classes={{ root: 'loginFonts' }}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                  className: 'input'
                }}
              />
              <Grid container>
                <FormControlLabel
                  classes={{ label: 'loginFonts' }}
                  control={
                    <Checkbox
                      classes={{ root: 'loginFonts' }}
                      value="remember"
                      color="primary"
                    />
                  }
                  label="Remember me"
                />
                <Grid item container justify="flex-end" alignItems="center" xs>
                  <Link href="#" variant="body2" className="loginFonts">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Button 
                type="submit"
              variant="contained"
                className="login__btn_submit"
              >
                Sign In
              </Button>
            </form>
          </div>


        </div>
     
    </div>
  );
}
