import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
const InvoiceHistory = () => {
  return (  
    <Box
      varient="div"
      sx={{
        width: "auto",
        height: "auto",
        marginBottom: "50px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        // flexDirection: "",
        flexWrap: "wrap",
        marginTop: "50px",
        paddingLeft:{
          xs:"0px",
          sm:"0px",
          md:"400px",
          lg:"400px",
          xl:"400px"
          
        },
        paddingRight:{
          xs:"0px",
          sm:"0px",
          md:"400px",
          lg:"400px",
          xl:"400px"
        }
      }}
    >
      <Box
        varient="div"
        sx={{
          width: "200px",
          height: "auto",
          marginRight: "20px",
          marginBottom: "20px",
        }}
      >
        <Box
          varient = "div"
          sx={{
            width: "auto",
            height: "auto",
          }}
        >
          <img
            style={{
              borderRadius: "10px 10px 0px 0px",
              marginBottom: "0px",
            }}
            width="100%"
            height="100%"
            src="/images/media.svg"
            alt=""
          />
        </Box>
        <Box
          varient = "div"
          sx={{
            width: "auto",
            height: "auto",
            backgroundColor: "#1F2223",
            borderRadius: "0px 0px 10px 10px",
            paddingTop: "12px",
          }}
        >
          <Box
            varient = "div"
            sx={{
              // width: "1/2",  
              height: "auto",
              paddingLeft: "16px",
              paddingRight: "16px",
            }}
          >
            <Typography
              varient="h3"
              sx={{
                weight: "600",
                fontSize: "24px",
                lineHeight: "30px",
                color: "#FFFFFF",
                height: "auto",
                // width: "300px",
                fontFamily: "Lora",
              }}
            >
              Create New
            </Typography>
            <Typography
              varient="h3"
              sx={{
                weight: "400",
                fontSize: "14px",
                lineHeight: "20px",
                color: "#FFFFFF",
                height: "20px",
                // width: "300px",
              }}
            >
              Create a new invoice
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "5px",
              justifyContent: "center",
              paddingRight:"5px",
              paddingLeft:"5px"
            }}
          >
            <Box
              // varient = "div"
              sx={{
                display: "flex",
                // width: "140px",
                height: "auto",
                backgroundColor: "#FFE393",
                borderRadius: "6px",
                // marginLeft: "16px",
                // marginTop: "32px",
                // padding:"10px",
                padding: "5px",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "5px",
              }}
            >
              <Typography
                sx={{
                  weight: "600",
                  fontSize: "18px",
                  lineHeight: "22.5px",
                  color: "#162320",
                }}
              >
                View
              </Typography>
              <VisibilityOutlinedIcon
                sx={{
                  color: "#162320",
                  marginLeft: "5px",
                  width: "auto",
                  height: "20px",
                }}
              />
            </Box>

            <Box
              // varient = "div"
              sx={{
                display: "flex",
                // width: "140px",
                height: "auto",
                backgroundColor: "#FFE393",
                borderRadius: "6px",
                // marginLeft: "16px",
                // marginTop: "32px",
                // padding:"10px",
                padding: "5px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  weight: "600",
                  fontSize: "18px",
                  lineHeight: "22.5px",
                  color: "#162320",
                }}
              >
                Download
              </Typography>
              <FileDownloadOutlinedIcon
                sx={{
                  color: "#162320",
                  marginLeft: "5px",
                  width: "auto",
                  height: "20px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>          
    </Box>
  );
};

export default InvoiceHistory;
