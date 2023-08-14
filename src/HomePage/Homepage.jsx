import React from 'react'
import CustomizableButton from '../components/CustomizableButton'
import AuthBox from '../components/AuthBox';
import { Typography } from "@mui/material";

const Homepage = () => {
  return (
    <>
      <AuthBox>
        <div
          style={{
            marginBottom: '10px',
            top: "200px",
            left: "427px",
          }}
        >
          <img src="/images/homeSvg.svg" alt="Group-1" border="0" />
        </div>
        <Typography
          variant="h1"
          sx={{
            color: "#363939",
            fontSize: "40px",
            fontWeight: "600",
            lineHeight: "50px",
            fontFamily: "Lora",
            width: "696px",
            height: "50px",
            textAlign: "center",

          }}
        >
          Welcome
        </Typography>
        <Typography
          sx={{
            color: "#363939",
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "25px",
            fontFamily: "Lora",
            top: "596px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Thank you for choosing School Buddy!!

        </Typography>
        <CustomizableButton />
      </AuthBox>
    </>
  )
}

export default Homepage