import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import { Button, Container, Typography } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useGetAllInvoicesByUserIdQuery, useGetInvoiceUploadsQuery } from "../store/api/invoiceApi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const InvoiceHistory = () => {

	const pdfOpenRef = useRef();

	const user = useSelector(state => state.users.user);
	const [pdfData, setPdfData] = useState("")

	const { data = [], isSuccess, isLoading, isError } = useGetAllInvoicesByUserIdQuery(user._id, {
		refetchOnMountOrArgChange: true
	});

	const { data: invoiceUploads = [], isSuccess: success, isLoading: loading } = useGetInvoiceUploadsQuery(user._id, {
		refetchOnMountOrArgChange: true
	});
	


	const fetchpdf = async ({invoiceId}) => {
		
		const pdfValue = invoiceUploads.filter(item => item.invoice_id === invoiceId);
		setPdfData(`${pdfValue[0].data}`);

		setTimeout(() => {
			pdfOpenRef.current.click()
		}, 200)
	}

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
					<p style={{ fontStyle: 'italic', fontWeight: 'bold', color: 'red', fontSize: '1.5rem' }}>Something Went Wrong! try again</p>
				</div>
			</>
		)
	}


	if (data.length === 0 && isSuccess) {
		return (
			<>
				<div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', width: "100vw", height: "80vh", gap: '5px' }}>
					<p style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '1.5rem' }}>No Invoice found!</p>
				</div>
			</>
		)
	}

	return (
		<Container maxWidth="lg" sx={{
			display: 'flex',
			flexWrap: 'wrap',
			gap: '15px',
			justifyContent: 'center',
			alignItems: 'center',
			padding: '3rem 0',
			flexGrow: 'initial'
		}}>
			<Link to={`data:application/pdf;base64,${pdfData}`} target="_blank" style={{ display: "none" }} ref={pdfOpenRef} />
			{
				data?.map((ele) => (
					<Box
						key={ele._id}
						sx={{
							width: "349px",
							height: "355px",
							marginRight: {
								xs: "0px",
								sm: "0px",
								md: "20px",
								lg: "20px",
								xl: "20px",
							},
							marginBottom: {
								xs: "20px",
								sm: "20px",
								md: "0px",
								lg: "0px",
								xl: "0px",
							},
						}}
					>
						<Box
							// varient = "div"
							sx={{
								width: "349px",
								height: "193px",
								borderRadius: "10px",
							}}
						>
							<img
								style={{
									borderRadius: "10px 10px 0px 0px",
								}}
								src="/images/media.svg"
								alt=""
							/>
						</Box>
						<Box
							// varient = "div"
							sx={{
								width: "349px",
								height: "162px",
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-around',
								alignItems: 'center',
								backgroundColor: "#1F2223",
								borderRadius: "0px 0px 10px 10px",
							}}
						>
							<Box
								// varient = "div"
								sx={{
									width: "317px",
									height: "50px",
									marginLeft: "16px",
								}}
							>
								<Typography
									varient="h3"
									sx={{
										weight: "600",
										fontSize: "24px",
										lineHeight: "30px",
										color: "#FFFFFF",
										height: "30px",
										width: "300px",
										fontFamily: "Lora",
									}}
								>
									Invoice #{ele.invoiceNo}
								</Typography>
								<Typography
									varient="h3"
									sx={{
										weight: "400",
										fontSize: "14px",
										lineHeight: "20px",
										color: "#FFFFFF",
										height: "20px",
										width: "300px",
									}}
								>
									{new Date(ele.invoiceDate).toLocaleString("en", { dateStyle: "medium", timeStyle: 'short' })}
								</Typography>
							</Box>

							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-around',
									alignItems: 'center',
									width: '100%'
								}}
							>
								<Button
									sx={{
										backgroundColor: "#FFE393",
										":hover": { backgroundColor: "#ffe8a8" },
										width: '140px',
										height: "48px",
										padding: '0px 16px',
										borderRadius: '6px',
										textTransform: 'none'
									}}
									disableElevation
									onClick={() => fetchpdf({invoiceId: ele._id})}
								>
									<Typography
										sx={{
											weight: "600",
											fontSize: "18px",
											lineHeight: "22.5px",
											color: "#162320",
											fontFamily: 'Lora',
											textAlign: 'center'
										}}
									>
										View
									</Typography>
									<VisibilityOutlinedIcon
										sx={{
											color: "#162320",
											marginLeft: "4px",
											width: "24px",
											height: "24px",
										}}
									/>
								</Button>

								<Button
									sx={{
										backgroundColor: "#FFE393",
										":hover": { backgroundColor: "#ffe8a8" },
										width: '140px',
										height: "48px",
										padding: '0px 16px',
										borderRadius: '6px',
										textTransform: 'none'
									}}
									disableElevation
									disableTouchRipple
									onClick={() => fetchpdf({invoiceId: ele._id})}
								>
									<Typography
										sx={{
											weight: "600",
											fontSize: "18px",
											lineHeight: "22.5px",
											color: "#162320",
											fontFamily: 'Lora',
											textAlign: 'center'
										}}
									>
										Download
									</Typography>
									<FileDownloadOutlinedIcon
										sx={{
											color: "#162320",
											marginLeft: "4px",
											width: "24px",
											height: "24px",
										}}
									/>
								</Button>
							</Box>
						</Box>
					</Box>
				))
			}

		</Container>
	);
};

export default InvoiceHistory;
