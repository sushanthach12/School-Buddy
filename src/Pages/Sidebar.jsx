import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: '500px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '400px',
            boxSizing: 'border-box',
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
                height: '48px',
                width: '350px',
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
                <Typography variant="h6 " component="div"
                sx={{
                    marginRight: "140px",
                    alignContent: "center",
                    fontSize: "18px",
                    color: "#363939",
                    paddingTop: "4px",
                    
                }}
                >
                    Analytics
                </Typography></Box>
                <ArrowForwardOutlinedIcon
                sx={{
                    paddingTop: "6px",
                    height: "30px",
                    width: "30px",
                    color:"#1F2223"
                }}
                />
            </Box>

            <Box
            sx={{
                height: '48px',
                width: '350px',
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
                <Typography variant="h6 " component="div"
                sx={{
                    marginRight: "140px",
                    alignContent: "center",
                    fontSize: "18px",
                    color: "#363939",
                    paddingTop: "4px",
                    
                }}
                >
                    Link Generator
                </Typography></Box>
                <ArrowForwardOutlinedIcon
                sx={{
                    paddingTop: "6px",
                    height: "30px",
                    width: "30px",
                    color:"#1F2223"
                }}
                />
            </Box>

            <Box
            sx={{
                height: '48px',
                width: '350px',
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
                <Typography variant="h6 " component="div"
                sx={{
                    marginRight: "140px",
                    alignContent: "center",
                    fontSize: "18px",
                    color: "#363939",
                    paddingTop: "4px",
                    
                }}
                >
                    Invoice Generator
                </Typography></Box>
                <ArrowForwardOutlinedIcon
                sx={{
                    paddingTop: "6px",
                    height: "30px",
                    width: "30px",
                    color:"#1F2223"
                }}
                />
            </Box>

            <Box
            sx={{
                height: '48px',
                width: '350px',
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
                <Typography variant="h6 " component="div"
                sx={{
                    marginRight: "140px",
                    alignContent: "center",
                    fontSize: "18px",
                    color: "#363939",
                    paddingTop: "4px",
                    
                }}
                >
                    Support
                </Typography></Box>
                <ArrowForwardOutlinedIcon
                sx={{
                    paddingTop: "6px",
                    height: "30px",
                    width: "30px",
                    color:"#1F2223"
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
                <Typography variant="h4 " component="div"
                sx={{
                    color: "#363939",
                    fontSize: "18px",
                    weight:"600",
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
