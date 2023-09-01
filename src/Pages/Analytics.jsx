import React from "react";

import { Box, Button, Container, Icon, Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CachedIcon from "@mui/icons-material/Cached";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const Analytics = () => {
  return (
    <Container
      sx={{
        display: "flex",
        height: "80vh",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingRight: {
          xs: "0px",
          sm: "0px",
          md: "200px",
          lg: "200px",
          xl: "200px",
        },
        gap: "8px",
        flexDirection: {
          xs: "column-reverse",
          sm: "column-reverse",
          md: "row",
          lg: "row",
          xl: "row",
        },
      }}
    >
      <Box
        sx={{
          margin: 0,
          width: "100%",
          paddingRight: {
            xs: "10px",
            sm: "10px",
          },
          paddingLeft: {
            xs: "10px",
            sm: "10px",
            md: "200px",
            lg: "200px",
            xl: "200px",
          },
          height: "auto",
          marginLeft: "50",
          marginRight: "auto",
        }}
      >
        <Button
          sx={{
            width: {
                xs: "100%",
                sm: "100%",
                md:"390px",
                lg:"390px",
                xl:"390px",
            },
            height: "48px",
            borderRadius: "6px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 16px",
            backgroundColor: "#3B4744",
            marginBottom: "8px",
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
              gap: "7px",
            }}
          >
            <PeopleAltIcon
              sx={{
                color: "white",
                width: "20px",
                height: "20px",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                color: "#FFFFFF",
                fontSize: "12px",
                fontWeight: "600",
                lineHeight: "14.88px",
                textAlign: "center",
                textTransform: "none",
                width: "100%",
              }}
            >
              No. of visitors
            </Typography>
          </Box>
          <CachedIcon
            fontSize="medium"
            sx={{
              color: "#FFFFFF",
              width: "24px",
              height: "24px",
            }}
          />
        </Button>
        <Button
          sx={{
            width: {
                xs: "100%",
                sm: "100%",
                md:"390px",
                lg:"390px",
                xl:"390px",
            },
            height: "48px",
            borderRadius: "6px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 16px",
            backgroundColor: "#3B4744",
            marginBottom: "8px",
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
              gap: "7px",
            }}
          >
            <ShareOutlinedIcon
              sx={{
                color: "white",
                width: "20px",
                height: "20px",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                color: "#FFFFFF",
                fontSize: "12px",
                fontWeight: "600",
                lineHeight: "14.88px",
                textAlign: "center",
                textTransform: "none",
                width: "100%",
              }}
            >
              No. of shares
            </Typography>
          </Box>
          <CachedIcon
            fontSize="medium"
            sx={{
              color: "#FFFFFF",
              width: "24px",
              height: "24px",
            }}
          />
        </Button>
        <Button
          sx={{
            width: {
                xs: "100%",
                sm: "100%",
                md:"390px",
                lg:"390px",
                xl:"390px",
            },
            height: "48px",
            borderRadius: "6px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 16px",
            backgroundColor: "#3B4744",
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
              gap: "7px",
            }}
          >
            <DescriptionOutlinedIcon
              sx={{
                color: "white",
                width: "20px",
                height: "20px",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                color: "#FFFFFF",
                fontSize: "12px",
                fontWeight: "600",
                lineHeight: "14.88px",
                textAlign: "center",
                textTransform: "none",
                width: "100%",
              }}
            >
              No. of invoices
            </Typography>
          </Box>
          <CachedIcon
            fontSize="medium"
            sx={{
              color: "#FFFFFF",
              width: "24px",
              height: "24px",
            }}
          />
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFE393",
            ":hover": { backgroundColor: "#ffe8a8" },
            width: "253px",
            height: "48px",
            padding: "0px 16px",
            top: "20px",
            left: "22px",
            borderRadius: "6px",
          }}
          disableElevation
        >
          <Typography
            variant="h4"
            sx={{
              color: "#363939",
              fontSize: "18px",
              fontWeight: "600",
              lineHeight: "22.5px",
              textAlign: "center",
              cursor: "pointer",
              textTransform: "none",
              width: "100%",
              fontFamily: "Lora",
            }}
          >
            Download Report
          </Typography>
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          
          // width: '530px'
        }}
      >
        <Box
          sx={{
            width: "auto",
            height: "344px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            fill
            src="/images/profile.svg"
            alt="profile"
            style={{
              width: "284px",
              height: "284px",
            }}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "70px",
            gap: "12px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#363939",
              fontSize: "40px",
              fontWeight: "600",
              lineHeight: "50px",
              textAlign: "center",
              textTransform: "none",
              width: "100%",
              fontFamily: "Lora",
            }}
          >
            School Name
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Analytics;
