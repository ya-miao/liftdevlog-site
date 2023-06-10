import { Avatar, Box, Button, Card, CardContent, Divider, Grid, Paper, Stack, Typography } from "@mui/material";

import logolyLogo from '../images/liftdevlog-logo-white-1.png';

const PrivatePortfolioPage = () => {
  return (
    <Grid container spacing={3}>

      {/* Scrapped Project 1 */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Stack alignItems='center' justifyContent='center' spacing={1.5}>
              <Typography variant='h3'>
                PORTFOLIO
              </Typography>
              <Typography variant='caption'>
                Write-Protected Repos / Live Links
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
                    href='https://gitfront.io/r/ya-miao/pxHerdLx4Ntu/date-night-yelp/'
                  >Code Repo</Button>
                  <Button variant='contained' fullWidth href='https://dev.d31kctbuv485tm.amplifyapp.com'>Live App</Button>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack justifyContent='flex-start' spacing={2}>
                  <Typography>
                    Speedrun developed. Hackathon.
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
                    href='https://gitfront.io/r/ya-miao/TKRihNmSSkkF/a-task-tracker/'
                  >Code Repo</Button>
                  <Button variant='contained' fullWidth href='https://dev.d1k8dokfdo58j9.amplifyapp.com/'>Live App</Button>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack justifyContent='flex-start' spacing={2}>
                  <Typography>
                    Speedrun developed. Hackathon.
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
                    href='https://gitfront.io/r/ya-miao/Y6HLFmdrE3vW/a-hangman-game/'
                  >Code Repo</Button>
                  <Button variant='contained' fullWidth href='https://lighthall-hangman-coral.vercel.app/'>Live App</Button>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack justifyContent='flex-start' spacing={2}>
                  <Typography>
                    Speedrun developed. Hackathon.
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

export default PrivatePortfolioPage;