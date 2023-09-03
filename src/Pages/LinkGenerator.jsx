import React, { useRef, useState } from "react";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AddLinkIcon from '@mui/icons-material/AddLink';
import Input from "@mui/material/Input";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CallIcon from '@mui/icons-material/Call';
import Button from '@mui/material/Button';
import { useCreateDetailMutation } from "../store/api/detailApi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { onDetailFailed, onDetailSuccess } from "../store/slices/detailSlice";
import UploadImageModal from "../components/UploadImageModal";

const LinkGenerator = () => {

	const user = useSelector((state) => state.users.user)
	const dispatch = useDispatch();

	const [createDetail] = useCreateDetailMutation();

	const [loading, setLoading] = useState(false);
	const [formField, setFormField] = useState({
		gmaplink: "",
		otherlink: "",
		text: "",
		phoneNumber: "",
	})

	const imageRef = useRef();
	const [imageFile, setImageFile] = useState(null)

	const fileRef = useRef();
	const [fileInp, setFileInp] = useState(null)

	const [openImageModal, setOpenImageModal] = useState(false)
	const [openFileModal, setOpenFileModal] = useState(false)

	const handleChange = (e) => {
		setFormField({ ...formField, [e.target.name]: e.target.value })
	}

	const checkFileSize = (file) => {
		const MAX_FILE_SIZE = 10 //10 MB

		const uploadedFileSize = Number((file?.size / 1048576).toFixed(2)); // MB

		if (uploadedFileSize > MAX_FILE_SIZE) {
			toast.error("File Size Exceeded 10MB", { duration: 1000, position: 'top-center' })
		}
	}

	const handleImageModal = () => {
		setOpenImageModal(!openImageModal);
	}
	const handleImageInput = (e) => {
		const reader = new FileReader();

		reader.onload = (e) => {
			setImageFile(e.target.result);
			console.log(e.target.result);
		}

		reader.onerror = (e) => {
			console.log(e.target.error)
		}

		reader.readAsDataURL(imageRef.current?.files[0])

		setTimeout(() => {
			checkFileSize(imageFile)
		}, 200)
	}


	const handleFileModal = () => {
		setOpenFileModal(!openFileModal)
	}

	const handleFileInput = (e) => {
		const reader = new FileReader();
		reader.onload = (e) => {
			setFileInp(e.target.result)
			console.log(e.target.result)
		}

		reader.onerror = (e) => {
			console.log(e.target.error);
		}

		reader.readAsDataURL(fileRef.current?.files[0]);
		setTimeout(() => {
			checkFileSize(fileInp)
		}, 200)
	}

	console.log(typeof imageFile)
	const handleFormSubmit = async (e) => {
		try {
			e.preventDefault();
			setLoading(true)
			// const form = new FormData(e.target);
			// console.log(form)
			const body = {
				user: user?._id,
				school_name: user?.name,
				map_link: formField.gmaplink,
				other_link: formField.otherlink,
				brochure_link: fileInp,
				phone: formField.phoneNumber,
				pic: imageFile
			}

			const data = await createDetail({ body, token: user.token }).unwrap()
			console.log(data)
			dispatch(onDetailSuccess(data))
		} catch (error) {
			toast.error("Something went Wrong", { duration: 900, position: 'top-center' })
			dispatch(onDetailFailed())
		} finally {
			setLoading(false)
		}
	}

	return (
		<Box
			variant="div"
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "row",
				marginTop: "50px",

			}}
		>
			<Box
				variant="div"
				sx={{
					marginBottom: "10px",
				}}
			>
				<form
					onSubmit={handleFormSubmit}
				>
					<Box
						variant="div"
						sx={{
							alignContent: "center",
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
							Google Map Link
						</Typography>
						<Box
							sx={{
								border: "2px solid #D2D3D3",
								borderRadius: "6px",
								width: "438px",
								height: "48px",
								display: "flex",
								flexDirection: "col",
								paddingTop: "4px",
								//   ":hover": {border: "2px solid "},
								//   transition:'all 0.2s ease-in-out',
								//   ":hover":{borderColor:"#8E9090"},

							}}
						>

							<Box
								sx={{
									marginLeft: '5px'
								}}
							>
								<LocationOnOutlinedIcon
									sx={{
										color: "#B1B2B2",
										marginTop: "8px",
									}}
								/>
							</Box>
							<Input
								disableUnderline
								id="gmaplink"
								placeholder="Placeholder"
								sx={{
									width: "366px",
									height: "24px",
									marginTop: "8px",
									fontSize: "16px",
								}}
								name="gmaplink"
								value={formField.gmaplink}
								onChange={handleChange}
								required={true}
							/>
							<Box>
								<ClearIcon
									sx={{
										color: "#B1B2B2",
										marginTop: "8px",
										marginLeft: "15px",
										height: "20px",
										width: "20px",
										cursor: "pointer",
									}}
								/>
							</Box>
						</Box>
					</Box>

					{/* first input done */}
					<Box
						variant="div"
						sx={{
							alignContent: "center",
							marginTop: "25px",
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
							Other link
						</Typography>
						<Box
							sx={{
								border: "2px solid #D2D3D3",
								borderRadius: "6px",
								width: "438px",
								height: "48px",
								display: "flex",
								flexDirection: "col",
								paddingTop: "4px",
								//   ":hover": {border: "2px solid "},
								//   transition:'all 0.2s ease-in-out',
								//   ":hover":{borderColor:"#8E9090"},

							}}
						>

							<Box
								sx={{
									marginLeft: '5px'
								}}
							>
								<AddLinkIcon
									sx={{
										color: "#B1B2B2",
										marginTop: "8px",
										marginRight: '5px'
									}}
								/>
							</Box>
							<Input
								disableUnderline
								id="otherlink"
								placeholder="Placeholder"
								sx={{
									width: "366px",
									height: "24px",
									marginTop: "8px",
									fontSize: "16px",
								}}
								name="otherlink"
								value={formField.otherlink}
								onChange={handleChange}
								required={true}
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

					{/* second */}

					<Box
						variant="div"
						sx={{
							alignContent: "center",
							marginTop: "25px",
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
							Text
						</Typography>
						<Box
							sx={{
								border: "2px solid #D2D3D3",
								borderRadius: "6px",
								width: "438px",
								height: "117px",
								display: "flex",
								flexDirection: "col",
								alignContent: "center",
								justifyContent: "center",
								paddingTop: "30px",
								//   ":hover": {border: "2px solid "},
								//   transition:'all 0.2s ease-in-out',
								//   ":hover":{borderColor:"#8E9090"},

							}}
						>

							<Box
								sx={{
									marginLeft: '5px'
								}}
							>
								<FormatUnderlinedIcon
									sx={{
										color: "#B1B2B2",
										marginTop: "8px",
									}}
								/>
							</Box>
							<Input
								disableUnderline
								id="text"
								placeholder="Placeholder"
								sx={{
									width: "366px",
									height: "24px",
									marginTop: "8px",
									fontSize: "16px",
								}}
								name="text"
								value={formField.text}
								onChange={handleChange}
								required={true}
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
					{/* third */}

					<Box
						variant="div"
						sx={{
							alignContent: "center",
							marginTop: "25px",
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
							School Brochure
						</Typography>
						<Box
							sx={{
								border: "2px solid #D2D3D3",
								borderRadius: "6px",
								width: "438px",
								height: "48px",
								display: "flex",
								flexDirection: "col",
								paddingTop: "4px",
								//   ":hover": {border: "2px solid "},
								//   transition:'all 0.2s ease-in-out',
								//   ":hover":{borderColor:"#8E9090"},

							}}
						>

							<Box
								sx={{
									marginLeft: '5px'
								}}
							>
								<DescriptionOutlinedIcon
									sx={{
										color: "#B1B2B2",
										marginTop: "8px",
										marginRight: '5px'
									}}
								/>
							</Box>
							<input
								id="file"
								name="file"
								type="file"
								accept=".pdf, .doc, .docx"
								style={{ display: 'none' }}
								ref={input => (fileRef.current = input)}
								onInput={handleFileInput}
							/>
							<Typography
								sx={{
									width: "260px",
									height: "24px",
									marginTop: "8px",
									fontSize: "16px",
									color: '#B1B2B2',
									marginRight: '15px'
								}}
							>{fileRef.current?.files[0]?.name || "Placeholder"}</Typography>
							<Box
								sx={{
									width: "88px",
									height: "36px",
									backgroundColor: "#3B4744",
									alignItems: "center",
									justifyContent: "center",
									display: "flex",
									borderRadius: "4px",
									padding: "0px 10px",
									cursor: "pointer",
								}}
							>
								<Button
									disableElevation
									disableTouchRipple
									onClick={handleFileModal}

								>
									<IosShareOutlinedIcon
										sx={{
											// width:"48px",
											// height:"48px",
											weight: "200",
											color: "white"
										}}
									/>
									<Typography
										sx={{
											color: "white",
											textTransform: 'none'
										}}

									>
										Upload
									</Typography>
								</Button>
							</Box>
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

					{/* fourth */}
					<Box
						variant="div"
						sx={{
							alignContent: "center",
							marginTop: "25px",
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
							Phone Number
						</Typography>
						<Box
							sx={{
								border: "2px solid #D2D3D3",
								borderRadius: "6px",
								width: "438px",
								height: "48px",
								display: "flex",
								flexDirection: "col",
								paddingTop: "4px",
								//   ":hover": {border: "2px solid "},
								//   transition:'all 0.2s ease-in-out',
								//   ":hover":{borderColor:"#8E9090"},

							}}
						>

							<Box
								sx={{
									marginLeft: '5px'
								}}
							>
								<CallIcon
									sx={{
										color: "#B1B2B2",
										marginTop: "8px",
										marginRight: '5px'
									}}
								/>
							</Box>
							<Input
								disableUnderline
								placeholder="Placeholder"
								id="phoneNumber"
								sx={{
									width: "366px",
									height: "24px",
									marginTop: "8px",
									fontSize: "16px",
								}}
								name="phoneNumber"
								value={formField.phoneNumber}
								onChange={handleChange}
								required={true}
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

					<Button
						disableElevation={true}
						disabled={loading}
						type="submit"
						sx={{
							marginTop: '25px',
							backgroundColor: "#FFE393",
							width: '253px',
							height: '48px',
							":hover": { backgroundColor: "#ffe8a8" },
							textColor: "#363939",
							borderRadius: '6px'
						}}
						variant="contained"

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
								fontFamily: "Lora",
							}}>
							Update
						</Typography>
					</Button>
				</form>
			</Box>


			<Box
				variant="div"
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '8px',
					marginLeft: '100px',
					// width: '530px'
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
						fill={true}
						src={imageFile || user?.profile_img || "/images/profile.svg"}
						alt="profile"
						style={{
							width: "284px",
							height: "284px",
							borderRadius: '50%',
							border: (user?.profile_img || imageFile) && '4px solid #F9D262'
						}}
					/>
				</Box>

				<input
					id="pic"
					name="pic"
					type="file"
					accept="image/jpeg, image/svg, image.png"
					style={{ display: 'none' }}
					ref={input => (imageRef.current = input)}
					onInput={handleImageInput}
				/>
				<Box
					sx={{
						width: '100%',
						height: '70px',
						gap: '12px',
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
							fontFamily: "Lora",
							width: "100%",
						}}>
						{user?.name || "School Name"}
					</Typography>

					<Box
						variant="div"
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							gap: '8px',
							marginTop: '30px'
						}}
					>
						<Button
							style={{
								margin: 0,
								padding: 0,
								backgroundColor: 'white',
							}}
							disableElevation
							disableTouchRipple
							onClick={handleImageModal}
						>
							<IosShareOutlinedIcon
								sx={{
									color: "#1F2223",
									width: "48px",
									height: "48px",
									weight: "200",
									margin: "0px 15px",
								}}

							/>
						</Button>
						<Button
							style={{
								margin: 0,
								padding: 0,
								backgroundColor: 'white',
							}}
							disableElevation
							disableTouchRipple
							onClick={() => setImageFile(null)}
						>
							<DeleteOutlineOutlinedIcon
								sx={{
									color: "#1F2223",
									width: "48px",
									height: "48px",
									weight: "200",
									margin: "0px 15px",
								}}
							/>
						</Button>
					</Box>
				</Box>
			</Box>

			{openImageModal && <UploadImageModal openModalOrNot={openImageModal} setOpenModalOrNot={setOpenImageModal} fileRef={imageRef} />}
			{openFileModal && <UploadImageModal openModalOrNot={openFileModal} setOpenModalOrNot={setOpenFileModal} fileRef={fileRef} />}
			{/* <object data={fileInp} type="application/pdf" width="100%" height="500px">
				<p>Unable to display PDF file. <a href="/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf">Download</a> instead.</p>
			</object> */}
		</Box>
	);
};

export default LinkGenerator;
