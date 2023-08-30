import React from 'react'
import CustomizableButton from '../components/CustomizableButton'
import AuthBox from '../components/AuthBox';
import { Container, Typography } from "@mui/material";

const LoginScreen = () => {
    return (
        <>
            <Container
                maxWidth='lg'
                sx={{
                    display: 'flex',
                    height: '100vh',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <div
                    style={{
                        marginBottom: '10px',
                        top: "200px",
                        left: "427px",
                    }}
                >
                    <img src="/images/loginSvg.svg" alt="Group-1" border="0" style={{ width: '346px', height: '345px' }} />
                </div>
                <Typography
                    variant="h1"
                    sx={{
                        color: "#363939",
                        fontSize: "40px",
                        fontWeight: "600",
                        lineHeight: "50px",
                        fontFamily: "Lora",
                        width: {
                            xs: "auto",
                            sm: "auto",
                            md: "100%",
                            lg: "100%",
                            xl: "100%",
                        },
                        height: "50px",
                        textAlign: "center",
                        marginBottom: '10px'
                    }}
                >
                    School Buddy
                </Typography>
                <Typography
                    sx={{
                        color: "#363939",
                        fontSize: "24px",
                        fontWeight: "400",
                        lineHeight: "30px",
                        fontFamily: "Lora",
                        top: "596px",
                        marginTop: "20px",
                        marginBottom: "20px",
                        textAlign: "center",
                    }}
                >
                    Few steps to begin!!

                </Typography>
                <CustomizableButton link="/login" label={"Log In"} />
            </Container>
        </>
    )
}

export default LoginScreen