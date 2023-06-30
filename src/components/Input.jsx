import React from "react";
import TextField from "@mui/material/TextField";

function Inputs(props) {
  const { id, label, type } = props;
  return (
    <TextField
      id={id}
      label={label}
      type={type}
      variant="standard"
      className="w-full h-full"
    />
  );
}
export default Inputs;
