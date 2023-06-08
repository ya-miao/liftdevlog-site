import { Avatar, Box, Card, CardContent, Grid, Paper, Stack, Typography } from "@mui/material";

import logolyLogo from '../images/liftdevlog-logo-white-1.png';

const ProjectsPage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Stack alignItems='center' justifyContent='center' spacing={2}>
              <Typography variant='h4'>
                All Projects
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent sx={{ m: 1 }}>
            <Grid container alignItems='center' justifyContent='center' spacing={3}>
              <Grid item xs={12}>
                {/* <Stack direction='row' alignItems='center' justifyContent='center' spacing={0.5}> */}
                {/* <Paper>
                    <Avatar sx={{ height: 30, width: 30, m: 0.5 }} src={logolyLogo} />
                  </Paper> */}
                <Stack alignItems='center' justifyContent='center' spacing={2}>
                </Stack>
                <Stack direction='row' alignItems='flex-end' justifyContent='center' spacing={1.5}>
                  <Typography variant='h4' fontWeight={600}>
                    LogOly
                  </Typography>
                  <Typography variant='overline' fontWeight={600}>
                    Lift Tracker
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={3} display={{ xs: 'none', lg: 'block' }}>
                <Stack alignItems='center' justifyContent='center' spacing={2}>
                  <Paper>
                    <Avatar sx={{ height: 110, width: 110, m: 1 }} src={logolyLogo} />
                  </Paper>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={3} display={{ xs: 'block', lg: 'none' }}>
                <Stack alignItems='center' justifyContent='center' spacing={2}>
                  <Paper>
                    <Avatar sx={{ height: 200, width: 200, m: 1 }} src={logolyLogo} />
                  </Paper>
                </Stack>
              </Grid>
              <Grid item xs={12} md={9}>
                <Stack justifyContent='flex-start' spacing={2}>
                  <Typography>
                    LogOly is a tracking tool for lifters.
                  </Typography>
                  <Typography>
                    An athlete can store their lift programs, take notes during workout
                    sessions, review previous sessions, save their max lifts, and track
                    their strength progress over time, among other features.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
};

export default ProjectsPage;