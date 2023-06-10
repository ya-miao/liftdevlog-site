import { useState } from "react";

import { Avatar, Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, Divider, Grid, IconButton, Snackbar, Stack, Typography } from "@mui/material";

import FeedbackDialog from "../components/FeedbackDialog";

const FeedbackPage = () => {

  const [openContact, setOpenContact] = useState(false);

  const handleClickOpenContact = () => {
    setOpenContact(true);
  };

  const handleCloseContact = () => {
    setOpenContact(false);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Grid container spacing={1.5}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                  <Typography variant='h4'>
                    FEEDBACK
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Stack alignItems='center' justifyContent='center' spacing={2}>
              <Button variant='contained' fullWidth sx={{ textTransform: 'none' }}
                onClick={handleClickOpenContact}
              >
                <Typography variant='h5' sx={{ m: 0.75 }}>
                  Provide Feedback
                </Typography>
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Stack alignItems='center' justifyContent='center' spacing={0}>
                      <Typography variant="caption">
                        Prioritized
                      </Typography>
                      <Typography variant="h4">
                        Suggestions
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card sx={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <CardContent>
                    <Stack alignItems='center' justifyContent='center'>
                      <Typography variant='h6'>
                        Coming Soon
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Stack alignItems='center' justifyContent='center' spacing={0}>
                    <Typography variant="caption">
                      Prioritized
                    </Typography>
                    <Typography variant="h4">
                      Bugs To Fix
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ backgroundColor: '#ffffff', color: '#000000' }}>
                <CardContent>
                  <Stack alignItems='center' justifyContent='center'>
                    <Typography variant='h6'>
                      Coming Soon
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid item xs={12}>
        <Divider />
      </Grid> */}
      {/* <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                  <Typography variant='h4'>
                    UPDATES
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ backgroundColor: '#ffffff', color: '#000000' }}>
          <CardContent sx={{ m: 1 }}>
            <Stack alignItems='center' justifyContent='center' spacing={2}>
              <Typography variant='h5'>
                Coming Soon
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid> */}
      <FeedbackDialog
        open={openContact}
        onClose={handleCloseContact}
      />
    </Grid>
  )
};

export default FeedbackPage;