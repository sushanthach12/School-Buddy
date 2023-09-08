import React, { useState } from "react";
import AddLinkIcon from "@mui/icons-material/AddLink";
import Input from "@mui/material/Input";
import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { useSelector } from "react-redux";
import { useGetAllUserPredefinedQuery } from "../store/api/predefinedApi";
import { useLazyGetTemplateByTaglineQuery } from "../store/api/templateApi";

const InvoiceCreate = () => {

	const [tagSelected, setTagSelected] = useState('');

	const user = useSelector((state) => state.users.user)
	const predefined = useSelector((state) => state.predefined.predefines);
	const { } = useGetAllUserPredefinedQuery({ userId: user._id }, { refetchOnMountOrArgChange: true, skip: false });

	const [details, setDetails] = useState({})

	const [trigger, result] = useLazyGetTemplateByTaglineQuery();

	const handleChange = (e) => {
		setTagSelected(e.target.value)
		trigger({ tagId: e.target.value })
	}

	const handleDetails = (e) => {
		setDetails({ ...details, [e.target.name]: e.target.value })
	}

	return (
		<Box
			variant="div"
			sx={{
				display: "flex",
				justifyContent: 'space-evenly',
				alignItems: "center",
				flexDirection: "column",
				marginTop: "50px",
				marginBottom: "50px",
			}}
		>
			<Box
				style={{
					width: '282px',
					height: '56px',
					margin: '10px 0'
				}}
			>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Predefined</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={tagSelected}
						label="Predefined"
						onChange={handleChange}
					>
						{predefined.map((ele) => (
							<MenuItem key={ele._id} value={ele._id}>{ele.title}</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>

			{result?.isUninitialized && "Select a predefined"}
			{result?.isLoading && "Loading..."}
			{result?.isError && "Something went wrong! try again..."}
			{result?.data?.length === 0 && "No Templates Found"}
			{result?.data?.length !== 0 && result?.isSuccess &&
				<Box>
					<Box style={{ marginTop: '8px' }}>
						<Box
							sx={{
								alignContent: "center",
								width: "533px",
								// display:'flex',
								// justifyContent:'center',
								// alignItems:'center',
							}}
						>
							<Typography
								sx={{
									width: "430px",
									fontSize: "18px",
									lineHeight: "24px",
									fontColor: "#363931",
									fontWeight: "400",
									fontFamily: "Inter"
								}}
							>
								#Pre filled data from template
							</Typography>
							<Typography
								variant="h3"
								sx={{
									width: "430px",
									fontSize: "24px",
									fontWeight: "600",
									lineHeight: "30px",
									fontColor: "#363931",
									fontFamily: "Lora"
								}}
							>
								{result.data[0].schoolName}
							</Typography>
							<Typography
								sx={{
									marginTop: "10px",
									width: "430px",
									fontSize: "14px",
									lineHeight: "21px",
									fontWeight: "400",
									fontColor: "#363931",
									fontFamily: "Inter"
								}}
							>
								{result.data[0].address[0]},
							</Typography>
							<Typography
								sx={{
									marginTop: "10px",
									width: "430px",
									fontSize: "14px",
									lineHeight: "21px",
									fontWeight: "400",
									fontColor: "#363931",
									fontFamily: "Inter"
								}}
							>
								Udupi, Karnataka 576103
							</Typography>
							<Typography
								sx={{
									marginTop: "10px",
									width: "430px",
									fontSize: "14px",
									lineHeight: "21px",
									fontWeight: "400",
									fontColor: "#363931",
									fontFamily: "Inter"
								}}
							>

								{result.data[0].emailId}
							</Typography>
							<Typography
								sx={{
									marginTop: "10px",
									width: "430px",
									fontSize: "14px",
									lineHeight: "21px",
									fontWeight: "400",
									fontColor: "#363931",
									fontFamily: "Inter"
								}}
							>
								{result.data[0].phoneNo.map((value) => (value))}
							</Typography>
							<Typography
								sx={{
									marginTop: "10px",
									width: "430px",
									fontSize: "14px",
									lineHeight: "21px",
									fontWeight: "400",
									fontColor: "#363931",
									fontFamily: "Inter"
								}}
							>
								GST Number : {result.data[0].schoolName}
							</Typography>

							<Typography
								sx={{
									marginTop: "50px",
									marginBottom: "20px",
									width: "430px",
									fontSize: "18px",
									lineHeight: "24px",
									fontColor: "#363931",
									fontWeight: "400",
									fontFamily: "Inter"
								}}
							>
								#Pre filled data from template
							</Typography>
						</Box>
						<Box
							variant="div"
							sx={{
								marginBottom: "10px",
								width: "533px",
							}}
						>

							<Box
								variant="div"
								sx={{
									alignContent: "center",
									marginTop: "20px",
									// border: "1px 0px 0px 0px",
									// borderTop: "1px solid #EAEAEA",
									paddingTop: "20px",
								}}
							>
								<Typography
									sx={{
										width: "438px",
										height: "18px",
										fontSize: "14px",
										fontWeight: "500",
										lineHeight: "17.5px",
										fontFamily: "Inter",
										color: "#57595A",
									}}
								>
									Name
								</Typography>
								<Box
									sx={{
										border: "2px solid #D2D3D3",
										borderRadius: "6px",
										width: "533px",
										height: "48px",
										display: "flex",
										justifyContent: 'space-evenly',
										alignItems: 'center',
										// paddingTop: "4px",
										padding: "8px",
										//   ":hover": {border: "2px solid "},
										//   transition:'all 0.2s ease-in-out',
										//   ":hover":{borderColor:"#8E9090"},
									}}
								>
									<Box
										sx={
											{
												// marginLeft: '5px',
												// Padding: '8px'
											}
										}
									>
										<DescriptionOutlinedIcon
											sx={{
												color: "#B1B2B2",
												margin: '0 5px'
											}}
										/>
									</Box>
									<Input
										disableUnderline
										placeholder="Placeholder"
										sx={{
											width: "490px",
											height: "24px",
											fontSize: "16px",
											marginRight: "15px",
											padding: "0 3px",
											color: 'black'
										}}
										value={result.data[0].schoolName}
									/>
									<Box>
										<ClearIcon
											sx={{
												color: "#B1B2B2",
												marginLeft: "10px",
												height: "20px",
												width: "20px",
												cursor: "pointer",
											}}
										/>
									</Box>
								</Box>
							</Box>

							{/* fourth */}

							<Box
								variant="div"
								sx={{
									alignContent: "center",
									marginTop: "15px",
									// border: "1px 0px 0px 0px",
									// borderTop: "1px solid #EAEAEA",
									paddingTop: "20px",
								}}
							>
								<Typography
									sx={{
										width: "438px",
										height: "18px",
										fontSize: "14px",
										fontWeight: "500",
										lineHeight: "17.5px",
										fontFamily: "Inter",
										color: "#57595A",
									}}
								>
									Email
								</Typography>
								<Box
									sx={{
										border: "2px solid #D2D3D3",
										borderRadius: "6px",
										width: "533px",
										height: "48px",
										display: "flex",
										justifyContent: 'space-evenly',
										alignItems: 'center',
										// paddingTop: "4px",
										padding: "8px",
										//   ":hover": {border: "2px solid "},
										//   transition:'all 0.2s ease-in-out',
										//   ":hover":{borderColor:"#8E9090"},
									}}
								>
									<Box
										sx={
											{
												// marginLeft: '5px',
												// Padding: '8px'
											}
										}
									>
										<DescriptionOutlinedIcon
											sx={{
												color: "#B1B2B2",
												// marginTop: "8px",
												// marginRight: '5px'
												margin: "0 5px",
												padding: "0px",
											}}
										/>
									</Box>
									<Input
										disableUnderline
										placeholder="Placeholder"
										sx={{
											width: "490px",
											height: "24px",
											// marginTop: "8px",
											fontSize: "16px",
											color: "black",
											marginRight: "15px",
											padding: "0 3px",
										}}
										value={result.data[0].emailId}
									/>
									<Box>
										<ClearIcon
											sx={{
												color: "#B1B2B2",
												marginLeft: "10px",
												height: "20px",
												width: "20px",
												cursor: "pointer",
											}}
										/>
									</Box>
								</Box>
							</Box>

							{/* fifth */}
							<Box
								variant="div"
								sx={{
									alignContent: "center",
									marginTop: "15px",
									// border: "1px 0px 0px 0px",
									// borderTop: "1px solid #EAEAEA",
									paddingTop: "15px",
								}}
							>
								<Typography
									sx={{
										width: "438px",
										height: "18px",
										fontSize: "14px",
										fontWeight: "500",
										lineHeight: "17.5px",
										fontFamily: "Inter",
										color: "#57595A",
									}}
								>
									Address
								</Typography>
								<Box
									sx={{
										border: "2px solid #D2D3D3",
										borderRadius: "6px",
										width: "533px",
										height: "48px",
										display: "flex",
										justifyContent: 'space-evenly',
										alignItems: 'center',
										// paddingTop: "4px",
										padding: "8px",
										//   ":hover": {border: "2px solid "},
										//   transition:'all 0.2s ease-in-out',
										//   ":hover":{borderColor:"#8E9090"},
									}}
								>
									<Box
										sx={
											{
												// marginLeft: '5px',
												// Padding: '8px'
											}
										}
									>
										<DescriptionOutlinedIcon
											sx={{
												color: "#B1B2B2",
												// marginTop: "8px",
												// marginRight: '5px'
												margin: "0 5px",
												padding: "0px",
											}}
										/>
									</Box>
									<Input
										disableUnderline
										placeholder="Placeholder"
										sx={{
											width: "490px",
											height: "24px",
											// marginTop: "8px",
											fontSize: "16px",
											color: "black",
											padding: "3px",
										}}
										value={result.data[0].address[0]}
									/>
									<Box>
										<ClearIcon
											sx={{
												color: "#B1B2B2",
												marginLeft: "10px",
												height: "20px",
												width: "20px",
												cursor: "pointer",
											}}
										/>
									</Box>
								</Box>
							</Box>

							<Box
								variant="div"
								sx={{
									alignContent: "center",
									marginTop: "15px",
									// border: "1px 0px 0px 0px",
									// borderTop: "1px solid #EAEAEA",
									paddingTop: "15px",
								}}
							>
								<Typography
									sx={{
										width: "438px",
										height: "18px",
										fontSize: "14px",
										fontWeight: "500",
										lineHeight: "17.5px",
										fontFamily: "Inter",
										color: "#57595A",
									}}
								>
									State/City
								</Typography>
								<Box
									sx={{
										border: "2px solid #D2D3D3",
										borderRadius: "6px",
										width: "533px",
										height: "48px",
										display: "flex",
										justifyContent: 'space-evenly',
										alignItems: 'center',
										// paddingTop: "4px",
										padding: "8px",
										//   ":hover": {border: "2px solid "},
										//   transition:'all 0.2s ease-in-out',
										//   ":hover":{borderColor:"#8E9090"},
									}}
								>
									<Box
										sx={
											{
												// marginLeft: '5px',
												// Padding: '8px'
											}
										}
									>
										<DescriptionOutlinedIcon
											sx={{
												color: "#B1B2B2",
												// marginTop: "8px",
												// marginRight: '5px'
												margin: "0 5px",
												padding: "0px",
											}}
										/>
									</Box>
									<Input
										disableUnderline
										placeholder="Placeholder"
										sx={{
											width: "490px",
											height: "24px",
											// marginTop: "8px",
											fontSize: "16px",
											color: "black",
											marginRight: "15px",
											padding: "3px",
										}}
										name="state"
										value={result.data[0]?.state || details?.state}
										onChange={handleDetails}
									/>
									<Box>
										<ClearIcon
											sx={{
												color: "#B1B2B2",
												marginLeft: "10px",
												height: "20px",
												width: "20px",
												cursor: "pointer",
											}}
										/>
									</Box>
								</Box>
							</Box>

							<Box
								variant="div"
								sx={{
									alignContent: "center",
									marginTop: "25px",
									width: "254px",
									marginRight: "25px",
								}}
							>
								<Typography
									sx={{
										width: "254px",
										height: "18px",
										fontSize: "14px",
										fontWeight: "500",
										lineHeight: "17.5px",
										fontFamily: "Inter",
										color: "#57595A",
									}}
								>
									Pin Code
								</Typography>
								<Box
									sx={{
										border: "2px solid #D2D3D3",
										borderRadius: "6px",
										width: "254px",
										height: "48px",
										display: "flex",
										justifyContent: 'space-evenly',
										alignItems: 'center',
										paddingTop: "4px",
										//   ":hover": {border: "2px solid "},
										//   transition:'all 0.2s ease-in-out',
										//   ":hover":{borderColor:"#8E9090"},
									}}
								>
									<Box
									// sx={{
									// 	marginLeft: "5px",
									// }}
									>
										<AddLinkIcon
											sx={{
												color: "#B1B2B2",
												marginRight: "0 5px",
											}}
										/>
									</Box>
									<Input
										disableUnderline
										placeholder="Placeholder"
										sx={{
											width: "366px",
											height: "24px",
											fontSize: "16px",
											color: 'black'
										}}
										name="pincode"
										value={result.data[0]?.pincode || details?.pincode}
										onChange={handleDetails}
									/>
									<Box>
										<ClearIcon
											sx={{
												color: "#B1B2B2",
												marginLeft: "10px",
												height: "20px",
												width: "20px",
												cursor: "pointer",
											}}
										/>
									</Box>
								</Box>
							</Box>
							<Box
								variant="div"
								sx={{
									alignContent: "center",
									marginTop: "25px",
									width: "254px",
									marginRight: "25px",
								}}
							>
								<Typography
									sx={{
										width: "254px",
										height: "18px",
										fontSize: "14px",
										fontWeight: "500",
										lineHeight: "17.5px",
										fontFamily: "Inter",
										color: "#57595A",
									}}
								>
									Phone Number
								</Typography>
								<Box
									sx={{
										border: "2px solid #D2D3D3",
										borderRadius: "6px",
										width: "254px",
										height: "48px",
										display: "flex",
										justifyContent: 'space-evenly',
										alignItems: 'center',
										paddingTop: "4px",
										//   ":hover": {border: "2px solid "},
										//   transition:'all 0.2s ease-in-out',
										//   ":hover":{borderColor:"#8E9090"},
									}}
								>
									<Box
									// sx={{
									// 	marginLeft: "5px",
									// }}
									>
										<AddLinkIcon
											sx={{
												color: "#B1B2B2",
												marginRight: "0 5px",
											}}
										/>
									</Box>
									<Input
										disableUnderline
										placeholder="Placeholder"
										sx={{
											width: "366px",
											height: "24px",
											color: 'black',
											fontSize: "16px",
										}}
										name="phonenumber"
										value={result.data[0].phoneNo}
									/>
									<Box>
										<ClearIcon
											sx={{
												color: "#B1B2B2",
												marginLeft: "10px",
												height: "20px",
												width: "20px",
												cursor: "pointer",
											}}
										/>
									</Box>
								</Box>
							</Box>
							<Box
								variant="div"
								sx={{
									alignContent: "center",
									marginTop: "25px",
									width: "254px",
									marginRight: "25px",
								}}
							>
								<Typography
									sx={{
										width: "254px",
										height: "18px",
										fontSize: "14px",
										fontWeight: "500",
										lineHeight: "17.5px",
										fontFamily: "Inter",
										color: "#57595A",
									}}
								>
									GST Number
								</Typography>
								<Box
									sx={{
										border: "2px solid #D2D3D3",
										borderRadius: "6px",
										width: "254px",
										height: "48px",
										display: "flex",
										justifyContent: 'space-evenly',
										alignItems: 'center',
										paddingTop: "4px",
										gap: '2px'
										//   ":hover": {border: "2px solid "},
										//   transition:'all 0.2s ease-in-out',
										//   ":hover":{borderColor:"#8E9090"},
									}}
								>
									<Box
									// sx={{
									// 	marginLeft: "5px",
									// }}
									>
										<AddLinkIcon
											sx={{
												color: "#B1B2B2",
												marginRight: "0 5px",
											}}
										/>
									</Box>
									<Input
										disableUnderline
										placeholder="Placeholder"
										sx={{
											width: "366px",
											height: "24px",
											color: 'black',
											fontSize: "16px",
										}}
										value={result.data[0]?.gstNo}
									/>
									<Box>
										<ClearIcon
											sx={{
												color: "#B1B2B2",
												marginTop: "8px",
												marginLeft: "10px",
												height: "20px",
												width: "20px",
												cursor: "pointer",
											}}
										/>
									</Box>
								</Box>
							</Box>

						</Box>
					</Box>

					<Box>
						<Box
							variant="div"
							sx={{
								alignContent: "center",
								marginTop: "15px",
								// border: "1px 0px 0px 0px",
								// borderTop: "1px solid #EAEAEA",
								paddingTop: "15px",
							}}
						>
							<Typography
								sx={{
									width: "438px",
									height: "18px",
									fontSize: "14px",
									fontWeight: "500",
									lineHeight: "17.5px",
									fontFamily: "Inter",
									color: "#57595A",
								}}
							>
								Invoice Number
							</Typography>
							<Box
								sx={{
									border: "2px solid #D2D3D3",
									borderRadius: "6px",
									width: "533px",
									height: "48px",
									display: "flex",
									justifyContent: 'space-evenly',
									alignItems: 'center',
									// paddingTop: "4px",
									padding: "8px",
									//   ":hover": {border: "2px solid "},
									//   transition:'all 0.2s ease-in-out',
									//   ":hover":{borderColor:"#8E9090"},
								}}
							>
								<Box
									sx={
										{
											// marginLeft: '5px',
											// Padding: '8px'
										}
									}
								>
									<DescriptionOutlinedIcon
										sx={{
											color: "#B1B2B2",
											// marginTop: "8px",
											// marginRight: '5px'
											margin: "0 5px",
											padding: "0px",
										}}
									/>
								</Box>
								<Input
									disableUnderline
									placeholder="Placeholder"
									sx={{
										width: "490px",
										height: "24px",
										fontSize: "16px",
										color: "black",
										marginRight: "15px",
										padding: "3px",
									}}
									name="invoicenumber"
									value={details.invoicenumber}
									onChange={handleDetails}
								/>
								<Box>
									<ClearIcon
										sx={{
											color: "#B1B2B2",
											marginTop: "8px",
											marginLeft: "10px",
											height: "20px",
											width: "20px",
											cursor: "pointer",
										}}
									/>
								</Box>
							</Box>
						</Box>
						<Box
							variant="div"
							sx={{
								alignContent: "center",
								marginTop: "15px",
								// border: "1px 0px 0px 0px",
								// borderTop: "1px solid #EAEAEA",
								paddingTop: "15px",
							}}
						>
							<Typography
								sx={{
									width: "438px",
									height: "18px",
									fontSize: "14px",
									fontWeight: "500",
									lineHeight: "17.5px",
									fontFamily: "Inter",
									color: "#57595A",
								}}
							>
								Date
							</Typography>
							<Box
								sx={{
									border: "2px solid #D2D3D3",
									borderRadius: "6px",
									width: "533px",
									height: "48px",
									display: "flex",
									justifyContent: 'space-evenly',
									alignItems: 'center',
									// paddingTop: "4px",
									padding: "8px",
									//   ":hover": {border: "2px solid "},
									//   transition:'all 0.2s ease-in-out',
									//   ":hover":{borderColor:"#8E9090"},
								}}
							>
								<Box
									sx={
										{
											// marginLeft: '5px',
											// Padding: '8px'
										}
									}
								>
									<DescriptionOutlinedIcon
										sx={{
											color: "#B1B2B2",
											// marginTop: "8px",
											// marginRight: '5px'
											margin: "0 5px",
											padding: "0px",
										}}
									/>
								</Box>
								<Input
								type='date'
									disableUnderline
									placeholder="Placeholder"
									sx={{
										width: "490px",
										height: "24px",
										// marginTop: "8px",
										fontSize: "16px",
										color: "black",
										marginRight: "15px",
										padding: "3px",
									}}
									name="date"
									value={details?.value}
									onChange={handleDetails}
								/>
								
								{/* <Box>
									<ClearIcon
										sx={{
											color: "#B1B2B2",
											marginLeft: "10px",
											height: "20px",
											width: "20px",
											cursor: "pointer",
										}}
									/>
								</Box> */}
							</Box>
						</Box>
						<Box
							variant="div"
							sx={{
								alignContent: "center",
								marginTop: "15px",
								// border: "1px 0px 0px 0px",
								// borderTop: "1px solid #EAEAEA",
								paddingTop: "15px",
							}}
						>
							<Typography
								sx={{
									width: "438px",
									height: "18px",
									fontSize: "14px",
									fontWeight: "500",
									lineHeight: "17.5px",
									fontFamily: "Inter",
									color: "#57595A",
								}}
							>
								Terms
							</Typography>
							<Box
								sx={{
									border: "2px solid #D2D3D3",
									borderRadius: "6px",
									width: "533px",
									height: "48px",
									display: "flex",
									justifyContent: 'space-evenly',
									alignItems: 'center',
									// paddingTop: "4px",
									padding: "8px",
									//   ":hover": {border: "2px solid "},
									//   transition:'all 0.2s ease-in-out',
									//   ":hover":{borderColor:"#8E9090"},
								}}
							>
								<Box
									sx={
										{
											// marginLeft: '5px',
											// Padding: '8px'
										}
									}
								>
									<DescriptionOutlinedIcon
										sx={{
											color: "#B1B2B2",
											// marginTop: "8px",
											// marginRight: '5px'
											margin: "0 5px",
											padding: "0px",
										}}
									/>
								</Box>
								<Input
									disableUnderline
									placeholder="Placeholder"
									sx={{
										width: "490px",
										height: "24px",
										// marginTop: "8px",
										fontSize: "16px",
										color: "black",
										marginRight: "15px",
										padding: "3px",
									}}
									name="terms"
									value={details?.terms}
									onChange={handleDetails}
								/>
								<Box>
									<ClearIcon
										sx={{
											color: "#B1B2B2",
											marginLeft: "10px",
											height: "20px",
											width: "20px",
											cursor: "pointer",
										}}
									/>
								</Box>
							</Box>
						</Box>
						<Box
							variant="div"
							sx={{
								alignContent: "center",
								marginTop: "15px",
								// border: "1px 0px 0px 0px",
								// borderTop: "1px solid #EAEAEA",
								paddingTop: "15px",
							}}
						>
							<Typography
								sx={{
									width: "438px",
									height: "18px",
									fontSize: "14px",
									fontWeight: "500",
									lineHeight: "17.5px",
									fontFamily: "Inter",
									color: "#57595A",
								}}
							>
								Mode of Payment
							</Typography>
							<Box
								sx={{
									border: "2px solid #D2D3D3",
									borderRadius: "6px",
									width: "533px",
									height: "48px",
									display: "flex",
									justifyContent: 'space-evenly',
									alignItems: 'center',
									// paddingTop: "4px",
									padding: "8px",
									//   ":hover": {border: "2px solid "},
									//   transition:'all 0.2s ease-in-out',
									//   ":hover":{borderColor:"#8E9090"},
								}}
							>
								<Box
									sx={
										{
											// marginLeft: '5px',
											// Padding: '8px'
										}
									}
								>
									<DescriptionOutlinedIcon
										sx={{
											color: "#B1B2B2",
											// marginTop: "8px",
											// marginRight: '5px'
											margin: "0 5px",
											padding: "0px",
										}}
									/>
								</Box>
								<Input
									disableUnderline
									placeholder="Placeholder"
									sx={{
										width: "490px",
										height: "24px",
										// marginTop: "8px",
										fontSize: "16px",
										color: "black",
										marginRight: "15px",
										padding: "3px",
									}}
									name="modeofpayment"
									value={details?.modeofpayment}
									onChange={handleDetails}
								/>
								<Box>
									<ClearIcon
										sx={{
											color: "#B1B2B2",
											marginLeft: "10px",
											height: "20px",
											width: "20px",
											cursor: "pointer",
										}}
									/>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			}
		</Box>
	);
};

export default InvoiceCreate;
