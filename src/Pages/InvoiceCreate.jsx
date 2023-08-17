import React from "react";
import AuthBox from "../components/AuthBox";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TextField from "@mui/material/TextField";
import AddLinkIcon from "@mui/icons-material/AddLink";
import Input from "@mui/material/Input";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CallIcon from "@mui/icons-material/Call";
import Button from "@mui/material/Button";
import { Padding } from "@mui/icons-material";

const InvoiceCreate = () => {
  return (
    <Box
      variant="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <Box
        sx={{
          alignContent: "center",
          width: "533px",
          // display:'flex',
          // justifyContent:'center',
          // alignItems:'center',
        }}
      >
        <Typography
          sx={{
            width: "430px",
            fontSize: "18px",
            lineHeight: "24px",
            fontColor:"#363931",
            fontWeight:"400",
            fontFamily:"Inter"
          }}
        >
          #Pre filled data from template
        </Typography>
        <Typography
        variant="h3"
          sx={{
            width: "430px",
            fontSize: "24px",
            fontWeight: "600",
            lineHeight: "30px",
            fontColor:"#363931",
            fontFamily:"Lora"
          }}
        >
          School Name
        </Typography>
        <Typography
          sx={{
            marginTop: "10px",
            width: "430px",
            fontSize: "14px",
            lineHeight: "21px",
            fontWeight: "400",
            fontColor:"#363931",
            fontFamily:"Inter"
          }}
        >
          Tiger Circle, Manipal,
        </Typography>
        <Typography
          sx={{
            marginTop: "10px",
            width: "430px",
            fontSize: "14px",
            lineHeight: "21px",
            fontWeight: "400",
            fontColor:"#363931",
            fontFamily:"Inter"
          }}
        >
          Udupi, Karnataka 576103
        </Typography>
        <Typography
          sx={{
            marginTop: "10px",
            width: "430px",
            fontSize: "14px",
            lineHeight: "21px",
            fontWeight: "400",
            fontColor:"#363931",
            fontFamily:"Inter"
          }}
        >
            schoolbuddy@gmail.com
        </Typography>
        <Typography
          sx={{
            marginTop: "10px",
            width: "430px",
            fontSize: "14px",
            lineHeight: "21px",
            fontWeight: "400",
            fontColor:"#363931",
            fontFamily:"Inter"
          }}
        >
          +91 9876543210
        </Typography>
        <Typography
          sx={{
            marginTop: "10px",
            width: "430px",
            fontSize: "14px",
            lineHeight: "21px",
            fontWeight: "400",
            fontColor:"#363931",
            fontFamily:"Inter"
          }}
        >
          GST Number : 29AABCT1234C1ZV
        </Typography>

        <Typography
          sx={{
            marginTop: "50px",
            marginBottom: "20px",
            width: "430px",
            fontSize: "18px",
            lineHeight: "24px",
            fontColor:"#363931",
            fontWeight:"400",
            fontFamily:"Inter"
          }}
        >
          #Pre filled data from template
        </Typography>
      </Box>
      <Box
        variant="div"
        sx={{
          marginBottom: "10px",
          width: "533px",
        }}
      >

        <Box
          variant="div"
          sx={{
            alignContent: "center",
            marginTop: "20px",
            // border: "1px 0px 0px 0px",
            // borderTop: "1px solid #EAEAEA",
            paddingTop: "20px",
          }}
        >
          <Typography
            sx={{
              width: "438px",
              height: "18px",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "17.5px",
              fontFamily: "Inter",
              color: "#57595A",
            }}
          >
            Name
          </Typography>
          <Box
            sx={{
              border: "2px solid #D2D3D3",
              borderRadius: "6px",
              width: "533px",
              height: "48px",
              display: "flex",
              flexDirection: "col",
              // paddingTop: "4px",
              padding: "8px",
              //   ":hover": {border: "2px solid "},
              //   transition:'all 0.2s ease-in-out',
              //   ":hover":{borderColor:"#8E9090"},
            }}
          >
            <Box
              sx={
                {
                  // marginLeft: '5px',
                  // Padding: '8px'
                }
              }
            >
              <DescriptionOutlinedIcon
                sx={{
                  color: "#B1B2B2",
                  // marginTop: "8px",
                  // marginRight: '5px'
                  margin: "5px",
                  padding: "0px",
                }}
              />
            </Box>
            <Input
              disableUnderline
              placeholder="Placeholder"
              sx={{
                width: "490px",
                height: "24px",
                // marginTop: "8px",
                fontSize: "16px",
                color: "#B1B2B2",
                marginRight: "15px",
                padding: "3px",
              }}
            />
            <Box>
              <ClearIcon
                sx={{
                  color: "#B1B2B2",
                  marginTop: "8px",
                  marginLeft: "10px",
                  height: "20px",
                  width: "20px",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* fourth */}

        <Box
          variant="div"
          sx={{
            alignContent: "center",
            marginTop: "15px",
            // border: "1px 0px 0px 0px",
            // borderTop: "1px solid #EAEAEA",
            paddingTop: "20px",
          }}
        >
          <Typography
            sx={{
              width: "438px",
              height: "18px",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "17.5px",
              fontFamily: "Inter",
              color: "#57595A",
            }}
          >
            Email
          </Typography>
          <Box
            sx={{
              border: "2px solid #D2D3D3",
              borderRadius: "6px",
              width: "533px",
              height: "48px",
              display: "flex",
              flexDirection: "col",
              // paddingTop: "4px",
              padding: "8px",
              //   ":hover": {border: "2px solid "},
              //   transition:'all 0.2s ease-in-out',
              //   ":hover":{borderColor:"#8E9090"},
            }}
          >
            <Box
              sx={
                {
                  // marginLeft: '5px',
                  // Padding: '8px'
                }
              }
            >
              <DescriptionOutlinedIcon
                sx={{
                  color: "#B1B2B2",
                  // marginTop: "8px",
                  // marginRight: '5px'
                  margin: "5px",
                  padding: "0px",
                }}
              />
            </Box>
            <Input
              disableUnderline
              placeholder="Placeholder"
              sx={{
                width: "490px",
                height: "24px",
                // marginTop: "8px",
                fontSize: "16px",
                color: "#B1B2B2",
                marginRight: "15px",
                padding: "3px",
              }}
            />
            <Box>
              <ClearIcon
                sx={{
                  color: "#B1B2B2",
                  marginTop: "8px",
                  marginLeft: "10px",
                  height: "20px",
                  width: "20px",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* fifth */}
        <Box
          variant="div"
          sx={{
            alignContent: "center",
            marginTop: "15px",
            // border: "1px 0px 0px 0px",
            // borderTop: "1px solid #EAEAEA",
            paddingTop: "15px",
          }}
        >
          <Typography
            sx={{
              width: "438px",
              height: "18px",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "17.5px",
              fontFamily: "Inter",
              color: "#57595A",
            }}
          >
            Address
          </Typography>
          <Box
            sx={{
              border: "2px solid #D2D3D3",
              borderRadius: "6px",
              width: "533px",
              height: "48px",
              display: "flex",
              flexDirection: "col",
              // paddingTop: "4px",
              padding: "8px",
              //   ":hover": {border: "2px solid "},
              //   transition:'all 0.2s ease-in-out',
              //   ":hover":{borderColor:"#8E9090"},
            }}
          >
            <Box
              sx={
                {
                  // marginLeft: '5px',
                  // Padding: '8px'
                }
              }
            >
              <DescriptionOutlinedIcon
                sx={{
                  color: "#B1B2B2",
                  // marginTop: "8px",
                  // marginRight: '5px'
                  margin: "5px",
                  padding: "0px",
                }}
              />
            </Box>
            <Input
              disableUnderline
              placeholder="Placeholder"
              sx={{
                width: "490px",
                height: "24px",
                // marginTop: "8px",
                fontSize: "16px",
                color: "#B1B2B2",
                marginRight: "15px",
                padding: "3px",
              }}
            />
            <Box>
              <ClearIcon
                sx={{
                  color: "#B1B2B2",
                  marginTop: "8px",
                  marginLeft: "10px",
                  height: "20px",
                  width: "20px",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          variant="div"
          sx={{
            alignContent: "center",
            marginTop: "15px",
            // border: "1px 0px 0px 0px",
            // borderTop: "1px solid #EAEAEA",
            paddingTop: "15px",
          }}
        >
          <Typography
            sx={{
              width: "438px",
              height: "18px",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "17.5px",
              fontFamily: "Inter",
              color: "#57595A",
            }}
          >
            State/City
          </Typography>
          <Box
            sx={{
              border: "2px solid #D2D3D3",
              borderRadius: "6px",
              width: "533px",
              height: "48px",
              display: "flex",
              flexDirection: "col",
              // paddingTop: "4px",
              padding: "8px",
              //   ":hover": {border: "2px solid "},
              //   transition:'all 0.2s ease-in-out',
              //   ":hover":{borderColor:"#8E9090"},
            }}
          >
            <Box
              sx={
                {
                  // marginLeft: '5px',
                  // Padding: '8px'
                }
              }
            >
              <DescriptionOutlinedIcon
                sx={{
                  color: "#B1B2B2",
                  // marginTop: "8px",
                  // marginRight: '5px'
                  margin: "5px",
                  padding: "0px",
                }}
              />
            </Box>
            <Input
              disableUnderline
              placeholder="Placeholder"
              sx={{
                width: "490px",
                height: "24px",
                // marginTop: "8px",
                fontSize: "16px",
                color: "#B1B2B2",
                marginRight: "15px",
                padding: "3px",
              }}
            />
            <Box>
              <ClearIcon
                sx={{
                  color: "#B1B2B2",
                  marginTop: "8px",
                  marginLeft: "10px",
                  height: "20px",
                  width: "20px",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
        </Box>

          <Box
            variant="div"
            sx={{
              alignContent: "center",
              marginTop: "25px",
              width: "254px",
              marginRight: "25px",
            }}
          >
            <Typography
              sx={{
                width: "254px",
                height: "18px",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "17.5px",
                fontFamily: "Inter",
                color: "#57595A",
              }}
            >
              Pin Code
            </Typography>
            <Box
              sx={{
                border: "2px solid #D2D3D3",
                borderRadius: "6px",
                width: "254px",
                height: "48px",
                display: "flex",
                flexDirection: "col",
                paddingTop: "4px",
                //   ":hover": {border: "2px solid "},
                //   transition:'all 0.2s ease-in-out',
                //   ":hover":{borderColor:"#8E9090"},
              }}
            >
              <Box
                sx={{
                  marginLeft: "5px",
                }}
              >
                <AddLinkIcon
                  sx={{
                    color: "#B1B2B2",
                    marginTop: "8px",
                    marginRight: "5px",
                  }}
                />
              </Box>
              <Input
                disableUnderline
                placeholder="Placeholder"
                sx={{
                  width: "366px",
                  height: "24px",
                  marginTop: "8px",
                  fontSize: "16px",
                }}
              />
              <Box>
                <ClearIcon
                  sx={{
                    color: "#B1B2B2",
                    marginTop: "8px",
                    marginLeft: "10px",
                    height: "20px",
                    width: "20px",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            variant="div"
            sx={{
              alignContent: "center",
              marginTop: "25px",
              width: "254px",
              marginRight: "25px",
            }}
          >
            <Typography
              sx={{
                width: "254px",
                height: "18px",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "17.5px",
                fontFamily: "Inter",
                color: "#57595A",
              }}
            >
              Phone Number
            </Typography>
            <Box
              sx={{
                border: "2px solid #D2D3D3",
                borderRadius: "6px",
                width: "254px",
                height: "48px",
                display: "flex",
                flexDirection: "col",
                paddingTop: "4px",
                //   ":hover": {border: "2px solid "},
                //   transition:'all 0.2s ease-in-out',
                //   ":hover":{borderColor:"#8E9090"},
              }}
            >
              <Box
                sx={{
                  marginLeft: "5px",
                }}
              >
                <AddLinkIcon
                  sx={{
                    color: "#B1B2B2",
                    marginTop: "8px",
                    marginRight: "5px",
                  }}
                />
              </Box>
              <Input
                disableUnderline
                placeholder="Placeholder"
                sx={{
                  width: "366px",
                  height: "24px",
                  marginTop: "8px",
                  fontSize: "16px",
                }}
              />
              <Box>
                <ClearIcon
                  sx={{
                    color: "#B1B2B2",
                    marginTop: "8px",
                    marginLeft: "10px",
                    height: "20px",
                    width: "20px",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            variant="div"
            sx={{
              alignContent: "center",
              marginTop: "25px",
              width: "254px",
              marginRight: "25px",
            }}
          >
            <Typography
              sx={{
                width: "254px",
                height: "18px",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "17.5px",
                fontFamily: "Inter",
                color: "#57595A",
              }}
            >
              GST Number
            </Typography>
            <Box
              sx={{
                border: "2px solid #D2D3D3",
                borderRadius: "6px",
                width: "254px",
                height: "48px",
                display: "flex",
                flexDirection: "col",
                paddingTop: "4px",
                //   ":hover": {border: "2px solid "},
                //   transition:'all 0.2s ease-in-out',
                //   ":hover":{borderColor:"#8E9090"},
              }}
            >
              <Box
                sx={{
                  marginLeft: "5px",
                }}
              >
                <AddLinkIcon
                  sx={{
                    color: "#B1B2B2",
                    marginTop: "8px",
                    marginRight: "5px",
                  }}
                />
              </Box>
              <Input
                disableUnderline
                placeholder="Placeholder"
                sx={{
                  width: "366px",
                  height: "24px",
                  marginTop: "8px",
                  fontSize: "16px",
                }}
              />
              <Box>
                <ClearIcon
                  sx={{
                    color: "#B1B2B2",
                    marginTop: "8px",
                    marginLeft: "10px",
                    height: "20px",
                    width: "20px",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Box>
          </Box>

      </Box>
      <Box>
      <Box
          variant="div"
          sx={{
            alignContent: "center",
            marginTop: "15px",
            // border: "1px 0px 0px 0px",
            // borderTop: "1px solid #EAEAEA",
            paddingTop: "15px",
          }}
        >
          <Typography
            sx={{
              width: "438px",
              height: "18px",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "17.5px",
              fontFamily: "Inter",
              color: "#57595A",
            }}
          >
            Invoice Number
          </Typography>
          <Box
            sx={{
              border: "2px solid #D2D3D3",
              borderRadius: "6px",
              width: "533px",
              height: "48px",
              display: "flex",
              flexDirection: "col",
              // paddingTop: "4px",
              padding: "8px",
              //   ":hover": {border: "2px solid "},
              //   transition:'all 0.2s ease-in-out',
              //   ":hover":{borderColor:"#8E9090"},
            }}
          >
            <Box
              sx={
                {
                  // marginLeft: '5px',
                  // Padding: '8px'
                }
              }
            >
              <DescriptionOutlinedIcon
                sx={{
                  color: "#B1B2B2",
                  // marginTop: "8px",
                  // marginRight: '5px'
                  margin: "5px",
                  padding: "0px",
                }}
              />
            </Box>
            <Input
              disableUnderline
              placeholder="Placeholder"
              sx={{
                width: "490px",
                height: "24px",
                // marginTop: "8px",
                fontSize: "16px",
                color: "#B1B2B2",
                marginRight: "15px",
                padding: "3px",
              }}
            />
            <Box>
              <ClearIcon
                sx={{
                  color: "#B1B2B2",
                  marginTop: "8px",
                  marginLeft: "10px",
                  height: "20px",
                  width: "20px",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          variant="div"
          sx={{
            alignContent: "center",
            marginTop: "15px",
            // border: "1px 0px 0px 0px",
            // borderTop: "1px solid #EAEAEA",
            paddingTop: "15px",
          }}
        >
          <Typography
            sx={{
              width: "438px",
              height: "18px",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "17.5px",
              fontFamily: "Inter",
              color: "#57595A",
            }}
          >
            Date
          </Typography>
          <Box
            sx={{
              border: "2px solid #D2D3D3",
              borderRadius: "6px",
              width: "533px",
              height: "48px",
              display: "flex",
              flexDirection: "col",
              // paddingTop: "4px",
              padding: "8px",
              //   ":hover": {border: "2px solid "},
              //   transition:'all 0.2s ease-in-out',
              //   ":hover":{borderColor:"#8E9090"},
            }}
          >
            <Box
              sx={
                {
                  // marginLeft: '5px',
                  // Padding: '8px'
                }
              }
            >
              <DescriptionOutlinedIcon
                sx={{
                  color: "#B1B2B2",
                  // marginTop: "8px",
                  // marginRight: '5px'
                  margin: "5px",
                  padding: "0px",
                }}
              />
            </Box>
            <Input
              disableUnderline
              placeholder="Placeholder"
              sx={{
                width: "490px",
                height: "24px",
                // marginTop: "8px",
                fontSize: "16px",
                color: "#B1B2B2",
                marginRight: "15px",
                padding: "3px",
              }}
            />
            <Box>
              <ClearIcon
                sx={{
                  color: "#B1B2B2",
                  marginTop: "8px",
                  marginLeft: "10px",
                  height: "20px",
                  width: "20px",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          variant="div"
          sx={{
            alignContent: "center",
            marginTop: "15px",
            // border: "1px 0px 0px 0px",
            // borderTop: "1px solid #EAEAEA",
            paddingTop: "15px",
          }}
        >
          <Typography
            sx={{
              width: "438px",
              height: "18px",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "17.5px",
              fontFamily: "Inter",
              color: "#57595A",
            }}
          >
            Terms
          </Typography>
          <Box
            sx={{
              border: "2px solid #D2D3D3",
              borderRadius: "6px",
              width: "533px",
              height: "48px",
              display: "flex",
              flexDirection: "col",
              // paddingTop: "4px",
              padding: "8px",
              //   ":hover": {border: "2px solid "},
              //   transition:'all 0.2s ease-in-out',
              //   ":hover":{borderColor:"#8E9090"},
            }}
          >
            <Box
              sx={
                {
                  // marginLeft: '5px',
                  // Padding: '8px'
                }
              }
            >
              <DescriptionOutlinedIcon
                sx={{
                  color: "#B1B2B2",
                  // marginTop: "8px",
                  // marginRight: '5px'
                  margin: "5px",
                  padding: "0px",
                }}
              />
            </Box>
            <Input
              disableUnderline
              placeholder="Placeholder"
              sx={{
                width: "490px",
                height: "24px",
                // marginTop: "8px",
                fontSize: "16px",
                color: "#B1B2B2",
                marginRight: "15px",
                padding: "3px",
              }}
            />
            <Box>
              <ClearIcon
                sx={{
                  color: "#B1B2B2",
                  marginTop: "8px",
                  marginLeft: "10px",
                  height: "20px",
                  width: "20px",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          variant="div"
          sx={{
            alignContent: "center",
            marginTop: "15px",
            // border: "1px 0px 0px 0px",
            // borderTop: "1px solid #EAEAEA",
            paddingTop: "15px",
          }}
        >
          <Typography
            sx={{
              width: "438px",
              height: "18px",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "17.5px",
              fontFamily: "Inter",
              color: "#57595A",
            }}
          >
            Mode of Payment
          </Typography>
          <Box
            sx={{
              border: "2px solid #D2D3D3",
              borderRadius: "6px",
              width: "533px",
              height: "48px",
              display: "flex",
              flexDirection: "col",
              // paddingTop: "4px",
              padding: "8px",
              //   ":hover": {border: "2px solid "},
              //   transition:'all 0.2s ease-in-out',
              //   ":hover":{borderColor:"#8E9090"},
            }}
          >
            <Box
              sx={
                {
                  // marginLeft: '5px',
                  // Padding: '8px'
                }
              }
            >
              <DescriptionOutlinedIcon
                sx={{
                  color: "#B1B2B2",
                  // marginTop: "8px",
                  // marginRight: '5px'
                  margin: "5px",
                  padding: "0px",
                }}
              />
            </Box>
            <Input
              disableUnderline
              placeholder="Placeholder"
              sx={{
                width: "490px",
                height: "24px",
                // marginTop: "8px",
                fontSize: "16px",
                color: "#B1B2B2",
                marginRight: "15px",
                padding: "3px",
              }}
            />
            <Box>
              <ClearIcon
                sx={{
                  color: "#B1B2B2",
                  marginTop: "8px",
                  marginLeft: "10px",
                  height: "20px",
                  width: "20px",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InvoiceCreate;
