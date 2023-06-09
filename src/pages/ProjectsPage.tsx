import { Avatar, Box, Button, Card, CardContent, Divider, Grid, Paper, Stack, Typography } from "@mui/material";

import logolyLogo from '../images/liftdevlog-logo-white-1.png';

const ProjectsPage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Stack alignItems='center' justifyContent='center' spacing={1.5}>
              <Typography variant='h3'>
                ONGOING
              </Typography>
              <Typography variant='caption'>
                Under development
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
                <Stack direction='column' alignItems='center' justifyContent='center' spacing={1}>
                  <Stack direction='row' alignItems='flex-end' justifyContent='center' spacing={1.5}>
                    <Typography variant='h4' fontWeight={600}>
                      LogOly
                    </Typography>
                    <Typography variant='overline' fontWeight={600}>
                      Lift Tracker
                    </Typography>
                  </Stack>
                  <Typography variant='caption' fontWeight={600}>
                    Early development. Private.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack direction='row' alignItems='center' justifyContent='center' spacing={1}>
                  <Button variant='contained' fullWidth
                    color='secondary'
                  >Code Repo</Button>
                  <Button variant='contained' fullWidth
                    color='secondary'
                  >Live App</Button>
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

      <Grid item xs={12}>
        <Divider />
      </Grid>

      {/* Scrapped Project 1 */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Stack alignItems='center' justifyContent='center' spacing={1.5}>
              <Typography variant='h3'>
                SCRAPPED
              </Typography>
              <Typography variant='caption'>
                Liz's speedrun / hackathon / "why not" apps
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
                <Stack alignItems='center' justifyContent='center' spacing={2}>
                </Stack>
                <Stack direction='column' alignItems='center' justifyContent='center' spacing={1}>
                  <Typography variant='h4' fontWeight={600}>
                    Date Night Yelp
                  </Typography>
                  {/* <Typography variant='caption' fontWeight={600}>
                    Request for access to repo.
                  </Typography> */}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack direction='row' alignItems='center' justifyContent='center' spacing={1}>
                  <Button variant='contained' fullWidth
                    // color='secondary'
                    href='https://github.com/ya-miao/lighthall-couple-yelp'
                  >Code Repo</Button>
                  <Button variant='contained' fullWidth href='https://dev.d31kctbuv485tm.amplifyapp.com'>Live App</Button>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack justifyContent='flex-start' spacing={2}>
                  <Typography>
                    Speedrun hackathon app.
                  </Typography>
                  <Typography>
                    Takes input from two users to filter for preferred price level, distance, and cuisine.
                    Recommends restaurants based on preference.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Scrapped Project 2 */}
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent sx={{ m: 1 }}>
            <Grid container alignItems='center' justifyContent='center' spacing={3}>
              <Grid item xs={12}>
                <Stack alignItems='center' justifyContent='center' spacing={2}>
                </Stack>
                <Stack direction='column' alignItems='center' justifyContent='center' spacing={1}>
                  <Typography variant='h4' fontWeight={600}>
                    A Task Tracker
                  </Typography>
                  {/* <Typography variant='caption' fontWeight={600}>
                    Request for access to repo.
                  </Typography> */}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack direction='row' alignItems='center' justifyContent='center' spacing={1}>
                  <Button variant='contained' fullWidth
                    // color='secondary'
                    href='https://github.com/ya-miao/task-tracker'
                  >Code Repo</Button>
                  <Button variant='contained' fullWidth href='https://dev.d1k8dokfdo58j9.amplifyapp.com/'>Live App</Button>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack justifyContent='flex-start' spacing={2}>
                  <Typography>
                    Speedrun hackathon app.
                  </Typography>
                  <Typography>
                    Tracks tasks, descriptions, and statuses of completion. Includes sign up and login
                    to save and store each user's tasks.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Scrapped Project 3 */}
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent sx={{ m: 1 }}>
            <Grid container alignItems='center' justifyContent='center' spacing={3}>
              <Grid item xs={12}>
                <Stack alignItems='center' justifyContent='center' spacing={2}>
                </Stack>
                <Stack direction='column' alignItems='center' justifyContent='center' spacing={1}>
                  <Typography variant='h4' fontWeight={600}>
                    A Hangman Game
                  </Typography>
                  {/* <Typography variant='caption' fontWeight={600}>
                    Request for access to repo.
                  </Typography> */}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack direction='row' alignItems='center' justifyContent='center' spacing={1}>
                  <Button variant='contained' fullWidth
                    // color='secondary'
                    href='https://github.com/ya-miao/lighthall-hangman'
                  >GitHub</Button>
                  <Button variant='contained' fullWidth href='https://lighthall-hangman-coral.vercel.app/'>Live App</Button>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack justifyContent='flex-start' spacing={2}>
                  <Typography>
                    Speedrun hackathon app.
                  </Typography>
                  <Typography>
                    Traditional hangman gameplay with a leaderboard that displays top players
                    and their scores.
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