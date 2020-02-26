import React, { useState } from 'react';
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

import './reset-update-new-password.scss';

export default function ResetUpdateNewPassword(props) {
  let [isUpdated, setState] = useState(false);

  const { register, handleSubmit, errors, watch } = useForm();

  const onSubmit = ({ newPassword, confirmPassword }) => {
    if (newPassword === confirmPassword) {
      setState(true);
    } else {
    }
  };

  console.log(errors);

  return (
    <Grid
      className="resetPasswordContainer"
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <Card className="resetPasswordContainer__root">
          <CardContent>
            <Typography
              className="resetPasswordContainer__title"
              color="textSecondary"
              gutterBottom
            >
              Reset Request Password
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CustomInput
                className="resetPasswordContainer__input"
                name="newPassword"
                label="New Password"
                type="password"
                id="newPassword"
                errors={errors}
                autoComplete="new-password"
                autoFocus
                inputRef={register({
                  required: 'You must specify a password',
                  minLength: {
                    value: 8,
                    message: 'Password must have at least 8 characters'
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                    message:
                      'Password should be alphanumeric with atleast one capital, small letter and a number'
                  }
                })}
              />
              <CustomInput
                className="resetPasswordContainer__input"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                errors={errors}
                inputRef={register({
                  required: 'This field is required',
                  validate: value =>
                    value === watch('newPassword') || 'Passwords do not match'
                })}
              />
            </form>
            <Typography
              className="resetPasswordContainer__passwordShould"
              variant="body2"
              component="p"
            >
              -> Password should have min 8 char
              <br />
              -> Password should consist atleast one Numeric, one Capital and
              one Small letter
            </Typography>
          </CardContent>
          <br />
          <CardActions>
            <Button
              className="resetPasswordContainer__updateButton"
              size="small"
              onClick={handleSubmit(onSubmit)}
            >
              <label className="resetPasswordContainer__label">Update</label>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <br />
      <br />
      <br />
      {isUpdated && (
        <Grid item xs={3}>
          <Typography className="resetPasswordContainer__passwordUpdated">
            Password Updated Successfully!
          </Typography>
          <br />
          <Button className="resetPasswordContainer__loginButton">LOGIN</Button>
        </Grid>
      )}
    </Grid>
  );
}
