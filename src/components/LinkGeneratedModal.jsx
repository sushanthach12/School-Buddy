import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { Container } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DoneIcon from '@mui/icons-material/Done';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShareIcon from '@mui/icons-material/Share';
import { toast } from 'react-hot-toast';

const style = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '360px',
    height: '480px',
    bgcolor: '#FEF7FF',
    boxShadow: 24,
    borderRadius: '12px',
    padding: 0
};

const LinkGeneratedModal = ({ openModalOrNot, setOpenModalOrNot, link }) => {
    const handleClose = () => setOpenModalOrNot(!openModalOrNot);

    const handleCopy = async() => {
        await navigator.clipboard.writeText(link)
        toast.success("Link Copied to clipboard", { duration: 1000, position: 'top-center'})
    }

    return (
        <div>
            <Modal
                open={openModalOrNot}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableAutoFocus
                disableRestoreFocus
            >
                <Container sx={style} maxWidth='xl' xs='12' disableGutters={true}>
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
                            width: '160px',
                            height: '160px',
                            borderRadius: '50px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#48C300'
                        }}
                    >
                        <DoneIcon
                            fontSize='inherit'
                            style={{
                                width: "88.26px",
                                height: '69.32px',
                                color: 'white',
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
                            Link Generated successfully
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                            Copy and share the links
                        </Typography>

                        <Box
                            style={{
                                margin: '8px 0',
                                width: 'inherit',
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                alignItems: 'center'
                            }}
                        >
                            <Button
                                disableElevation
                                disableTouchRipple
                                onClick={handleCopy}
                                style={{
                                    backgroundColor: 'inherit'
                                }}
                            >

                                <ContentCopyIcon
                                    fontSize='inherit'
                                    style={{
                                        width: "48px",
                                        height: '48px',
                                        color: '#1C1B1F',
                                    }}
                                />
                            </Button>
                            <ShareIcon
                                fontSize='inherit'
                                style={{
                                    width: "48px",
                                    height: '48px',
                                    color: '#1C1B1F',
                                }}
                            />
                        </Box>

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
                            onClick={handleClose}
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
                                Great
                            </Typography>
                        </Button>
                    </Box>
                </Container>
            </Modal>
        </div>
    );
}

export default LinkGeneratedModal;
