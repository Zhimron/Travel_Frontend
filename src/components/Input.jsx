import React from "react";
import TextField from "@mui/material/TextField";

function inputs(props){
const{
    id,
    label,
    type,
}=props
    return (
      <TextField
        id={id}
        label={label}
        type={type}
        autoComplete="current-password"
      />
    );
}