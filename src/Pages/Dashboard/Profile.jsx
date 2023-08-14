import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

const Profile = () => {
    return (
        <Container
            maxWidth='lg'
            style={{
                display: 'flex',
                height: '80vh',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '10px 0',
                gap: '8px'
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
                    width: '696px',
                    height: '50px',
                    gap: '12px'
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

            <Typography
                variant="h1"
                sx={{
                    color: "#363931",
                    fontSize: "24px",
                    fontWeight: "600",
                    lineHeight: "30px",
                    textAlign: "center",
                    textTransform: "none",
                    width: "100%",
                }}>
                HSR Layout, Bangalore
            </Typography>

            <Button
                variant="contained"
                sx={{
                    backgroundColor: "#FFE393",
                    ":hover": { backgroundColor: "#ffe8a8" },
                    width: "531px",
                    height: "48px",
                    padding: '0px 16px',
                    borderRadius: '6px',
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
                    Edit Profile
                </Typography>
            </Button>

        </Container>
    )
}

export default Profile