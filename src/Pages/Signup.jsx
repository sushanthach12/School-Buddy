import { Container, FormControl, FormHelperText, FormLabel, Input, InputLabel, TextField, Button, Typography } from '@mui/material'
import React from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Signup = () => {
    return (
        <Container
            maxWidth="lg"
            style={{
                height: "80vh",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                gap: '10px'
            }}
        >
            <img
                src='/images/signupSvg.svg'
                style={{ width: "440px", height: "391px" }}
            />


            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px'
                }}
            >
                <FormControl>
                    <FormLabel
                        shrink
                        htmlFor="email"
                        sx={{
                            fontSize: "14px",
                            fontWeight: "500",
                            lineHeight: '17.5px'
                        }}
                    >
                        Email
                    </FormLabel>
                    <TextField
                        id='email'
                        variant='outlined'
                        sx={{
                            fontSize: "16px",
                            fontWeight: '400',
                            marginTop: "3px",
                            borderRadius: "6px",
                            border: '1px',
                            lineHeight: '24px',
                            width: "438px",
                            color: '#363939'
                        }}
                        placeholder='example@gmail.com'
                    />

                </FormControl>

                <FormControl>
                    <FormLabel
                        shrink
                        htmlFor="password"
                        sx={{
                            fontSize: "14px",
                            fontWeight: "500",
                            lineHeight: '17.5px'
                        }}
                    >
                        Password
                    </FormLabel>
                    <TextField
                        id="password"
                        variant='outlined'
                        sx={{
                            fontSize: "16px",
                            fontWeight: '400',
                            marginTop: "3px",
                            borderRadius: "6px",
                            lineHeight: '24px',
                            width: "438px",
                            color: '#363939',

                        }}
                        placeholder='password'
                    />

                </FormControl>

                <FormControl>
                    <FormLabel
                        shrink
                        htmlFor="re-password"
                        sx={{
                            fontSize: "14px",
                            fontWeight: "500",
                            lineHeight: '17.5px'
                        }}
                    >
                        Re-enter your password
                    </FormLabel>
                    <TextField
                        id="re-password"
                        variant='outlined'
                        sx={{
                            fontSize: "16px",
                            fontWeight: '400',
                            marginTop: "3px",
                            borderRadius: "6px",
                            lineHeight: '24px',
                            width: "438px",
                            color: '#363939',

                        }}
                        placeholder='re-enter password'
                    />
                    <FormHelperText
                        sx={{
                            color: '#EA2A2A',
                            fontWeight: '600',
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'center',
                            gap: '5px',
                            margin: 0,
                            padding: '3px 0'
                        }}
                    >
                        <ErrorOutlineIcon
                            sx={{
                                height: '16px',
                                width: '16px',
                            }}
                        />
                        <Typography
                            variant="h4"
                            sx={{
                                color: "#EA2A2A",
                                fontSize: "12px",
                                fontWeight: "500",
                                lineHeight: "15px",
                                width: "100%",
                            }}>
                            password doesn't match
                        </Typography>
                        
                    </FormHelperText>
                </FormControl>

                <FormControl>
                    <FormLabel
                        shrink
                    >
                        <span
                            style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                gap: '5px',
                                color: '#57595A',
                                fontSize: '14px'
                            }}
                        >
                            forgot password
                            <HelpOutlineIcon
                                sx={{
                                    height: '16px',
                                    width: '16px',
                                    color: '#81B5E9'
                                }}
                            />
                        </span>
                    </FormLabel>
                    <Button
                    href='/login'
                        variant="contained"
                        sx={{
                            backgroundColor: "#FFE393",
                            ":hover": { backgroundColor: "#ffe8a8" },
                            width: "253px",
                            height: "48px",
                            padding: '0px 16px',
                            marginTop: '7px',
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
                            Sign Up
                        </Typography>
                    </Button>

                </FormControl>

            </form>
        </Container>
    )
}

export default Signup