import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Input,
    Typography
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import ClearIcon from "@mui/icons-material/Clear";
import { useEditPredefinedMutation, useGetPredefinedQuery, useLazyGetPredefinedQuery } from '../store/api/predefinedApi';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';


const EditPredefined = () => {

    const { id } = useParams();

    const user = useSelector((state) => state.users.user)
    const predefines = useSelector((state) => state.predefined.predefines)

    useEffect(() => {
        const item = predefines.find((item) => item._id === id)
        setFormField({title: item.title, description: item.description})
    }, [predefines, id])

    const [editPredefined] = useEditPredefinedMutation()

    const [formField, setFormField] = useState({
        title: "",
        description: ""
    })
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormField({ ...formField, [e.target.name]: e.target.value })
    }


    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            setLoading(true);
            const data = await editPredefined({body: {userId: user._id, ...formField}, id}).unwrap()
			toast.success("Updated Successfully!", { duration: 1000, position: 'top-center' })
            
        } catch (error) {
            toast.error("Something Went Wrong!", { duration: 1000, position: 'top-center' })
        } finally {
            setLoading(false)
        }

    }


    return (
        <Container
            maxWidth='lg'
            style={{
                display: 'flex',
                height: '80vh',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px 0',
                gap: '8px',
            }}
        >
            <Box>
                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '30px'
                    }}
                >
                    <FormControl>
                        <FormLabel
                            shrink="true"
                            htmlFor="title"
                            style={{
                                fontSize: "14px",
                                fontWeight: '500',
                                lineHeight: '17.5px',
                                color: '#57595A',
                                marginBottom: '4px'
                            }}
                        >
                            Title
                        </FormLabel>
                        <Box
                            sx={{
                                border: "1px solid #D2D3D3",
                                borderRadius: "6px",
                                width: "533px",
                                height: "48px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: '11px 12px',
                                gap: '4px'
                            }}
                        >
                            <Input
                                disableUnderline
                                id="title"
                                placeholder="title"
                                sx={{
                                    width: "485px",
                                    height: "24px",
                                    lineHeight: '24px',
                                    fontSize: "16px",
                                    fontWeight: '400'
                                }}
                                name='title'
                                value={formField.title}
                                onChange={handleChange}
                            />
                            <Box>
                                <ClearIcon
                                    sx={{
                                        color: "#B1B2B2",
                                        height: "20px",
                                        width: "20px",
                                        cursor: "pointer",
                                    }}
                                />
                            </Box>
                        </Box>

                    </FormControl>

                    <FormControl>
                        <FormLabel
                            shrink="true"
                            htmlFor="description"
                            style={{
                                fontSize: "14px",
                                fontWeight: '500',
                                lineHeight: '17.5px',
                                color: '#57595A',
                                marginBottom: '4px'
                            }}
                        >
                            Description
                        </FormLabel>
                        <Box
                            sx={{
                                border: "1px solid #D2D3D3",
                                borderRadius: "6px",
                                width: "718px",
                                height: "133px",
                                display: "flex",
                                justifyContent: 'space-between',
                                alignItems: "start",
                                padding: '11px 12px',
                                gap: '4px'
                            }}
                        >
                            <Input
                                disableUnderline
                                placeholder="description"
                                id="description"
                                sx={{
                                    width: "485px",
                                    height: "24px",
                                    lineHeight: '24px',
                                    fontSize: "16px",
                                    fontWeight: '400'
                                }}
                                name='description'
                                value={formField.description}
                                onChange={handleChange}
                            />
                            <Box>
                                <ClearIcon
                                    sx={{
                                        color: "#B1B2B2",
                                        height: "20px",
                                        width: "20px",
                                        cursor: "pointer",
                                    }}
                                />
                            </Box>
                        </Box>

                    </FormControl>


                    <Button
                        type='submit'
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
                        disabled={loading}
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

                </form>
            </Box>
        </Container >
    )
}

export default EditPredefined