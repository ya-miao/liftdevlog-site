import { useEffect, useState } from "react";

import { AppBar, Avatar, Box, Button, Fab, FormControlLabel, Grid, IconButton, Stack, Switch, Typography } from "@mui/material";

// import { Auth } from 'aws-amplify';

import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';

import liftdevlogLogo from '../images/liftdevlog-logo-black-1.png';

import ContactDialog from "./ContactDialog";

import { useNavigate } from "react-router-dom";

const SiteHeader = () => {

  //   useEffect(() => {
  //     console.log('USER:');
  //     console.log(user);
  //   }, [user])

  //   const signOut = async () => {
  //     try {
  //       await Auth.signOut();
  //     } catch (error) {
  //       console.log('error signing out: ', error);
  //     }
  //   };

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Box sx={{ mx: 2, my: 2.5 }}>
        <Grid container direction='row' alignItems='center' justifyContent='space-between'>
          <Grid item display={{ xs: 'none', sm: 'block' }}>
            <Stack direction='row' spacing={2} alignItems='center' justifyContent='center'>
              <IconButton size='small' onClick={() => {
                navigate('/');
              }}>
                <img width='50px' height='50px' src={liftdevlogLogo} />
              </IconButton>
              <Typography variant='h3'>Lift Dev Log</Typography>
            </Stack>
          </Grid>
          <Grid item display={{ xs: 'block', sm: 'none' }}>
            <Stack direction='row' spacing={1.25} alignItems='center' justifyContent='center'>
              <IconButton size='small' onClick={() => {
                navigate('/');
              }}>
                <img width='35px' height='35px' src={liftdevlogLogo} />
              </IconButton>
              <Typography variant='h4'>Lift Dev Log</Typography>
            </Stack>
          </Grid>
          <Grid item display={{ xs: 'none', sm: 'block' }}>
            <Typography variant='overline'>I lift. I dev. I log.</Typography>
          </Grid>
          <Grid item>
            <Stack direction='row' spacing={2}>
              <IconButton color="secondary" onClick={handleClickMenu}>
                <MenuIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={openMenu}
        onClose={handleCloseMenu}
        onClick={handleCloseMenu}
        // PaperProps={{
        //   elevation: 0,
        //   sx: {
        //     overflow: 'visible',
        //     filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        //     mt: 1.5,
        //     '& .MuiAvatar-root': {
        //       width: 32,
        //       height: 32,
        //       ml: -0.5,
        //       mr: 1,
        //     },
        //     '&:before': {
        //       content: '""',
        //       display: 'block',
        //       position: 'absolute',
        //       top: 0,
        //       right: 14,
        //       width: 10,
        //       height: 10,
        //       bgcolor: 'background.paper',
        //       transform: 'translateY(-50%) rotate(45deg)',
        //       zIndex: 0,
        //     },
        //   },
        // }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box sx={{ m: 1.5 }}>
          <MenuItem onClick={() => {
            navigate('/');
            handleCloseMenu();
          }}>
            Log Home
          </MenuItem>
          {/* <MenuItem onClick={() => {
            navigate('/trilstudio');
            handleCloseMenu();
          }}>
            TriL Studio
          </MenuItem> */}
          <Divider />
          {/* <MenuItem onClick={() => {
            navigate('/projects');
            handleCloseMenu();
          }}>
            All Projects
          </MenuItem>
          <Divider /> */}
          <MenuItem onClick={() => {
            navigate('/updates');
            handleCloseMenu();
          }}>
            Updates
          </MenuItem>
          {/* <MenuItem onClick={() => {
            navigate('/suggestions');
            handleCloseMenu();
          }}>
            Suggest Features
          </MenuItem> */}
          <MenuItem onClick={() => {
            navigate('feedback');
            handleCloseMenu();
          }}>
            Feedback
          </MenuItem>
        </Box>
      </Menu>
    </AppBar>
  );
};

export default SiteHeader;