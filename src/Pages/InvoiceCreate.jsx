import React, { useEffect, useRef, useState } from "react";
import AddLinkIcon from "@mui/icons-material/AddLink";
import Input from "@mui/material/Input";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { useSelector } from "react-redux";
import { useGetAllUserPredefinedQuery } from "../store/api/predefinedApi";
import {
  useGetUserTemplatesQuery,
  useLazyGetTemplateByTaglineQuery,
} from "../store/api/templateApi";
import { useCreateInvoiceMutation } from "../store/api/invoiceApi";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import PdfModal from "../components/PdfModal";

const InvoiceCreate = () => {
  const [tagSelected, setTagSelected] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState({});
  const [pdfData, setPdfData] = useState("");

  const pdfOpenRef = useRef();

  const user = useSelector((state) => state.users.user);
  const predefined = useSelector((state) => state.predefined.predefines);

  const {} = useGetAllUserPredefinedQuery(
    { userId: user._id },
    { refetchOnMountOrArgChange: true, skip: false }
  );
  const {
    refetch,
    data: template = {},
    isSuccess,
    isError,
    isLoading: queryLoading,
    error,
  } = useGetUserTemplatesQuery(user._id, {
    refetchOnMountOrArgChange: true,
  });

  const [createInvoice] = useCreateInvoiceMutation();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleChange = (e) => {
    setTagSelected(e.target.value);
  };

  const handleDetails = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      if (tagSelected === "") {
        toast.error("Please select a predefined", {
          duration: 1000,
          position: "top-center",
        });
        return;
      } else if (
        !details?.invoiceDate ||
        !details?.terms ||
        !details?.modeOfPayment
      ) {
        toast.error("All the fields are required", {
          duration: 1000,
          position: "top-center",
        });
        return;
      }

      const body = {
        userId: user._id,
        templateId: template?._id,
        tagId: tagSelected,
        invoiceDate: details?.invoiceDate,
        terms: details?.terms,
        modeOfPayment: details?.modeOfPayment,
      };

      const data = await createInvoice(body).unwrap();

      toast.success("Invoice Created Successfully!", {
        duration: 1000,
        position: "top-center",
      });

      setTimeout(() => {
        const link = document.createElement("a");
        link.href = data?.URL;
        link.target = "_blank";
        link.click();

        link.remove();
      }, 600);
    } catch (error) {
      toast.error("Error: " + error, { duration: 500, position: "top-center" });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      variant="div"
      sx={{
        width: {
          xs: "100%",
          sm: "100%",
        },
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <Link
        to={`data:application/pdf;base64,${pdfData}`}
        target="_blank"
        style={{ display: "none" }}
        ref={pdfOpenRef}
      />
      {queryLoading && "Loading..."}
      {isError && "Something went wrong! try again..."}
      {template === null && "No Templates Found"}
      {template && isSuccess && (
        <Box>
          <Box
            sx={{
              alignContent: "center",
              width: {
                xs: "auto",
                sm: "auto",
                md: "533px",
                lg: "533px",
                xl: "533px",
              },
              marginLeft: {
                xs: "10px",
                sm: "10px",
                md: "0px",
                lg: "0px",
                xl: "0px",
              },
              marginRight: {
                xs: "10px",
                sm: "10px",
                md: "0px",
                lg: "0px",
                xl: "0px",
              },
              // display:'flex',
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "430px",
                  lg: "430px",
                  xl: "430px",
                },
                fontSize: "24px",
                fontWeight: "600",
                lineHeight: "30px",
                fontColor: "#363931",
                fontFamily: "Lora",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {template?.schoolName}
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "430px",
                  lg: "430px",
                  xl: "430px",
                },
                fontSize: "14px",
                lineHeight: "21px",
                fontWeight: "400",
                fontColor: "#363931",
                fontFamily: "Inter",
                justifyContent: "space-between",
                alignContent: "center",
              }}
            >
              {template?.address},
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "430px",
                  lg: "430px",
                  xl: "430px",
                },
                fontSize: "14px",
                lineHeight: "21px",
                fontWeight: "400",
                fontColor: "#363931",
                fontFamily: "Inter",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {template?.emailId}
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "430px",
                  lg: "430px",
                  xl: "430px",
                },
                fontSize: "14px",
                lineHeight: "21px",
                fontWeight: "400",
                fontColor: "#363931",
                fontFamily: "Inter",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              Phone Number:{" "}
              {template?.phoneNo.map((value) => (
                <span key={value} style={{ margin: "0 3px" }}>
                  {value} |
                </span>
              ))}
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "430px",
                  lg: "430px",
                  xl: "430px",
                },
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "14px",
                lineHeight: "21px",
                fontWeight: "400",
                fontColor: "#363931",
                fontFamily: "Inter",
              }}
            >
              GST Number : {template?.gstNo}
            </Typography>
          </Box>
          {/* drop down start */}
          <Box
            style={{
              width: {
                xs: "auto",
                sm: "auto",
                md: "282px",
                lg: "282px",
                xl: "282px",
              },
              marginLeft: {
                xs: "10px",
                sm: "10px",
                md: "0px",
                lg: "0px",
                xl: "0px",
              },
              marginRight: {
                xs: "10px",
                sm: "10px",
                md: "0px",
                lg: "0px",
                xl: "0px",
              },
              height: "56px",
              margin: "15px 0",
            }}
          >
            <FormControl fullWidth>
              {predefined.length === 0 ? (
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ color: "red", fontStyle: "italic" }}
                >
                  No Predefines
                </InputLabel>
              ) : (
                <InputLabel id="demo-simple-select-label">
                  Predefined
                </InputLabel>
              )}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tagSelected}
                label="Predefined"
                onChange={handleChange}
                disabled={predefined.length === 0}
                style={{
                  ":disabled": {
                    color: "red",
                  },
                }}
              >
                {predefined.map((ele) => (
                  <MenuItem key={ele._id} value={ele._id}>
                    {ele.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          {/* drop down stop */}

          <Box
            variant="div"
            sx={{
              alignContent: "center",
              marginTop: "15px",
              width: {
                xs: "auto",
                sm: "auto",
                md: "438px",
                lg: "438px",
                xl: "438px",
              },
              marginLeft: {
                xs: "10px",
                sm: "10px",
                md: "0px",
                lg: "0px",
                xl: "0px",
              },
              marginRight: {
                xs: "10px",
                sm: "10px",
                md: "0px",
                lg: "0px",
                xl: "0px",
              },
              justifyContent: "space-between",
              alignItems: "center",
              // border: "1px 0px 0px 0px",
              // borderTop: "1px solid #EAEAEA",
              paddingTop: "15px",
            }}
          >
            <Typography
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "438px",
                  lg: "438px",
                  xl: "438px",
                },

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
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "533px",
                  lg: "533px",
                  xl: "533px",
                },
                height: "48px",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                // paddingTop: "4px",
                padding: "8px",
                //   ":hover": {border: "2px solid "},
                //   transition:'all 0.2s ease-in-out',
                //   ":hover":{borderColor:"#8E9090"},
              }}
            >
              <DescriptionOutlinedIcon
                sx={{
                  color: "#B1B2B2",
                  // marginTop: "8px",
                  // marginRight: '5px'
                  margin: "0 5px",
                  padding: "0px",
                }}
              />
              <Input
                type="date"
                disableUnderline
                placeholder="Placeholder"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "490px",
                    lg: "490px",
                    xl: "490px",
                  },
                  height: "24px",
                  // marginTop: "8px",
                  fontSize: "16px",
                  color: "black",
                  marginRight: "15px",
                  padding: "3px",
                }}
                name="invoiceDate"
                value={details?.value}
                onChange={handleDetails}
              />
            </Box>
          </Box>
          <Box
            variant="div"
            sx={{
              alignContent: "center",
              marginTop: "15px",
			  width: {
				xs: "auto",
				sm: "auto",
				md: "438px",
				lg: "438px",
				xl: "438px",
			  },
			  marginLeft: {
                xs: "10px",
                sm: "10px",
                md: "0px",
                lg: "0px",
                xl: "0px",
              },
              marginRight: {
                xs: "10px",
                sm: "10px",
                md: "0px",
                lg: "0px",
                xl: "0px",
              },
              // border: "1px 0px 0px 0px",
              // borderTop: "1px solid #EAEAEA",
              paddingTop: "15px",
            }}
          >
            <Typography
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "438px",
                  lg: "438px",
                  xl: "438px",
                },
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
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "533px",
                  lg: "533px",
                  xl: "533px",
                },
                height: "48px",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                // paddingTop: "4px",
                padding: "8px",
                //   ":hover": {border: "2px solid "},
                //   transition:'all 0.2s ease-in-out',
                //   ":hover":{borderColor:"#8E9090"},
              }}
            >
              <DescriptionOutlinedIcon
                sx={{
                  color: "#B1B2B2",
                  // marginTop: "8px",
                  // marginRight: '5px'
                  margin: "0 5px",
                  padding: "0px",
                }}
              />
              <Input
                disableUnderline
                placeholder="Placeholder"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "490px",
                    lg: "490px",
                    xl: "490px",
                  },
                  height: "24px",
                  // marginTop: "8px",
                  fontSize: "16px",
                  color: "black",
                  marginRight: "15px",
                  padding: "3px",
                }}
                name="terms"
                value={details?.terms}
                onChange={handleDetails}
              />
              <ClearIcon
                sx={{
                  color: "#B1B2B2",
                  marginLeft: "10px",
                  height: "20px",
                  width: "20px",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
          <Box
            variant="div"
            sx={{
              alignContent: "center",
              marginTop: "15px",
              width: {
                xs: "auto",
                sm: "auto",
                md: "438px",
                lg: "438px",
                xl: "438px",
              },
			  marginLeft: {
                xs: "10px",
                sm: "10px",
                md: "0px",
                lg: "0px",
                xl: "0px",
              },
              marginRight: {
                xs: "10px",
                sm: "10px",
                md: "0px",
                lg: "0px",
                xl: "0px",
              },
              // border: "1px 0px 0px 0px",
              // borderTop: "1px solid #EAEAEA",
              paddingTop: "15px",
            }}
          >
            <Typography
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "438px",
                  lg: "438px",
                  xl: "438px",
                },
                height: "18px",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "17.5px",
                fontFamily: "Inter",
                color: "#57595A",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              Mode of Payment
            </Typography>
            <Box
              sx={{
                border: "2px solid #D2D3D3",
                borderRadius: "6px",
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "533px",
                  lg: "533px",
                  xl: "533px",
                },
                height: "48px",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                // paddingTop: "4px",
                padding: "8px",
                //   ":hover": {border: "2px solid "},
                //   transition:'all 0.2s ease-in-out',
                //   ":hover":{borderColor:"#8E9090"},
              }}
            >
              <DescriptionOutlinedIcon
                sx={{
                  color: "#B1B2B2",
                  // marginTop: "8px",
                  // marginRight: '5px'
                  margin: "0 5px",
                  padding: "0px",
                }}
              />
              <Input
                disableUnderline
                placeholder="Placeholder"
                sx={{
                  width: {
					xs: "100%",
					sm: "100%",
					md: "490px",
					lg: "490px",
					xl: "490px",
				  },
                  height: "24px",
                  // marginTop: "8px",
                  fontSize: "16px",
                  color: "black",
                  marginRight: "15px",
                  padding: "3px",
                }}
                name="modeOfPayment"
                value={details?.modeOfPayment}
                onChange={handleDetails}
              />
              <Box>
                <ClearIcon
                  sx={{
                    color: "#B1B2B2",
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
			  justifyContent: "space-between",
              alignContent: "center",
              marginTop: "15px",
              width: {
                xs: "auto",
                sm: "auto",
                md: "438px",
                lg: "438px",
                xl: "438px",
              },
			  marginLeft: {
                xs: "10px",
                sm: "10px",
                md: "0px",
                lg: "0px",
                xl: "0px",
              },
              marginRight: {
                xs: "10px",
                sm: "10px",
                md: "0px",
                lg: "0px",
                xl: "0px",
              },
              // border: "1px 0px 0px 0px",
              // borderTop: "1px solid #EAEAEA",
              paddingTop: "15px",
            }}
          >
          <Button
            type="button"
            sx={{
            //   marginTop: "25px",
              backgroundColor: "#FFE393",
              width: {
				xs: "auto",
				sm: "auto",
				md: "253px",
				lg: "253px",
				xl: "253px",
			  },
              height: "48px",
              borderRadius: "6px",
              ":hover": { backgroundColor: "#ffe8a8" },
              textColor: "#363939",
			  justifyContent: "space-between",
			  alignItems: "center",
            }}
            variant="contained"
            disableElevation
            disabled={isLoading}
            onClick={handleSubmit}
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
              Create
            </Typography>
          </Button>
		  </Box>
        </Box>
      )}

      {/* <PdfModal /> */}
    </Box>
  );
};

export default InvoiceCreate;
