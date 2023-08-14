import React from "react";
import AuthBox from "../components/AuthBox";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TextField from "@mui/material/TextField";
import AddLinkIcon from '@mui/icons-material/AddLink';
import Input from "@mui/material/Input";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CallIcon from '@mui/icons-material/Call';
import Button from '@mui/material/Button';

const LinkGenerator = () => {
  return (
    <Box
      variant="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: "50px",

      }}
    >
      <Box
        variant="div"
        sx={{
          marginBottom: "10px",
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
              width: "438px",
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
              width: "438px",
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
                marginLeft: '5px'
            }}
            >
              <LocationOnOutlinedIcon
                sx={{
                  color: "#B1B2B2",
                  marginTop: "8px",
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
                  marginLeft: "15px",
                  height: "20px",
                  width: "20px",
                  cursor: "pointer",
                }}
              />
            </Box>
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
              width: "438px",
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
              width: "438px",
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
                marginLeft: '5px'
            }}
            >
              <AddLinkIcon
                sx={{
                  color: "#B1B2B2",
                  marginTop: "8px",
                  marginRight: '5px'
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
              width: "438px",
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
              width: "438px",
              height: "117px",
              display: "flex",
              flexDirection: "col",
              paddingTop: "4px",
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
                marginLeft: '5px'
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
              width: "438px",
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
              width: "438px",
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
                marginLeft: '5px'
            }}
            >
              <DescriptionOutlinedIcon
                sx={{
                  color: "#B1B2B2",
                  marginTop: "8px",
                  marginRight: '5px'
                }}
              />
            </Box>
            <Typography
              sx={{
                width: "260px",
                height: "24px",
                marginTop: "8px",
                fontSize: "16px",
                color: '#B1B2B2',
                marginRight: '15px'
              }}
            >Placeholder</Typography>
            <Box
            sx={{
                width:"88px",
                height:"36px",
                backgroundColor:"#3B4744",
                alignItems:"center",
                justifyContent:"center",
                padding:"0px",
                display:"flex",
                borderRadius:"4px",
                padding:"0px 10px",
                cursor:"pointer",
            }}
            >
            <IosShareOutlinedIcon
                        sx={{
                            color:"#1F2223",
                            // width:"48px",
                            // height:"48px",
                            weight:"200",
                            color:"white"
                        }}
                        />
              <Typography
              sx={{
                color:"white"
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
              width: "438px",
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
              width: "438px",
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
                marginLeft: '5px'
            }}
            >
              <CallIcon
                sx={{
                  color: "#B1B2B2",
                  marginTop: "8px",
                  marginRight: '5px'
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
        <Button 
        sx={{
            marginTop: '25px',
            backgroundColor: "#FFE393",
            width:'253px',
            height:'48px',
        ":hover": { backgroundColor: "#ffe8a8" },
        textColor: "#363939",
        }}
        variant="contained">
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
        }}>
        Update
      </Typography>
        </Button>

      </Box>


      <Box
        variant="div"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    marginLeft: '100px',
                    // width: '530px'
                }}
            >
                <Box
                    sx={{
                        width: '344px',
                        height: '344px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <img
                        fill
                        src='/images/profile.svg'
                        alt='profile'
                        style={{
                            width: '284px',
                            height: '284px'
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        width: '100%',
                        height: '70px',
                        gap: '12px',
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
                        }}>
                        School Name
                    </Typography>

                    <Box
                    variant="div"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '8px',
                        marginTop: '30px'
                    }}
                    >
                        <IosShareOutlinedIcon
                        sx={{
                            color:"#1F2223",
                            width:"48px",
                            height:"48px",
                            weight:"200",
                            margin: '0px 15px'
                        }}
                        />
                        <DeleteOutlineOutlinedIcon
                          sx={{
                            color:"#1F2223",
                            width:"48px",
                            height:"48px",
                            weight:"200",
                            margin: '0px 15px'
                        }}
                        />
                    </Box>
                </Box>
            </Box>

    </Box>
  );
};

export default LinkGenerator;
