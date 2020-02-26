import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import { CustomInput } from '../../../Common/components';

import classNames from 'classnames';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn(props) {
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = ({ email, password }) => {
    console.log(email);
    props.history.push({
      pathname: '/create-own-password',
      state: {
        data: email
      }
    });
  };

  const login = () => {
    history.push('/');
  };

  return (
    <Container>
      <div
        className={classNames(classes.wrapper, {
          [classes.itemTextRTL]: true
        })}
      >
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid key="loginFormLogo" item xs={6}></Grid>
            <Grid key="loginForm" item xs={6}>
              <CssBaseline />
              <div className={classes.paper}>
                <Typography
                  component="h1"
                  variant="h5"
                  className={classNames(classes.wrapper, {
                    [classes.itemTextRTL]: true
                  })}
                >
                  <span dir="rtl">Login</span>
                </Typography>

                <form
                  className={classes.form}
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
                  />
                  <CustomInput
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    errors={errors}
                    autoComplete="current-password"
                    inputRef={register({
                      required: {
                        message: 'Password is required',
                        value: true
                      }
                    })}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    direction="rtl"
                    type="submit"
                    fullWidth
                    onClick={login}
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="/reset-password-request" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
