import React from "react";
import Button from "@mui/material/Button";

function Buttons(props) {
  const { label, bgcolor } = props;
  return (
    <Button
      variant="contained"
      style={{
        textTransform: "none",
        backgroundColor: bgcolor,
        fontFamily: "Montserrat",
      }}
      className="w-full h-full "
    >
      {label}
    </Button>
  );
}
export default Buttons;
