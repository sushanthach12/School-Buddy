import React from "react";
import CustomizableButton from "../components/CustomizableButton";
import AuthBox from "../components/AuthBox";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import LoginScreen from "../Pages/LoginScreen";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
const Homepage = () => {

  const user = useSelector((state) => state.users)

  return (
    <>
      {user.loggedIn ? (
        <AuthBox>
          <Box
            sx={{
              marginBottom: "10px",
              top: "200px",
              left: "427px",
              width: {
                xs: "200px",
                sm: "300px",
                md: "400px",
                lg: "500px",
                xl: "auto",
              },
            }}
          >
            <img
              width="100%"
              src="/images/homeSvg.svg"
              alt="Group-1"
              border="0"
            />
          </Box>
          <Typography
            variant="h1"
            sx={{
              color: "#363939",
              fontSize: {
                xs: "40px",
                sm: "40px",
                md: "40px",
                lg: "40px",
                xl: "40px",
              },
              fontWeight: "600",
              lineHeight: "50px",
              fontFamily: "Lora",
              // width: "696px",
              width: {
                xs: "auto",
                sm: "auto",
                md: "100%",
                lg: "100%",
                xl: "100%",
              },
              height: "50px",
              textAlign: "center",
            }}
          >
            Welcome
          </Typography>
          <Typography
            sx={{
              color: "#363939",
              fontSize: {
                xs: "17px",
                sm: "20px",
                md: "20px",
                lg: "20px",
                xl: "20px",
              },
              fontWeight: "400",
              lineHeight: "25px",
              fontFamily: "Lora",
              top: "596px",
              marginTop: "20px",
              marginBottom: "20px",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Thank you for choosing School Buddy!!
          </Typography>
          <CustomizableButton link="/invoice-generator" label={"Get Started"} />
        </AuthBox>
      ) : (
        <LoginScreen />
      )}
    </>
  );
};

export default Homepage;
