import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";

const Checkboxs = ({ label, checked, onChange }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
        />
      }
      label={<Typography style={{ fontFamily: "Montserrat" }}>{label}</Typography>}
    />
  );
};

export default Checkboxs;
