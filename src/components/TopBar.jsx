import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Stack, useTheme } from '@mui/material';
import { DarkModeOutlined, LightModeOutlined, NotificationAddOutlined, SettingsOutlined } from '@mui/icons-material';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function TopBar({ open, handleDrawerOpen, setMode }) {
  const theme = useTheme()

  const [lightMode, setLightMode] = React.useState(true)
  const drawerWidth = 240;


  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        <Box flexGrow={1} />

        <Stack direction={'row'}>

          {theme.palette.mode === 'light' ? (
            <IconButton onClick={() => {
              localStorage.setItem("currentMode", theme.palette.mode === "dark" ? "light" : "dark")
              setMode((prevMode) =>
                prevMode === 'light' ? 'dark' : 'light',
              );
            }} size="small" color='inherit'>
              <LightModeOutlined />
            </IconButton>
          ) : (
            <IconButton size="small" color='inherit'>
              <DarkModeOutlined onClick={() => {
                localStorage.setItem("currentMode", theme.palette.mode === 'dark' ? "light" : "dark")
                setMode((prevMode) =>
                  prevMode === 'light' ? 'dark' : 'light',
                )
              }}
              />
            </IconButton>
          )}

          <IconButton size="small" color='inherit'>
            <NotificationAddOutlined />
          </IconButton>

          <IconButton size="small" color='inherit'>
            <SettingsOutlined />
          </IconButton>

          <IconButton size="small" color='inherit'>
            <Person2OutlinedIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
