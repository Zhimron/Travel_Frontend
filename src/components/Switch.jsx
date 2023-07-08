import React from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Switches(props) {
  const { label, onClick } = props;
  return (
    <div>
      <FormControlLabel control={<Switch />} label={label} onClick={onClick} />
    </div>
  );
}
