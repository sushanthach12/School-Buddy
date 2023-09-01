import React, { useRef, useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AddLinkIcon from "@mui/icons-material/AddLink";
import Input from "@mui/material/Input";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import UploadImageModal from "../components/UploadImageModal";

const Template = () => {
  const user = useSelector((state) => state.users.user);

  const imageRef = useRef();
  const [imageFile, setImageFile] = useState(null)

  const [loading, setLoading] = useState(false);

  const [openImageModal, setOpenImageModal] = useState(false)

  const handleImageModal = () => {
    setOpenImageModal(!openImageModal);
  }
  const checkFileSize = () => {
    const MAX_FILE_SIZE = 10 //10 MB

    const uploadedFileSize = Number((imageFile?.size / 1048576).toFixed(2)); // MB

    if (uploadedFileSize > MAX_FILE_SIZE) {
      console.log("File Size Exceeded 10MB")
    } else {
      console.log("Success")
    }
  }

  const handleImageInput = (e) => {
    setImageFile(imageRef.current?.files[0])

    setTimeout(() => {
      checkFileSize()
    }, 200)
  }

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
          width: "533px",
        }}
      >

        <input
          id="pic"
          name="pic"
          type="file"
          accept="image/jpeg, image/svg, image.png"
          style={{ display: 'none' }}
          ref={input => (imageRef.current = input)}
          onInput={handleImageInput}
        />

        <Box
          variant="div"
          sx={{
            alignContent: "center",
            width: "254px",
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
            Email Id
          </Typography>
          <Box
            sx={{
              border: "2px solid #D2D3D3",
              borderRadius: "6px",
              width: "254px",
              height: "48px",
              display: "flex",
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: "0 4px",
              gap: '2px'
              //   ":hover": {border: "2px solid "},
              //   transition:'all 0.2s ease-in-out',
              //   ":hover":{borderColor:"#8E9090"},
            }}
          >
            <Box>
              <LocationOnOutlinedIcon
                sx={{
                  color: "#B1B2B2",
                }}
              />
            </Box>
            <Input
              disableUnderline
              placeholder={user.email || "email"}
              sx={{
                width: "366px",
                height: "24px",
                fontSize: "16px",
              }}
            />
            <Box>
              <ClearIcon
                sx={{
                  color: "#B1B2B2",
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
          sx={{
            display: "flex",
            width: "533px",
          }}
        >
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
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: "0 4px",
                gap: '2px'
                //   ":hover": {border: "2px solid "},
                //   transition:'all 0.2s ease-in-out',
                //   ":hover":{borderColor:"#8E9090"},
              }}
            >
              <Box>
                <AddLinkIcon
                  sx={{
                    color: "#B1B2B2",
                  }}
                />
              </Box>
              <Input
                disableUnderline
                placeholder="Placeholder"
                sx={{
                  width: "366px",
                  height: "24px",
                  fontSize: "16px",
                }}
              />
              <Box>
                <ClearIcon
                  sx={{
                    color: "#B1B2B2",
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
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: "0 4px",
                gap: '2px'
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
                  }}
                />
              </Box>
              <Input
                disableUnderline
                placeholder="Placeholder"
                sx={{
                  width: "366px",
                  height: "24px",
                  fontSize: "16px",
                }}
              />
              <Box>
                <ClearIcon
                  sx={{
                    color: "#B1B2B2",
                    height: "20px",
                    width: "20px",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* second */}

        {/* third */}

        <Box
          variant="div"
          sx={{
            alignContent: "center",
            marginTop: "25px",
            border: "1px 0px 0px 0px",
            borderTop: "1px solid #EAEAEA",
            paddingTop: "25px",
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
            School Name
          </Typography>
          <Box
            sx={{
              border: "2px solid #D2D3D3",
              borderRadius: "6px",
              width: "533px",
              height: "48px",
              display: "flex",
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: "0 5px",
              //   ":hover": {border: "2px solid "},
              //   transition:'all 0.2s ease-in-out',
              //   ":hover":{borderColor:"#8E9090"},
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: 'start',
                alignItems: 'center'
              }}
            >
              <DescriptionOutlinedIcon
                sx={{
                  color: "#B1B2B2",
                  // marginTop: "8px",
                  // marginRight: '5px'
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
                padding: "3px",
              }}
            />

            <Box>
              <ClearIcon
                sx={{
                  color: "#B1B2B2",
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
            Address
          </Typography>
          <Box
            sx={{
              border: "2px solid #D2D3D3",
              borderRadius: "6px",
              width: "533px",
              height: "48px",
              display: "flex",
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: "0 5px",
              //   ":hover": {border: "2px solid "},
              //   transition:'all 0.2s ease-in-out',
              //   ":hover":{borderColor:"#8E9090"},
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: 'start',
                alignItems: 'center'
              }}
            >
              <DescriptionOutlinedIcon
                sx={{
                  color: "#B1B2B2",
                  // marginTop: "8px",
                  // marginRight: '5px'
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
                padding: "3px",
              }}
            />

            <Box>
              <ClearIcon
                sx={{
                  color: "#B1B2B2",
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
            marginTop: "25px",
            border: "1px 0px 0px 0px",
            borderTop: "1px solid #EAEAEA",
            paddingTop: "25px",
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
            Account Number
          </Typography>
          <Box
            sx={{
              border: "2px solid #D2D3D3",
              borderRadius: "6px",
              width: "533px",
              height: "48px",
              display: "flex",
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: "0 5px",
              //   ":hover": {border: "2px solid "},
              //   transition:'all 0.2s ease-in-out',
              //   ":hover":{borderColor:"#8E9090"},
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: 'start',
                alignItems: 'center'
              }}
            >
              <DescriptionOutlinedIcon
                sx={{
                  color: "#B1B2B2",
                  // marginTop: "8px",
                  // marginRight: '5px'
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
                padding: "3px",
              }}
            />

            <Box>
              <ClearIcon
                sx={{
                  color: "#B1B2B2",
                  height: "20px",
                  width: "20px",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* sixth */}

        <Box
          sx={{
            display: "flex",
            width: "533px",
          }}
        >
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
              Benificiary Name
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
              IFSC Code
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

        {/* seventh */}

        <Box
          sx={{
            display: "flex",
            width: "533px",
          }}
        >
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
              UPI ID
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
              GST number
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

        <Button
          sx={{
            marginTop: "25px",
            backgroundColor: "#FFE393",
            width: "253px",
            height: "48px",
            borderRadius: '6px',
            ":hover": { backgroundColor: "#ffe8a8" },
            textColor: "#363939",
          }}
          variant="contained"
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
            Update
          </Typography>
        </Button>
      </Box>

      <Box
        variant="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          marginLeft: "100px",
          // width: '530px'
        }}
      >
        <Box
          sx={{
            width: "344px",
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
              fontFamily: "Lora",
              width: "100%",
            }}
          >
            {user.name || "School Name"}
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
            <Button
              style={{
                margin: 0,
                padding: 0,
                backgroundColor: 'white',
              }}
              disableElevation
              disableTouchRipple
              onClick={handleImageModal}
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
            </Button>
            <Button
              style={{
                margin: 0,
                padding: 0,
                backgroundColor: 'white',
              }}
              disableElevation
              disableTouchRipple

            >
              <DeleteOutlineOutlinedIcon
                sx={{
                  color: "#1F2223",
                  width: "48px",
                  height: "48px",
                  weight: "200",
                  margin: "0px 15px",
                }}
              />
            </Button>
          </Box>
        </Box>
      </Box>

      {openImageModal && <UploadImageModal openModalOrNot={openImageModal} setOpenModalOrNot={setOpenImageModal} imageRef={imageRef} />}
    </Box >
  );
};

export default Template;
