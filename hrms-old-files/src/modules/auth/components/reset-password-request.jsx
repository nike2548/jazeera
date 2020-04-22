import React from 'react';
import { useForm } from 'react-hook-form';
import { CustomInput } from '../../../Common/components';

import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@material-ui/core';

import './reset-password-request.scss';

export function ResetPasswordRequest(props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = ({ email }) => {
    console.log(email);
    props.history.push('/reset-update-password');
  };

  console.log(errors);

  return (
    <Grid
      className="resetPasswordRequestContainer"
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <Card className="resetPasswordRequestContainer__root">
          <CardContent>
            <Typography
              className="resetPasswordRequestContainer__title"
              color="textSecondary"
              gutterBottom
            >
              Reset Request Password
            </Typography>
            <Typography color="textSecondary">
              Enter registered email Id in the space below and we will mail you
              the instructions
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CustomInput
                className="resetPasswordRequestContainer__input"
                name="email"
                label="Enter Email-ID"
                type="text"
                id="email"
                autoFocus
                errors={errors}
                inputRef={register({
                  required: 'Enter your Registered email'
                })}
              />
            </form>
          </CardContent>
          <br />
          <CardActions>
            <Button
              className="resetPasswordRequestContainer__button"
              size="small"
              onClick={handleSubmit(onSubmit)}
            >
              <label className="resetPasswordRequestContainer__label">
                Proceed
              </label>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
