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

interface SiteHeaderProps {
  // user: any;
  // isDarkMode: boolean;
  // setIsDarkMode: any;
  // handleChangeSwitch: any;
}

// const SiteHeader = ({ user, isDarkMode, setIsDarkMode, handleChangeSwitch }: SiteHeaderProps) => {
// const SiteHeader = ({ user, handleChangeSwitch }: SiteHeaderProps) => {
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

  const [openContact, setOpenContact] = useState(false);

  const handleClickOpenContact = () => {
    setOpenContact(true);
  };

  const handleCloseContact = () => {
    setOpenContact(false);
  };

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
            <Stack direction='row' spacing={1.75} alignItems='center' justifyContent='center'>
              <img width='50px' height='50px' src={liftdevlogLogo} />
              {/* <Typography variant='h3'>Lift Dev Log</Typography> */}
              <Typography variant='h3'>Lift Dev Log</Typography>
            </Stack>
          </Grid>
          <Grid item display={{ xs: 'block', sm: 'none' }}>
            <Stack direction='row' spacing={1.5} alignItems='center' justifyContent='center'>
              <img width='35px' height='35px' src={liftdevlogLogo} />
              {/* <Typography variant='h5'>Lift Dev Log</Typography> */}
              <Typography variant='h4'>Lift Dev Log</Typography>
            </Stack>
          </Grid>
          {/* <Grid item display={{ xs: 'none', sm: 'block' }}>
            <Button size='small' variant='contained' sx={{ textTransform: 'none' }} color="secondary" onClick={handleClickOpenContact}>
              <Stack direction='row' spacing={0.75} alignItems='center' justifyContent='center'>
                <EmailIcon />
                <Typography variant='overline' fontWeight={1000}>Contact</Typography>
              </Stack>
            </Button>
          </Grid> */}
          {/* <Grid item display={{ xs: 'block', sm: 'none' }}> */}
          <Grid item>
            <Stack direction='row' spacing={2}>
              {/* <IconButton color="secondary" onClick={handleClickOpenContact}>
              <EmailIcon />
            </IconButton> */}
              <IconButton color="secondary" onClick={handleClickMenu}>
                <MenuIcon />
              </IconButton>
            </Stack>
          </Grid>
          {/* <Grid item display={{ xs: 'none', sm: 'block' }}>
            <Stack direction='row' spacing={2} alignItems='center' justifyContent='center'>
              <Switch
                // checked={isDarkMode}
                // onChange={handleChangeSwitch}
                color="secondary"
                size='small'
              />
              <Fab
                //   onClick={signOut}
                color='secondary' size="small" >
                <LogoutIcon />
              </Fab>
            </Stack>
          </Grid>
          <Grid item display={{ xs: 'block', sm: 'none' }}>
            <Stack direction='row' spacing={2} alignItems='center' justifyContent='center'>
              <Switch
                // checked={isDarkMode}
                // onChange={handleChangeSwitch}
                color="secondary"
                size='small'
              />
              <Fab
                // onClick={signOut}
                color='secondary' size="small" >
                <LogoutIcon fontSize='small' />
              </Fab>
            </Stack>
          </Grid> */}
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
        <MenuItem onClick={() => {
          navigate('/');
          handleCloseMenu();
        }}>
          Home
        </MenuItem>
        {/* <MenuItem onClick={() => {
          navigate('/about');
          handleCloseMenu();
        }}>
          About The Log
        </MenuItem> */}
        <Divider />
        <MenuItem onClick={() => {
          navigate('/projects');
          handleCloseMenu();
        }}>
          All Projects
        </MenuItem>
        <MenuItem onClick={() => {
          navigate('/updates');
          handleCloseMenu();
        }}>
          Project Updates
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => {
          navigate('/suggestions');
          handleCloseMenu();
        }}>
          Suggest Features
        </MenuItem>
        <MenuItem onClick={() => {
          navigate('reports');
          handleCloseMenu();
        }}>
          Report Bugs
        </MenuItem>
      </Menu>
      <ContactDialog
        open={openContact}
        onClose={handleCloseContact}
      />
    </AppBar >
  );
};

export default SiteHeader;