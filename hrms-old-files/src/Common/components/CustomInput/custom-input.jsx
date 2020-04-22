import * as React from "react";

import { ErrorMessage } from "react-hook-form";
import { ValidationError } from "../../../Common/components";

import TextField from "@material-ui/core/TextField";

const CustomInput = ({ errors, id, name, ...rest }) => {
  return (
    <>
      <TextField
        variant="outlined"
        id={id}
        name={name}
        error={name in errors}
        margin="normal"
        fullWidth
        {...rest}
      />
      {name in errors ? (
        <ErrorMessage errors={errors} name={name} as={ValidationError} />
      ) : null}
    </>
  );
};

export default CustomInput;
