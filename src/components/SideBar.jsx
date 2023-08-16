import React from 'react'

import { Box, Button, Typography } from '@mui/material'
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Link } from 'react-router-dom';

const navLinks = [
    { link: '/analytics', name: 'Analytics' },
    { link: '/link-generator', name: 'Link Generator' },
    { link: '/invoice-generator', name: 'Invoice Generator' },
    { link: '/support', name: 'Support' },
]


const SideBar = ({ handleDrawerClose }) => {

    return (
        <Box
            sx={{
                width: "456px",
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
                    width: "253px",
                    height: "48px",
                    backgroundColor: "#FFE393",
                    ":hover": { backgroundColor: "#ffe8a8" },
                    textColor: "#363939",
                    marginLeft: "20px",
                    marginTop: "200px",
                }}
            >
                <Typography
                    variant="h4 "
                    component="div"
                    sx={{
                        color: "#363939",
                        fontSize: "18px",
                        weight: "600",
                        textTransform: "none",
                    }}
                >
                    Log Out
                </Typography>
            </Button>
        </Box>
    )
}

export default SideBar