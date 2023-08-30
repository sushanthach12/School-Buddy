import * as React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function CustomizableButton({
  label,
  link,
}) {
  return (
    <Link to={link} style={{ textDecoration: 'none'}}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FFE393",
          ":hover": { backgroundColor: "#ffe8a8" },
          width: {
            xs:"300px",
            sm:"300px",
            md:"400px",
            lg:"400px",
            xl:"400px",
          },
          height: "48px",
        }}
        disableElevation
      >
        <Typography
          variant="h4"
          sx={{
            color: "#363939",
            fontSize: "25px",
            fontWeight: "600",
            lineHeight: "22.5px",
            textAlign: "center",
            cursor: "pointer",
            textTransform: "none",
            width: "100%",
            fontFamily: "Lora",
          }}>
          {label}
        </Typography>
      </Button>
    </Link>
  );
}
