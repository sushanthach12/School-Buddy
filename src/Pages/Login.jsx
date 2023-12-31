import React, { useEffect, useState } from "react";
import {
	Container,
	FormControl,
	FormLabel,
	TextField,
	Button,
	Typography,
	Input,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";

import { loggedInFailed, logginSuccess } from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useLoginUserMutation } from "../store/api/authApi";

const Login = () => {
	const navigate = useNavigate();
	const user = useSelector((state) => state.users)
	const dispatch = useDispatch()

	const [loginUser] = useLoginUserMutation()

	const [credentials, setCredentials] = useState({ email: "", password: "" })
	const [loading, setLoading] = useState(false)

	const handleCredChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		try {
			setLoading(true)
			const data = await loginUser(credentials).unwrap();
			toast.success("Success", { duration: 900, position: 'top-center' })
			setTimeout(() => {
				dispatch(logginSuccess(data));
				navigate('/')
			}, 1000)
		} catch (error) {
			toast.error("Invalid Credentials", { duration: 1000, position: 'top-center' })
			dispatch(loggedInFailed());
		} finally {
			setLoading(false)
		}

	};

	useEffect(() => {
		if (user.loggedIn) {
			navigate("/");
		}
	}, []);

	return (
		<Container
			sx={{
				height: "auto",
				display: "flex",
				alignItems: "center",
				flexDirection: {
					xs: "column",
					sm: "column",
					md: "row",
					lg: "row",
					xl: "row",
				},
				marginTop: "50px",
				width: "auto",
				marginBottom: "50px",
			}}
		>
			<Box
				sx={{
					width: {
						xs: "250px",
						sm: "500px",
						md: "400px",
						lg: "400px",
						xl: "400px",
					},
					marginRight: {
						xs: "0px",
						sm: "0px",
						md: "50px",
						lg: "50px",
						xl: "50px",
					},
				}}
			>
				<img
					alt="profile"
					src="/images/loginSvg.svg"
					style={{ width: "100%", height: "auto" }}
				/>
			</Box>

			<form
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "30px",
				}}
				onSubmit={handleFormSubmit}
			>
				<FormControl>
					<FormLabel
						shrink="true"
						htmlFor="email"
						style={{
							fontSize: "14px",
							fontWeight: "500",
							lineHeight: "17.5px",
							color: "#57595A",
							width: {
								xs: "auto",
								sm: "auto",
								md: "100%",
								lg: "100%",
								xl: "100%",
							},
						}}
					>
						Email
					</FormLabel>
					<Input
						id="email"
						type="email"
						name="email"
						disableUnderline
						required
						sx={{
							fontSize: "16px",
							fontWeight: "400",
							borderRadius: "6px",
							border: "1px solid #D2D3D3",
							padding: "11px 12px",
							lineHeight: "24px",
							width: {
								xs: "250px",
								sm: "300px",
								md: "400px",
								lg: "400px",
								xl: "500px",
							},
							color: "#363939",
						}}
						placeholder="example@gmail.com"
						value={credentials.email}
						onChange={handleCredChange}
					/>
				</FormControl>

				<FormControl>
					<FormLabel
						shrink="true"
						htmlFor="password"
						style={{
							fontSize: "14px",
							fontWeight: "500",
							lineHeight: "17.5px",
							color: "#57595A",
						}}
					>
						Password
					</FormLabel>
					<Input
						id="password"
						type="password"
						name="password"
						disableUnderline
						required
						sx={{
							fontSize: "16px",
							fontWeight: "400",
							borderRadius: "6px",
							border: "1px solid #D2D3D3",
							padding: "11px 12px",
							lineHeight: "24px",
							width: "auto",
							color: "#363939",
						}}
						placeholder="password"
						value={credentials.password}
						onChange={handleCredChange}
					/>
				</FormControl>

				<FormControl>
					<FormLabel shrink="true">
						<span
							style={{
								display: "flex",
								justifyContent: "start",
								alignItems: "center",
								gap: "5px",
								color: "#57595A",
								fontSize: "14px",
							}}
						>
							forgot password
							<HelpOutlineIcon
								sx={{
									width: "16px",
									height: "16px",
									color: "#81B5E9",
								}}
							/>
						</span>
					</FormLabel>
					<Button
						type="submit"
						variant="contained"
						sx={{
							backgroundColor: "#FFE393",
							":hover": { backgroundColor: "#ffe8a8" },
							width: "253px",
							height: "48px",
							padding: "0px 16px",
							marginTop: "7px",
							borderRadius: "6px",
						}}
						disableElevation={true}
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
								fontFamily: "Lora",
							}}
						>
							Log In
						</Typography>
					</Button>
				</FormControl>
			</form>
		</Container>
	);
};

export default Login;
