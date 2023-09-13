import { AppBar, Box, Button, Container, Table, TableBody, TableCell, TableRow, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useGetDetailsQuery } from '../../store/api/detailApi'
import DownloadIcon from '@mui/icons-material/Download';

const Profile = () => {
    const { id } = useParams();

    const { data = {}, isSuccess, isLoading, isError } = useGetDetailsQuery(id);


    if (isLoading) {
        return (
            <>
                <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', width: "100vw", height: "80vh", gap: '5px' }}>
                    <p style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '1.5rem' }}>Loading...</p>
                </div>
            </>
        )
    }

    if (isError) {
        return (
            <>
                <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', width: "100vw", height: "80vh", gap: '5px' }}>
                    <p style={{ fontStyle: 'italic', fontWeight: 'bold', color: 'red', fontSize: '1.5rem' }}>404: Not found </p>
                    <p style={{ fontStyle: 'italic', fontWeight: 'bold', color: 'red', fontSize: '1.5rem' }}>Invalid Url</p>
                </div>
            </>
        )
    }


    return (
        <div style={{minHeight: '100vh'}}>
            <Box
                sx={{
                    display: "flex",
                }}
            >
                <AppBar
                    position="static"
                    sx={{
                        borderShadow: "none",
                        boxShadow: "none",
                        width: '100%'
                    }}
                >
                    <Toolbar
                        sx={{
                            backgroundColor: "#FAFAFA",
                            height: "108px",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "30px 57px 30px 57px",
                        }}
                    >

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                flexGrow: 1,
                                justifyContent: "center",
                                fontSize: "40px",
                                lineHeight: '50px',
                                fontWeight: '600'
                            }}
                        >
                            <span style={{ color: "#1F2223", fontFamily: 'Lora' }}>
                                Profile
                            </span>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box >

            <Container
                maxWidth='lg'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '3rem'
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
                        fill="true"
                        src={data?.Detail?.pic || '/images/profile.svg'}
                        alt='profile'
                        style={{
                            width: "248px",
                            height: "248px",
                            borderRadius: '50%',
                            border: data?.Detail?.pic && '4px solid #F9D262'
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
                        {data?.Detail.school_name}
                    </Typography>
                </Box>

                {/* <Typography
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
                </Typography> */}

                <Table sx={{ minWidth: 150 }} aria-label="simple table" style={{ width: "35%" }}>
                    <TableBody>
                        <TableRow>
                            <TableCell component="td" scope="column" >
                                <Typography
                                    variant="h1"
                                    sx={{
                                        color: "#363939",
                                        fontSize: "1.3rem",
                                        fontWeight: "600",
                                        lineHeight: "50px",
                                        textAlign: "center",
                                        textTransform: "none",
                                        fontFamily: 'Lora'
                                    }}>
                                    Phone :
                                </Typography>
                            </TableCell>
                            <TableCell component='td' scope="column">
                                <Typography
                                    variant="h1"
                                    sx={{
                                        color: "#363939",
                                        fontSize: "1.3rem",
                                        fontWeight: "600",
                                        lineHeight: "50px",
                                        textAlign: "center",
                                        textTransform: "none",
                                        fontFamily: 'Lora'
                                    }}>
                                    {data?.Detail?.phone}
                                </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="td" scope="column">
                                <Typography
                                    variant="h1"
                                    sx={{
                                        color: "#363939",
                                        fontSize: "1.3rem",
                                        fontWeight: "600",
                                        lineHeight: "50px",
                                        textAlign: "center",
                                        textTransform: "none",
                                        fontFamily: 'Lora'
                                    }}>
                                    Google Map Link :
                                </Typography>
                            </TableCell>
                            <TableCell component='td' scope="column">
                                <Link to={data?.Detail?.map_link} target='_blank'>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#fafafa",
                                            ":hover": { backgroundColor: "#f0f0f0" },
                                            height: "40px",
                                            padding: '0px 16px',
                                            borderRadius: '6px',
                                            marginLeft: '20px'
                                        }}
                                        disableElevation
                                    >
                                        <img
                                            fill="true"
                                            src='/images/gmap.svg'
                                            alt='gmap'
                                            style={{
                                                height: '25px',
                                                width: '25px'
                                            }}
                                        />
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
                                                fontFamily: 'Lora'
                                            }}>
                                            gmap
                                        </Typography>
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="td" scope="column">
                                <Typography
                                    variant="h1"
                                    sx={{
                                        color: "#363939",
                                        fontSize: "1.3rem",
                                        fontWeight: "600",
                                        lineHeight: "50px",
                                        textAlign: "center",
                                        textTransform: "none",
                                        fontFamily: 'Lora'
                                    }}>
                                    Other Link :
                                </Typography>
                            </TableCell>
                            <TableCell component='td' scope="column">
                                <Link to={data?.Detail?.other_link} target='_blank'>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#fafafa",
                                            ":hover": { backgroundColor: "#f0f0f0" },
                                            height: "40px",
                                            padding: '0px 16px',
                                            borderRadius: '6px',
                                            marginLeft: '20px'
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
                                                fontFamily: 'Lora'
                                            }}>
                                            link
                                        </Typography>
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="td" scope="column">
                                <Typography
                                    variant="h1"
                                    sx={{
                                        color: "#363939",
                                        fontSize: "1.3rem",
                                        fontWeight: "600",
                                        lineHeight: "50px",
                                        textAlign: "center",
                                        textTransform: "none",
                                        fontFamily: 'Lora'
                                    }}>
                                    Brochure :
                                </Typography>
                            </TableCell>
                            <TableCell component='td' scope="column">
                                <Link to={data?.Detail?.brochure_link} download="brochure.pdf" target='_blank'>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#fafafa",
                                            ":hover": { backgroundColor: "#f0f0f0" },
                                            height: "40px",
                                            padding: '0px 16px',
                                            borderRadius: '6px',
                                            marginLeft: '20px'
                                        }}
                                        disableElevation
                                    >
                                        <DownloadIcon style={{ color: 'gray' }} />
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
                                                fontFamily: 'Lora',
                                                marginLeft: '2px'
                                            }}>
                                            download
                                        </Typography>
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>

                {/* <Button
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
                </Button> */}

            </Container>
        </div>
    )
}

export default Profile