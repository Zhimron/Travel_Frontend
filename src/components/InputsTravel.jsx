import React from "react";
import TextField from "@mui/material/TextField";

function InputsTravel(props) {
  const { id, label, type, maxRows, value, onChange } = props;
  return (
    <TextField
      id={id}
      value={value}
      label={label}
      type={type}
      onChange={onChange}
      multiline
      className="w-full h-full font-semibold"
      maxRows={maxRows}
    />
  );
}
export default InputsTravel;
