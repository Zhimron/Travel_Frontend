import React from "react";
import Button from "@mui/material/Button";

function Buttons(props) {
  const { label, bgcolor, textcolor, fontsize ,type , onClick} = props;
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
      type={type}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
export default Buttons;
