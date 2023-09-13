import React, { useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllUserPredefinedQuery, useLazyDeletePredefinedByIdQuery } from '../store/api/predefinedApi';
import { addPredefines, removePredefines } from '../store/slices/predefinedSlice';
import toast from 'react-hot-toast';

function createData(name, description, itemId, deleteId, selectId) {
    return { name, description, itemId, deleteId, selectId };
}

const eles = [
    createData('Query', 'Query', 'itemId', 'deleteId', 'selectId'),
    createData('Query', 'Query', 'itemId', 'deleteId', 'selectId'),
    createData('Query', 'Query', 'itemId', 'deleteId', 'selectId'),
    createData('Query', 'Query', 'itemId', 'deleteId', 'selectId'),
    createData('Query', 'Query', 'itemId', 'deleteId', 'selectId'),
    createData('Query', 'Query', 'itemId', 'deleteId', 'selectId'),
];

const tableHeads = ["Description", "Edit", "Delete", "Select"]


const ViewPredefined = () => {
    const user = useSelector((state) => state.users.user);
    const dispatch = useDispatch()

    const predefined = [] = useSelector(state => state.predefined.predefines)
    const { refetch, isSuccess, isLoading } = useGetAllUserPredefinedQuery({ userId: user._id }, {
        refetchOnMountOrArgChange: true,
    })

    useEffect(()=>{
        refetch()
    }, [])


    const [trigger, result] = useLazyDeletePredefinedByIdQuery();

    const handleDelete = (id) => {
        trigger({ id, userId: user._id });
        dispatch(removePredefines(id));
        setTimeout(()=> {
            refetch("Predefined")
        }, 200);
        toast.success("Deleted", { duration: 1000, position: 'top-center' });
    }

    return (
        <Container
            maxWidth='lg'
            sx={{
                minHeight: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                overflow: {
                    xs: 'scroll',
                    sm: 'scroll',
                    md: 'scroll',
                    lg: 'scroll',
                    xl: 'visible',
                }
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
                    overflow: 'visible',
                    // marginLeft: {
                    //     xs: '0px',
                    // },                    
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

                        {isLoading && "Loading..."}
                        <TableBody >
                            {
                                (predefined.length !== 0 && isSuccess) ? predefined.map((ele) => (
                                    <TableRow
                                        key={ele._id}
                                        sx={{
                                            '&:last-child td, &:last-child th': {
                                                border: 0
                                            },
                                            padding: '8px 24px',
                                        }}
                                    >
                                        <TableCell component="th" scope="ele">
                                            {ele.title}
                                        </TableCell>

                                        <TableCell align="center">{ele.description}</TableCell>

                                        <TableCell align="center">
                                            <Link
                                                // to={`/edit-predefined/${ele.itemId}`}
                                                to={`/edit-predefined/${ele._id}`}
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
                                            <Button type='button' onClick={() => handleDelete(ele._id)} disableElevation disableTouchRipple style={{ backgroundColor: 'white' }}>
                                                <DeleteOutlineIcon
                                                    fontSize='medium'
                                                    style={{
                                                        width: '24px',
                                                        height: '24px',
                                                        color: '#B20000',
                                                        cursor: 'pointer'
                                                    }}
                                                />
                                            </Button>
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
                                )) :
                                    <TableRow
                                        sx={{
                                            padding: '8px 24px',
                                            textAlign: 'center'
                                        }}
                                        
                                    >
                                        <TableCell align="center" colSpan={5} style={{fontStyle: 'italic'}}>No Predefines...</TableCell>
                                    </TableRow>
                            }
                        </TableBody>

                    </Table>
                </TableContainer>


                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#FFE393",
                        ":hover": { backgroundColor: "#ffe8a8" },
                        width: {
                            xs: "40%",
                        },
                        height: "48px",
                        padding: '0px 16px',
                        borderRadius: '6px',
                        marginTop: '5px',
                        marginLeft: {
                            xs: '200px',
                            sm: '200px',
                            md: '200px',
                            lg: '200px',
                            xl: '200px',
                        },
                    }}
                    disableElevation
                    disa
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