import { Avatar, Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, Divider, Grid, IconButton, Stack, Typography } from "@mui/material";

// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import profileLiz from '../images/profile-liz.jpg';
import profileLiana from '../images/profile-liana.jpg';
import profileLady from '../images/profile-lady0.jpg';

import logolyLogo from '../images/liftdevlog-logo-white-1.png';

const AboutPage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                    <Typography variant='h4'>
                      Overview
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
                        The Log is the documentation site for all TriL Studio projects.
                      </Typography>
                      <Typography>
                        Read updates, suggest features, or report bugs here.
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Card>
                {/* <Card variant='outlined'> */}
                <CardContent sx={{ m: 1 }}>
                  <Stack justifyContent='flex-start' spacing={2}>
                    <Typography variant='h5'>
                      Who Is TriL Studio?
                    </Typography>
                    <Stack justifyContent='flex-start' spacing={1.5}>
                      <Typography>
                        We are an informal, early stage startup team.
                      </Typography>
                      <Typography>
                        One programmer. One tester. One cat.
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
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                    <Typography variant='h4'>
                      Projects
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              {/* <Card>
                <CardContent> */}
              <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                <IconButton>
                  <Stack alignItems='center' justifyContent='center' spacing={2}>
                    <img height={120} width={120} src={logolyLogo} />
                  </Stack>
                </IconButton>
              </Stack>
              {/* </CardContent>
              </Card> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
                    The Team
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
                    What started as a late night impulse became a simple app to track her lifts. This passion project has now turned into an informal startup.
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
                    As co-founder who also holds the sole quality assurance position, she has the greatest sway on any decisions made by the founder.
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
                    Miao.
                  </Typography>
                  <Typography>
                    Lady is the beloved cat of the founder. She is a lady of few human-intelligible words.
                    However, her contributions to the spirit and mental well-being of the team cannot be understated.
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

export default AboutPage;