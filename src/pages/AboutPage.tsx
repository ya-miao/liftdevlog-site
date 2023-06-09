import React, { useState } from "react";

import { Avatar, Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, Divider, Grid, IconButton, Snackbar, Stack, Typography } from "@mui/material";

import { useCopyToClipboard } from 'usehooks-ts'
import { useNavigate } from "react-router-dom";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';

import profileLiz from '../images/profile-liz.jpg';
import profileLiana from '../images/profile-liana.jpg';
import profileLady from '../images/profile-lady0.jpg';

import logolyLogo from '../images/liftdevlog-logo-white-1.png';

const AboutPage = () => {
  const [value, copy] = useCopyToClipboard()
  const navigate = useNavigate();

  const [openCopy, setOpenCopy] = React.useState(false);

  const handleClickCopy = () => {
    setOpenCopy(true);
  };

  const handleCloseCopy = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenCopy(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseCopy}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Grid container spacing={3}>
      {/* <Grid item xs={12} md={6}> */}
      <Grid item xs={12}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} display={{ xs: 'none', sm: 'block' }}>
              <Card>
                <CardContent>
                  <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                    <Typography variant='h4'>
                      ONGOING PROJECTS
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} display={{ xs: 'block', sm: 'none' }}>
              <Card>
                <CardContent>
                  <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                    <Typography variant='h5'>
                      ONGOING PROJECTS
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                <IconButton onClick={() => {
                  navigate('/projects');
                }}>
                  <Stack alignItems='center' justifyContent='center' spacing={2}>
                    <img height={120} width={120} src={logolyLogo} />
                  </Stack>
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                    <Typography variant='h4'>
                      OVERVIEW
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Card>
                <CardContent sx={{ m: 1 }}>
                  <Stack justifyContent='flex-start' spacing={2}>
                    <Typography variant='h5'>
                      What Is The Log?
                    </Typography>
                    <Stack justifyContent='flex-start' spacing={1.5}>
                      <Typography>
                        Built by Liz. This site is part documentation, part portfolio, and part archive.
                      </Typography>
                      <Typography>
                        Read updates, suggest features, or report bugs here.
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            {/* <Grid item xs={12} lg={6}>
              <Card>
                <CardContent sx={{ m: 1 }}>
                  <Stack justifyContent='flex-start' spacing={2}>
                    <Typography variant='h5'>
                      Who Is TriL Studio?
                    </Typography>
                    <Stack justifyContent='flex-start' spacing={1.5}>
                      <Typography>
                        A team of three.
                      </Typography>
                      <Typography>
                        One programmer. One tester. One cat.
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid> */}
            <Grid item xs={12} lg={6}>
              <Card>
                <CardContent sx={{ m: 1 }}>
                  <Stack justifyContent='flex-start' spacing={2}>
                    <Typography variant='h5'>
                      Who Is Liz?
                    </Typography>
                    <Stack justifyContent='flex-start' spacing={1.5}>
                      <Typography>
                        Full stack developer. Enjoys building "why not" applications in her free time.
                      </Typography>
                      <Typography>
                        React, TypeScript, JavaScript, and AWS technologies.
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} display={{ xs: 'block', md: 'none' }}>
        <Divider />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} display={{ xs: 'none', sm: 'block' }}>
              <Card>
                <CardContent>
                  <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                    <Typography variant='h4'>
                      CONNECT WITH ME
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} display={{ xs: 'block', sm: 'none' }}>
              <Card>
                <CardContent>
                  <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                    <Typography variant='h5'>
                      CONNECT WITH ME
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent sx={{ m: 1 }}>
                  <Stack direction='column' alignItems='center' justifyContent='center' spacing={1.5}>
                    <IconButton href="https://github.com/ya-miao">
                      <GitHubIcon color='secondary' sx={{ width: 90, height: 90 }} />
                    </IconButton>
                    <Stack direction='column' alignItems='center' justifyContent='center' spacing={0.75}>
                      <Typography variant='h5'>GitHub</Typography>
                      <Typography>ya-miao</Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent sx={{ m: 1 }}>
                  <Stack direction='column' alignItems='center' justifyContent='center' spacing={1.5}>
                    <IconButton onClick={() => {
                      copy('liz@liftdevlog.co')
                      handleClickCopy();
                    }}>
                      <EmailIcon color='secondary' sx={{ width: 90, height: 90 }} />
                    </IconButton>
                    <Stack direction='column' alignItems='center' justifyContent='center' spacing={0.75}>
                      <Typography variant='h5'>Email</Typography>
                      <Typography>liz@liftdevlog.co</Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar
        open={openCopy}
        autoHideDuration={6000}
        onClose={handleCloseCopy}
        message="Copied email to clipbaord."
        action={action}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </Grid>
  )
};

export default AboutPage;