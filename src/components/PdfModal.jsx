import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { Container } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { jsPDF } from 'jspdf';
import { pdfTemplate } from '../utils/pdfTemplate';
import easyinvoice from 'easyinvoice';
import { createData } from '../utils/invoice/data';
import { Link } from 'react-router-dom';

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
    borderRadius: '12px',
    p: 4,
};

const PdfModal = ({ data, opeModal, setOpenModal }) => {

    const [pdfData, setPdfData] = useState("")
    const [open, setOpen] = useState(opeModal);

    const pdfRef = useRef()

    const handleClose = () => {
        setOpen(false);
        setOpenModal(false);
    }

    const createPdf = async () => {
        // const doc = new jsPDF('p', 'pt');

        // const pdftemp = pdfTemplate({
        //     invoiceNo: 14800,
        //     school_name: "Manipal",
        //     email: "manipal@gmail.com",
        //     created_date: "Sep 13",
        //     payment_method: "UPI",
        //     address: "Manipal",
        //     tag_name: "Sports Fee",
        //     description: "This is for sports fee"
        // });

        // doc.html(pdftemp, {
        //     callback: (doc) => {
        //         doc.save("invoice.pdf")
        //     },
        //     x: 1,
        //     y: 1,
        // });

        const dataa = createData()
        const result = await easyinvoice.createInvoice(dataa);

        console.log(result.pdf);
        setPdfData(result.pdf);

        setTimeout(() => {
            pdfRef.current.click()
        }, 200);
    }

    return (
        <div>

            <Modal
                open={true}
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
                            padding: '10px'
                        }}
                    >
                        <button onClick={createPdf}>Generate</button>
                        {/* <object type="application/pdf" data={`data:application/pdf;base64,${pdfData}`}>

                            <p>It appears you don't have a PDF plugin for this browser. No biggie... you can <a href="/pdf/sample.pdf">click here to download the PDF file.</a></p>

                        </object> */}
                        <Link to={`data:application/pdf;base64,${pdfData}`} target="_blank" style={{ display: "none" }} ref={pdfRef} />
                    </Box>

                </Container>
            </Modal>
        </div>
    );
}

export default PdfModal;
