import React from "react";
import Button from "@mui/material/Button";

function Buttons(props) {
  const { label, bgcolor, textcolor, fontsize } = props;
  return (
    <Button
      variant="contained"
      style={{
        textTransform: "none",
        backgroundColor: bgcolor,
        fontFamily: "Montserrat",
        color: textcolor,
        fontSize: fontsize,
      }}
      className="w-full h-full "
    >
      {label}
    </Button>
  );
}
export default Buttons;
