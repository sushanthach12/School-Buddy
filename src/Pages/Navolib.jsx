import React, { useState } from "react";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
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
const Navolib = () => {
  const [formField, setFormField] = useState({
    gmaplink: "",
    otherlink: "",
    text: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormField({ ...formField, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
  };

  return (
    <Box
      variant="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: "50px",
		flexDirection:{
			xs:"column-reverse",
			sm:"column-reverse",
			md:"row",
			lg:"row",
			xl:"row"

		},
		width:{
			xs:"100%",
			sm:"100%",
			md:"100%",
			lg:"100%",
			xl:"100%"
		}
      }}
    >
      <Box
        onSubmit={handleFormSubmit}
        variant="div"
        sx={{
          marginBottom: "10px",
		  marginTop:{
			xs:"80px",
			sm:"80px",
			md:"0px",
			lg:"0px",
			xl:"0px"
		  },
		  marginLeft:{
			xs:"10px",
			sm:"10px",
			md:"0px",
			lg:"0px",
			xl:"0px"
		  },
		  marginRight:{
			xs:"10px",
			sm:"10px",
			md:"0px",
			lg:"0px",
			xl:"0px"
		  }
        }}
      >
        <Box
          variant="div"
          sx={{
            alignContent: "center",
          }}
        >
          <Typography
            sx={{
              width: {
				xs: "100%",
				sm: "100%",
				md:"438px",
				lg:"438px",
				xl:"438px",
			  },
              height: "18px",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "17.5px",
              fontFamily: "Inter",
              color: "#57595A",
            }}
          >
            Google Map Link
          </Typography>
          <Box
            sx={{
              border: "2px solid #D2D3D3",
              borderRadius: "6px",
              width: {
				xs: "100",
				sm: "100%",
				md:"438px",
				lg:"438px",
				xl:"438px",
			  },
              height: "48px",
              display: "flex",
              flexDirection: "col",
              paddingTop: "4px",
              //   ":hover": {border: "2px solid "},
              //   transition:'all 0.2s ease-in-out',
              //   ":hover":{borderColor:"#8E9090"},
            }}
          >
            <LocationOnOutlinedIcon
              sx={{
                color: "#B1B2B2",
                marginTop: "8px",
                marginLeft: "5px",
              }}
            />
            <Input
              disableUnderline
              id="gmaplink"
              placeholder="Placeholder"
              sx={{
                width: {
					xs: "100%",
					sm: "100%",
					md:"366px",
					lg:"366px",
					xl:"366px",
				},
                height: "24px",
                marginTop: "8px",
                fontSize: "16px",
              }}
              name="gmaplink"
              value={formField.gmaplink}
              onChange={handleChange}
            />
            <ClearIcon
              sx={{
                color: "#B1B2B2",
                marginTop: "8px",
                marginLeft: "15px",
                height: "20px",
                width: "20px",
                cursor: "pointer",
              }}
            />
          </Box>
        </Box>

        {/* first input done */}
        <Box
          variant="div"
          sx={{
            alignContent: "center",
            marginTop: "25px",
          }}
        >
          <Typography
            sx={{
              width: {
				xs: "100%",
				sm: "100%",
				md:"438px",
				lg:"438px",
				xl:"438px",
			  },
              height: "18px",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "17.5px",
              fontFamily: "Inter",
              color: "#57595A",
            }}
          >
            Other link
          </Typography>
          <Box
            sx={{
              border: "2px solid #D2D3D3",
              borderRadius: "6px",
              width: {
				xs: "100%",
				sm: "100%",
				md:"438px",
				lg:"438px",
				xl:"438px",
			  },
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
              id="otherlink"
              placeholder="Placeholder"
              sx={{
                width: {
					xs: "100%",
					sm: "100%",
					md:"366px",
					lg:"366px",
					xl:"366px",
				},
                height: "24px",
                marginTop: "8px",
                fontSize: "16px",
              }}
              name="otherlink"
              value={formField.otherlink}
              onChange={handleChange}
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

        {/* second */}

        <Box
          variant="div"
          sx={{
            alignContent: "center",
            marginTop: "25px",
          }}
        >
          <Typography
            sx={{
              width: {
				xs: "100%",
				sm: "100%",
				md:"438px",
				lg:"438px",
				xl:"438px",
			  },
              height: "18px",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "17.5px",
              fontFamily: "Inter",
              color: "#57595A",
            }}
          >
            Text
          </Typography>
          <Box
            sx={{
              border: "2px solid #D2D3D3",
              borderRadius: "6px",
              width: {
				xs: "100%",
				sm: "100%",
				md:"438px",
				lg:"438px",
				xl:"438px",
			  },
              height: "117px",
              display: "flex",
              flexDirection: "col",
              alignContent: "center",
              justifyContent: "center",
              paddingTop: "30px",
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
              <FormatUnderlinedIcon
                sx={{
                  color: "#B1B2B2",
                  marginTop: "8px",
                }}
              />
            </Box>
            <Input
              disableUnderline
              id="text"
              placeholder="Placeholder"
              sx={{
                width: {
					xs: "100%",
					sm: "100%",
					md:"366px",
					lg:"366px",
					xl:"366px",
				},
                height: "24px",
                marginTop: "8px",
                fontSize: "16px",
              }}
              name="text"
              value={formField.text}
              onChange={handleChange}
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
        {/* third */}

        <Box
          variant="div"
          sx={{
            alignContent: "center",
            marginTop: "25px",
          }}
        >
          <Typography
            sx={{
              width: {
				xs: "100%",
				sm: "100%",
				md:"438px",
				lg:"438px",
				xl:"438px",
			  },
              height: "18px",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "17.5px",
              fontFamily: "Inter",
              color: "#57595A",
            }}
          >
            School Brochure
          </Typography>
          <Box
            sx={{
              border: "2px solid #D2D3D3",
              borderRadius: "6px",
              width: {
				xs: "100%",
				sm: "100%",
				md:"438px",
				lg:"438px",
				xl:"438px",
			  },
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
              <DescriptionOutlinedIcon
                sx={{
                  color: "#B1B2B2",
                  marginTop: "8px",
                  marginRight: "5px",
                }}
              />
            </Box>
            <Typography
              sx={{
                width: "260px",
                height: "24px",
                marginTop: "8px",
                fontSize: "16px",
                color: "#B1B2B2",
                marginRight: "15px",
              }}
            >
              Placeholder
            </Typography>
            <Box
              sx={{
                width: "88px",
                height: "36px",
                backgroundColor: "#3B4744",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                borderRadius: "4px",
                padding: "0px 10px",
                cursor: "pointer",
              }}
            >
              <IosShareOutlinedIcon
                sx={{
                  // width:"48px",
                  // height:"48px",
                  weight: "200",
                  color: "white",
                }}
              />
              <Typography
                sx={{
                  color: "white",
                }}
              >
                Upload
              </Typography>
            </Box>
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
            marginTop: "25px",
          }}
        >
          <Typography
            sx={{
              width: {
				xs: "100%",
				sm: "100%",
				md:"438px",
				lg:"438px",
				xl:"438px",
			  },
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
              width: {
				xs: "100%",
				sm: "100%",
				md:"438px",
				lg:"438px",
				xl:"438px",
			  },
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
              <CallIcon
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
              id="phoneNumber"
              sx={{
                width: {
					xs: "100%",
					sm: "100%",
					md:"366px",
					lg:"366px",
					xl:"366px",
				},
                height: "24px",
                marginTop: "8px",
                fontSize: "16px",
              }}
              name="phoneNumber"
              value={formField.phoneNumber}
              onChange={handleChange}
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

        <Button
          disableElevation
          type="submit"
          sx={{
            marginTop: "25px",
            backgroundColor: "#FFE393",
            width: "253px",
            height: "48px",
            ":hover": { backgroundColor: "#ffe8a8" },
            textColor: "#363939",
            borderRadius: "6px",
          }}
          variant="contained"
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
            Update
          </Typography>
        </Button>
        {/* </form> */}
      </Box>

      <Box
        variant="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          marginLeft: {
			xs: "0px",
			sm: "0px",
			md:"100px",
			lg:"100px",
			xl:"100px",

		  },
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
            fill="true"
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
              fontFamily: "Lora",
              width: "100%",
            }}
          >
            School Name
          </Typography>

          <Box
            variant="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              marginTop: "30px",
            }}
          >
            <IosShareOutlinedIcon
              sx={{
                color: "#1F2223",
                width: "48px",
                height: "48px",
                weight: "200",
                margin: "0px 15px",
              }}
            />
            <DeleteOutlineOutlinedIcon
              sx={{
                color: "#1F2223",
                width: "48px",
                height: "48px",
                weight: "200",
                margin: "0px 15px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navolib;
