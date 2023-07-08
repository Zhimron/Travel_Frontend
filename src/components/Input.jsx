import React from "react";
import TextField from "@mui/material/TextField";

function Inputs(props) {
  const { id, label, type,rows } = props;
  return (
    <TextField
      id={id}
      label={label}
      type={type}
      multiline
      variant="standard"
      className="w-full h-full font-semibold"
      rows={rows}
    />
  );
}
export default Inputs;
