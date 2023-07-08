import React from "react";
import TextField from "@mui/material/TextField";

function Inputs(props) {
  const { id, label, type,rows, value,onChange } = props;
  return (
    <TextField
      id={id}
      value={value}
      label={label}
      type={type}
      onChange={onChange}
      multiline
      variant="standard"
      className="w-full h-full font-semibold"
      rows={rows}
    />
  );
}
export default Inputs;
