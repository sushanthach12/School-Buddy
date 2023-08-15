import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useLocation } from "react-router-dom";
import CustomizableButton from "./CustomizableButton";
import { Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
const drawerWidth = 240;

const PathNames = new Map([
  ["/", "Home"],
  ["/dashboard", "Your Profile"],
  ["/analytics", "Analytics"],
  ["/link-generator", "Link Generator"],
  ["/invoice-generator", "Invoice Generator"],
]);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const location = useLocation();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="static"
        sx={{
          borderShadow: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "#FAFAFA",
            height: "108px",
            display: "flex",
            justifyContent: "space-between",
            padding: "30px 57px 30px 57px",
          }}
        >
          {auth ? (
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

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexGrow: 1,
                  justifyContent: "center",
                  fontSize: "30px",
                }}
              >
                <span style={{ color: "#1F2223" }}>
                  {PathNames.get(location.pathname)}
                </span>
              </div>

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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                      stroke="#1F2223"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  sx={{ marginTop: "50px" }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            </>
          ) : (
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
                    cursor: "pointer",
                    textTransform: "none",
                    width: "100%",
                  }}
                >
                  School Buddy
                </Typography>
              </div>
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
                  Sign Up
                </Typography>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: "500px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "400px",
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {/* {theme.direction === 'ltr' ? <CloseOutlinedIcon /> : <CloseOutlinedIcon />} */}
            <CloseOutlinedIcon />
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <Box
          sx={{
            marginTop: "30px",
          }}
        >
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))} */}
          <Box
            sx={{
              height: "48px",
              width: "350px",
              border: "1px solid #363939",
              borderRadius: "6px",
              display: "flex",
              flexDirection: "col",
              paddingTop: "6px",
              paddingLeft: "10px",
              marginLeft: "20px",
              paddingBottom: "6px",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                width: "300px",
              }}
            >
              <Typography
                variant="h6 "
                component="div"
                sx={{
                  marginRight: "140px",
                  alignContent: "center",
                  fontSize: "18px",
                  color: "#363939",
                  paddingTop: "4px",
                }}
              >
                Analytics
              </Typography>
            </Box>
            <ArrowForwardOutlinedIcon
              sx={{
                paddingTop: "6px",
                height: "30px",
                width: "30px",
                color: "#1F2223",
              }}
            />
          </Box>

          <Box
            sx={{
              height: "48px",
              width: "350px",
              border: "1px solid #363939",
              borderRadius: "6px",
              display: "flex",
              flexDirection: "col",
              paddingTop: "6px",
              paddingLeft: "10px",
              marginLeft: "20px",
              paddingBottom: "6px",
              cursor: "pointer",
              marginTop: "30px",
            }}
          >
            <Box
              sx={{
                width: "300px",
              }}
            >
              <Typography
                variant="h6 "
                component="div"
                sx={{
                  marginRight: "140px",
                  alignContent: "center",
                  fontSize: "18px",
                  color: "#363939",
                  paddingTop: "4px",
                }}
              >
                Link Generator
              </Typography>
            </Box>
            <ArrowForwardOutlinedIcon
              sx={{
                paddingTop: "6px",
                height: "30px",
                width: "30px",
                color: "#1F2223",
              }}
            />
          </Box>

          <Box
          
            sx={{
              height: "48px",
              width: "350px",
              border: "1px solid #363939",
              borderRadius: "6px",
              display: "flex",
              flexDirection: "col",
              paddingTop: "6px",
              paddingLeft: "10px",
              marginLeft: "20px",
              paddingBottom: "6px",
              cursor: "pointer",
              marginTop: "30px",
            }}
          >
            <Box
              sx={{
                width: "300px",
              }}
            >
              <Typography
                variant="h6 "
                component="div"
                sx={{
                  marginRight: "140px",
                  alignContent: "center",
                  fontSize: "18px",
                  color: "#363939",
                  paddingTop: "4px",
                }}
              >
                Invoice Generator
              </Typography>
            </Box>
            <ArrowForwardOutlinedIcon
              sx={{
                paddingTop: "6px",
                height: "30px",
                width: "30px",
                color: "#1F2223",
              }}
            />
          </Box>

          <Box
          
            sx={{
              height: "48px",
              width: "350px",
              border: "1px solid #363939",
              borderRadius: "6px",
              display: "flex",
              flexDirection: "col",
              paddingTop: "6px",
              paddingLeft: "10px",
              marginLeft: "20px",
              paddingBottom: "6px",
              cursor: "pointer",
              marginTop: "30px",
            }}
          >
            <Box
              sx={{
                width: "300px",
              }}
            >
              <Typography
                variant="h6 "
                component="div"
                sx={{
                  marginRight: "140px",
                  alignContent: "center",
                  fontSize: "18px",
                  color: "#363939",
                  paddingTop: "4px",
                }}
              >
                Support
              </Typography>
            </Box>
            <ArrowForwardOutlinedIcon
              sx={{
                paddingTop: "6px",
                height: "30px",
                width: "30px",
                color: "#1F2223",
              }}
            />
          </Box>

          <Button
            sx={{
              width: "253px",
              height: "48px",
              backgroundColor: "#FFE393",
              ":hover": { backgroundColor: "#ffe8a8" },
              textColor: "#363939",
              marginLeft: "20px",
              marginTop: "200px",
            }}
          >
            <Typography
              variant="h4 "
              component="div"
              sx={{
                color: "#363939",
                fontSize: "18px",
                weight: "600",
                textTransform: "none",
              }}
            >
              Log Out
            </Typography>
          </Button>
        </Box>
        {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </Box>
  );
}
