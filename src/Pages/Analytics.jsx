import React from 'react'

import { Box, Button, Container, Icon, Typography } from '@mui/material'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CachedIcon from '@mui/icons-material/Cached';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const Analytics = () => {
    return (
        <Container
            maxWidth='lg'
            style={{
                display: 'flex',
                height: '80vh',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                padding: '10px 0',
                gap: '8px'
            }}
        >

            <Box
                sx={{
                    margin: 0
                }}
            >
                <Box
                    sx={{
                        width: '438px',
                        height: '92px',
                        padding: '12px 24px 32px 24px'
                    }}
                >
                    <Button
                        style={{
                            width: '390px',
                            height: '48px',
                            borderRadius: '6px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0px 16px',
                            backgroundColor: '#3B4744'
                        }}
                    >
                        <Box
                            style={{
                                display: 'flex',
                                justifyItems: 'center',
                                alignItems: 'center',
                                gap: '7px'
                            }}
                        >
                            <PeopleAltIcon
                                sx={{
                                    color: 'white',
                                    width: '20px',
                                    height: '20px'
                                }}
                            />
                            <Typography
                                variant="h4"
                                sx={{
                                    color: "#FFFFFF",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    lineHeight: "14.88px",
                                    textAlign: "center",
                                    textTransform: "none",
                                    width: "100%",
                                }}>
                                No. of visitors
                            </Typography>
                        </Box>
                        <CachedIcon
                            fontSize='medium'
                            sx={{
                                color: '#FFFFFF',
                                width: '24px',
                                height: '24px'
                            }}
                        />

                    </Button>
                </Box>

                <Box
                    sx={{
                        width: '438px',
                        height: '92px',
                        border: '1px 0px 0px 0px',
                        borderTop: '1px solid #EAEAEA',
                        padding: '12px 24px 32px 24px'
                    }}
                >
                    <Button
                        style={{
                            width: '390px',
                            height: '48px',
                            borderRadius: '6px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0px 16px',
                            backgroundColor: '#3B4744'
                        }}
                    >
                        <Box
                            style={{
                                display: 'flex',
                                justifyItems: 'center',
                                alignItems: 'center',
                                gap: '7px'
                            }}
                        >
                            <ShareOutlinedIcon
                                sx={{
                                    color: 'white',
                                    width: '20px',
                                    height: '20px'
                                }}
                            />
                            <Typography
                                variant="h4"
                                sx={{
                                    color: "#FFFFFF",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    lineHeight: "14.88px",
                                    textAlign: "center",
                                    textTransform: "none",
                                    width: "100%",
                                }}>
                                No. of shares
                            </Typography>
                        </Box>
                        <CachedIcon
                            fontSize='medium'
                            sx={{
                                color: '#FFFFFF',
                                width: '24px',
                                height: '24px'
                            }}
                        />

                    </Button>
                </Box>

                <Box
                    sx={{
                        width: '438px',
                        height: '92px',
                        border: '1px 0px 0px 0px',
                        borderTop: '1px solid #EAEAEA',
                        padding: '12px 24px 32px 24px'
                    }}
                >
                    <Button
                        style={{
                            width: '390px',
                            height: '48px',
                            borderRadius: '6px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0px 16px',
                            backgroundColor: '#3B4744'
                        }}
                    >
                        <Box
                            style={{
                                display: 'flex',
                                justifyItems: 'center',
                                alignItems: 'center',
                                gap: '7px'
                            }}
                        >
                            <DescriptionOutlinedIcon
                                sx={{
                                    color: 'white',
                                    width: '20px',
                                    height: '20px'
                                }}
                            />
                            <Typography
                                variant="h4"
                                sx={{
                                    color: "#FFFFFF",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    lineHeight: "14.88px",
                                    textAlign: "center",
                                    textTransform: "none",
                                    width: "100%",
                                }}>
                                No. of invoices
                            </Typography>
                        </Box>
                        <CachedIcon
                            fontSize='medium'
                            sx={{
                                color: '#FFFFFF',
                                width: '24px',
                                height: '24px'
                            }}
                        />

                    </Button>
                </Box>

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#FFE393",
                        ":hover": { backgroundColor: "#ffe8a8" },
                        width: "253px",
                        height: "48px",
                        padding: '0px 16px',
                        top: '20px',
                        left: '22px',
                        borderRadius: '6px'
                    }}
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
                        }}>
                        Download Report
                    </Typography>
                </Button>
            </Box>


            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
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
                            width: "100%",
                        }}>
                        School Name
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default Analytics