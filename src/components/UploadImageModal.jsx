import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { Container } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const style = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '740px',
    height: '480px',
    bgcolor: '#FEF7FF',
    boxShadow: 24,
    p: 4,
};

const UploadImageModal = ({ openModalOrNot, setOpenModalOrNot, fileRef }) => {
    const handleClose = () => setOpenModalOrNot(!openModalOrNot);

    return (
        <div>
            <Modal
                open={openModalOrNot}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container sx={style}>
                    <Button
                        disableElevation
                        disableTouchRipple
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            margin: '7px 7px 0 0',
                            backgroundColor: 'inherit'
                        }}
                        onClick={handleClose}
                    >
                        <CloseOutlinedIcon
                            style={{
                                width: '48px',
                                height: '48px',
                                cursor: 'pointer',
                                color: '#1F2223'
                            }}
                        />
                    </Button>
                    <Box
                        style={{
                            width: '148px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <DriveFolderUploadOutlinedIcon
                            fontSize='inherit'
                            style={{
                                width: "123.33px",
                                height: '98.67px',
                                color: '#1C1B1F'
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            textAlign: 'center',
                            mt: 2
                        }}
                    >
                        <Typography id="modal-modal-title" variant='h2' sx={{ fontWeight: 600, fontSize: '24px', lineHeight: '30px', color: '#363939' }}>
                            Select a picture file to upload
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                            JPEG/IMG/SVG
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                            max limit 10 MB
                        </Typography>

                        <Button
                            disableElevation
                            disableTouchRipple
                            style={{
                                margin: '10px 0',
                                width: '277px',
                                height: '48px',
                                padding: '0px 16px',
                                gap: '8px',
                                borderRadius: '6px',
                                backgroundColor: '#FFE393'
                            }}
                            onClick={() => fileRef.current.click()}
                        >
                            <Typography
                                variant="h4"
                                style={{
                                    color: "#363939",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    lineHeight: "20px",
                                    textAlign: "center",
                                    cursor: "pointer",
                                    textTransform: "none",
                                    width: "100%",
                                    fontFamily: "Lora",
                                }}>
                                Select
                            </Typography>
                        </Button>
                    </Box>
                </Container>
            </Modal>
        </div>
    );
}

export default UploadImageModal;
