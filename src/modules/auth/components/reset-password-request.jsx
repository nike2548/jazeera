import React from "react";
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

export function ResetPasswordRequest(props) {
  console.log(props);
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = ({ email }) => {
    console.log(email);
    props.history.push("/reset-update-password");
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
            <Typography color="textSecondary">
              Enter registered email Id in the space below and we will mail you
              the instructions
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CustomInput
                className={classes.input}
                name="email"
                label="Enter Email-ID"
                type="password"
                id="email"
                errors={errors}
                inputRef={register({
                  required: "Enter your Registered email"
                })}
              />
            </form>
          </CardContent>
          <br />
          <CardActions>
            <Button
              className={classes.button}
              size="small"
              onClick={handleSubmit(onSubmit)}
            >
              <label className={classes.label}>Proceed</label>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
