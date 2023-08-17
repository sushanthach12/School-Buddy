import React from 'react'
import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Link } from 'react-router-dom';

function createData(name, description, itemId, deleteId, selectId) {
    return { name, description, itemId, deleteId, selectId };
}

const rows = [
    createData('Query', 'Query', 'itemId', 'deleteId', 'selectId'),
    createData('Query', 'Query', 'itemId', 'deleteId', 'selectId'),
    createData('Query', 'Query', 'itemId', 'deleteId', 'selectId'),
    createData('Query', 'Query', 'itemId', 'deleteId', 'selectId'),
    createData('Query', 'Query', 'itemId', 'deleteId', 'selectId'),
    createData('Query', 'Query', 'itemId', 'deleteId', 'selectId'),
];

const tableHeads = ["Description", "Edit", "Delete", "Select"]


const ViewPredefined = () => {
    return (
        <Container
            maxWidth='lg'
            style={{
                minHeight: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px'
            }}
        >
            <Box
                style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    gap: '8px',
                    padding: '16px 0',
                }}
            >

                <TableContainer
                    component={Paper}
                    sx={{
                        boxShadow: 0,
                    }}
                >
                    <Table
                        sx={{
                            minWidth: 740
                        }}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        lineHeight: '17.4px'
                                    }}
                                >
                                    Name
                                </TableCell>
                                {
                                    tableHeads.map(head => (
                                        <TableCell
                                            key={head}
                                            align='center'
                                            sx={{
                                                fontSize: '14px',
                                                fontWeight: '600',
                                                lineHeight: '17.4px'
                                            }}
                                        >
                                            {head}
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0
                                        },
                                        padding: '8px 24px',
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>

                                    <TableCell align="center">{row.description}</TableCell>

                                    <TableCell align="center">
                                        <Link
                                            // to={`/edit-predefined/${row.itemId}`}
                                            to={`/edit-predefined`}
                                        >
                                            <BorderColorIcon
                                                fontSize='medium'
                                                style={{
                                                    width: '24px',
                                                    height: '24px',
                                                    color: '#1F2223',
                                                    cursor: 'pointer'
                                                }}
                                            />
                                        </Link>
                                    </TableCell>

                                    <TableCell align="center">
                                        <DeleteOutlineIcon
                                            fontSize='medium'
                                            style={{
                                                width: '24px',
                                                height: '24px',
                                                color: '#1F2223',
                                                cursor: 'pointer'
                                            }}
                                        />
                                    </TableCell>

                                    <TableCell align="center">
                                        <Button
                                            variant="outlined"
                                            size='small'
                                            sx={{
                                                backgroundColor: "inherit",
                                                ':hover': {
                                                    backgroundColor: 'inherit',
                                                    borderColor: '#363939'
                                                },
                                                border: '1px solid #363939',
                                                width: "44px",
                                                height: "36px",
                                                padding: '0px 8px',
                                                borderRadius: '4px'
                                            }}
                                            disableElevation
                                        >
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    color: "#363939",
                                                    fontSize: "14px",
                                                    fontWeight: "500",
                                                    lineHeight: "17.5px",
                                                    textAlign: "center",
                                                    cursor: "pointer",
                                                    textTransform: "none",
                                                }}>
                                                Add
                                            </Typography>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#FFE393",
                        ":hover": { backgroundColor: "#ffe8a8" },
                        width: "253px",
                        height: "48px",
                        padding: '0px 16px',
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
                            fontFamily: 'Lora'
                        }}>
                        Update
                    </Typography>
                </Button>
            </Box>
        </Container >
    )
}

export default ViewPredefined