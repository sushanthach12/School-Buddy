import * as React from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link, matchPath, useLocation, useNavigate, useRoutes } from "react-router-dom";
import { Button } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";


const PathNames = new Map([
	["/", "Home"],
	["/analytics", "Analytics"],
	["/link-generator", "Link Generator"],
	["/invoice-generator", "Invoice Generator"],
	["/invoice-history", "Invoice History"],
	["/add-predefined", "Add Predefined"],
	["/edit-predefined/:id/", "Edit Predefined"],
	["/view-predefined", "View Predefined"],
	["/predefined", "Predefined"],
	["/template", "Template"],
	["/create-template", "Create Template"],
	["/update-template", "Update Template"],
	["/create-invoice", "Invoice Gen Create"],
])

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

export default function Navbar({ hideNav }) {

	const user = useSelector((state) => state.users)
	const dispatch = useDispatch();

	const location = useLocation();
	const navigate = useNavigate()
	const editMatch = /edit-predefined/.test(window.location.href);

	// const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	// const [auth, setAuth] = React.useState(true);
	const [anchorEl, setAnchorEl] = React.useState(null);



	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogOut = () => {
		dispatch({ type: 'RESET' })
		navigate('/login')
	}

	if(hideNav) {
		return null;
	}

	return (
		<Box
			sx={{
				display: "flex",
			}}
		>
			<AppBar
				position="static"
				sx={{
					borderShadow: "none",
					boxShadow: "none",
					width: '100%'
				}}
			>
				<Toolbar
					sx={{
						backgroundColor: "#FAFAFA",
						height: "108px",
						display: "flex",
						justifyContent: "space-between",
						padding: "30px 57px 30px 57px",
						paddingLeft:{
							xs: "20px",
							sm: "20px",
							md: "57px",
							lg: "57px",
							xl: "57px",
						},
						paddingRight:{
							xs: "20px",
							sm: "20px",
							md: "57px",
							lg: "57px",
							xl: "57px",
						},
					}}
				>
					{user.loggedIn ?
						<>
							<IconButton
								size="large"
								edge="start"
								color="inherit"
								aria-label="menu"
								sx={{ mr: 2 }}
								onClick={handleDrawerOpen}
							>
								<MenuIcon sx={{ color: "#1F2223" }} />
							</IconButton>

							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									flexGrow: 1,
									justifyContent: "center",
									fontSize: {
										xs: "18px",
										sm: "32px",
										md: "32px",
										lg: "32px",
										xl: "44px ",
									},
									lineHeight: '50px',
									fontWeight: '600',
									fontFamily: 'Lora',
									color: "#1F2223"
								}}
							>
								{/* <span style={{ color: "#1F2223", fontFamily: 'Lora',fontSize:'inherit' }}> */}
									{editMatch && "Edit Predefined"}
									{!editMatch && PathNames.get(location.pathname)}
								{/* </span> */}
							</Box>

							<div>
								<IconButton
									size="large"
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={handleMenu}
									color="inherit"
								>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
											stroke="#1F2223"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
											stroke="#1F2223"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									{/* <AccountCircle /> */}
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									// keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									open={Boolean(anchorEl)}
									onClose={handleClose}
									sx={{ marginTop: "50px" }}
								>
									<Link to={"/dashboard"} style={{ textDecoration: "none" }}><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
									<MenuItem onClick={handleClose}>My account</MenuItem>
									<MenuItem onClick={handleLogOut}>Logout</MenuItem>
								</Menu>
							</div>
						</>
						:
						<>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									flexGrow: 1,
									justifyContent: "start",
								}}
							>
								<Typography
									variant="h4"
									sx={{
										color: "#162320",
										fontSize: "32px",
										fontWeight: "500",
										lineHeight: "40px",
										textAlign: "start",
										textTransform: "none",
										width: "100%",
										fontFamily: 'Lora'
									}}
								>
									School Buddy
								</Typography>
							</div>
							{
								location.pathname === '/login' ?

									<Link to={"/signup"}>
										<Button
											variant="contained"
											sx={{
												backgroundColor: "#FFE393",
												":hover": { backgroundColor: "#ffe8a8" },
												width: "92px",
												height: "48px",
												padding: "0px 16px",
												borderRadius: "6px",
												gap: "8px",
											}}
											disableElevation
										>
											<Typography
												variant="h4"
												sx={{
													color: "#363939",
													fontSize: "16px",
													fontWeight: "500",
													lineHeight: "20px",
													textAlign: "center",
													textTransform: "none",
													width: "100%",
												}}
											>
												Sign Up
											</Typography>
										</Button>
									</Link>
									:
									<Link to={"/login"}>
										<Button
											variant="contained"
											sx={{
												backgroundColor: "#FFE393",
												":hover": { backgroundColor: "#ffe8a8" },
												width: "92px",
												height: "48px",
												padding: "0px 16px",
												borderRadius: "6px",
												gap: "8px",
											}}
											disableElevation
										>
											<Typography
												variant="h4"
												sx={{
													color: "#363939",
													fontSize: "16px",
													fontWeight: "500",
													lineHeight: "20px",
													textAlign: "center",
													cursor: "pointer",
													textTransform: "none",
													width: "100%",
												}}
											>
												Log In
											</Typography>
										</Button>
									</Link>
							}
						</>
					}
				</Toolbar>
			</AppBar>

			<Drawer
				sx={{
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: {
							xs: "70%",
							sm: "50%",
							md: "50%",
							lg: "40%",
							xl: "30%",
						},
						boxSizing: "border-box",
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						<CloseOutlinedIcon />
					</IconButton>
				</DrawerHeader>

				<SideBar handleDrawerClose={handleDrawerClose} />

			</Drawer>
		</Box>
	);
}
