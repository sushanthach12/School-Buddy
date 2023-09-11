import React from 'react'

import { Box, Button, Typography } from '@mui/material'
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const navLinks = [
    { link: '/analytics', name: 'Analytics' },
    { link: '/link-generator', name: 'Link Generator' },
    { link: '/invoice-generator', name: 'Invoice Generator' },
    { link: '/support', name: 'Support' },
]


const SideBar = ({ handleDrawerClose }) => {
    const dispatch = useDispatch()

    return (
        <Box
            sx={{
                width: "100%",
                display: 'flex',
                marginTop: '12px',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'start'
            }}
        >

            {
                navLinks.map(navLink => (
                    <Link 
                    key={navLink.link} 
                    to={`${navLink.link}`} 
                    onClick={handleDrawerClose}
                    style={{
                        textDecoration: "none"
                    }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '12px 24px',
                                width: {
                                    xs: '250px',
                                    sm: '250px',
                                    md: '408px',
                                    lg: '408px',
                                    xl: '408px',
                                },
                                // marginLeft: '20px',
                                // marginRight: '20px',
                            }}
                        >

                            <Box
                                sx={{
                                    height: "48px",
                                    width: "100%",
                                    marginLeft: '20px',
                                    marginRight: '20px',
                                    border: "1px solid #363939",
                                    borderRadius: "6px",
                                    display: "flex",
                                    justifyContent: 'space-between',
                                    padding: '0px 16px',
                                    alignItems: 'center',
                                    cursor: "pointer",
                                    color: '#363939'
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        alignContent: "center",
                                        fontSize: "18px",
                                        lineHeight: '22.5px',
                                        fontWeight: "600",
                                        fontFamily: 'Lora'
                                    }}
                                >
                                    {navLink.name}
                                </Typography>
                                <ArrowForwardOutlinedIcon
                                    sx={{
                                        height: "20px",
                                        width: "20px",
                                    }}
                                />
                            </Box>

                        </Box>
                    </Link>
                ))
            }



            {/* <Link to={'/link-generator'} onClick={handleDrawerClose}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        padding: '12px 24px'
                    }}
                >

                    <Box
                        sx={{
                            height: "48px",
                            width: "408px",
                            border: "1px solid #363939",
                            borderRadius: "6px",
                            display: "flex",
                            justifyContent: 'space-between',
                            padding: '0px 16px',
                            alignItems: 'center',
                            cursor: "pointer",
                            color: '#363939'
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                alignContent: "center",
                                fontSize: "18px",
                                lineHeight: '22.5px',
                                fontWeight: "600",
                            }}
                        >
                            Link Generator
                        </Typography>
                        <ArrowForwardOutlinedIcon
                            sx={{
                                height: "20px",
                                width: "20px",
                            }}
                        />
                    </Box>

                </Box>
            </Link>

            <Link to={'/invoice-generator'} onClick={handleDrawerClose}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        padding: '12px 24px'
                    }}
                >

                    <Box
                        sx={{
                            height: "48px",
                            width: "408px",
                            border: "1px solid #363939",
                            borderRadius: "6px",
                            display: "flex",
                            justifyContent: 'space-between',
                            padding: '0px 16px',
                            alignItems: 'center',
                            cursor: "pointer",
                            color: '#363939'
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                alignContent: "center",
                                fontSize: "18px",
                                lineHeight: '22.5px',
                                fontWeight: "600",
                            }}
                        >
                            Invoice Generator
                        </Typography>
                        <ArrowForwardOutlinedIcon
                            sx={{
                                height: "20px",
                                width: "20px",
                            }}
                        />
                    </Box>

                </Box>
            </Link>

            <Link to={'/support'} onClick={handleDrawerClose}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        padding: '12px 24px'
                    }}
                >

                    <Box
                        sx={{
                            height: "48px",
                            width: "408px",
                            border: "1px solid #363939",
                            borderRadius: "6px",
                            display: "flex",
                            justifyContent: 'space-between',
                            padding: '0px 16px',
                            alignItems: 'center',
                            cursor: "pointer",
                            color: '#363939'
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                alignContent: "center",
                                fontSize: "18px",
                                lineHeight: '22.5px',
                                fontWeight: "600",
                            }}
                        >
                            Support
                        </Typography>
                        <ArrowForwardOutlinedIcon
                            sx={{
                                height: "20px",
                                width: "20px",
                            }}
                        />
                    </Box>

                </Box>
            </Link> */}


            <Button
                sx={{
                    width: {
                        xs: '200px',
                        sm: '200px',
                        md: '408px',
                        lg: '408px',
                        xl: '408px',
                    },
                    height: "48px",
                    backgroundColor: "#FFE393",
                    ":hover": { backgroundColor: "#ffe8a8" },
                    textColor: "#363939",
                    marginLeft: "20px",
                    marginTop: "200px",
                }}
                onClick={() => dispatch({type: 'RESET'})}
            >
                <Typography
                    variant="h4 "
                    component="div"
                    sx={{
                        color: "#363939",
                        fontSize: "18px",
                        weight: "600",
                        textTransform: "none",
                        fontFamily: 'Lora'
                    }}
                >
                    Log Out
                </Typography>
            </Button>
        </Box>
    )
}

export default SideBar