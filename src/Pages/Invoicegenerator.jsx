import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Link } from "react-router-dom";

const Invoicegenerator = () => {
  return (
    <Box
      // varient="div"
      sx={{
        width: "auto",
        height: "auto",
        marginBottom: "50px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        marginTop: "50px",
      }}
    >
      {/* first */}
      <Box
        sx={{
          display: "flex",
          marginBottom: "20px",
        }}
      >
        <Box
          // varient="div"
          sx={{
            width: "349px",
            height: "355px",
            marginRight: "20px",
          }}
        >
          <Box
            // varient = "div"
            sx={{
              width: "349px",
              height: "193px",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                borderRadius: "10px 10px 0px 0px",
              }}
              src="/images/media.svg"
              alt=""
            />
          </Box>
          <Box
            // varient = "div"
            sx={{
              width: "349px",
              height: "162px",
              backgroundColor: "#1F2223",
              borderRadius: "0px 0px 10px 10px",
              paddingTop: "12px",
            }}
          >
            <Box
              // varient = "div"
              sx={{
                width: "317px",
                height: "50px",
                marginLeft: "16px",
              }}
            >
              <Typography
                varient="h3"
                sx={{
                  weight: "600",
                  fontSize: "24px",
                  lineHeight: "30px",
                  color: "#FFFFFF",
                  height: "30px",
                  width: "300px",
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
                  width: "300px",
                }}
              >
                Create a new invoice
              </Typography>
            </Box>
            <Link to={"/create-invoice"}>
              <Box
                // varient = "div"
                sx={{
                  display: "flex",
                  width: "140px",
                  height: "48px",
                  backgroundColor: "#FFE393",
                  borderRadius: "6px",
                  marginLeft: "16px",
                  marginTop: "32px",
                  // padding:"10px",
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
                  Open
                </Typography>
                <ArrowForwardOutlinedIcon
                  sx={{
                    color: "#162320",
                    marginLeft: "10px",
                    width: "20px",
                    height: "20px",
                  }}
                />
              </Box>
            </Link>
          </Box>
        </Box>

        {/* second */}

        <Box
          // varient="div"
          sx={{
            width: "349px",
            height: "355px",
          }}
        >
          <Box
            // varient = "div"
            sx={{
              width: "349px",
              height: "193px",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                borderRadius: "10px 10px 0px 0px",
              }}
              src="/images/media.svg"
              alt=""
            />
          </Box>
          <Box
            // varient = "div"
            sx={{
              width: "349px",
              height: "162px",
              backgroundColor: "#1F2223",
              borderRadius: "0px 0px 10px 10px",
              paddingTop: "12px",
            }}
          >
            <Box
              // varient = "div"
              sx={{
                width: "317px",
                height: "50px",
                marginLeft: "16px",
              }}
            >
              <Typography
                varient="h3"
                sx={{
                  weight: "600",
                  fontSize: "24px",
                  lineHeight: "30px",
                  color: "#FFFFFF",
                  height: "30px",
                  width: "300px",
                  fontFamily: "Lora",
                }}
              >
                Predefined
              </Typography>
              <Typography
                varient="h3"
                sx={{
                  weight: "400",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#FFFFFF",
                  height: "20px",
                  width: "300px",
                }}
              >
                Add Predefined details of the bill
              </Typography>
            </Box>
            <Link to={"/predefined"}>
              <Box
                // varient = "div"
                sx={{
                  display: "flex",
                  width: "140px",
                  height: "48px",
                  backgroundColor: "#FFE393",
                  borderRadius: "6px",
                  marginLeft: "16px",
                  marginTop: "32px",
                  // padding:"10px",
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
                  Open
                </Typography>
                <ArrowForwardOutlinedIcon
                  sx={{
                    color: "#162320",
                    marginLeft: "10px",
                    width: "20px",
                    height: "20px",
                  }}
                />
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>

      {/* second row */}
      <Box
        sx={{
          display: "flex",
        }}
      >
        {/* first */}
        <Box
          // varient="div"
          sx={{
            width: "349px",
            height: "355px",
            marginRight: "20px",
          }}
        >
          <Box
            // varient = "div"
            sx={{
              width: "349px",
              height: "193px",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                borderRadius: "10px 10px 0px 0px",
              }}
              src="/images/media.svg"
              alt=""
            />
          </Box>
          <Box
            // varient = "div"
            sx={{
              width: "349px",
              height: "162px",
              backgroundColor: "#1F2223",
              borderRadius: "0px 0px 10px 10px",
              paddingTop: "12px",
            }}
          >
            <Box
              // varient = "div"
              sx={{
                width: "317px",
                height: "50px",
                marginLeft: "16px",
              }}
            >
              <Typography
                varient="h3"
                sx={{
                  weight: "600",
                  fontSize: "24px",
                  lineHeight: "30px",
                  color: "#FFFFFF",
                  height: "30px",
                  width: "300px",
                  fontFamily: "Lora",
                }}
              >
                History
              </Typography>
              <Typography
                varient="h3"
                sx={{
                  weight: "400",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#FFFFFF",
                  height: "20px",
                  width: "300px",
                }}
              >
                Check generated invoices
              </Typography>
            </Box>

            <Link to={"/invoice-history"}>
              <Box
                // varient = "div"
                sx={{
                  display: "flex",
                  width: "140px",
                  height: "48px",
                  backgroundColor: "#FFE393",
                  borderRadius: "6px",
                  marginLeft: "16px",
                  marginTop: "32px",
                  // padding:"10px",
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
                  Open
                </Typography>
                <ArrowForwardOutlinedIcon
                  sx={{
                    color: "#162320",
                    marginLeft: "10px",
                    width: "20px",
                    height: "20px",
                  }}
                />
              </Box>
            </Link>
          </Box>
        </Box>

        {/* second */}

        <Box
          // varient="div"
          sx={{
            width: "349px",
            height: "355px",
          }}
        >
          <Box
            // varient = "div"
            sx={{
              width: "349px",
              height: "193px",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                borderRadius: "10px 10px 0px 0px",
              }}
              src="/images/media.svg"
              alt=""
            />
          </Box>
          <Box
            // varient = "div"
            sx={{
              width: "349px",
              height: "162px",
              backgroundColor: "#1F2223",
              borderRadius: "0px 0px 10px 10px",
              paddingTop: "12px",
            }}
          >
            <Box
              // varient = "div"
              sx={{
                width: "317px",
                height: "50px",
                marginLeft: "16px",
              }}
            >
              <Typography
                varient="h3"
                sx={{
                  weight: "600",
                  fontSize: "24px",
                  lineHeight: "30px",
                  color: "#FFFFFF",
                  height: "30px",
                  width: "300px",
                  fontFamily: "Lora",
                }}
              >
                Template
              </Typography>
              <Typography
                varient="h3"
                sx={{
                  weight: "400",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#FFFFFF",
                  height: "20px",
                  width: "300px",
                }}
              >
                Add details about the school
              </Typography>
            </Box>
            <Link to={"/template"}>
              <Box
                // varient = "div"
                sx={{
                  display: "flex",
                  width: "140px",
                  height: "48px",
                  backgroundColor: "#FFE393",
                  borderRadius: "6px",
                  marginLeft: "16px",
                  marginTop: "32px",
                  // padding:"10px",
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
                  Open
                </Typography>
                <ArrowForwardOutlinedIcon
                  sx={{
                    color: "#162320",
                    marginLeft: "10px",
                    width: "20px",
                    height: "20px",
                  }}
                />
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Invoicegenerator;
