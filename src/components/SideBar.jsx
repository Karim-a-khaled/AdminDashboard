import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlineOutlined, MapOutlined, PersonOutlined, PieChartOutline, ReceiptOutlined, TimelineOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from "@mui/material/colors";



const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const arr1 = [
  {
    "text": "Dashboard",
    "icon": <HomeOutlinedIcon />,
    "path": "/"
  },
  {
    "text": "Manage Teams",
    "icon": <PeopleOutlinedIcon />,
    "path": "/team"
  },
  {
    "text": "Scholarships Approval",
    "icon": <ReceiptOutlined />,
    "path": "/scholarships-approval"
  },
  {
    "text": "Contacts Information",
    "icon": <ContactsOutlined />,
    "path": "/contacts"
  },
  {
    "text": "Invoice Balances",
    "icon": <ReceiptOutlined />,
    "path": "/invoices"
  },
]

const arr2 = [
  {
    "text": "Profile Form",
    "icon": <PersonOutlined />,
    "path": "/form"
  },
  {
    "text": "Calendar",
    "icon": <CalendarTodayOutlined />,
    "path": "/calendar"
  },
  {
    "text": "FAQ Page",
    "icon": <HelpOutlineOutlined />,
    "path": "/faq"
  },
]

const arr3 = [
  {
    "text": "Pie Chart",
    "icon": <PieChartOutline />,
    "path": "/pie"
  },
  {
    "text": "Line Chart",
    "icon": <TimelineOutlined />,
    "path": "/line"
  },
]

export default function SideBar({ open, handleDrawerClose }) {
  const navigate = useNavigate()
  const location = useLocation()
  const theme = useTheme();
  return (

    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider/>
      <Avatar sx={{ mx: "auto", width: open?88:44,height:open?88:44, mt:1, border:'2px solid grey'}} alt="Karim" src="/static/images/avatar/1.jpg" />
      <Typography align='center' sx={{fontSize:open?17: 0,transition:"0.3s"}}>Karim Khaled</Typography>
      <Typography align='center' sx={{fontSize:open?17: 0,transition:"0.3s", color:theme.palette.info.main}}>Admin</Typography>


      <Divider />

      <List>
        {arr1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                bgcolor: location.pathname === item.path ? theme.palette.mode === 'dark'? grey[800]:grey[300]:null
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {arr2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {arr3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>





    </Drawer>
  )
}
