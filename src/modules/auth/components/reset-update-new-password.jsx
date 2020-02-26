import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CustomInput } from "../../../Common/components";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    width: "auto",
    height: "auto",
    borderRadius: "4px",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.13)",
    backgroundColor: "#ffffff"
  },
  input: {
    height: "56px",
    borderRadius: "4px"
  },
  title: {
    width: "max-content",
    height: "26px",
    margin: "auto",
    fontFamily: "Roboto",
    fontSize: "20px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "0.15px",
    color: "#1565c0"
  },
  passwordShould: {
    height: "16px",
    paddingBottom: "30px",
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "0.4px",
    color: "#78909c"
  },
  label: {
    width: "60px",
    height: "16px",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.14",
    letterSpacing: "1.25px",
    color: "#002f6c"
  },
  button: {
    width: "334px",
    height: "36px",
    borderRadius: "4px",
    backgroundColor: "#fbc02d"
  },
  passwordUpdated: {
    width: "206px",
    height: "19px",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#1565c0"
  },
  loginButton: {
    width: "87px",
    height: "36px",
    borderRadius: "4px",
    color: "white",
    backgroundColor: "#002f6c"
  }
}));

export default function ResetUpdateNewPassword(props) {
  const classes = useStyles();
  let [isUpdated, setState] = useState(false);

  const { register, handleSubmit, errors, watch } = useForm();

  const onSubmit = ({ newPassword, confirmPassword }) => {
    if (newPassword === confirmPassword) {
      setState(true);
      console.log(newPassword, confirmPassword, isUpdated);
    } else {
    }
  };

  const handleLogin = () => {
    props.history.push("/");
  };

  console.log(errors);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Reset Request Password
            </Typography>
            {/* <Typography color="textSecondary">
              Create your own password to continue
            </Typography> */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <CustomInput
                className={classes.input}
                name="newPassword"
                label="New Password"
                type="password"
                id="newPassword"
                errors={errors}
                autoComplete="new-password"
                inputRef={register({
                  required: "You must specify a password",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters"
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                    message:
                      "Password should be alphanumeric with atleast one capital, small letter and a number"
                  }
                })}
              />
              <CustomInput
                className={classes.input}
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                errors={errors}
                inputRef={register({
                  required: "This field is required",
                  validate: value =>
                    value === watch("newPassword") || "Passwords do not match"
                })}
              />
            </form>
            <Typography
              className={classes.passwordShould}
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
              className={classes.button}
              size="small"
              onClick={handleSubmit(onSubmit)}
            >
              <label className={classes.label}>Update</label>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <br />
      <br />
      <br />
      {isUpdated && (
        <Grid item xs={3}>
          <Typography className={classes.passwordUpdated}>
            Password Updated Successfully!
          </Typography>
          <br />
          <Button className={classes.loginButton} onClick={handleLogin}>
            LOGIN
          </Button>
        </Grid>
      )}
    </Grid>
  );
}
