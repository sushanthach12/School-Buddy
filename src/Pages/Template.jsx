import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Link } from "react-router-dom";


const Template = () => {
	return (
		<Box
			// varient="div"
			sx={{
				width: "auto",
				height: "auto",
				marginBottom: "50px",
				alignItems: "center",
				justifyContent: "center",
				display: "flex",
				flexDirection: "column",
				marginTop: "50px",
			}}
		>
			<Box
				sx={{
					display: "flex",
					marginBottom: "20px",
					flexDirection: {
						xs: "column",
						sm: "column",
						md: "row",
						lg: "row",
						xl: "row",
					},
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Box
					// varient="div"
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
							backgroundColor: "#1F2223",
							borderRadius: "0px 0px 10px 10px",
							paddingTop: "12px",
						}}
					>
						<Box
							// varient = "div"
							sx={{
								width: "317px",
								height: "50px",
								marginLeft: "16px",
								// alignItems: "center",
								// justifyContent: "center",
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
									//   alignItems: "center",
									//     justifyContent: "center",
								}}
							>
								Create Template
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
								Create a template for invoice
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
							}}
						>
							<Link to={"/create-template"} style={{ textDecoration: "none" }}>
								<Box
									// varient = "div"
									sx={{
										display: "flex",
										width: "274px",
										height: "48px",
										backgroundColor: "#FFE393",
										borderRadius: "6px",
										marginLeft: "16px",
										marginTop: "32px",
										// padding:"10px",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<Typography
										sx={{
											weight: "600",
											fontSize: "18px",
											lineHeight: "22.5px",
											color: "#162320",
										}}
									>
										Create
									</Typography>
									<AddBoxOutlinedIcon
										sx={{
											color: "#162320",
											marginLeft: "10px",
											width: "20px",
											height: "20px",
										}}
									/>
								</Box>
							</Link>
						</Box>
					</Box>
				</Box>

				{/* second */}

				<Box
					// varient="div"
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
							backgroundColor: "#1F2223",
							borderRadius: "0px 0px 10px 10px",
							paddingTop: "12px",
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
								View/Update Template
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
								View/Update the previously added template details
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
							}}
						>
							<Link to={"/update-template"} style={{ textDecoration: "none" }}>
								<Box
									// varient = "div"
									sx={{
										display: "flex",
										width: "274px",
										height: "48px",
										backgroundColor: "#FFE393",
										borderRadius: "6px",
										marginLeft: "16px",
										marginTop: "32px",
										// padding:"10px",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<Typography
										sx={{
											weight: "600",
											fontSize: "18px",
											lineHeight: "22.5px",
											color: "#162320",
										}}
									>
										View
									</Typography>
									<VisibilityOutlinedIcon
										sx={{
											color: "#162320",
											marginLeft: "10px",
											width: "20px",
											height: "20px",
										}}
									/>
								</Box>
							</Link>
						</Box>
					</Box>
				</Box>
			</Box>

		</Box>
	);
};

export default Template;
