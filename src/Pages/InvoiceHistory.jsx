import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
const InvoiceHistory = () => {
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
            <Box
            sx={{
                display:"flex"
            }}
            >
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
                View
              </Typography>
              <VisibilityOutlinedIcon
                sx={{
                  color: "#162320",
                  marginLeft: "10px",
                  width: "20px",
                  height: "20px",
                }}
              />
            </Box>

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
                Download
              </Typography>
              <FileDownloadOutlinedIcon
                sx={{
                  color: "#162320",
                  marginLeft: "10px",
                  width: "20px",
                  height: "20px",
                }}
              />
            </Box>
            </Box>
          </Box>
        </Box>

        {/* second */}

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
            <Box
            sx={{
                display:"flex"
            }}
            >
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
                View
              </Typography>
              <VisibilityOutlinedIcon
                sx={{
                  color: "#162320",
                  marginLeft: "10px",
                  width: "20px",
                  height: "20px",
                }}
              />
            </Box>

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
                Download
              </Typography>
              <FileDownloadOutlinedIcon
                sx={{
                  color: "#162320",
                  marginLeft: "10px",
                  width: "20px",
                  height: "20px",
                }}
              />
            </Box>
            </Box>
          </Box>
        </Box>

        {/* third */}

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
            <Box
            sx={{
                display:"flex"
            }}
            >
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
                View
              </Typography>
              <VisibilityOutlinedIcon
                sx={{
                  color: "#162320",
                  marginLeft: "10px",
                  width: "20px",
                  height: "20px",
                }}
              />
            </Box>

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
                Download
              </Typography>
              <FileDownloadOutlinedIcon
                sx={{
                  color: "#162320",
                  marginLeft: "10px",
                  width: "20px",
                  height: "20px",
                }}
              />
            </Box>
            </Box>
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
            <Box
            sx={{
                display:"flex"
            }}
            >
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
                View
              </Typography>
              <VisibilityOutlinedIcon
                sx={{
                  color: "#162320",
                  marginLeft: "10px",
                  width: "20px",
                  height: "20px",
                }}
              />
            </Box>

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
                Download
              </Typography>
              <FileDownloadOutlinedIcon
                sx={{
                  color: "#162320",
                  marginLeft: "10px",
                  width: "20px",
                  height: "20px",
                }}
              />
            </Box>
            </Box>
          </Box>
        </Box>

        {/* second */}

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
            <Box
            sx={{
                display:"flex"
            }}
            >
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
                View
              </Typography>
              <VisibilityOutlinedIcon
                sx={{
                  color: "#162320",
                  marginLeft: "10px",
                  width: "20px",
                  height: "20px",
                }}
              />
            </Box>

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
                Download
              </Typography>
              <FileDownloadOutlinedIcon
                sx={{
                  color: "#162320",
                  marginLeft: "10px",
                  width: "20px",
                  height: "20px",
                }}
              />
            </Box>
            </Box>
          </Box>
        </Box>
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
            <Box
            sx={{
                display:"flex"
            }}
            >
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
                View
              </Typography>
              <VisibilityOutlinedIcon
                sx={{
                  color: "#162320",
                  marginLeft: "10px",
                  width: "20px",
                  height: "20px",
                }}
              />
            </Box>

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
                Download
              </Typography>
              <FileDownloadOutlinedIcon
                sx={{
                  color: "#162320",
                  marginLeft: "10px",
                  width: "20px",
                  height: "20px",
                }}
              />
            </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InvoiceHistory;
