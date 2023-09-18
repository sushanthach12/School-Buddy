import React, { useEffect, useRef, useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AddLinkIcon from "@mui/icons-material/AddLink";
import Input from "@mui/material/Input";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useGetUserTemplatesQuery, useUpdateTemplateMutation } from "../store/api/templateApi";
import { prepareTemplateData } from "../utils/prepareTemplateData";
import { addTemplate, addUserTemplates } from "../store/slices/templateSlice";
import { useNavigate } from "react-router-dom";

const UpdateTemplate = () => {
    const user = useSelector((state) => state.users.user);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { refetch, data: template = {}, isSuccess, isError, error } = useGetUserTemplatesQuery(user._id, {
        refetchOnMountOrArgChange: true
    })

    useEffect(() => {
        refetch()
        if (isSuccess) {
            setfields({ ...template, phoneNo1: template?.phoneNo[0], phoneNo2: template?.phoneNo[1] })
        }
    }, [refetch, isSuccess, template])

    const [fields, setfields] = useState({});

    const [updateTemplate] = useUpdateTemplateMutation();

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setfields({ ...template, [e.target.name]: e.target.value })
    }


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const templateData = await prepareTemplateData(e.target, user._id);
            const data = await updateTemplate({ id: template._id, body: templateData }).unwrap();
            dispatch(addTemplate(data))
            toast.success("Template Updated Successfully!", { duration: 1000, position: 'top-center' });

            setTimeout(() => {
                navigate('/template')
            }, 1000)

        } catch (error) {
            toast.error("Something went wrong! try again!", { duration: 1000, position: 'top-center' })
        } finally {
            setLoading(false);
        }

    }

    if (isError) {
        return (
            <>
                <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', width: "100vw", height: "80vh", gap: '5px' }}>
                    <p style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '1.5rem' }}>Something went wrong! try again.</p>
                </div>
            </>
        )
    }

    if (isSuccess && template === null) {
        return (
            <>
                <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', width: "100vw", height: "80vh", gap: '5px' }}>
                    <p style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '1.5rem' }}>No template found! Please create one to update.</p>
                </div>
            </>
        )
    }

    return (
        <Box
            variant="div"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: {
                    xs: "column-reverse",
                    md: "row",

                },
                marginTop: "50px",
            }}
        >

            <form onSubmit={handleFormSubmit}>
                <Box
                    variant="div"
                    sx={{
						marginBottom: "10px",
						width: {
							xs:"auto",
							sm: "auto",
							md: "533px",
							lg:"533px",
							xl:"533px"
						},
						marginRight: {
							xs:"10px",
							sm: "10px",
							md: "0px",
							lg:"0px",
							xl:"0px"
						},
						marginLeft: {
							xs:"10px",
							sm: "10px",
							md: "0px",
							lg:"0px",
							xl:"0px"
						},
						justifyContent: "space-between",
						alignItems: "center",
					}}
                >

                    <Box
                        sx={{
							display: "flex",
							width:{
								xs:"100%",
								sm: "100%",
								md: "100%",
								lg:"533px",
								xl:"533px"
							},
							flexDirection: {
								xs: "column",
								sm: "column",
								md: "row",
								lg: "row",
								xl: "row",
							},
							justifyContent: "space-between",
							alignItems: "center",
						}}
                    >

                        <Box
                            variant="div"
                            sx={{
								alignContent: "center",
								width: {
									xs: "auto",
									sm: "auto",
									md: "254px",
									lg: "254px",
									xl: "254px",
								},
								marginRight: {
									xs: "10px",
									sm: "10px",
									md: "0px",
									lg: "0px",
									xl: "0px",
								},
								marginLeft: {
									xs: "10px",
									sm: "10px",
									md: "0px",
									lg: "0px",
									xl: "0px",
								},
								marginBottom:{
									xs: "25px",
									sm: "25px",
									md: "25px",
									lg: "0px",
									xl: "0px",
								}
							}}
                        >
                            <Typography
                                sx={{
									width: {
										xs: "100%",
										sm: "100%",
										md: "254px",
										lg: "254px",
										xl: "254px",
									},
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
									width: {
										xs: "100%",
										sm: "100%",
										md: "254px",
										lg: "254px",
										xl: "254px",
									},
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
                                    placeholder={"email"}
                                    sx={{
										width: {
											xs: "100%",
											sm: "100%",
											md: "366px",
											lg: "366px",
											xl: "366px",
										},
										height: "24px",
										fontSize: "16px",
									}}
                                    type="email"
                                    name="emailId"
                                    value={fields?.emailId}
                                    onChange={handleChange}
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
                    {/* first input done */}
                    <Box
                        sx={{
							display: "flex",
							width:{
								xs:"100%",
								sm: "100%",
								md: "100%",
								lg:"533px",
								xl:"533px"
							},
							flexDirection: {
								xs: "column",
								sm: "column",
								md: "row",
								lg: "row",
								xl: "row",
							},
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: "25px",
						}}
                    >
                        <Box
                            variant="div"
                            sx={{
								alignContent: "center",
								
								// width: "254px",
								marginRight: "25px",
								width: {
									xs: "auto",
									sm: "auto",
									md: "254px",
									lg: "254px",
									xl: "254px",
								},
								marginRight: {
									xs: "10px",
									sm: "10px",
									md: "25px",
									lg: "25px",
									xl: "25px",
								},
								marginLeft: {
									xs: "10px",
									sm: "10px",
									md: "0px",
									lg: "0px",
									xl: "0px",
								},
								marginBottom:{
									xs: "25px",
									sm: "25px",
									md: "25px",
									lg: "0px",
									xl: "0px",
								}
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
                                    type='tel'
                                    name="phoneNo1"
                                    value={fields?.phoneNo1}
                                    onChange={handleChange}
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
								
								// width: "254px",
								marginRight: "25px",
								width: {
									xs: "auto",
									sm: "auto",
									md: "254px",
									lg: "254px",
									xl: "254px",
								},
								marginRight: {
									xs: "10px",
									sm: "10px",
									md: "25px",
									lg: "25px",
									xl: "25px",
								},
								marginLeft: {
									xs: "10px",
									sm: "10px",
									md: "0px",
									lg: "0px",
									xl: "0px",
								},
								marginBottom:{
									xs: "25px",
									sm: "25px",
									md: "25px",
									lg: "0px",
									xl: "0px",
								}
							}}
                        >
                            <Typography
                                sx={{
									width: {
										xs: "100%",
										sm: "100%",
										md: "254px",
										lg: "254px",
										xl: "254px",
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
										xs: "auto",
										sm: "auto",
										md: "254px",
										lg: "254px",
										xl: "254px",
									},
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
										width: {
											xs: "auto",
											sm: "auto",
											md: "366px",
											lg: "366px",
											xl: "366px",
										},
										height: "24px",
										fontSize: "16px",
									}}
                                    type='tel'
                                    name="phoneNo2"
                                    value={fields?.phoneNo2}
                                    onChange={handleChange}
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
							marginTop: {
								xs: "0px",
								sm: "0px",
								md: "25px",
								lg: "25px",
								xl: "25px",
							},
							border: "1px 0px 0px 0px",
							borderTop: "1px solid #EAEAEA",
							paddingTop: "25px",
							width:{
								xs:"auto",
								sm: "auto",
								md: "533px",
								lg:"533px",
								xl:"533px"
							},
							marginRight: {
								xs: "10px",
								sm: "10px",
								md: "0px",
								lg: "0px",
								xl: "0px",
							},
							marginLeft: {
								xs: "10px",
								sm: "10px",
								md: "0px",
								lg: "0px",
								xl: "0px",
							},
							paddingRight: {
								xs: "10px",
								sm: "10px",
								md: "0px",
								lg: "0px",
								xl: "0px",
							},
							paddingLeft: {
								xs: "10px",
								sm: "10px",
								md: "0px",
								lg: "0px",
								xl: "0px",
							},
							justifyContent: "space-between",

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
                            School Name
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
									padding: "3px",
								}}
                                type="text"
                                name="schoolName"
                                value={fields?.schoolName}
                                onChange={handleChange}
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
							border: "1px 0px 0px 0px",
							borderTop: "1px solid #EAEAEA",
							paddingTop: "25px",
							width:{
								xs:"auto",
								sm: "auto",
								md: "533px",
								lg:"533px",
								xl:"533px"
							},
							marginRight: {
								xs: "10px",
								sm: "10px",
								md: "0px",
								lg: "0px",
								xl: "0px",
							},
							marginLeft: {
								xs: "10px",
								sm: "10px",
								md: "0px",
								lg: "0px",
								xl: "0px",
							},
							paddingRight: {
								xs: "10px",
								sm: "10px",
								md: "0px",
								lg: "0px",
								xl: "0px",
							},
							paddingLeft: {
								xs: "10px",
								sm: "10px",
								md: "0px",
								lg: "0px",
								xl: "0px",
							},
							justifyContent: "space-between",
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
                            Address
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
									padding: "3px",
								}}
                                type="text"
                                name="address"
                                value={fields?.address}
                                onChange={handleChange}
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
							width:{
								xs:"auto",
								sm: "auto",
								md: "533px",
								lg:"533px",
								xl:"533px"
							},
							marginRight: {
								xs: "10px",
								sm: "10px",
								md: "0px",
								lg: "0px",
								xl: "0px",
							},
							marginLeft: {
								xs: "10px",
								sm: "10px",
								md: "0px",
								lg: "0px",
								xl: "0px",
							},
							paddingRight: {
								xs: "10px",
								sm: "10px",
								md: "0px",
								lg: "0px",
								xl: "0px",
							},
							paddingLeft: {
								xs: "10px",
								sm: "10px",
								md: "0px",
								lg: "0px",
								xl: "0px",
							},
							justifyContent: "space-between",
							
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
                            Account Number
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
									padding: "3px",
								}}
                                type="text"
                                name="accountNo"
                                value={fields?.accountNo}
                                onChange={handleChange}
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
							alignContent: "center",
							marginTop: "25px",
							border: "1px 0px 0px 0px",
							borderTop: "1px solid #EAEAEA",
							paddingTop: {
								xs: "0px",
								sm: "0px",
								md: "25px",
								lg: "25px",
								xl: "25px",
							},
							width:{
								xs:"auto",
								sm: "auto",
								md: "533px",
								lg:"533px",
								xl:"533px"
							},
							marginRight: {
								xs: "10px",
								sm: "10px",
								md: "0px",
								lg: "0px",
								xl: "0px",
							},
							marginLeft: {
								xs: "10px",
								sm: "10px",
								md: "0px",
								lg: "0px",
								xl: "0px",
							},
							paddingRight: {
								xs: "10px",
								sm: "10px",
								md: "0px",
								lg: "0px",
								xl: "0px",
							},
							paddingLeft: {
								xs: "10px",
								sm: "10px",
								md: "0px",
								lg: "0px",
								xl: "0px",
							},
							justifyContent: "space-between",
							flexDirection: {
								xs: "column",
								sm: "column",
								md: "row",
								lg: "row",
								xl: "row",
							},
						}}
                    >
                        <Box
                            variant="div"
                            sx={{
								alignContent: "center",
								marginTop: "25px",
								width: {
									xs: "100%",
									sm: "100%",
									md: "254px",
									lg: "254px",
									xl: "254px",
								},
							}}
                        >
                            <Typography
                                sx={{
									width: {
										xs: "100%",
										sm: "100%",
										md: "254px",
										lg: "254px",
										xl: "254px",
									},
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
									width: {
										xs: "100%",
										sm: "100%",
										md: "254px",
										lg: "254px",
										xl: "254px",
									},
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
										width: {
											xs: "100%",
											sm: "100%",
											md: "366px",
											lg: "366px",
											xl: "366px",
										},
										height: "24px",
										fontSize: "16px",
									}}
                                    type="text"
                                    name="benificiaryName"
                                    value={fields?.benificiaryName}
                                    onChange={handleChange}
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
								width: {
									xs: "100%",
									sm: "100%",
									md: "254px",
									lg: "254px",
									xl: "254px",
								},
							}}
                        >
                            <Typography
                                sx={{
									width: {
										xs: "100%",
										sm: "100%",
										md: "254px",
										lg: "254px",
										xl: "254px",
									},
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
									width: {
										xs: "100%",
										sm: "100%",
										md: "254px",
										lg: "254px",
										xl: "254px",
									},
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
										width: {
											xs: "100%",
											sm: "100%",
											md: "366px",
											lg: "366px",
											xl: "366px",
										},
										height: "24px",
										fontSize: "16px",
									}}
                                    type="text"
                                    name="ifscCode"
                                    value={fields?.ifscCode}
                                    onChange={handleChange}
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

                    {/* seventh */}

                    <Box
                        sx={{
							display: "flex",
							width: {
								xs: "auto",
								sm: "auto",
								md: "533px",
								lg: "533px",
								xl: "533px",
							},
							marginRight: {
								xs: "10px",
								sm: "10px",
								md: "0px",
								lg: "0px",
								xl: "0px",
							},
							marginLeft: {
								xs: "10px",
								sm: "10px",
								md: "0px",
								lg: "0px",
								xl: "0px",
							},
							justifyContent: "space-between",
							alignItems: 'center',
							flexDirection: {
								xs: "column",
								sm: "column",
								md: "row",
								lg: "row",
								xl: "row",
							},
							paddingRight: {
								xs: "10px",
								sm: "10px",
								md: "0px",
								lg: "0px",
								xl: "0px",
							},
							paddingLeft: {
								xs: "10px",
								sm: "10px",
								md: "0px",
								lg: "0px",
								xl: "0px",
							},
						}}
                    >
                        <Box
                            variant="div"
                            sx={{
								alignContent: "center",
								marginTop: "25px",
								width: {
									xs: "100%",
									sm: "100%",
									md: "254px",
									lg: "254px",
									xl: "254px",
								},
							}}
                        >
                            <Typography
                                sx={{
									width: {
										xs: "100%",
										sm: "100%",
										md: "254px",
										lg: "254px",
										xl: "254px",
									},
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
									width: {
										xs: "100%",
										sm: "100%",
										md: "254px",
										lg: "254px",
										xl: "254px",
									},
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
										width: {
											xs: "100%",
											sm: "100%",
											md: "366px",
											lg: "366px",
											xl: "366px",
										},
										height: "24px",
										fontSize: "16px",
									}}
                                    type="text"
                                    name="upiId"
                                    value={fields?.upiId}
                                    onChange={handleChange}
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
								width:{
									xs:"100%",
									sm: "100%",
									md: "100%",
									lg:"254px",
									xl:"254px"
								},
							}}
                        >
                            <Typography
                                sx={{
									width: {
										xs: "100%",
										sm: "100%",
										md: "254px",
										lg: "254px",
										xl: "254px",
									},
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
									width: {
										xs: "100%",
										sm: "100%",
										md: "254px",
										lg: "254px",
										xl: "254px",
									},
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
										width: {
											xs: "100%",
											sm: "100%",
											md: "366px",
											lg: "366px",
											xl: "366px",
										},
										height: "24px",
										fontSize: "16px",
									}}
                                    type="number"
                                    name="gstNo"
                                    value={fields?.gstNo}
                                    onChange={handleChange}
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

                    <Button
                        type="submit"
                        sx={{
							marginTop: "25px",
							backgroundColor: "#FFE393",
							width: {
								xs: "100%",
								sm: "100%",
								md: "100%",
								lg: "533px",
								xl: "533px",
							},
							height: "48px",
							borderRadius: '6px',
							":hover": { backgroundColor: "#ffe8a8" },
							textColor: "#363939",
						}}
                        variant="contained"
                        disableElevation
                        disabled={loading}
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
            </form >

            {/* <Box
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
					sx={{
						width: "344px",
						height: "344px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<img
						fill={true}
						src={imageFile || user?.profile_img || "/images/profile.svg"}
						alt="profile"
						style={{
							width: "284px",
							height: "284px",
							borderRadius: '50%',
							border: (user?.profile_img || imageFile) && '4px solid #F9D262',
							objectFit: 'cover',
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
							onClick={() => setImageFile(null)}
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
			</Box> */}
        </Box >
    );
};

export default UpdateTemplate;
