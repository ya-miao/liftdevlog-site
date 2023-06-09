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

const TrilStudioPage = () => {
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
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                    <Typography variant='h4'>
                      TRIL STUDIO
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent sx={{ m: 1 }}>
                  <Stack justifyContent='flex-start' spacing={2}>
                    <Typography variant='h5'>
                      Who Is TriL Studio?
                    </Typography>
                    <Stack justifyContent='flex-start' spacing={1.5}>
                      <Typography>
                        An informal startup team of three.
                      </Typography>
                      <Typography>
                        One programmer. One tester. One cat.
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent sx={{ m: 1 }}>
                  <Stack justifyContent='flex-start' spacing={2}>
                    <Typography variant='h5'>
                      What Do We Do?
                    </Typography>
                    <Stack justifyContent='flex-start' spacing={1.5}>
                      <Typography>
                        We build full stack from scratch.
                      </Typography>
                      <Typography>
                        Our primary project, the LogOly app.
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid item xs={12} display={{ xs: 'block', md: 'none' }}>
        <Divider />
      </Grid> */}
      {/* <Grid item xs={12} md={6}>
        <Grid item xs={12}>
          <Grid container spacing={3}> */}
            {/* <Grid item xs={12} display={{ xs: 'none', sm: 'block' }}>
              <Card>
                <CardContent>
                  <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                    <Typography variant='h4'>
                      CONNECT WITH US
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid> */}
            {/* <Grid item xs={12} display={{ xs: 'block', sm: 'none' }}>
              <Card>
                <CardContent>
                  <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                    <Typography variant='h5'>
                      CONNECT WITH US
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid> */}
            {/* <Grid item xs={12}>
              <Card>
                <CardContent sx={{ m: 1 }}>
                  <Stack justifyContent='flex-start' spacing={2}>
                    <Typography variant='h5'>
                      Best Reached At
                    </Typography>
                    <Stack justifyContent='flex-start' spacing={1.5}>
                      <Typography>
                        Currently, the best way to reach us would be via email sent to the TriL Studio founder.
                      </Typography>
                      <Typography>
                        Send an email over, and she'll get back to you as soon as possible.
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid> */}
          {/* </Grid>
        </Grid>
      </Grid> */}
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                  <Typography variant='h4'>
                    THE TEAM
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Accordion disableGutters>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="secondary" />}
                sx={{ m: 1 }}
              >
                <Stack direction='row' alignItems='center' justifyContent='center' spacing={2.5}>
                  <Avatar sx={{ width: 120, height: 120 }} src={profileLiz} />
                  <Stack direction='column' spacing={0.5}>
                    <Typography variant='h5' fontWeight={600}>
                      LIZ
                    </Typography>
                    <Typography variant='h6' fontWeight={600}>
                      Founder,
                    </Typography>
                    <Typography variant='h6' fontWeight={600}>
                      Software Engineer
                    </Typography>
                  </Stack>
                </Stack>
              </AccordionSummary>
              <AccordionDetails
                sx={{ m: 1 }}
              >
                <Stack direction='column' spacing={1.5}>
                  <Typography>
                    As founder and full stack developer, Liz built LogOly and Lift Dev Log from the ground up.
                  </Typography>
                  <Typography>
                    One late night thought led to a simple lift tracker app, which led to the formation of this informal startup team.
                  </Typography>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Accordion disableGutters>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="secondary" />}
                sx={{ m: 1 }}
              >
                <Stack direction='row' alignItems='center' justifyContent='center' spacing={2.5}>
                  <Avatar sx={{ width: 120, height: 120 }} src={profileLiana} />
                  <Stack direction='column' spacing={0.5}>
                    <Typography variant='h5' fontWeight={600}>
                      LIANA
                    </Typography>
                    <Typography variant='h6' fontWeight={600}>
                      Co-Founder,
                    </Typography>
                    <Typography variant='h6' fontWeight={600}>
                      Quality Assurance
                    </Typography>
                  </Stack>
                </Stack>
              </AccordionSummary>
              <AccordionDetails
                sx={{ m: 1 }}
              >
                <Stack direction='column' spacing={1.5}>
                  <Typography>
                    Liana balances a professional athlete career with her tech career in software accessibility.
                  </Typography>
                  <Typography>
                    As co-founder and the sole holder of the quality assurance role, she has the greatest sway on any decisions Liz makes.
                  </Typography>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Accordion disableGutters>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="secondary" />}
                sx={{ m: 1 }}
              >
                <Stack direction='row' alignItems='center' justifyContent='center' spacing={2.5}>
                  <Avatar sx={{ width: 120, height: 120 }} src={profileLady} />
                  <Stack direction='column' spacing={0.5}>
                    <Typography variant='h5' fontWeight={600}>
                      LADY
                    </Typography>
                    <Typography variant='h6' fontWeight={600}>
                      Executive,
                    </Typography>
                    <Typography variant='h6' fontWeight={600}>
                      Human Resources
                    </Typography>
                  </Stack>
                </Stack>
              </AccordionSummary>
              <AccordionDetails
                sx={{ m: 1 }}
              >
                <Stack direction='column' spacing={1.5}>
                  <Typography>
                    Lady is Liz's beloved cat. She is a woman of few human-intelligible words.
                  </Typography>
                  <Typography>
                    However, her contributions to the work environment and mental well-being of the team cannot be understated.
                  </Typography>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
};

export default TrilStudioPage;