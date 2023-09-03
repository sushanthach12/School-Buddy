import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Profile = () => {

    const user = useSelector((state) => state.users.user)

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
                    src={user?.profile_img || '/images/profile.svg'}
                    alt='profile'
                    style={{
                        width: '284px',
                        height: '284px',
                        borderRadius: '50%',
                        border: user?.profile_img && '4px solid #F9D262'
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
                        fontFamily: 'Lora'
                    }}>
                    {user?.name || "School Name"}
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
                    fontFamily: 'Lora'
                }}>
                HSR Layout, Bangalore
            </Typography>

            <Link to={"/template"}>
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
                            fontFamily: 'Lora'
                        }}>
                        Edit Profile
                    </Typography>
                </Button>
            </Link>

        </Container>
    )
}

export default Profile